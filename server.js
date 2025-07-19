const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Validate environment variables
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('⚠️  Warning: Telegram bot credentials not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env file');
}

// Route to handle contact form submissions
app.post('/api/send-telegram', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                error: 'All fields are required' 
            });
        }

        // Format message for Telegram
        const telegramMessage = `
🔔 *From Personal Website*

👤 *Name:* ${name}

📧 *Email:* ${email}
📝 *Subject:* ${subject}

💬 *Message:*
${message}

📅 *Received:* ${new Date().toLocaleString()}
        `.trim();

        // Send message to Telegram
        if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
            
            await axios.post(telegramUrl, {
                chat_id: TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'Markdown'
            });

            console.log(`✅ Message sent to Telegram from ${name} (${email})`);
        } else {
            // For development/testing when bot is not configured
            console.log('📝 Contact form submission (Telegram not configured):');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Subject: ${subject}`);
            console.log(`Message: ${message}`);
        }

        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('❌ Error sending message:', error.message);
        
        // Don't expose internal errors to client
        res.status(500).json({ 
            success: false, 
            error: 'Failed to send message. Please try again later.' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        telegram_configured: !!(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID)
    });
});

// Serve the contact page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📱 Contact page: http://localhost:${PORT}/contact.html`);
    console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
    
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.log(`⚠️  To enable Telegram notifications, add your bot credentials to .env file`);
    } else {
        console.log(`✅ Telegram bot configured and ready`);
    }
});

module.exports = app;

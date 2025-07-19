# Portfolio Contact Page with Telegram Bot Integration

This contact page allows visitors to send messages directly to your Telegram account using a bot. The form includes fields for name, email, subject, and message.

## 🚀 Features

- ✨ Responsive contact form matching your portfolio theme
- 📱 Telegram bot integration for instant notifications
- 🔒 Environment variable protection for sensitive data
- 📧 Fallback email contact options
- 🎨 Smooth animations and modern UI
- 📱 Mobile-responsive design

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Telegram Bot

1. **Create a Bot:**
   - Open Telegram and search for `@BotFather`
   - Send `/newbot` command
   - Follow the instructions to create your bot
   - Save the bot token you receive

2. **Get Your Chat ID:**
   - Send a message to your new bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find your chat ID in the response

### 3. Configure Environment Variables

1. **Copy the example file:**
   ```bash
   copy .env.example .env
   ```

2. **Edit the .env file:**
   ```env
   TELEGRAM_BOT_TOKEN=your_actual_bot_token_here
   TELEGRAM_CHAT_ID=your_actual_chat_id_here
   PORT=3000
   ```

### 4. Start the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

## 📁 File Structure

```
portfolio-website/
├── contact.html          # Contact page
├── styles.css           # Styles (contact page styles added)
├── server.js            # Backend server with Telegram integration
├── package.json         # Dependencies
├── .env.example         # Environment variables template
├── .env                 # Your actual environment variables (create this)
└── .gitignore          # Git ignore file
```

## 🔒 Security Best Practices

### Environment Variables Protection

1. **Never commit .env file to version control**
   - The `.gitignore` file is configured to exclude `.env`
   - Only commit `.env.example` with placeholder values

2. **Use different tokens for development and production**

3. **For deployment, set environment variables in your hosting platform:**
   - **Vercel:** Project Settings → Environment Variables
   - **Netlify:** Site Settings → Environment Variables
   - **Heroku:** Config Vars in dashboard
   - **Railway:** Variables tab in project

## 🌐 Navigation

The contact page includes proper navigation back to your main portfolio:

- **Logo:** Links to home page (`index.html`)
- **Navigation menu:** Links to all main sections with anchor links
- **Contact link:** Highlights current page

## 📱 API Endpoints

- `POST /api/send-telegram` - Send contact form data to Telegram
- `GET /api/health` - Health check and configuration status
- `GET /contact` - Serve contact page

## 🎨 Styling

The contact page uses the same theme as your portfolio:

- **Color scheme:** Teal (#138B84) and beige (#F5F5DC)
- **Typography:** Merriweather for headings, Open Sans for body
- **Responsive design:** Works on mobile, tablet, and desktop
- **Animations:** AOS library for smooth fade-in effects

## 🧪 Testing

1. **Test without Telegram bot:**
   - The server will log form submissions to console
   - Form will still work and show success message

2. **Test with Telegram bot:**
   - Configure `.env` file with valid credentials
   - Submit the form and check your Telegram for notifications

## 🚢 Deployment Options

### Option 1: Static Site + Serverless Function
- Deploy HTML/CSS to Netlify/Vercel
- Deploy server as serverless function

### Option 2: Full Stack Hosting
- Deploy everything to Railway, Render, or Heroku

### Option 3: Traditional Hosting
- Upload files to any web hosting service
- Ensure Node.js support for the backend

## 📞 Troubleshooting

**Form not sending:**
1. Check browser console for errors
2. Verify server is running on correct port
3. Check network tab in browser dev tools

**Telegram not receiving messages:**
1. Verify bot token and chat ID in `.env`
2. Check server logs for error messages
3. Test bot by sending message manually

**Styling issues:**
1. Ensure `styles.css` is loading correctly
2. Check for console errors
3. Verify CSS path in HTML

## 📝 License

MIT License - feel free to use and modify for your own portfolio!

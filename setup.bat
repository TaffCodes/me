@echo off
echo.
echo ======================================
echo   Portfolio Contact Setup Script
echo ======================================
echo.

:: Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed
echo.

:: Install dependencies
echo 📦 Installing dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.

:: Check if .env file exists
if not exist ".env" (
    echo 📝 Creating .env file from template...
    copy ".env.example" ".env" >nul
    echo ⚠️  Please edit .env file with your Telegram bot credentials
    echo.
) else (
    echo ✅ .env file already exists
    echo.
)

echo.
echo ======================================
echo   Setup Complete! 🎉
echo ======================================
echo.
echo Next steps:
echo 1. Edit .env file with your Telegram bot token and chat ID
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:3000/contact.html to test
echo.
echo For Telegram bot setup instructions, see README.md
echo.
pause

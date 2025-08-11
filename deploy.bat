@echo off
REM Jose DeLuna Mobile Detailing - Vercel Deployment Script (Windows)
REM This script helps automate the deployment process

echo 🚗 Jose DeLuna Mobile Detailing - Vercel Deployment
echo ==================================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully

REM Run development server for testing
echo 🧪 Starting development server for testing...
echo Press Ctrl+C when you're done testing, then follow the deployment instructions
echo Your website will open at: http://localhost:5173

npm run dev

pause


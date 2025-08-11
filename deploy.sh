#!/bin/bash

# Jose DeLuna Mobile Detailing - Vercel Deployment Script
# This script helps automate the deployment process

echo "🚗 Jose DeLuna Mobile Detailing - Vercel Deployment"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    echo "Please update Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Run development server for testing
echo "🧪 Starting development server for testing..."
echo "Press Ctrl+C when you're done testing, then follow the deployment instructions"
echo "Your website will open at: http://localhost:5173"

npm run dev


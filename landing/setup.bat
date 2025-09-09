@echo off
echo Installing IA Europa Landing Page dependencies...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed. Please install Node.js first.
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: npm is not installed. Please install npm first.
    echo Usually comes with Node.js installation.
    pause
    exit /b 1
)

echo Node.js version: 
node --version
echo npm version: 
npm --version
echo.

echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies.
    pause
    exit /b 1
)

echo.
echo Dependencies installed successfully!
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo The application will be available at http://localhost:3000
echo.
pause
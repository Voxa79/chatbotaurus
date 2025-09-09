@echo off
echo Starting IA Europa Landing Page development server...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Error: Dependencies not installed. Please run setup.bat first.
    pause
    exit /b 1
)

echo Starting development server...
echo The application will be available at http://localhost:3000
echo.
npm run dev
@echo off
echo =========================================
echo Infinity React - Vercel Deployment Script
echo =========================================

echo.
echo Step 1: Logging in to Vercel...
echo You'll be asked to authenticate in your browser
vercel login

echo.
echo Step 2: Building the project...
npm run build

echo.
echo Step 3: Deploying to Vercel...
vercel --prod

echo.
echo Deployment completed!
echo =========================================

pause

@echo off
REM =========================================
REM HOW TO RUN THIS SCRIPT:
REM In Command Prompt: simply type "cleanup.cmd"
REM In PowerShell: type ".\cleanup.cmd"
REM =========================================

echo =========================================
echo Infinity React - Simple Cleanup Script
echo =========================================

echo.
echo Starting cleanup process...

echo.
echo 1. Removing development setup files...
if exist "setup-project.bat" del "setup-project.bat" && echo - Removed setup-project.bat || echo - Could not find setup-project.bat
if exist "setup-qr.bat" del "setup-qr.bat" && echo - Removed setup-qr.bat || echo - Could not find setup-qr.bat
if exist "QR_SETUP_README.md" del "QR_SETUP_README.md" && echo - Removed QR_SETUP_README.md || echo - Could not find QR_SETUP_README.md
if exist "IMAGE_SETUP_README.md" del "IMAGE_SETUP_README.md" && echo - Removed IMAGE_SETUP_README.md || echo - Could not find IMAGE_SETUP_README.md

echo.
echo 2. Removing placeholder SVG files...
if exist "public\images\placeholder.svg" del "public\images\placeholder.svg" && echo - Removed placeholder.svg || echo - Could not find placeholder.svg
if exist "public\images\hero-pattern.svg" del "public\images\hero-pattern.svg" && echo - Removed hero-pattern.svg || echo - Could not find hero-pattern.svg

echo.
echo 3. Removing development configuration files...
if exist ".gitignore" del ".gitignore" && echo - Removed .gitignore || echo - Could not find .gitignore
if exist ".env.development" del ".env.development" && echo - Removed .env.development || echo - Could not find .env.development
if exist ".env.local" del ".env.local" && echo - Removed .env.local || echo - Could not find .env.local

echo.
echo 4. Removing documentation files...
if exist "DEPLOYMENT_GUIDE.md" del "DEPLOYMENT_GUIDE.md" && echo - Removed DEPLOYMENT_GUIDE.md || echo - Could not find DEPLOYMENT_GUIDE.md
if exist "RECOMMENDED_CLEANUP.md" del "RECOMMENDED_CLEANUP.md" && echo - Removed RECOMMENDED_CLEANUP.md || echo - Could not find RECOMMENDED_CLEANUP.md

echo.
echo =========================================
echo IMPORTANT: These files are KEPT:
echo - vercel.json
echo - scripts/prepare-vercel-deployment.js
echo - .env.production
echo =========================================

echo.
echo Cleanup completed!
echo.
echo Next steps:
echo 1. Run 'npm run build' to build your project
echo 2. Deploy the 'build' directory contents to Vercel
echo =========================================

REM Keep the window open to see the results
pause

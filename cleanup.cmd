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

REM First, verify critical deployment files exist
echo.
echo Verifying deployment files...
set DEPLOYMENT_READY=true
if not exist "vercel.json" (
    echo WARNING: vercel.json is missing! This file is required for deployment.
    set DEPLOYMENT_READY=false
)
if not exist "scripts\prepare-vercel-deployment.js" (
    echo WARNING: scripts\prepare-vercel-deployment.js is missing! This file is required for deployment.
    set DEPLOYMENT_READY=false
)
if not exist ".env.production" (
    echo WARNING: .env.production is missing! This file is required for deployment.
    set DEPLOYMENT_READY=false
)

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
echo 5. Updating package.json build script...
if exist "package.json" (
    echo - Creating backup of package.json as package.json.bak
    copy "package.json" "package.json.bak" >nul
    
    echo - Updating build script to remove prepare-qr dependency
    powershell -Command "(Get-Content package.json) -replace '\"build\": \"npm run prepare-qr \&\& react-scripts build\"', '\"build\": \"react-scripts build\"' | Set-Content package.json"
    echo - Build script updated successfully
) else (
    echo - Could not find package.json
)

echo.
echo =========================================
echo IMPORTANT: These files are KEPT:
echo - vercel.json
echo - scripts/prepare-vercel-deployment.js
echo - .env.production
echo - package.json (modified to fix build)
echo =========================================

echo.
echo Cleanup completed!
echo.

if "%DEPLOYMENT_READY%"=="false" (
    echo DEPLOYMENT WARNING: Some critical files are missing. Please check warnings above.
    echo.
)

echo Next steps:
echo 1. Run 'npm run build' to build your project (prepare-qr dependency removed)
echo 2. Ensure the build folder exists and contains your project files
echo 3. Deploy the 'build' directory contents to Vercel
echo.
echo For Vercel CLI deployment:
echo   npm i -g vercel
echo   vercel --prod
echo =========================================

REM Keep the window open to see the results
pause

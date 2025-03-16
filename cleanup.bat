@echo off
echo =========================================
echo Infinity React - Deployment Cleanup Script
echo =========================================
echo.
echo Removing development setup files...
if exist setup-project.bat del /Q setup-project.bat
if exist setup-qr.bat del /Q setup-qr.bat
if exist QR_SETUP_README.md del /Q QR_SETUP_README.md
if exist IMAGE_SETUP_README.md del /Q IMAGE_SETUP_README.md
if exist scripts\create-placeholder.js del /Q scripts\create-placeholder.js
if exist public\images\placeholder.svg del /Q public\images\placeholder.svg
if exist public\images\hero-pattern.svg del /Q public\images\hero-pattern.svg

echo.
echo Removing development configuration files...
if exist .gitignore del /Q .gitignore
if exist .env.development del /Q .env.development
if exist .env.local del /Q .env.local

echo.
echo Removing documentation files...
if exist DEPLOYMENT_GUIDE.md del /Q DEPLOYMENT_GUIDE.md
if exist RECOMMENDED_CLEANUP.md del /Q RECOMMENDED_CLEANUP.md

echo.
echo Important: The following files are KEPT for deployment:
echo - vercel.json
echo - scripts/prepare-vercel-deployment.js
echo - .env.production
echo.
echo Cleanup completed! Ready for deployment.
echo.
echo After running build, upload only the "build" directory 
echo contents to your hosting provider.
echo =========================================

pause

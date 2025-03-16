# Infinity React - PowerShell Cleanup Script
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Infinity React - PowerShell Cleanup Script" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host

Write-Host "Starting cleanup process..." -ForegroundColor Green
Write-Host

# 1. Removing development setup files
Write-Host "1. Removing development setup files..." -ForegroundColor Yellow
$files = @("setup-project.bat", "setup-qr.bat", "QR_SETUP_README.md", "IMAGE_SETUP_README.md")
foreach ($file in $files) {
    if (Test-Path $file) {
        Remove-Item $file
        Write-Host "- Removed $file" -ForegroundColor Green
    } else {
        Write-Host "- Could not find $file" -ForegroundColor Gray
    }
}

# 2. Removing placeholder SVG files
Write-Host "`n2. Removing placeholder SVG files..." -ForegroundColor Yellow
$svgFiles = @("public\images\placeholder.svg", "public\images\hero-pattern.svg")
foreach ($file in $svgFiles) {
    if (Test-Path $file) {
        Remove-Item $file
        Write-Host "- Removed $file" -ForegroundColor Green
    } else {
        Write-Host "- Could not find $file" -ForegroundColor Gray
    }
}

# 3. Removing development configuration files
Write-Host "`n3. Removing development configuration files..." -ForegroundColor Yellow
$configFiles = @(".gitignore", ".env.development", ".env.local")
foreach ($file in $configFiles) {
    if (Test-Path $file) {
        Remove-Item $file
        Write-Host "- Removed $file" -ForegroundColor Green
    } else {
        Write-Host "- Could not find $file" -ForegroundColor Gray
    }
}

# 4. Removing documentation files
Write-Host "`n4. Removing documentation files..." -ForegroundColor Yellow
$docFiles = @("DEPLOYMENT_GUIDE.md", "RECOMMENDED_CLEANUP.md")
foreach ($file in $docFiles) {
    if (Test-Path $file) {
        Remove-Item $file
        Write-Host "- Removed $file" -ForegroundColor Green
    } else {
        Write-Host "- Could not find $file" -ForegroundColor Gray
    }
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "IMPORTANT: These files are KEPT:" -ForegroundColor Yellow
Write-Host "- vercel.json" -ForegroundColor White
Write-Host "- scripts/prepare-vercel-deployment.js" -ForegroundColor White
Write-Host "- .env.production" -ForegroundColor White
Write-Host "==========================================" -ForegroundColor Cyan

Write-Host "`nCleanup completed!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Run 'npm run build' to build your project" -ForegroundColor White
Write-Host "2. Deploy the 'build' directory contents to Vercel" -ForegroundColor White
Write-Host "==========================================" -ForegroundColor Cyan

Write-Host "`nPress any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

#!/bin/bash

echo "========================================="
echo "Infinity React - Deployment Cleanup Script"
echo "========================================="
echo

echo "Removing development setup files..."
rm -f setup-project.bat
rm -f setup-qr.bat
rm -f QR_SETUP_README.md
rm -f IMAGE_SETUP_README.md
rm -f scripts/create-placeholder.js
rm -f public/images/placeholder.svg
rm -f public/images/hero-pattern.svg

echo
echo "Removing development configuration files..."
rm -f .gitignore
rm -f .env.development
rm -f .env.local

echo
echo "Removing documentation files..."
rm -f DEPLOYMENT_GUIDE.md
rm -f RECOMMENDED_CLEANUP.md

echo
echo "Important: The following files are KEPT for deployment:"
echo "- vercel.json"
echo "- scripts/prepare-vercel-deployment.js"
echo "- .env.production"
echo
echo "Cleanup completed! Ready for deployment."
echo
echo "After running build, upload only the 'build' directory"
echo "contents to your hosting provider."
echo "========================================="

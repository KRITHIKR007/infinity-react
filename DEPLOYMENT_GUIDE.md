# Files You Can Safely Delete When Deploying

## Development Setup Files
- `setup-project.bat` - Local setup script
- `setup-qr.bat` - QR code setup script
- `QR_SETUP_README.md` - QR setup documentation
- `IMAGE_SETUP_README.md` - Image setup instructions
- `scripts/create-placeholder.js` - Script for generating placeholders

## Development Configuration
- `.git/` - Version control directory
- `.gitignore`
- `tsconfig.json` - TypeScript configuration
- `package-lock.json` or `yarn.lock` (keep only one of these)
- `.vscode/` - VS Code settings if present
- `.idea/` - IntelliJ/WebStorm settings if present
- `.github/` - GitHub configuration if present
- `node_modules/` - Development dependencies (should never be deployed)

## Source Files (after building)
After running `npm run build` or `yarn build`, the complete application will be in the `build` directory.
You only need to deploy the `build` directory contents, and can delete everything else.

## Testing Files
- `src/__tests__/` - Test files
- `src/**/*.test.js` - Any test files
- `src/**/*.spec.js` - Any spec files
- `cypress/` - Cypress tests if present
- `jest.config.js` - Jest configuration if present

## Development Environment Files
- `.env.development` - Development environment variables
- `.env.local` - Local environment variables

## What to Keep
- The entire `build/` directory after running the build command
- Any server configuration files needed for your hosting platform (e.g., `netlify.toml`, `vercel.json`)
- `package.json` (if needed by your deployment platform)

#!/bin/bash
# Run.sh - Helper script for Aayush's Portfolio Website

echo "Aayush's Portfolio Website - Helper Script"
echo "============================================="
echo ""

while true; do
  echo "Choose an option:"
  echo "1. Open website in browser"
  echo "2. Create deployment package (ZIP)"
  echo "3. Clean temporary files"
  echo "4. Help (show all available commands)"
  echo "5. Exit"
  echo ""
  
  read -p "Enter your choice (1-5): " choice
  
  case $choice in
    1)
      echo "Opening website in browser..."
      if [[ "$OSTYPE" == "darwin"* ]]; then
        open index.html
      elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open index.html
      else
        echo "Could not detect OS. Please open index.html manually."
      fi
      break
      ;;
    2)
      echo "Creating deployment package..."
      if command -v zip >/dev/null 2>&1; then
        zip -r portfolio.zip * -x "*.git*" "*.zip" "node_modules/*"
        echo "Package created: portfolio.zip"
      else
        echo "Error: zip command not found. Please install zip or use npm run package instead."
      fi
      break
      ;;
    3)
      echo "Cleaning temporary files..."
      rm -f *.tmp *~
      echo "Done."
      break
      ;;
    4)
      echo ""
      echo "Available commands in Makefile:"
      echo "- make open: Open the website in the default browser"
      echo "- make clean: Remove temporary files"
      echo "- make package: Create a zip archive for deployment"
      echo "- make deploy: Deploy the website (placeholder)"
      echo "- make validate-html: Validate HTML files (requires html-validator-cli)"
      echo "- make validate-css: Validate CSS files (requires stylelint)"
      echo "- make validate-js: Validate JavaScript files (requires eslint)"
      echo "- make validate: Run all validations"
      echo "- make help: Show help message"
      echo ""
      echo "Available npm commands:"
      echo "- npm start: Open the website in the default browser"
      echo "- npm run validate:html: Validate HTML files"
      echo "- npm run validate:css: Validate CSS files"
      echo "- npm run validate:js: Validate JavaScript files"
      echo "- npm run validate: Run all validations"
      echo "- npm run package: Create a zip archive for deployment"
      echo ""
      echo "Note: To use the 'make' commands, you need to have GNU Make installed."
      echo "      To use the 'npm' commands, you need to have Node.js installed."
      echo ""
      read -p "Press Enter to continue..."
      ;;
    5)
      echo "Exiting..."
      exit 0
      ;;
    *)
      echo "Invalid choice. Please try again."
      echo ""
      ;;
  esac
done

echo ""
echo "Operation completed."
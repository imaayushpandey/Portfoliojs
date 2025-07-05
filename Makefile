# Makefile for Aayush's Portfolio Website

# Variables
BROWSER = start
HTML_FILES = index.html
CSS_FILES = styles.css
JS_FILES = script.js

# Default target
.PHONY: all
all: open

# Open the website in the default browser
.PHONY: open
open:
	$(BROWSER) index.html

# Clean temporary files
.PHONY: clean
clean:
	@echo "Cleaning temporary files..."
	-del /Q *.tmp *~ 2>NUL
	@echo "Done."

# Create a zip archive for deployment
.PHONY: package
package: clean
	@echo "Creating deployment package..."
	powershell -Command "Compress-Archive -Path '.\*' -DestinationPath '.\portfolio.zip' -Force"
	@echo "Package created: portfolio.zip"

# Deploy to a server (placeholder - customize as needed)
.PHONY: deploy
deploy: package
	@echo "Deployment would happen here. Edit the Makefile to configure your deployment method."

# Validate HTML (requires html-validator-cli)
.PHONY: validate-html
validate-html:
	@echo "Validating HTML files..."
	@echo "Note: This requires html-validator-cli. Install with: npm install -g html-validator-cli"
	html-validator --file $(HTML_FILES) --verbose

# Validate CSS (requires stylelint)
.PHONY: validate-css
validate-css:
	@echo "Validating CSS files..."
	@echo "Note: This requires stylelint. Install with: npm install -g stylelint stylelint-config-standard"
	stylelint $(CSS_FILES)

# Validate JavaScript (requires eslint)
.PHONY: validate-js
validate-js:
	@echo "Validating JavaScript files..."
	@echo "Note: This requires eslint. Install with: npm install -g eslint"
	eslint $(JS_FILES)

# Run all validations
.PHONY: validate
validate: validate-html validate-css validate-js

# Help target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  all          - Default target (same as 'open')"
	@echo "  open         - Open the website in the default browser"
	@echo "  clean        - Remove temporary files"
	@echo "  package      - Create a zip archive for deployment"
	@echo "  deploy       - Deploy the website (placeholder)"
	@echo "  validate-html - Validate HTML files (requires html-validator-cli)"
	@echo "  validate-css  - Validate CSS files (requires stylelint)"
	@echo "  validate-js   - Validate JavaScript files (requires eslint)"
	@echo "  validate     - Run all validations"
	@echo "  help         - Show this help message"
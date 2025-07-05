@echo off
REM Run.bat - Helper script for Aayush's Portfolio Website

echo Aayush's Portfolio Website - Helper Script
echo =============================================
echo.

:menu
echo Choose an option:
echo 1. Open website in browser
echo 2. Create deployment package (ZIP)
echo 3. Clean temporary files
echo 4. Help (show all available commands)
echo 5. Exit
echo.

set /p choice=Enter your choice (1-5): 

if "%choice%"=="1" goto open
if "%choice%"=="2" goto package
if "%choice%"=="3" goto clean
if "%choice%"=="4" goto help
if "%choice%"=="5" goto end

echo Invalid choice. Please try again.
echo.
goto menu

:open
echo Opening website in browser...
start index.html
goto end

:package
echo Creating deployment package...
powershell -Command "Compress-Archive -Path '.\*' -DestinationPath '.\portfolio.zip' -Force"
echo Package created: portfolio.zip
goto end

:clean
echo Cleaning temporary files...
del /Q *.tmp *~ 2>NUL
echo Done.
goto end

:help
echo.
echo Available commands in Makefile:
echo - make open: Open the website in the default browser
echo - make clean: Remove temporary files
echo - make package: Create a zip archive for deployment
echo - make deploy: Deploy the website (placeholder)
echo - make validate-html: Validate HTML files (requires html-validator-cli)
echo - make validate-css: Validate CSS files (requires stylelint)
echo - make validate-js: Validate JavaScript files (requires eslint)
echo - make validate: Run all validations
echo - make help: Show help message
echo.
echo Note: To use the 'make' commands, you need to have GNU Make installed.
echo.
pause
goto menu

:end
echo.
echo Operation completed.
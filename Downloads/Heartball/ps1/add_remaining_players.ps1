# File: add_remaining_players.ps1
# This script adds all remaining specialized player files to the existing 'core' directory.

Write-Host "Adding remaining specialized player files to 'core' directory..." -ForegroundColor Green

# Define the main project folder.
$projectRoot = "C:\Users\relly\Downloads\Hrt-Hrt"
New-Item -ItemType Directory -Force -Path $projectRoot | Out-Null
Set-Location -Path $projectRoot

# Define the specific files to add
$filesToAdd = @(
   "core/linebacker.py",
   "core/offensive_lineman.py",
   "core/defensive_lineman.py",
   "core/cornerback.py",
   "core/strong_safety.py",
   "core/free_safety.py",
   "core/kicker.py",
   "core/punter.py",
   "core/kick_returner.py",
   "core/punt_returner.py",
   "core/long_snapper.py"
)

# Loop to create files (directory 'core' should already exist)
foreach ($path in $filesToAdd) {
   if (-not (Test-Path -Path $path)) {
       New-Item -ItemType File -Force -Path $path | Out-Null
   }
}

Write-Host "All remaining specialized player files added successfully to: $projectRoot\core" -ForegroundColor Green
Write-Host "Now, let's populate these new files with their Python code, Ta'K!" -ForegroundColor Yellow
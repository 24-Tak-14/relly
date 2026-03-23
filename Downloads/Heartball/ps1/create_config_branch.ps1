# File: create_config_branch.ps1
# This script creates the 'config' directory and the 'settings.py' file within it
# for the HFL project.

Write-Host "Creating 'config' directory and 'settings.py'..." -ForegroundColor Green

# Define the main project folder.
$projectRoot = "C:\Users\relly\Downloads\Hrt-Hrt\config"
New-Item -ItemType Directory -Force -Path $projectRoot | Out-Null
Set-Location -Path $projectRoot

# Define the specific structure for this branch
$structure = @(
   "config/settings.py"
)

# Loop to create directories and files
foreach ($path in $structure) {
   $dirName = Split-Path -Parent $path
   if ($dirName -ne "") {
       New-Item -ItemType Directory -Force -Path $dirName | Out-Null
   }
   if (-not (Test-Path -Path $path)) {
       New-Item -ItemType File -Force -Path $path | Out-Null
   }
}

Write-Host "'config' branch created successfully at: $projectRoot\config" -ForegroundColor Green
Write-Host "Next, we'll populate the 'settings.py' file, Ta'K!" -ForegroundColor Yellow
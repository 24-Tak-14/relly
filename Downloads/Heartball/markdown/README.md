# Heart Football League Logo Generator

A Python tool for generating team logos for the Heart Football League (H.F.L.).

## Features

- Generate logos for all 36 teams in the league
- Generate logos for individual teams
- Predefined color schemes for each team
- Mock image generation with placeholder URLs
- Interactive command-line interface

## Usage

### Run the interactive menu:
```bash
python team_logo_generator.py
```

### Generate logos programmatically:
```python
from team_logo_generator import generate_single_team_logo, generate_all_team_logos

# Generate logo for specific team
generate_single_team_logo("Heirsentia", "Hawks")

# Generate logos for all teams
generate_all_team_logos()
```

## Teams

The generator includes all 36 teams from the Heart Football League:

- Kaitlynnville Eclipse
- Gu'Bare Garrison  
- Miki Mountain Miracles
- Heirsentia Hawks
- And 32 more teams...

Each team has predefined colors that match their identity and style.

## Requirements

- Python 3.7+
- No external dependencies (uses only standard library)

## File Structure

- `team_logo_generator.py` - Main script
- `requirements.txt` - Dependencies (optional)
- `README.md` - This file

## Customization

To add new teams or modify colors, edit the `TEAMS_DATA` dictionary and `get_team_colors()` function in the main script.
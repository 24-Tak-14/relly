import json
import os
from team_logo_generator import TEAMS_DATA, get_team_colors

def export_data():
    output_dir = "frontend/src/data"
    os.makedirs(output_dir, exist_ok=True)
    
    enriched_teams = []
    for team in TEAMS_DATA["teams"]:
        enriched_team = team.copy()
        enriched_team["colors"] = get_team_colors(team["team_name"])
        enriched_teams.append(enriched_team)
        
    final_data = {
        "league_name": TEAMS_DATA["league_name"],
        "teams": enriched_teams
    }
    
    output_file = os.path.join(output_dir, "teams.json")
    with open(output_file, "w") as f:
        json.dump(final_data, f, indent=2)
    
    print(f"Successfully exported team data to {output_file}")

if __name__ == "__main__":
    export_data()

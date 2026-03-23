import json
import os
import random
from pathlib import Path
from systems.team import create_teams_from_data
from systems.personnel_manager import PersonnelManager
from systems.game_loop import GameLoop

PROJECT_ROOT = Path(__file__).parent

def load_league_data(file_path: Path) -> dict:
    try:
        return json.loads(file_path.read_text())
    except FileNotFoundError:
        print(f"Error: League data file not found at '{file_path}'")
        return {}

def create_schedule(teams: list) -> list:
    if len(teams) % 2:
        teams = teams + [None]
    
    schedule = []
    n = len(teams)
    
    for round_num in range(n - 1):
        for i in range(n // 2):
            team1, team2 = teams[i], teams[n - 1 - i]
            if team1 and team2:
                schedule.append((team1, team2))
        teams = [teams[0]] + [teams[-1]] + teams[1:-1]
    
    random.shuffle(schedule)
    return schedule

def run_season(teams: list):
    print("--- Welcome to the Heart Football League Simulation! ---")
    
    PersonnelManager(teams).conduct_draft()
    schedule = create_schedule(teams)
    print(f"\nSeason schedule created with {len(schedule)} games.")
    
    records = {team.name: {"wins": 0, "losses": 0} for team in teams if team}
    
    for week, (team1, team2) in enumerate(schedule, 1):
        if not (team1.roster and team2.roster):
            continue
            
        print(f"\n--- Week {week}: {team1.name} vs {team2.name} ---")
        game = GameLoop(team1, team2)
        game.simulate_game(50)
        
        winner = max(game.score, key=game.score.get)
        if game.score[team1.name] != game.score[team2.name]:
            records[winner]["wins"] += 1
            loser = team2.name if winner == team1.name else team1.name
            records[loser]["losses"] += 1
    
    print("\n--- End of Season Summary ---")
    for team, record in sorted(records.items(), key=lambda x: x[1]["wins"], reverse=True):
        print(f"{team}: {record['wins']} Wins, {record['losses']} Losses")

if __name__ == "__main__":
    league_data = load_league_data(PROJECT_ROOT / "data" / "league_structure.json")
    
    if team_data := league_data.get("team_data"):
        run_season(create_teams_from_data(team_data))
    else:
        print("Failed to load league data. Exiting simulation.")
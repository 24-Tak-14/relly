# File: Hrt-Hrt/main.py
# Role: T24CODAI
# Description: The main entry point for the Heart Football League simulation.
#              Orchestrates the entire season, from team creation to game simulation.

import json
import os
import random

# Import core systems from the Hrt-Hrt package.
# The relative import syntax is crucial here for the modular design.
from systems.team import create_teams_from_data
from systems.personnel_manager import PersonnelManager
from systems.game_loop import GameLoop

# Define the root directory of the project for consistent file paths.
# This assumes the script is run from the PROJECT_ROOT directory.
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

def load_league_data(file_path: str) -> dict:
    """
    Loads all league data from the league_structure.json file.

    Args:
        file_path (str): The path to the JSON file containing all league data.

    Returns:
        dict: A dictionary containing the full league structure, including team data.
    """
    # Validate path to prevent traversal attacks
    abs_file_path = os.path.abspath(file_path)
    if not abs_file_path.startswith(PROJECT_ROOT):
        print(f"Error: Access denied to file outside project directory.")
        return {}
        
    if not os.path.exists(abs_file_path):
        print(f"Error: League data file not found at '{abs_file_path}'. Please ensure a '{os.path.basename(abs_file_path)}' file exists.")
        return {}
    
    with open(abs_file_path, 'r') as f:
        data = json.load(f)
    return data

def create_schedule(teams: list) -> list:
    """
    Generates a simple round-robin schedule for a given list of teams.
    Each team plays every other team once.

    Args:
        teams (list): A list of Team objects.

    Returns:
        list: A list of tuples, where each tuple contains two competing teams.
    """
    schedule = []
    teams = teams.copy()  # Create copy to avoid mutating original list
    num_teams = len(teams)
    if num_teams % 2 != 0:
        # A simple way to handle an odd number of teams is to add a 'bye' team.
        teams.append(None)
        num_teams += 1

    # Simple round-robin scheduling algorithm
    for i in range(num_teams - 1):
        for j in range(num_teams // 2):
            team1 = teams[j]
            team2 = teams[num_teams - 1 - j]
            if team1 and team2: # Check for the 'bye' team
                schedule.append((team1, team2))
        
        # Rotate the teams for the next round
        if num_teams > 2:
            first_element = teams.pop(1)
            teams.append(first_element)
            
    random.shuffle(schedule)
    return schedule

def run_season(teams: list):
    """
    Simulates an entire football season.

    Args:
        teams (list): A list of all Team objects in the league.
    """
    print("--- Welcome to the Heart Football League Simulation! ---")
    
    # 1. Personnel Management: Conduct the initial draft to populate teams.
    personnel_manager = PersonnelManager(all_teams=teams)
    personnel_manager.conduct_draft()
    
    # 2. Season Scheduling: Create the schedule for the season.
    season_schedule = create_schedule(teams.copy())
    print(f"\nSeason schedule created with {len(season_schedule)} games.")

    # 3. Game Simulation: Run each game in the schedule.
    # We will use a dictionary to track team wins and losses.
    team_records = {team.name: {"wins": 0, "losses": 0} for team in teams if team is not None}
    
    for game_number, (team1, team2) in enumerate(season_schedule, 1):
        print(f"\n--- Week {game_number} Game: {team1.name} vs. {team2.name} ---")
        
        # Check if teams have players before simulating.
        if not team1.roster or not team2.roster:
            print("Skipping game due to one or both teams having no players.")
            continue
            
        game = GameLoop(team1, team2)
        game.simulate_game(num_plays=50) # Simulate a shorter game for demonstration

        # Update records based on the game outcome
        if game.score[team1.name] > game.score[team2.name]:
            team_records[team1.name]["wins"] += 1
            team_records[team2.name]["losses"] += 1
        elif game.score[team2.name] > game.score[team1.name]:
            team_records[team2.name]["wins"] += 1
            team_records[team1.name]["losses"] += 1
        else:
            # Handle ties, if they are possible
            pass
            
    # 4. End of Season Summary
    print("\n\n--- End of Season Summary ---")
    # Sort teams by wins in descending order
    sorted_teams = sorted(team_records.items(), key=lambda item: item[1]["wins"], reverse=True)
    for team_name, record in sorted_teams:
        print(f"{team_name}: {record['wins']} Wins, {record['losses']} Losses")
    print("--- Season Simulation Complete ---")


# Main execution block
if __name__ == "__main__":
    # The path to the league structure data file.
    LEAGUE_DATA_FILE = os.path.join(PROJECT_ROOT, "data", "league_structure.json")
    
    # Load the full league structure data.
    league_data = load_league_data(LEAGUE_DATA_FILE)

    if league_data and "team_data" in league_data:
        # Create the Team objects from the 'team_data' list inside the league data.
        hfl_teams = create_teams_from_data(league_data["team_data"])
        
        # Run the full season simulation.
        run_season(hfl_teams)
    else:
        print("Failed to load league data. Please ensure 'league_structure.json' is correctly formatted. Exiting simulation.")

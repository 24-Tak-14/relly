#!/usr/bin/env python3
# This module contains the GameLoop class for simulating a football game.
import random

# Import necessary systems and data.
from .game_engine.game_logic import GameLogic
from .personnel_manager import PersonnelManager
from .team import Team, create_teams_from_data

class GameLoop:
    """
    Orchestrates the simulation of a single football game between two teams.
    """
    def __init__(self, team1: Team, team2: Team):
        """
        Initializes the GameLoop with the two competing teams.

        Args:
            team1 (Team): The first team participating in the game.
            team2 (Team): The second team participating in the game.
        """
        self.team1 = team1
        self.team2 = team2
        self.score = {
            self.team1.name: 0,
            self.team2.name: 0
        }
        self.game_logic = GameLogic()

    def simulate_game(self, num_plays: int = 100):
        """
        Simulates a full game play-by-play.

        Args:
            num_plays (int): The total number of plays to simulate.
                             A higher number results in a longer game.
        """
        print(f"--- Simulating game between {self.team1.name} and {self.team2.name} ---")

        # Ensure both teams have players to simulate with.
        if not self.team1.roster or not self.team2.roster:
            print("One or both teams have no players. The game cannot be simulated.")
            return

        for play_number in range(1, num_plays + 1):
            print(f"\nPlay {play_number}:")

            # Randomly determine which team is on offense.
            offensive_team = random.choice([self.team1, self.team2])
            defensive_team = self.team1 if offensive_team is self.team2 else self.team2

            # Randomly select a player from each team's roster for the play.
            offensive_player = random.choice(offensive_team.roster)
            defensive_player = random.choice(defensive_team.roster)

            # A simple placeholder to get player attributes for the game logic.
            offensive_attributes = offensive_player.attributes
            defensive_attributes = defensive_player.attributes

            # Simulate the play using the GameLogic system.
            play_result = self.game_logic.simulate_play(
                offensive_player_data={
                    "id": offensive_player.id,
                    "name": offensive_player.name,
                    **offensive_attributes
                },
                defensive_player_data={
                    "id": defensive_player.id,
                    "name": defensive_player.name,
                    **defensive_attributes
                }
            )

            # Print play details.
            print(f"  Offense: {offensive_player.name} ({offensive_team.name}) vs. Defense: {defensive_player.name} ({defensive_team.name})")
            print(f"  Result: {play_result['outcome']}")
            
            # Update the score based on the outcome.
            if "Offense wins" in play_result["outcome"]:
                self.score[offensive_team.name] += 7 # Touchdown
                print(f"  {offensive_team.name} scores!")
            elif "Defense wins" in play_result["outcome"]:
                # In a real game, this could be a turnover or sack. For now, no score change.
                print(f"  The play is stopped!")
            
            print(f"  Current Score: {self.team1.name} {self.score[self.team1.name]} - {self.team2.name} {self.score[self.team2.name]}")

        print("\n--- Game Over ---")
        print(f"Final Score: {self.team1.name} {self.score[self.team1.name]} - {self.team2.name} {self.score[self.team2.name]}")
        
        if self.score[self.team1.name] > self.score[self.team2.name]:
            print(f"{self.team1.name} wins!")
        elif self.score[self.team2.name] > self.score[self.team1.name]:
            print(f"{self.team2.name} wins!")
        else:
            print("The game is a tie!")

# --- Example Usage for testing ---
if __name__ == "__main__":
    # Placeholder for team data.
    json_data = [
        {"id": 1, "team_name": "Kaitlinville Eclipse", "stadium": {"capacity": 64397}},
        {"id": 2, "team_name": "Gu'Bare Garrison", "stadium": {"capacity": 86688}}
    ]

    # Create the teams first.
    league_teams = create_teams_from_data(json_data)
    team1 = league_teams[0]
    team2 = league_teams[1]

    # Use the PersonnelManager to populate the rosters.
    personnel_manager = PersonnelManager(all_teams=league_teams)
    personnel_manager.conduct_draft()

    # Now, run the game simulation.
    game = GameLoop(team1=team1, team2=team2)
    game.simulate_game(num_plays=20) # Simulating a shorter game for demonstration.

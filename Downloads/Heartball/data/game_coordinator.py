# File: data/game_coordinator.py

# This file coordinates all aspects of a single game, from the pre-game
# show to the final score and stats calculation.

import random
from systems.game_engine.game_logic import GameLogic
from data.injury_system import InjurySystem

class GameCoordinator:
    """
    Orchestrates a single game simulation between two teams.
    
    It manages the game flow, calls the game logic for each play, and
    records the outcome and player stats.
    """
    def __init__(self):
        """
        Initializes the GameCoordinator with instances of the necessary systems.
        """
        self.game_logic = GameLogic()
        self.injury_system = InjurySystem()
        self.home_team = None
        self.away_team = None

    def start_game(self, home_team: dict, away_team: dict):
        """
        Starts a game between two teams.
        
        Args:
            home_team (dict): The dictionary for the home team.
            away_team (dict): The dictionary for the away team.
        """
        self.home_team = home_team
        self.away_team = away_team
        
        print(f"Game starting: {self.away_team.get('name')} at {self.home_team.get('name')}")
        
        # In a real game, you would have an actual simulation loop for each play.
        # This is a simplified example.
        home_score = 0
        away_score = 0
        
        for quarter in range(1, 5):
            print(f"--- Starting Quarter {quarter} ---")
            
            for play_number in range(1, 11): # Simulate 10 plays per quarter
                offense_team = self.home_team if random.random() > 0.5 else self.away_team
                defense_team = self.away_team if offense_team == self.home_team else self.home_team
                
                # Get a random offensive and defensive player
                offense_players = offense_team.get("players", [])
                defense_players = defense_team.get("players", [])
                
                if not offense_players or not defense_players:
                    continue
                    
                off_player = random.choice(offense_players)
                def_player = random.choice(defense_players)

                play_outcome = self.game_logic.simulate_play(off_player, def_player)
                
                if "Offense wins" in play_outcome.get("outcome"):
                    # Score a touchdown randomly
                    if random.random() < 0.2:
                        if offense_team == self.home_team:
                            home_score += 7
                        else:
                            away_score += 7
                        print(f"Touchdown! Current Score: {home_score} - {away_score}")
                
                # Check for injuries
                injured_player = self.injury_system.check_for_injury(off_player)
                if injured_player:
                    print(f"Injury on the field! {off_player.get('name')} is injured.")
                    # In a real game, you would sub the player out here
                    
        print(f"--- Final Score: {self.away_team.get('name')} {away_score} - {self.home_team.get('name')} {home_score} ---")
        
        # Return the winning and losing team IDs to be updated in the LeagueManager
        if home_score > away_score:
            return self.home_team.get("id"), self.away_team.get("id")
        elif away_score > home_score:
            return self.away_team.get("id"), self.home_team.get("id")
        else:
            return None, None # It's a tie

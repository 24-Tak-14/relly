# File: data/injury_system.py

# This file defines the rules for player injuries and their recovery.
# It is used to add a layer of realism to the game.

import random

class InjurySystem:
    """
    Manages all player injuries, their severity, and recovery times.
    
    This class can be used to simulate injuries during a game, assign a
    recovery period, and update a player's status.
    """
    def __init__(self):
        """
        Initializes the InjurySystem.
        
        The 'injury_types' dictionary maps different injury types to their
        base recovery times and likelihood.
        """
        self.injury_types = {
            "minor_tweak": {"base_recovery_days": 1, "likelihood": 0.5, "description": "A minor muscle tweak. Player should be ready soon."},
            "sprained_ankle": {"base_recovery_days": 7, "likelihood": 0.3, "description": "A sprained ankle requiring a week of rest."},
            "broken_bone": {"base_recovery_days": 45, "likelihood": 0.15, "description": "A broken bone. This player will be out for a while."},
            "torn_ligament": {"base_recovery_days": 180, "likelihood": 0.05, "description": "A severe injury that will likely end the player's season."}
        }
        
    def check_for_injury(self, player: dict) -> dict | None:
        """
        Simulates an injury check for a player after a play.
        
        This method uses a random chance to determine if a player gets injured.
        The likelihood is based on a combination of the player's durability stat
        and the predefined injury type likelihoods.
        
        Args:
            player (dict): The dictionary of the player to check for an injury.
            
        Returns:
            dict: The details of the injury if one occurred, otherwise None.
        """
        # A player's durability can reduce the chance of injury
        durability = player.get("durability", 100)
        base_injury_chance = 0.05  # 5% base chance of an injury on any given play
        
        # Adjust the chance based on the player's durability
        final_injury_chance = base_injury_chance * (1 - (durability / 100))
        
        if random.random() < final_injury_chance:
            # An injury has occurred. Now, determine the type.
            injury_roll = random.random()
            cumulative_likelihood = 0
            for injury_type, details in self.injury_types.items():
                cumulative_likelihood += details["likelihood"]
                if injury_roll < cumulative_likelihood:
                    injury_details = details.copy()
                    recovery_time = injury_details["base_recovery_days"]
                    
                    # Add some randomness to the recovery time
                    recovery_time_variance = random.randint(-2, 2)
                    injury_details["recovery_days"] = max(1, recovery_time + recovery_time_variance)
                    injury_details["type"] = injury_type
                    return injury_details
        
        return None

    def update_player_status(self, player: dict, injury_details: dict):
        """
        Updates a player's status to reflect a new injury.
        
        Args:
            player (dict): The player to update.
            injury_details (dict): The details of the injury.
        """
        player["status"] = "injured"
        player["injury_details"] = injury_details
        player["return_date"] = (datetime.now() + timedelta(days=injury_details["recovery_days"])).strftime("%Y-%m-%d")
        print(f"Player {player.get('name')} is now injured with a {injury_details.get('type')}.")

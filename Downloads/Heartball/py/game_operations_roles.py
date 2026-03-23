# File: roles/game_operations_roles.py

# This file defines the roles and behaviors of personnel related to game operations.

class GameDayDirector:
    """
    Oversees all aspects of a single game, from the field to the broadcast.
    """
    def __init__(self, stadium_name: str):
        """
        Initializes the director for a specific stadium.
        
        Args:
            stadium_name (str): The name of the stadium.
        """
        self.stadium_name = stadium_name

    def prepare_field(self) -> str:
        """
        Simulates the preparation of the field for a game.
        
        Returns:
            str: A status message.
        """
        return f"The field at {self.stadium_name} is being prepared for today's game."

class HeadReferee:
    """
    Enforces rules and manages in-game penalties.
    """
    def __init__(self, league_name: str):
        """
        Initializes the referee for a specific league.
        
        Args:
            league_name (str): The name of the league.
        """
        self.league_name = league_name

    def call_penalty(self, player_id: str, penalty_type: str) -> str:
        """
        Simulates a penalty call on a player.
        
        Args:
            player_id (str): The ID of the player being penalized.
            penalty_type (str): The type of penalty.
            
        Returns:
            str: A description of the penalty call.
        """
        return f"Penalty called on player {player_id}: {penalty_type}."

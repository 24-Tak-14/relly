# File: core/practice_squad.py
# This file manages players on the practice squad.
# These are players who are training and can be called up to the main team if needed!

from core.player import Player, create_player_from_dict # We need our Player blueprint and the factory.

class PracticeSquad:
    """
    Manages a collection of players on the practice squad.
    """
    # When we create a PracticeSquad, it starts with no players.
    def __init__(self):
        # squad_players: A list to hold all the Player objects on the practice squad.
        self.squad_players = []

    # This function adds a player to the practice squad.
    def add_player(self, player: Player):
        """
        Adds a player to the practice squad.
        """
        self.squad_players.append(player)
        print(f"{player.name} added to practice squad.")

    # This function removes a player from the practice squad.
    def remove_player(self, player_id):
        """
        Removes a player from the practice squad by player_id.
        """
        original_count = len(self.squad_players)
        self.squad_players = [p for p in self.squad_players if p.player_id != player_id]
        if len(self.squad_players) < original_count:
            print(f"Player with ID {player_id} removed from practice squad.")
            return True # Player was found and removed.
        print(f"Player with ID {player_id} not found in practice squad.")
        return False # Player not found.

    # This function allows us to call up a player from the practice squad to the main team.
    def promote_player(self, player_id):
        """
        Finds a player on the practice squad and returns them for promotion.
        Removes them from the practice squad if found.
        """
        for i, player in enumerate(self.squad_players):
            if player.player_id == player_id:
                return self.squad_players.pop(i) # Return the player object and remove from squad.
        return None # Player not found on the practice squad.

    # This helps us print out practice squad information.
    def __str__(self):
        """
        Returns a human-readable string representation of the practice squad.
        """
        return f"Practice Squad (Size: {len(self.squad_players)} players)"

    # This function converts practice squad data to a dictionary for database storage.
    def to_dict(self):
        """
        Converts the PracticeSquad object to a dictionary for database storage.
        """
        return {
            "squad_players": [p.to_dict() for p in self.squad_players]
        }

    # This function helps us create a PracticeSquad object from database data.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a PracticeSquad object from a dictionary.
        Uses the create_player_from_dict factory to handle specific player types.
        """
        squad = cls()
        for p_data in data.get("squad_players", []):
            squad.add_player(create_player_from_dict(p_data))
        return squad
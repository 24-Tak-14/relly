# File: systems/ultimate_team/ultimate_team_manager.py

class UltimateTeamManager:
    """
    Manages the player collection for a user's Ultimate Team.
    This class handles operations like adding new players, building a lineup,
    and managing the player inventory.
    """
    def __init__(self):
        """
        Initializes the UltimateTeamManager.
        
        The 'player_inventory' dictionary stores players for each user.
        The key is the user ID and the value is a list of player objects.
        """
        self.player_inventory = {}

    def add_player_to_collection(self, user_id: str, player_data: dict):
        """
        Adds a new player to a user's collection.

        Args:
            user_id (str): The unique ID of the user.
            player_data (dict): A dictionary containing the player's data.
        """
        if user_id not in self.player_inventory:
            self.player_inventory[user_id] = []
        self.player_inventory[user_id].append(player_data)

    def get_user_collection(self, user_id: str) -> list:
        """
        Retrieves the entire player collection for a given user.

        Args:
            user_id (str): The unique ID of the user.

        Returns:
            list: A list of player dictionaries. Returns an empty list if the user has no players.
        """
        return self.player_inventory.get(user_id, [])

    def remove_player_from_collection(self, user_id: str, player_id: str) -> bool:
        """
        Removes a player from a user's collection based on their ID.

        Args:
            user_id (str): The unique ID of the user.
            player_id (str): The unique ID of the player to be removed.

        Returns:
            bool: True if the player was found and removed, False otherwise.
        """
        if user_id in self.player_inventory:
            original_size = len(self.player_inventory[user_id])
            self.player_inventory[user_id] = [p for p in self.player_inventory[user_id] if p.get("id") != player_id]
            return len(self.player_inventory[user_id]) < original_size
        return False

    def build_lineup(self, user_id: str, lineup_player_ids: list) -> list:
        """
        Creates a new lineup for a user from their collection of players.
        This is a conceptual function to demonstrate how a lineup would be formed.

        Args:
            user_id (str): The unique ID of the user.
            lineup_player_ids (list): A list of player IDs to be in the lineup.
        
        Returns:
            list: A list of player dictionaries representing the new lineup.
        """
        user_collection = self.get_user_collection(user_id)
        lineup = [player for player in user_collection if player.get("id") in lineup_player_ids]
        return lineup

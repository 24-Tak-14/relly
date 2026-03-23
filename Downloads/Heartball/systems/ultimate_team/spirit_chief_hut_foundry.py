# File: systems/ultimate_team/spirit_chief_hut_foundry.py

import uuid
import random

class SpiritChiefHUTFoundry:
    """
    Manages the creation and upgrading of player items through a unique
    "forging" or "foundry" system. This class allows users to combine
    lesser-valued players to create a single, more powerful player.
    """
    def __init__(self):
        """
        Initializes the Foundry.
        """
        self.forging_recipes = {} # Stores recipes for specific player creations

    def forge_player(self, ingredient_players: list[dict], player_pool_data: list[dict]) -> dict:
        """
        Forges a new player by combining attributes from a list of ingredient players.
        
        This is a simplified recipe: it takes a list of players and finds a
        player in the general pool with attributes that are an average
        of the ingredient players.

        Args:
            ingredient_players (list[dict]): A list of player dictionaries to be
                                             consumed in the forging process.
            player_pool_data (list[dict]): The full list of available players
                                           to choose from for the new forged player.

        Returns:
            dict: A new player dictionary, or an empty dictionary if forging fails.
        """
        if not ingredient_players:
            return {}

        # We'll use a simple attribute averaging system for the new player's stats
        avg_speed = sum(p.get("speed", 0) for p in ingredient_players) / len(ingredient_players)
        avg_strength = sum(p.get("strength", 0) for p in ingredient_players) / len(ingredient_players)
        avg_overall = sum(p.get("overall", 0) for p in ingredient_players) / len(ingredient_players)

        # Now, find a player in the player pool that closely matches these averages.
        # This is a very basic search, in a real game you would have more complex logic.
        best_match = None
        min_diff = float('inf')

        for player in player_pool_data:
            speed_diff = abs(player.get("speed", 0) - avg_speed)
            strength_diff = abs(player.get("strength", 0) - avg_strength)
            overall_diff = abs(player.get("overall", 0) - avg_overall)
            
            total_diff = speed_diff + strength_diff + overall_diff

            if total_diff < min_diff:
                min_diff = total_diff
                best_match = player

        if best_match:
            # Create a new unique player from the best match found
            forged_player = best_match.copy()
            forged_player["id"] = str(uuid.uuid4())
            forged_player["origin"] = "Forged in the Foundry"
            return forged_player
            
        return {}

    def upgrade_player(self, player_data: dict, upgrade_item: dict) -> dict:
        """
        Upgrades an existing player's attributes using a specific upgrade item.

        Args:
            player_data (dict): The dictionary of the player to be upgraded.
            upgrade_item (dict): A dictionary representing the upgrade item,
                                 e.g., {"attribute": "speed", "boost": 5}.

        Returns:
            dict: The updated player dictionary.
        """
        updated_player = player_data.copy()
        attribute_to_boost = upgrade_item.get("attribute")
        boost_amount = upgrade_item.get("boost", 0)

        if attribute_to_boost in updated_player and isinstance(updated_player[attribute_to_boost], (int, float)):
            updated_player[attribute_to_boost] += boost_amount
            print(f"Player {updated_player['name']} {attribute_to_boost} boosted by {boost_amount}!")
        else:
            print(f"Could not apply boost to attribute '{attribute_to_boost}'.")
            
        return updated_player

# File: data/monetization_system.py

# This file defines the monetization rules and data, such as pack odds,
# token prices, and ad rewards.

import random

class MonetizationSystem:
    """
    Manages the monetization rules and data for the game.
    
    This includes setting prices for in-game items, defining the contents
    and probabilities for player packs, and handling ad-related rewards.
    """
    def __init__(self):
        """
        Initializes the monetization system with predefined data.
        
        In a real-world application, this data would likely be loaded from a
        database or a configuration file.
        """
        self.item_prices = {
            "booster_pack": 100,
            "elite_player_pack": 500,
            "foundry_part": 50
        }
        
self.rookie_pack_definitions = {
    "rookie_pack": {
        "clay": {"type": "player", "rarity": "Clay", "description": "Practice Squad level", "chance": 0.40},
        "iron": {"type": "player", "rarity": "Iron", "description": "Undrafted", "chance": 0.25},
        "bronze": {"type": "player", "rarity": "Bronze", "description": "Mid-late pick (Round 4-8)", "chance": 0.15},
        "silver": {"type": "player", "rarity": "Silver", "description": "High pick (Round 2-4)", "chance": 0.10},
        "gold": {"type": "player", "rarity": "Gold", "description": "Top-pick", "chance": 0.05},
        "glamour": {"type": "player", "rarity": "Glamour", "description": "H.O.F. Level", "chance": 0.03},
        "glamour_bean": {"type": "player", "rarity": "$Glamour-Bean$", "description": "Arguably Best at Position (multiple champ)", "chance": 0.015},
        "zori": {"type": "player", "rarity": "@~ZORI~@", "description": "G.O.A.T.", "chance": 0.005}
    }
}

self.all_star_pack_definitions = {
    "all_star_pack": {
        "silver": {"type": "player", "rarity": "Silver", "description": "High pick (Round 2-4)", "chance": 0.40},
        "gold": {"type": "player", "rarity": "Gold", "description": "Top-pick", "chance": 0.30},
        "glamour": {"type": "player", "rarity": "Glamour", "description": "H.O.F. Level", "chance": 0.20},
        "glamour_bean": {"type": "player", "rarity": "$Glamour-Bean$", "description": "Arguably Best at Position (multiple champ)", "chance": 0.08},
        "zori": {"type": "player", "rarity": "@~ZORI~@", "description": "G.O.A.T.", "chance": 0.02}
    }
}

        
        self.ad_rewards = {
            "ad_token_bonus": 25,
            "ad_booster_pack": "booster_pack"
        }

    def get_pack_contents(self, pack_name: str) -> dict:
        """
        Simulates opening a pack and returns the contents based on odds.
        
        Args:
            pack_name (str): The name of the pack to open.
        
        Returns:
            dict: The item received from the pack.
        """
        pack_info = self.pack_definitions.get(pack_name)
        if not pack_info:
            return {"error": "Pack not found."}
        
        roll = random.random()
        cumulative_chance = 0.0
        
        for item_rarity, details in pack_info.items():
            cumulative_chance += details["chance"]
            if roll <= cumulative_chance:
                # In a real game, you would select a player from the relevant pool
                # here based on rarity. This is a simplified example.
                return {"type": details["type"], "rarity": details["rarity"]}
        
        # Fallback in case something goes wrong
        return {"error": "Could not determine pack contents."}

    def get_ad_reward(self, ad_type: str) -> dict:
        """
        Returns the reward for watching a specific type of ad.
        
        Args:
            ad_type (str): The type of ad watched (e.g., "token_bonus", "booster_pack").
        
        Returns:
            dict: The reward details.
        """
        if ad_type == "token_bonus":
            return {"type": "tokens", "amount": self.ad_rewards.get("ad_token_bonus")}
        elif ad_type == "booster_pack":
            return {"type": "pack", "name": self.ad_rewards.get("ad_booster_pack")}
        else:
            return {"error": "Invalid ad type."}

# File: data/unlockables/foundry_unlockable_content.py

# This file contains the logic for managing unlockable content
# that is available through the Foundry system.

import uuid

class FoundryUnlockableContent:
    """
    Manages all content that can be unlocked via the Foundry system.
    
    This includes player skins, team logos, unique playbooks, and other
    cosmetic items that are crafted rather than purchased directly.
    """
    def __init__(self):
        """
        Initializes the class with a predefined set of unlockable items.
        
        In a full application, this data would be loaded from a
        database or a separate JSON file.
        """
        self.unlockables = {
            "legendary_qb_skin": {
                "id": str(uuid.uuid4()),
                "name": "Golden Arm Skin",
                "type": "player_skin",
                "description": "A rare skin for legendary quarterbacks.",
                "forge_recipe": ["ingredient_A", "ingredient_B", "ingredient_C"]
            },
            "vintage_playbook": {
                "id": str(uuid.uuid4()),
                "name": "Vintage Playbook",
                "type": "playbook",
                "description": "Unlocks a collection of classic offensive plays.",
                "forge_recipe": ["ingredient_D", "ingredient_E"]
            },
            "gameday_soundtrack": {
                "id": str(uuid.uuid4()),
                "name": "Gameday Soundtrack",
                "type": "soundtrack",
                "description": "A rare gameday soundtrack for your profile.",
                "forge_recipe": ["ingredient_F", "ingredient_G"]
            }
        }

    def get_unlockable(self, item_id: str) -> dict | None:
        """
        Retrieves the details of an unlockable item by its ID.
        
        Args:
            item_id (str): The unique ID of the unlockable item.
        
        Returns:
            dict: The details of the item, or None if not found.
        """
        for unlockable in self.unlockables.values():
            if unlockable.get("id") == item_id:
                return unlockable
        return None

    def get_recipe_for_item(self, item_name: str) -> list | None:
        """
        Returns the forging recipe for a specific unlockable item.
        
        Args:
            item_name (str): The name of the unlockable item.
        
        Returns:
            list: The list of ingredients required, or None if the item is not found.
        """
        for unlockable in self.unlockables.values():
            if unlockable.get("name") == item_name:
                return unlockable.get("forge_recipe")
        return None

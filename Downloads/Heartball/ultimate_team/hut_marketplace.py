# File: systems/ultimate_team/hut_marketplace.py

import uuid

class HUTMarketplace:
    """
    Manages the player marketplace where users can list and buy player items.
    This class handles all transaction-related logic, including verifying funds
    and transferring ownership of players.
    
    NOTE: In a real application, you would pass instances of MonetizationCore
    and UltimateTeamManager to this class during initialization (dependency injection)
    to allow it to interact with those systems.
    """
    def __init__(self, monetization_core, ultimate_team_manager):
        """
        Initializes the HUT Marketplace.
        
        Args:
            monetization_core (MonetizationCore): The instance of the monetization system.
            ultimate_team_manager (UltimateTeamManager): The instance of the ultimate team manager.
        """
        self.listings = {}  # Stores all active listings
        self.monetization_core = monetization_core
        self.ultimate_team_manager = ultimate_team_manager

    def list_item_for_sale(self, user_id: str, player_data: dict, price: int) -> str:
        """
        Allows a user to list a player item on the marketplace.
        
        Args:
            user_id (str): The ID of the user listing the item.
            player_data (dict): The data for the player being listed.
            price (int): The price in Fantasy Tokens.

        Returns:
            str: The unique ID of the new listing.
        """
        listing_id = str(uuid.uuid4())
        self.listings[listing_id] = {
            "seller_id": user_id,
            "player_data": player_data,
            "price": price,
        }
        # A real implementation would also remove the player from the seller's inventory
        # once it's listed, to prevent them from using or selling it elsewhere.
        return listing_id

    def get_listings(self) -> list:
        """
        Retrieves all currently active listings on the marketplace.

        Returns:
            list: A list of all listings.
        """
        return list(self.listings.values())

    def buy_item(self, buyer_id: str, listing_id: str) -> bool:
        """
        Handles the purchase of an item from the marketplace.
        
        Args:
            buyer_id (str): The ID of the user attempting to buy.
            listing_id (str): The ID of the item being purchased.

        Returns:
            bool: True if the purchase was successful, False otherwise.
        """
        if listing_id not in self.listings:
            # The item doesn't exist
            return False

        listing = self.listings[listing_id]
        seller_id = listing["seller_id"]
        price = listing["price"]
        player_data = listing["player_data"]

        # Prevent a user from buying their own listing
        if buyer_id == seller_id:
            return False

        # 1. Check if the buyer has enough tokens
        buyer_balance = self.monetization_core.get_player_balance(buyer_id)
        if buyer_balance < price:
            return False

        # 2. Complete the transaction
        # Deduct tokens from the buyer
        self.monetization_core.spend_tokens(buyer_id, price)
        # Add tokens to the seller
        self.monetization_core.add_tokens(seller_id, price)

        # 3. Transfer player ownership
        # In a real system, you would first check that the player is still in the seller's inventory
        self.ultimate_team_manager.remove_player_from_collection(seller_id, player_data.get("id"))
        self.ultimate_team_manager.add_player_to_collection(buyer_id, player_data)

        # 4. Remove the listing
        del self.listings[listing_id]

        return True

    def remove_item(self, user_id: str, listing_id: str) -> bool:
        """
        Removes a listing from the marketplace. Only the seller can do this.
        
        Args:
            user_id (str): The ID of the user requesting the removal.
            listing_id (str): The ID of the listing to remove.

        Returns:
            bool: True if the listing was removed, False otherwise.
        """
        if listing_id in self.listings and self.listings[listing_id]["seller_id"] == user_id:
            del self.listings[listing_id]
            # In a real system, you would also return the player to the user's inventory
            return True
        return False

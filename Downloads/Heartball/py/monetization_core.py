# File: systems/monetization/monetization_core.py

class MonetizationCore:
    """
    Core class for managing the game's monetization system.
    This includes handling virtual currency, in-app purchases, and rewards.
    """
    def __init__(self, initial_tokens: int = 100):
        """
        Initializes the monetization system.
        
        Args:
            initial_tokens (int): The starting number of Fantasy Tokens for a new player.
        """
        self.player_balances = {}  # A dictionary to store player token balances
        self.initial_tokens = initial_tokens

    def get_player_balance(self, user_id: str) -> int:
        """
        Retrieves the current Fantasy Token balance for a user.

        Args:
            user_id (str): The unique ID of the user.

        Returns:
            int: The user's current token balance. Returns 0 if the user is not found.
        """
        return self.player_balances.get(user_id, 0)

    def add_tokens(self, user_id: str, amount: int):
        """
        Adds Fantasy Tokens to a user's balance.

        Args:
            user_id (str): The unique ID of the user.
            amount (int): The number of tokens to add. Must be a positive integer.
        """
        if amount > 0:
            current_balance = self.player_balances.get(user_id, 0)
            self.player_balances[user_id] = current_balance + amount

    def spend_tokens(self, user_id: str, amount: int) -> bool:
        """
        Spends Fantasy Tokens from a user's balance.

        Args:
            user_id (str): The unique ID of the user.
            amount (int): The number of tokens to spend. Must be a positive integer.

        Returns:
            bool: True if the tokens were successfully spent, False otherwise (e.g., insufficient funds).
        """
        if amount <= 0:
            return False

        current_balance = self.player_balances.get(user_id, 0)
        if current_balance >= amount:
            self.player_balances[user_id] = current_balance - amount
            return True
        return False
        
    def get_daily_login_bonus(self, user_id: str) -> int:
        """
        Calculates and returns the daily login bonus for a user.
        
        This is a simple example. In a real application, you would check
        the last login time to ensure the bonus is only given once per day.

        Args:
            user_id (str): The unique ID of the user.
            
        Returns:
            int: The number of tokens rewarded as a bonus.
        """
        bonus_amount = 50
        self.add_tokens(user_id, bonus_amount)
        return bonus_amount


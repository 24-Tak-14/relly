# File: systems/game_engine/game_logic.py

from systems.game_engine.dice_system import DiceSystem

class GameLogic:
    """
    Manages the core game logic for simulating plays.
    It uses the DiceSystem to determine outcomes and incorporates
    player attributes to create a more realistic simulation.
    """
    def __init__(self):
        """
        Initializes the GameLogic system. It creates an instance
        of the DiceSystem to be used for all random rolls.
        """
        self.dice_system = DiceSystem()

    def simulate_play(self, offensive_player_data: dict, defensive_player_data: dict) -> dict:
        """
        Simulates a single play between an offensive and a defensive player.
        The outcome is based on dice rolls, modified by player attributes.

        Args:
            offensive_player_data (dict): A dictionary containing the offensive
                                          player's attributes (e.g., 'speed', 'id').
            defensive_player_data (dict): A dictionary containing the defensive
                                          player's attributes (e.g., 'strength', 'id').

        Returns:
            dict: A dictionary containing the rolls for each player and the final outcome.
        """
        # We'll use 2 six-sided dice to simulate the base outcome of the play.
        offense_rolls = self.dice_system.roll_multiple_dice(num_dice=2, sides=6)
        defense_rolls = self.dice_system.roll_multiple_dice(num_dice=2, sides=6)

        # Calculate the sum of the rolls.
        offense_sum = sum(offense_rolls)
        defense_sum = sum(defense_rolls)

        # Apply player bonuses. We'll use a simple formula:
        # 1. Take a relevant attribute (e.g., 'speed' for offense, 'strength' for defense).
        # 2. Divide by a constant to scale it (e.g., 10.0).
        # This makes a player with a speed of 90 add 9.0 to their roll,
        # making them more likely to succeed.
        offense_bonus = offensive_player_data.get("speed", 0) / 10.0
        defense_bonus = defensive_player_data.get("strength", 0) / 10.0

        offense_total = offense_sum + offense_bonus
        defense_total = defense_sum + defense_bonus

        outcome = ""
        if offense_total > defense_total:
            outcome = "Offense wins the play!"
        elif defense_total > offense_total:
            outcome = "Defense wins the play!"
        else:
            outcome = "The play is a tie."

        return {
            "offense_rolls": offense_rolls,
            "offense_bonus": offense_bonus,
            "offense_total": offense_total,
            "defense_rolls": defense_rolls,
            "defense_bonus": defense_bonus,
            "defense_total": defense_total,
            "outcome": outcome
        }

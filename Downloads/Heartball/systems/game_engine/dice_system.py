# File: systems/game_engine/dice_system.py

import random

class DiceSystem:
    """
    Manages all dice rolling and random number generation for the game.
    This class is designed to provide a centralized and consistent method
    for handling game outcomes that rely on chance, such as simulating
    a play's success or failure.
    """

    def __init__(self):
        """
        Initializes the DiceSystem. In a more complex system, this could
        be used to seed the random number generator or load configuration.
        """
        pass

    def roll_single_die(self, sides: int = 6) -> int:
        """
        Rolls a single die with a specified number of sides.

        Args:
            sides (int): The number of sides on the die. Defaults to 6.

        Returns:
            int: The result of the single die roll.
        """
        if sides <= 0:
            raise ValueError("Number of sides must be a positive integer.")
        return random.randint(1, sides)

    def roll_multiple_dice(self, num_dice: int, sides: int = 6) -> list[int]:
        """
        Rolls multiple dice and returns a list of the results.

        Args:
            num_dice (int): The number of dice to roll.
            sides (int): The number of sides on each die. Defaults to 6.

        Returns:
            list[int]: A list containing the result of each die roll.
        """
        if num_dice <= 0:
            raise ValueError("Number of dice must be a positive integer.")
        return [self.roll_single_die(sides) for _ in range(num_dice)]

    def get_random_float(self, start: float = 0.0, end: float = 1.0) -> float:
        """
        Generates a random floating-point number within a specified range.

        Args:
            start (float): The inclusive lower bound.
            end (float): The inclusive upper bound.

        Returns:
            float: A random float between the start and end values.
        """
        return random.uniform(start, end)

# File: Hrt-Hrt/systems/running_back.py
# Role: T24CODAI
# Description: Defines the RunningBack class, a specialized type of Player.
# This class adds attributes and behaviors specific to the running back
# position, such as agility, tackle-breaking ability, and juking.

import pygame
from Hrt-Hrt.core.player import Player

class RunningBack(Player):
    """
    Represents a Running Back on the field.

    This class extends the base Player class with position-specific attributes
    and methods for running, evading defenders, and carrying the ball.
    """
    def __init__(self, x: int, y: int, team: str, name: str, attributes: dict):
        """
        Initializes a new RunningBack instance.

        Args:
            x (int): The initial x-coordinate of the running back.
            y (int): The initial y-coordinate of the running back.
            team (str): The name of the player's team.
            name (str): The name of the player.
            attributes (dict): A dictionary of the player's attributes.
        """
        # Call the parent class's constructor to set up the basic player.
        super().__init__(x, y, team, name, attributes, color=(139, 69, 19)) # Brown for Running Back
        
        # Add position-specific attributes.
        self.agility = attributes.get("agility", 85)
        self.tackle_breaking = attributes.get("tackle_breaking", 80)
        self.juke_move = 50 # A simple value for juking.

    def evade_tackle(self, defender_position: tuple):
        """
        Simulates the running back attempting to evade a tackle.

        Args:
            defender_position (tuple): The (x, y) coordinates of the defender.
        
        Returns:
            bool: True if the juke is successful, False otherwise.
        """
        # This is a placeholder for a complex logic calculation based on attributes.
        # For now, it's just a simple return.
        print(f"{self.name} is attempting to evade a tackle.")
        return True

    def update(self):
        """
        Updates the running back's state, overriding the base Player's update.
        """
        # This is where we would add running back-specific AI logic,
        # such as finding running lanes or choosing a juke move.
        pass

# --- Example Usage for testing ---
if __name__ == "__main__":
    # Initialize Pygame for this standalone test script.
    pygame.init()
    screen_width, screen_height = 800, 600
    screen = pygame.display.set_mode((screen_width, screen_height))
    pygame.display.set_caption("RunningBack Class Test")
    
    # Create a running back instance
    test_rb = RunningBack(
        x=200,
        y=300,
        team="Tech Titans",
        name="Iron 'Sled' Harris",
        attributes={"speed": 90, "tackle_breaking": 95}
    )
    
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
        test_rb.update()
        
        screen.fill((0, 128, 0)) # Fill screen with green
        test_rb.draw(screen)
        
        pygame.display.flip()
        pygame.time.Clock().tick(60)
    
    pygame.quit()
    sys.exit()

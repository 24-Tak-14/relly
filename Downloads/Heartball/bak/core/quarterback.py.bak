# File: Hrt-Hrt/systems/quarterback.py
# Role: T24CODAI
# Description: Defines the Quarterback class, a specialized type of Player.
# This class inherits from the base Player and adds attributes and behaviors
# specific to the quarterback position, such as throwing accuracy and vision.

import pygame
from Hrt-Hrt.core.player import Player

class Quarterback(Player):
    """
    Represents a Quarterback on the field.

    This class extends the base Player class with position-specific attributes
    and methods for passing, decision-making, and managing the offense.
    """
    def __init__(self, x: int, y: int, team: str, name: str, attributes: dict):
        """
        Initializes a new Quarterback instance.

        Args:
            x (int): The initial x-coordinate of the quarterback.
            y (int): The initial y-coordinate of the quarterback.
            team (str): The name of the player's team.
            name (str): The name of the player.
            attributes (dict): A dictionary of the player's attributes.
        """
        # Call the parent class's constructor to set up the basic player.
        super().__init__(x, y, team, name, attributes, color=(255, 255, 0)) # Yellow for Quarterback
        
        # Add a position-specific attribute.
        self.throwing_accuracy = attributes.get("throwing_accuracy", 75)
        self.vision = attributes.get("vision", 80)
        self.passing_range = 100 # The distance they can throw.

    def throw_ball(self, ball, target_x: int, target_y: int):
        """
        Simulates the quarterback throwing the ball towards a target.

        Args:
            ball (Ball): The football instance to be thrown.
            target_x (int): The target x-coordinate.
            target_y (int): The target y-coordinate.
        """
        # This is a simplified function. In a real game, this would
        # involve complex physics, accuracy calculations, and ball movement.
        print(f"{self.name} is throwing the ball towards ({target_x}, {target_y})")
        # For now, we'll just set the ball's velocity to move towards the target.
        ball.velocity_x = (target_x - ball.x) * 0.1
        ball.velocity_y = (target_y - ball.y) * 0.1
        
    def update(self):
        """
        Updates the quarterback's state, overriding the base Player's update.
        """
        # This is where we would add quarterback-specific AI logic,
        # such as reading the field, scrambling, or choosing a receiver.
        pass

# --- Example Usage for testing ---
if __name__ == "__main__":
    from Hrt-Hrt.core.ball import Ball
    
    # Initialize Pygame for this standalone test script.
    pygame.init()
    screen_width, screen_height = 800, 600
    screen = pygame.display.set_mode((screen_width, screen_height))
    pygame.display.set_caption("Quarterback Class Test")
    
    # Create a ball and a quarterback
    test_ball = Ball(x=screen_width // 2, y=screen_height // 2)
    test_qb = Quarterback(
        x=200,
        y=300,
        team="HFL Legends",
        name="Flash 'Arm' Gordon",
        attributes={"speed": 85, "throwing_accuracy": 92}
    )
    
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1: # Left click
                    # Throw the ball to the mouse position.
                    test_qb.throw_ball(test_ball, *pygame.mouse.get_pos())
        
        test_qb.update()
        test_ball.update()
        
        screen.fill((0, 128, 0)) # Fill screen with green
        test_qb.draw(screen)
        test_ball.draw(screen)
        
        pygame.display.flip()
        pygame.time.Clock().tick(60)
    
    pygame.quit()
    sys.exit()

# File: Hrt-Hrt/core/player.py
# Role: T24CODAI
# Description: Defines the base Player class for the Heart Football League.
# All specialized player types (e.g., Quarterback, RunningBack) will
# inherit from this class, sharing core attributes and behaviors.

import pygame
import random

class Player:
    """
    A base class representing a football player.

    This class provides the fundamental properties and methods common to all
    players, such as position, dimensions, movement, and rendering.
    """
    # Class-level list to keep track of all player instances.
    # This makes it easy for the game loop to manage all players on the field.
    players_on_field = []

    def __init__(self, x: int, y: int, team: str, name: str, attributes: dict, color: tuple):
        """
        Initializes a new Player instance.

        Args:
            x (int): The initial x-coordinate of the player.
            y (int): The initial y-coordinate of the player.
            team (str): The name of the player's team.
            name (str): The name of the player.
            attributes (dict): A dictionary of the player's attributes (e.g., speed, strength).
            color (tuple): The RGB color of the player's representation on screen.
        """
        self.x = x
        self.y = y
        self.team = team
        self.name = name
        self.attributes = attributes
        self.color = color
        self.radius = 15  # Visual size of the player circle.

        # A Pygame Rect object for collision detection and positioning.
        self.rect = pygame.Rect(x - self.radius, y - self.radius, self.radius * 2, self.radius * 2)
        
        # Create font once for reuse in draw method
        self.font = pygame.font.Font(None, 20)

        # Add this new player instance to the class-level list.
        Player.players_on_field.append(self)
    
    def remove_from_field(self):
        """
        Removes this player from the class-level list to prevent memory leaks.
        Call this method when the player is no longer needed.
        """
        if self in Player.players_on_field:
            Player.players_on_field.remove(self)
    
    def update(self):
        """
        Updates the player's state.

        This method is called every frame by the game loop. It's a placeholder
        for future logic like movement, physics, and AI decisions.
        """
        # Example of a simple, temporary movement behavior for demonstration.
        # This will be replaced by more complex logic later.
        pass

    def draw(self, screen: pygame.Surface):
        """
        Draws the player's visual representation on the screen.

        Args:
            screen (pygame.Surface): The Pygame surface to draw on.
        """
        # Draw a filled circle to represent the player.
        pygame.draw.circle(screen, self.color, (int(self.rect.x + self.radius), int(self.rect.y + self.radius)), self.radius)
        
        # Optionally, draw the player's name above their representation.
        text_surface = self.font.render(self.name, True, (255, 255, 255))
        text_rect = text_surface.get_rect(center=(self.rect.centerx, self.rect.y - 20))
        screen.blit(text_surface, text_rect)

# --- Example Usage (for testing purposes) ---
if __name__ == "__main__":
    # Initialize Pygame for this standalone script.
    pygame.init()
    screen_width, screen_height = 800, 600
    screen = pygame.display.set_mode((screen_width, screen_height))
    pygame.display.set_caption("Player Class Test")
    
    # Create some example players
    player1 = Player(
        x=100,
        y=100,
        team="HFL Legends",
        name="Ace 'Flash' Bolt",
        attributes={"speed": 95, "strength": 75},
        color=(255, 165, 0)
    )
    
    player2 = Player(
        x=200,
        y=200,
        team="Tech Titans",
        name="Titan 'Steel' Arm",
        attributes={"speed": 70, "strength": 98},
        color=(0, 0, 255)
    )
    
    # Test the game loop to see them.
    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
        screen.fill((0, 0, 0)) # Clear screen with black.
        
        for player in Player.players_on_field:
            player.draw(screen)
        
        pygame.display.flip()
    
    pygame.quit()
    sys.exit()


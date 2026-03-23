# File: Hrt-Hrt/core/field.py
# Role: T24CODAI
# Description: Defines the Field class, which manages the football field's
# dimensions and visual representation.

import pygame

class Field:
    """
    Represents the football field and its core attributes.

    This class provides the dimensions of the playing surface and methods
    for drawing the field lines and other visual elements.
    """
    def __init__(self, width: int, height: int):
        """
        Initializes the Field instance with specific dimensions.

        Args:
            width (int): The width of the field in pixels.
            height (int): The height of the field in pixels.
        """
        self.width = width
        self.height = height
        self.color = (0, 128, 0)  # A deep green for the grass.
        self.line_color = (255, 255, 255) # White for field lines.
        self.line_width = 3 # Thickness of the lines.

    def draw(self, screen: pygame.Surface):
        """
        Draws the football field onto the screen surface.

        Args:
            screen (pygame.Surface): The Pygame surface to draw on.
        """
        # Fill the entire screen with the field color.
        screen.fill(self.color)

        # Draw the main field boundary lines.
        pygame.draw.rect(screen, self.line_color, (0, 0, self.width, self.height), self.line_width)

        # Draw the 50-yard line (center line).
        center_x = self.width // 2
        pygame.draw.line(screen, self.line_color, (center_x, 0), (center_x, self.height), self.line_width)

        # Draw end zones with a different color.
        end_zone_width = self.width // 10
        end_zone_color = (0, 100, 0)
        pygame.draw.rect(screen, end_zone_color, (0, 0, end_zone_width, self.height))
        pygame.draw.rect(screen, end_zone_color, (self.width - end_zone_width, 0, end_zone_width, self.height))

        # Add more field markings here (e.g., hash marks, yard lines).
        # This is a basic implementation to be enhanced later.

# --- Example Usage for testing ---
if __name__ == "__main__":
    pygame.init()
    screen_width, screen_height = 1200, 800
    screen = pygame.display.set_mode((screen_width, screen_height))
    pygame.display.set_caption("Field Test")
    
    # Create a field instance
    field = Field(screen_width, screen_height)

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        
        field.draw(screen)
        pygame.display.flip()
    
    pygame.quit()
    sys.exit()


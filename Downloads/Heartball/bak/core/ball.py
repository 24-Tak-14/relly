# File: Hrt-Hrt/core/ball.py
# Role: T24CODAI
# Description: Defines the Ball class, which represents the football
# and manages its physics and rendering.

import pygame

class Ball:
    """
    Represents the football in the game.

    This class handles the ball's position, velocity, and its visual
    representation. It is a central object for all game physics.
    """
    def __init__(self, x: int, y: int):
        """
        Initializes the Ball instance.

        Args:
            x (int): The initial x-coordinate of the ball.
            y (int): The initial y-coordinate of the ball.
        """
        self.x = x
        self.y = y
        self.color = (205, 133, 63)  # A reddish-brown color for the ball.
        self.radius = 8  # A small radius to represent the ball.
        self.velocity_x = 0
        self.velocity_y = 0
        
        # A Pygame Rect object for collision detection.
        self.rect = pygame.Rect(x - self.radius, y - self.radius, self.radius * 2, self.radius * 2)

    def update(self):
        """
        Updates the ball's state, including its position and velocity.

        This is a placeholder for future physics logic like friction,
        gravity, and collision handling.
        """
        # Update position based on velocity.
        self.x += self.velocity_x
        self.y += self.velocity_y
        self.rect.center = (int(self.x), int(self.y))
        
        # A simple friction model to slow the ball down.
        self.velocity_x *= 0.99
        self.velocity_y *= 0.99
        
        # Stop the ball if its velocity is very low.
        if abs(self.velocity_x) < 0.1 and abs(self.velocity_y) < 0.1:
            self.velocity_x = 0
            self.velocity_y = 0

    def draw(self, screen: pygame.Surface):
        """
        Draws the ball on the screen.

        Args:
            screen (pygame.Surface): The Pygame surface to draw on.
        """
        # Draw a filled circle to represent the ball.
        pygame.draw.circle(screen, self.color, (int(self.x), int(self.y)), self.radius)

# --- Example Usage for testing ---
if __name__ == "__main__":
    pygame.init()
    screen_width, screen_height = 1200, 800
    screen = pygame.display.set_mode((screen_width, screen_height))
    pygame.display.set_caption("Ball Test")
    
    # Create a ball instance
    ball = Ball(screen_width // 2, screen_height // 2)

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            # Simulate a "kick" on mouse click
            if event.type == pygame.MOUSEBUTTONDOWN:
                if event.button == 1: # Left click
                    mouse_x, mouse_y = pygame.mouse.get_pos()
                    # Calculate a vector for the kick
                    ball.velocity_x = (mouse_x - ball.x) * 0.1
                    ball.velocity_y = (mouse_y - ball.y) * 0.1
        
        # Update the ball's state
        ball.update()
        
        screen.fill((0, 0, 0)) # Clear screen
        ball.draw(screen)
        pygame.display.flip()
        
        pygame.time.Clock().tick(60)
    
    pygame.quit()
    sys.exit()


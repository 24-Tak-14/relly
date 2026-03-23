# File: core/team.py
# This file defines what a "Team" is in our Heart Football League game.
# It's like a roster and budget sheet for a whole football squad.

import logging
from core.player import Player, create_player_from_dict # We need our Player blueprint and the factory.

class Team:
    """
    Represents a football team, managing its roster, budget, and score.
    """
    # When we create a new Team, we give it a name and a starting budget.
    def __init__(self, team_id, name, budget_millions=50):
        # team_id: A unique number for this team.
        self.team_id = team_id
        # name: The team's name, like "Heartland Hurricanes".
        self.name = name
        # budget: How much money the team has for players, stored in full dollars.
        self.budget = budget_millions * 1_000_000 # Convert millions to actual dollar amount.
        # roster: A list to hold all the Player objects on this team.
        self.roster = []
        # score: How many points the team has in the current game.
        self.score = 0
        # wins, losses, ties: How many games the team has won, lost, or tied in a season.
        self.wins = 0
        self.losses = 0
        self.ties = 0

    # This function adds a player to the team's roster.
    def add_player(self, player: Player):
        """
        Adds a player object to the team's roster.
        Sets the player's team_id and status.
        """
        self.roster.append(player)
        player.team_id = self.team_id # Assign this team's ID to the player.
        player.set_on_field_status(False) # Players are on the roster, not necessarily on the field initially.
        print(f"Player {player.name} (ID: {player.player_id}) added to {self.name} roster.")


    # This function removes a player from the team's roster.
    def remove_player(self, player_id):
        """
        Removes a player from the team's roster by player_id.
        """
        original_roster_size = len(self.roster)
        # Find and reset player state before removal
        player_to_remove = self.get_player_by_id(player_id)
        if player_to_remove:
            player_to_remove.team_id = None
            player_to_remove.set_on_field_status(False)
        # Create a new list of players, excluding the one we want to remove.
        self.roster = [p for p in self.roster if p.player_id != player_id]
        if len(self.roster) < original_roster_size:
            print(f"Player with ID {player_id} removed from {self.name} roster.")
            return True # We found and removed the player!
        print(f"Player with ID {player_id} not found on {self.name} roster.")
        return False # The player wasn't found.

    # This function changes the team's score.
    def add_score(self, points):
        """
        Adds points to the team's current score.
        """
        self.score += points
        logging.info(f"{self.name} scored {points} points. New score: {self.score}")


    # This function resets the team's score to zero, usually at the start of a new game.
    def reset_score(self):
        """
        Resets the team's score to 0 and all players' fantasy points for the current game.
        """
        self.score = 0
        for player in self.roster:
            player.fantasy_points_scored = 0
        logging.info(f"{self.name}'s score and player fantasy points reset.")


    # This helps us find a player on the team by their ID.
    def get_player_by_id(self, player_id):
        """
        Retrieves a player object from the roster by their ID.
        """
        for player in self.roster:
            if player.player_id == player_id:
                return player # We found the player!
        return None # Player not found on this team.

    # This helps us print out team information in a nice way.
    def __str__(self):
        """
        Returns a human-readable string representation of the team.
        """
        return (f"{self.name} (ID: {self.team_id}) - Roster size: {len(self.roster)}, "
                f"Budget: ${self.budget:,.0f}, Record: {self.wins}-{self.losses}-{self.ties}, "
                f"Current Score: {self.score}")

    # This function converts team data into a dictionary for database storage.
    def to_dict(self):
        """
        Converts the Team object to a dictionary for database storage.
        """
        # We put all the team's info into a dictionary.
        # We also convert each player object in the roster to a dictionary.
        return {
            "team_id": self.team_id,
            "name": self.name,
            "budget": self.budget,
            "roster": [player.to_dict() for player in self.roster if hasattr(player, 'to_dict')],
            "score": self.score,
            "wins": self.wins,
            "losses": self.losses,
            "ties": self.ties
        }

    # This function helps us create a Team object from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a Team object from a dictionary, typically loaded from a database.
        Uses the create_player_from_dict factory to handle specific player types for the roster.
        """
        team = cls(
            team_id=data["team_id"],
            name=data["name"],
            budget_millions=data.get("budget", 50_000_000) / 1_000_000 # Convert from stored full dollars to millions.
        )
        for player_data in data.get("roster", []):
            team.add_player(create_player_from_dict(player_data))
        
        team.score = data.get("score", 0)
        team.wins = data.get("wins", 0)
        team.losses = data.get("losses", 0)
        team.ties = data.get("ties", 0)
        return team
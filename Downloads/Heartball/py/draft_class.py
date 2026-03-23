# File: core/draft_class.py
# This file manages a "Draft Class," which is a group of new players
# that teams can pick from each year to join their rosters!

from core.player import Player, create_player_from_dict # We need our Player blueprint and the factory.
from core.quarterback import Quarterback # We need specific player types to create them.
from core.running_back import RunningBack
from core.wide_receiver import WideReceiver
from core.linebacker import Linebacker
from core.offensive_lineman import OffensiveLineman
from core.defensive_lineman import DefensiveLineman
from core.cornerback import Cornerback
from core.strong_safety import StrongSafety
from core.free_safety import FreeSafety
from core.kicker import Kicker
from core.punter import Punter
from core.kick_returner import KickReturner
from core.punt_returner import PuntReturner
from core.long_snapper import LongSnapper
from config.settings import MIN_OVERALL_RATING, MAX_OVERALL_RATING, MIN_PLAYER_SKILL, MAX_PLAYER_SKILL

import random # To help us generate new players randomly.

class DraftClass:
    """
    Manages a group of players available in the annual draft.
    """
    # When we create a DraftClass, we can specify how many new players we want.
    def __init__(self, year, num_players=100):
        # year: The year of this draft class (e.g., 2025).
        self.year = year
        # draftable_players: A list to hold all the new Player objects.
        self.draftable_players = []
        # We automatically create a bunch of new players when the class is made.
        if num_players > 0:
            self._generate_players(num_players)

    # This is a secret function (starts with _) that creates the new players.
    def _generate_players(self, num_players):
        """
        Generates a specified number of random players for the draft class.
        Creates instances of specific player subclasses.
        """
        # Mapping positions to their respective classes.
        position_classes = {
            "QB": Quarterback, "RB": RunningBack, "WR": WideReceiver, "LB": Linebacker,
            "OL": OffensiveLineman, "DL": DefensiveLineman, "CB": Cornerback,
            "SS": StrongSafety, "FS": FreeSafety, "K": Kicker, "P": Punter,
            "KR": KickReturner, "PR": PuntReturner, "LS": LongSnapper
        }
        positions = list(position_classes.keys())
        # Possible rarities for their holographic cards.
        rarities = ["common", "uncommon", "rare", "epic", "legendary"]
        
        # We create each new player one by one.
        for i in range(num_players):
            player_id = (self.year * 10000) + i + 1 # A unique ID for each player.
            name = f"Draft Prospect {i+1}" # A simple name for now.
            position = random.choice(positions) # Pick a random position for them.
            overall_rating = random.randint(MIN_OVERALL_RATING, MAX_OVERALL_RATING) # A random skill level.
            card_rarity = random.choices(rarities, weights=[0.5, 0.25, 0.15, 0.07, 0.03], k=1)[0] # Random rarity.
            
            # Generate random skills based on position and overall rating for more realistic players.
            skills = {}
            player_class = position_classes[position]
            # For each skill defined in the player's __init__ (e.g., arm_strength for QB), give a random value.
            # This is a simplified approach; in a real game, you'd have more sophisticated skill generation.
            for skill_name in player_class(0, "", 0, {}, "").skills.keys(): # Temporarily create an instance to get skill keys
                skills[skill_name] = random.randint(MIN_PLAYER_SKILL, MAX_PLAYER_SKILL) # Assign random skill value

            # Create an instance of the specific player class
            new_player = player_class(
                player_id=player_id,
                name=name,
                overall_rating=overall_rating,
                skills=skills,
                card_rarity=card_rarity
            )
            self.draftable_players.append(new_player)
        print(f"Generated {num_players} players for {self.year} draft class.")

    # This function removes a player from the draft class once a team picks them.
    def remove_drafted_player(self, player_id):
        """
        Removes a player from the draftable_players list after they have been drafted.
        """
        original_count = len(self.draftable_players)
        self.draftable_players = [p for p in self.draftable_players if p.player_id != player_id]
        if len(self.draftable_players) < original_count:
            print(f"Player with ID {player_id} removed from draft class.")
            return True
        print(f"Player with ID {player_id} not found in draft class.")
        return False

    # This helps us print out draft class information.
    def __str__(self):
        """
        Returns a human-readable string representation of the draft class.
        """
        return f"Draft Class {self.year} (Remaining Players: {len(self.draftable_players)})"

    # This function converts draft class data to a dictionary for database storage.
    def to_dict(self):
        """
        Converts the DraftClass object to a dictionary for database storage.
        """
        return {
            "year": self.year,
            "draftable_players": [p.to_dict() for p in self.draftable_players]
        }

    # This function helps us create a DraftClass object from database data.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a DraftClass object from a dictionary.
        Uses the create_player_from_dict factory to handle specific player types.
        """
        draft_class = cls(year=data["year"], num_players=0) # We create an empty class first.
        for p_data in data.get("draftable_players", []):
            draft_class.draftable_players.append(create_player_from_dict(p_data))
        return draft_class
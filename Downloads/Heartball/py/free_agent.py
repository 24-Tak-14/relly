# File: core/free_agent.py
# This file manages "Free Agents," which are players who are not currently
# on any team and can be signed by any team that wants them!

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

import random # To help us generate new free agents.

class FreeAgentPool:
    """
    Manages a pool of free agent players available for teams to sign.
    """
    # When we create a FreeAgentPool, it starts empty.
    def __init__(self):
        # available_free_agents: A list to hold all the free agent Player objects.
        self.available_free_agents = []

    # This function adds a player to the free agent pool.
    def add_player(self, player: Player):
        """
        Adds a player to the free agent pool.
        """
        self.available_free_agents.append(player)
        print(f"{player.name} added to free agent pool.")

    # This function removes a player from the free agent pool once a team signs them.
    def remove_player(self, player_id):
        """
        Removes a player from the free agent pool by player_id.
        """
        original_count = len(self.available_free_agents)
        self.available_free_agents = [p for p in self.available_free_agents if p.player_id != player_id]
        if len(self.available_free_agents) < original_count:
            print(f"Player with ID {player_id} removed from free agent pool.")
            return True
        print(f"Player with ID {player_id} not found in free agent pool.")
        return False

    # This function creates a few random free agents (useful for starting the game).
    def generate_initial_free_agents(self, num_agents=20):
        """
        Generates an initial set of random free agents.
        Creates instances of specific player subclasses.
        """
        position_classes = {
            "QB": Quarterback, "RB": RunningBack, "WR": WideReceiver, "LB": Linebacker,
            "OL": OffensiveLineman, "DL": DefensiveLineman, "CB": Cornerback,
            "SS": StrongSafety, "FS": FreeSafety, "K": Kicker, "P": Punter,
            "KR": KickReturner, "PR": PuntReturner, "LS": LongSnapper
        }
        positions = list(position_classes.keys())
        rarities = ["common", "uncommon"] # Free agents usually aren't legendary from the start.

        for i in range(num_agents):
            player_id = 900000 + i + 1 # A unique ID for free agents.
            name = f"FA Player {i+1}"
            position = random.choice(positions)
            overall_rating = random.randint(MIN_OVERALL_RATING - 20, MAX_OVERALL_RATING - 10) # Free agents might be less skilled.
            overall_rating = max(MIN_OVERALL_RATING, overall_rating) # Ensure minimum rating
            card_rarity = random.choices(rarities, weights=[0.7, 0.3], k=1)[0]
            
            skills = {}
            player_class = position_classes[position]
            for skill_name in player_class(0, "", 0, {}, "").skills.keys():
                skills[skill_name] = random.randint(MIN_PLAYER_SKILL, MAX_PLAYER_SKILL)

            new_player = player_class(
                player_id=player_id,
                name=name,
                overall_rating=overall_rating,
                skills=skills,
                card_rarity=card_rarity
            )
            self.add_player(new_player)
        print(f"Generated {num_agents} initial free agents.")

    # This helps us print out free agent information.
    def __str__(self):
        """
        Returns a human-readable string representation of the free agent pool.
        """
        return f"Free Agent Pool (Available Players: {len(self.available_free_agents)})"

    # This function converts free agent data to a dictionary for database storage.
    def to_dict(self):
        """
        Converts the FreeAgentPool object to a dictionary for database storage.
        """
        return {
            "available_free_agents": [p.to_dict() for p in self.available_free_agents]
        }

    # This function helps us create a FreeAgentPool object from database data.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a FreeAgentPool object from a dictionary.
        Uses the create_player_from_dict factory to handle specific player types.
        """
        pool = cls()
        for p_data in data.get("available_free_agents", []):
            pool.add_player(create_player_from_dict(p_data))
        return pool
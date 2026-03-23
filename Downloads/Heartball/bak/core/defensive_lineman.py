# File: core/defensive_lineman.py
# This file defines a special type of Player: a Defensive Lineman (DL).
# Defensive Linemen are strong and disrupt the offensive line, rushing the QB and stopping runs!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class DefensiveLineman(Player):
    """
    Represents a Defensive Lineman player, extending the base Player class with DL-specific attributes.
    """
    # When we create a new Defensive Lineman, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "DL".
        super().__init__(player_id, name, "DL", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Defensive Lineman. Ensure they are clamped.
        self.skills.setdefault("strength", self._clamp_skill(0)) # How strong they are
        self.skills.setdefault("pass_rush", self._clamp_skill(0)) # How good they are at getting to the QB
        self.skills.setdefault("run_stuff", self._clamp_skill(0)) # How good they are at stopping runs
        self.skills.setdefault("tackling", self._clamp_skill(0)) # Bringing down ball carriers
        self.skills.setdefault("block_shedding", self._clamp_skill(0)) # Getting off blocks from OL
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for DL-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Defensive Lineman's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "pass_rush":
            score += self.skills.get("pass_rush", 0) * 0.6
            score += self.skills.get("strength", 0) * 0.2
            score += self.skills.get("block_shedding", 0) * 0.2
        elif skill_type == "run_defense":
            score += self.skills.get("run_stuff", 0) * 0.5
            score += self.skills.get("tackling", 0) * 0.25
            score += self.skills.get("strength", 0) * 0.15
            score += self.skills.get("block_shedding", 0) * 0.1
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Defensive Lineman from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a DefensiveLineman object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
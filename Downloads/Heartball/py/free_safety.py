# File: core/free_safety.py
# This file defines a special type of Player: a Free Safety (FS).
# Free Safeties are smart defenders who read the Quarterback and cover deep passes!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class FreeSafety(Player):
    """
    Represents a Free Safety player, extending the base Player class with FS-specific attributes.
    """
    # When we create a new Free Safety, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "FS".
        super().__init__(player_id, name, "FS", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Free Safety. Ensure they are clamped.
        self.skills.setdefault("play_recognition", self._clamp_skill(0)) # Reading the offense
        self.skills.setdefault("zone_coverage", self._clamp_skill(0)) # Covering an area of the field
        self.skills.setdefault("speed", self._clamp_skill(0)) # How fast they are
        self.skills.setdefault("ball_hawk", self._clamp_skill(0)) # Their ability to intercept passes
        self.skills.setdefault("tackling", self._clamp_skill(0)) # Bringing down ball carriers (important for open-field tackles)
        self.skills.setdefault("agility", self._clamp_skill(0)) # Changing direction quickly
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for FS-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Free Safety's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "deep_pass_defense":
            score += self.skills.get("zone_coverage", 0) * 0.4
            score += self.skills.get("play_recognition", 0) * 0.3
            score += self.skills.get("ball_hawk", 0) * 0.2
            score += self.skills.get("speed", 0) * 0.1
        elif skill_type == "tackling":
            score += self.skills.get("tackling", 0) * 0.7
            score += self.skills.get("speed", 0) * 0.3 # Speed to close gaps and make tackles
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Free Safety from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a FreeSafety object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
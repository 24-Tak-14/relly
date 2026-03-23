# File: core/linebacker.py
# This file defines a special type of Player: a Linebacker (LB).
# Linebackers are versatile defenders who tackle, rush the passer, and cover receivers!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class Linebacker(Player):
    """
    Represents a Linebacker player, extending the base Player class with LB-specific attributes.
    """
    # When we create a new Linebacker, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "LB".
        super().__init__(player_id, name, "LB", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Linebacker. Ensure they are clamped.
        self.skills.setdefault("tackling", self._clamp_skill(0)) # Bringing down the ball carrier
        self.skills.setdefault("strength", self._clamp_skill(0)) # How strong they are
        self.skills.setdefault("play_recognition", self._clamp_skill(0)) # Reading the offense
        self.skills.setdefault("pass_rush", self._clamp_skill(0)) # How good they are at getting to the QB
        self.skills.setdefault("coverage", self._clamp_skill(0)) # Covering receivers
        self.skills.setdefault("speed", self._clamp_skill(0)) # Mobility in space
        self.skills.setdefault("awareness", self._clamp_skill(0)) # Field awareness
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for LB-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Linebacker's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "run_defense":
            score += self.skills.get("tackling", 0) * 0.4
            score += self.skills.get("strength", 0) * 0.3
            score += self.skills.get("play_recognition", 0) * 0.2
            score += self.skills.get("awareness", 0) * 0.1
        elif skill_type == "pass_rush":
            score += self.skills.get("pass_rush", 0) * 0.6
            score += self.skills.get("strength", 0) * 0.3
            score += self.skills.get("speed", 0) * 0.1
        elif skill_type == "pass_coverage":
            score += self.skills.get("coverage", 0) * 0.5
            score += self.skills.get("speed", 0) * 0.3
            score += self.skills.get("play_recognition", 0) * 0.2
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Linebacker from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a Linebacker object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
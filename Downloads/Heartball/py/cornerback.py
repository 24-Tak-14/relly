# File: core/cornerback.py
# This file defines a special type of Player: a Cornerback (CB).
# Cornerbacks are fast defenders who cover wide receivers and try to intercept passes!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class Cornerback(Player):
    """
    Represents a Cornerback player, extending the base Player class with CB-specific attributes.
    """
    # When we create a new Cornerback, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "CB".
        super().__init__(player_id, name, "CB", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Cornerback. Ensure they are clamped.
        self.skills.setdefault("speed", self._clamp_skill(0)) # How fast they are
        self.skills.setdefault("coverage", self._clamp_skill(0)) # How well they cover receivers
        self.skills.setdefault("agility", self._clamp_skill(0)) # Changing direction quickly
        self.skills.setdefault("man_coverage", self._clamp_skill(0)) # Covering one specific receiver
        self.skills.setdefault("zone_coverage", self._clamp_skill(0)) # Covering an area of the field
        self.skills.setdefault("play_ball_in_air", self._clamp_skill(0)) # How good they are at intercepting passes
        self.skills.setdefault("tackling", self._clamp_skill(0)) # Important for run support
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for CB-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Cornerback's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "man_coverage":
            score += self.skills.get("man_coverage", 0) * 0.5
            score += self.skills.get("speed", 0) * 0.2
            score += self.skills.get("agility", 0) * 0.2
            score += self.skills.get("play_ball_in_air", 0) * 0.1
        elif skill_type == "zone_coverage":
            score += self.skills.get("zone_coverage", 0) * 0.5
            score += self.skills.get("play_ball_in_air", 0) * 0.3
            score += self.skills.get("speed", 0) * 0.1
            score += self.skills.get("awareness", 0) * 0.1 # Base Player awareness
        elif skill_type == "tackling":
            score += self.skills.get("tackling", 0) * 0.7
            score += self.skills.get("strength", 0) * 0.3 # Base Player strength
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Cornerback from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a Cornerback object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
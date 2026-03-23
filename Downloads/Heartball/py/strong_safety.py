# File: core/strong_safety.py
# This file defines a special type of Player: a Strong Safety (SS).
# Strong Safeties are tough defenders who can tackle well and also cover receivers!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class StrongSafety(Player):
    """
    Represents a Strong Safety player, extending the base Player class with SS-specific attributes.
    """
    # When we create a new Strong Safety, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "SS".
        super().__init__(player_id, name, "SS", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Strong Safety. Ensure they are clamped.
        self.skills.setdefault("tackling", self._clamp_skill(0)) # Bringing down ball carriers
        self.skills.setdefault("strength", self._clamp_skill(0)) # How strong they are
        self.skills.setdefault("coverage", self._clamp_skill(0)) # How well they cover
        self.skills.setdefault("run_support", self._clamp_skill(0)) # Helping stop the run
        self.skills.setdefault("hit_power", self._clamp_skill(0)) # How hard they can hit
        self.skills.setdefault("play_recognition", self._clamp_skill(0)) # Reading the offense
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for SS-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Strong Safety's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "run_support":
            score += self.skills.get("tackling", 0) * 0.4
            score += self.skills.get("strength", 0) * 0.3
            score += self.skills.get("run_support", 0) * 0.2
            score += self.skills.get("hit_power", 0) * 0.1
        elif skill_type == "pass_coverage":
            score += self.skills.get("coverage", 0) * 0.5
            score += self.skills.get("play_recognition", 0) * 0.3
            score += self.skills.get("speed", 0) * 0.2 # Base Player speed
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Strong Safety from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a StrongSafety object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
# File: core/punter.py
# This file defines a special type of Player: a Punter (P).
# Punters kick the ball far down the field to help our team's defense!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class Punter(Player):
    """
    Represents a Punter player, extending the base Player class with P-specific attributes.
    """
    # When we create a new Punter, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "P".
        super().__init__(player_id, name, "P", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Punter. Ensure they are clamped.
        self.skills.setdefault("kick_power", self._clamp_skill(0)) # How far they can kick
        self.skills.setdefault("kick_accuracy", self._clamp_skill(0)) # How accurately they can place the ball
        self.skills.setdefault("hang_time", self._clamp_skill(0)) # How long the ball stays in the air
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for Punter-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Punter's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "punting":
            score += self.skills.get("kick_power", 0) * 0.4
            score += self.skills.get("kick_accuracy", 0) * 0.3
            score += self.skills.get("hang_time", 0) * 0.3
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Punter from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a Punter object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
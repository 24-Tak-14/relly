# File: core/long_snapper.py
# This file defines a special type of Player: a Long Snapper (LS).
# Long Snappers are precise players who snap the ball for punts and field goals!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class LongSnapper(Player):
    """
    Represents a Long Snapper player, extending the base Player class with LS-specific attributes.
    """
    # When we create a new Long Snapper, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "LS".
        super().__init__(player_id, name, "LS", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Long Snapper. Ensure they are clamped.
        self.skills.setdefault("snap_accuracy", self._clamp_skill(0)) # How accurately they snap the ball
        self.skills.setdefault("snap_power", self._clamp_skill(0)) # How fast they snap the ball
        self.skills.setdefault("blocking", self._clamp_skill(0)) # Blocking after the snap
        self.skills.setdefault("awareness", self._clamp_skill(0)) # Knowing who to block
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for LS-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Long Snapper's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "snapping":
            score += self.skills.get("snap_accuracy", 0) * 0.6
            score += self.skills.get("snap_power", 0) * 0.3
            score += self.skills.get("awareness", 0) * 0.1 # Awareness for quick snaps
        elif skill_type == "blocking":
            score += self.skills.get("blocking", 0) * 0.7
            score += self.skills.get("strength", 0) * 0.3 # Base Player strength
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Long Snapper from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a LongSnapper object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
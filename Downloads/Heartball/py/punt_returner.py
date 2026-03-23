# File: core/punt_returner.py
# This file defines a special type of Player: a Punt Returner (PR).
# Punt Returners are fast players who try to run punts back for big gains!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class PuntReturner(Player):
    """
    Represents a Punt Returner player, extending the base Player class with PR-specific attributes.
    """
    # When we create a new Punt Returner, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "PR".
        super().__init__(player_id, name, "PR", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Punt Returner. Ensure they are clamped.
        self.skills.setdefault("speed", self._clamp_skill(0)) # How fast they are
        self.skills.setdefault("agility", self._clamp_skill(0)) # Changing direction quickly
        self.skills.setdefault("ball_carrier_vision", self._clamp_skill(0)) # Seeing open lanes
        self.skills.setdefault("catch_punt", self._clamp_skill(0)) # Safely catching the punt
        self.skills.setdefault("decision_making", self._clamp_skill(0)) # Deciding whether to fair catch or run
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for PR-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Punt Returner's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "punt_return":
            score += self.skills.get("speed", 0) * 0.25
            score += self.skills.get("agility", 0) * 0.25
            score += self.skills.get("ball_carrier_vision", 0) * 0.2
            score += self.skills.get("catch_punt", 0) * 0.15 # Safe hands are crucial
            score += self.skills.get("decision_making", 0) * 0.15
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Punt Returner from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a PuntReturner object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
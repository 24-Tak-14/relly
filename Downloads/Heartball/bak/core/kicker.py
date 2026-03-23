# File: core/kicker.py
# This file defines a special type of Player: a Kicker (K).
# Kickers are special players who kick field goals and extra points!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class Kicker(Player):
    """
    Represents a Kicker player, extending the base Player class with K-specific attributes.
    """
    # When we create a new Kicker, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "K".
        super().__init__(player_id, name, "K", overall_rating, skills, card_rarity, team_id)

        # Important skills for a Kicker. Ensure they are clamped.
        self.skills.setdefault("kick_power", self._clamp_skill(0)) # How far they can kick
        self.skills.setdefault("kick_accuracy", self._clamp_skill(0)) # How accurately they can kick
        self.skills.setdefault("clutch_kicking", self._clamp_skill(0)) # Kicking well under pressure
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for Kicker-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Kicker's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "field_goal_attempt":
            score += self.skills.get("kick_power", 0) * 0.4 # Power for distance
            score += self.skills.get("kick_accuracy", 0) * 0.4 # Accuracy for hitting uprights
            score += self.skills.get("clutch_kicking", 0) * 0.2 # Performing under pressure
        elif skill_type == "kickoff":
            score += self.skills.get("kick_power", 0) * 0.7
            score += self.skills.get("kick_accuracy", 0) * 0.3 # For placement
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make a Kicker from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a Kicker object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
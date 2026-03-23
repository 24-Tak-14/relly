# File: core/offensive_lineman.py
# This file defines a special type of Player: an Offensive Lineman (OL).
# Offensive Linemen are strong and protect the Quarterback and block for running plays!

from core.player import Player # We import our basic Player blueprint.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class OffensiveLineman(Player):
    """
    Represents an Offensive Lineman player, extending the base Player class with OL-specific attributes.
    """
    # When we create a new Offensive Lineman, we set their specific skills.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", team_id=None):
        # We use the Player blueprint and set their position to "OL".
        super().__init__(player_id, name, "OL", overall_rating, skills, card_rarity, team_id)

        # Important skills for an Offensive Lineman. Ensure they are clamped.
        self.skills.setdefault("strength", self._clamp_skill(0)) # How strong they are
        self.skills.setdefault("pass_block", self._clamp_skill(0)) # Protecting the QB from pass rushers
        self.skills.setdefault("run_block", self._clamp_skill(0)) # Opening holes for running backs
        self.skills.setdefault("awareness", self._clamp_skill(0)) # Knowing who to block
        self.skills.setdefault("impact_block", self._clamp_skill(0)) # Making big blocks downfield
        
        # Ensure all skills are clamped after initialization.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for OL-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates an Offensive Lineman's effective skill score for a given action type.
        """
        score = 0
        if skill_type == "pass_protection":
            score += self.skills.get("pass_block", 0) * 0.6
            score += self.skills.get("strength", 0) * 0.2
            score += self.skills.get("awareness", 0) * 0.2
        elif skill_type == "run_blocking":
            score += self.skills.get("run_block", 0) * 0.6
            score += self.skills.get("strength", 0) * 0.2
            score += self.skills.get("impact_block", 0) * 0.2
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score)

    # This function helps us make an Offensive Lineman from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates an OffensiveLineman object from a dictionary.
        """
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            team_id=data.get("team_id")
        )
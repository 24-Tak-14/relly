# File: core/quarterback.py
# This file defines a special type of Player: a Quarterback (QB).
# QBs have unique skills and special abilities, so they get their own blueprint!

from core.player import Player # We import our basic Player blueprint to build upon it.
from config.settings import MIN_PLAYER_SKILL, MAX_PLAYER_SKILL # Import skill range settings

class Quarterback(Player):
    """
    Represents a Quarterback player, extending the base Player class with QB-specific attributes.
    """
    # When we create a new Quarterback, we also need to know about their special QB stuff.
    def __init__(self, player_id, name, overall_rating, skills=None, card_rarity="common", mods=None, team_id=None):
        # First, we use the Player blueprint to set up the basic player info.
        # We automatically set their position to "QB".
        super().__init__(player_id, name, "QB", overall_rating, skills, card_rarity, team_id)
        # mods: These are like special upgrades for the QB (e.g., Quick Release, Field Vision).
        # If no mods are given, we start with an empty list.
        self.mods = mods if mods is not None else []

        # We make sure every QB has these core skills, even if they're 0 to start, and clamp them.
        # These are like the fundamental parts of a QB's toolbox.
        self.skills.setdefault("arm_strength", self._clamp_skill(0))
        self.skills.setdefault("accuracy", self._clamp_skill(0))
        self.skills.setdefault("decision_making", self._clamp_skill(0))
        self.skills.setdefault("football_iq", self._clamp_skill(0))
        self.skills.setdefault("leadership", self._clamp_skill(0))
        self.skills.setdefault("pocket_presence", self._clamp_skill(0))
        self.skills.setdefault("mobility", self._clamp_skill(0))
        self.skills.setdefault("work_ethic", self._clamp_skill(0))
        self.skills.setdefault("resilience", self._clamp_skill(0))
        self.skills.setdefault("communication", self._clamp_skill(0))
        
        # Ensure all skills are clamped after initialization, in case they were provided in `skills` dict.
        self.skills = {skill: self._clamp_skill(value) for skill, value in self.skills.items()}

    # Override the generic get_skill_score for QB-specific calculations.
    def get_skill_score(self, skill_type):
        """
        Calculates a Quarterback's effective skill score for a given action type,
        combining relevant individual skills.
        """
        score = 0
        if skill_type == "passing_accuracy":
            score += self.skills.get("accuracy", 0) * 0.6
            score += self.skills.get("decision_making", 0) * 0.2
            score += self.skills.get("arm_strength", 0) * 0.1 # Arm strength affects ability to make accurate deep throws
            score += self.skills.get("pocket_presence", 0) * 0.1 # Calmness under pressure
        elif skill_type == "passing_power":
            score += self.skills.get("arm_strength", 0) * 0.8
            score += self.skills.get("accuracy", 0) * 0.2
        elif skill_type == "mobility":
            score += self.skills.get("mobility", 0) * 0.7
            score += self.skills.get("speed", 0) * 0.3 # Base Player speed
        elif skill_type == "leadership":
            score += self.skills.get("leadership", 0) * 0.7
            score += self.skills.get("communication", 0) * 0.3
        else: # Fallback to generic player skill calculation
            return super().get_skill_score(skill_type)
        
        return max(0, score) # Ensure score is never negative

    # This helps us print out QB information in a nice way, including their special mods.
    def __str__(self):
        """
        Returns a human-readable string representation of the Quarterback.
        """
        # We start with the basic player info and then add their mods.
        base_str = super().__str__()
        mods_str = f" Mods: {', '.join(self.mods)}" if self.mods else ""
        return f"{base_str}{mods_str}"

    # This function converts QB data into a dictionary (like a structured list of facts).
    # This is useful for saving QB data to our database (Firestore).
    def to_dict(self):
        """
        Converts the Quarterback object to a dictionary for database storage.
        """
        # We start with the basic player dictionary and then add the QB's mods.
        player_dict = super().to_dict()
        player_dict["mods"] = self.mods
        return player_dict

    # This function helps us create a Quarterback object from data we got from our database.
    @classmethod
    def from_dict(cls, data):
        """
        Creates a Quarterback object from a dictionary, typically loaded from a database.
        """
        # We create a new Quarterback using the data we got, passing all relevant data.
        return cls(
            player_id=data["player_id"],
            name=data["name"],
            overall_rating=data["overall_rating"],
            skills=data.get("skills", {}),
            card_rarity=data.get("card_rarity", "common"),
            mods=data.get("mods", []),
            team_id=data.get("team_id")
        )
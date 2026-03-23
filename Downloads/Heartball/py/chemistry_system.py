# File: systems/ultimate_team/chemistry_system.py

class ChemistrySystem:
    """
    Calculates and applies chemistry bonuses to a user's lineup.
    Chemistry is based on the synergy between players, such as shared team,
    play style, or position. A higher chemistry score can grant bonuses to
    player attributes during gameplay.
    """
    def __init__(self):
        """
        Initializes the ChemistrySystem.
        The `chemistry_factors` dictionary could be loaded from a configuration
        file in a real-world application.
        """
        self.chemistry_factors = {
            "team_affinity": 1.5,   # Bonus for players from the same real-world team
            "play_style": 1.2,      # Bonus for players with a similar play style
            "positional_link": 1.1, # Bonus for players in adjacent positions
        }

    def calculate_chemistry(self, lineup: list[dict]) -> float:
        """
        Calculates the overall chemistry score for a given lineup.

        Args:
            lineup (list[dict]): A list of player dictionaries that are in the user's lineup.

        Returns:
            float: The total chemistry score for the lineup.
        """
        total_chemistry = 0.0
        
        # We need at least two players to calculate chemistry
        if len(lineup) < 2:
            return total_chemistry

        for i, player1 in enumerate(lineup):
            for j, player2 in enumerate(lineup):
                # Avoid comparing a player to themselves and redundant comparisons
                if i >= j:
                    continue

                # Check for shared team affinity
                if player1.get("team") and player1.get("team") == player2.get("team"):
                    total_chemistry += self.chemistry_factors["team_affinity"]

                # Check for similar play style
                if player1.get("play_style") and player1.get("play_style") == player2.get("play_style"):
                    total_chemistry += self.chemistry_factors["play_style"]
                
                # Check for positional link. This is a simple example.
                # In a real game, you would have a complex graph of positions.
                if self._are_positions_linked(player1.get("position"), player2.get("position")):
                    total_chemistry += self.chemistry_factors["positional_link"]

        return total_chemistry

    def _are_positions_linked(self, pos1: str, pos2: str) -> bool:
        """
        A helper function to check if two positions have a link.
        This is a conceptual example.

        Args:
            pos1 (str): The position of the first player.
            pos2 (str): The position of the second player.

        Returns:
            bool: True if the positions are considered linked, False otherwise.
        """
        linked_pairs = [
            ("QB", "WR"), ("QB", "RB"),
            ("OL", "OL"),
            ("DL", "DL"), ("LB", "DL"),
            ("CB", "S")
        ]
        # Sort the pair to make the check consistent regardless of input order
        sorted_pair = tuple(sorted((pos1, pos2)))
        return sorted_pair in linked_pairs

    def apply_chemistry_bonus(self, lineup: list[dict]) -> list[dict]:
        """
        Applies a chemistry bonus to each player's attributes in the lineup.

        Args:
            lineup (list[dict]): The list of players in the lineup.

        Returns:
            list[dict]: A new list of players with updated attributes due to chemistry.
        """
        total_chemistry = self.calculate_chemistry(lineup)
        # The bonus multiplier increases with the total chemistry score
        bonus_multiplier = 1 + (total_chemistry / 100)
        
        updated_lineup = []
        for player in lineup:
            # Create a copy to avoid modifying the original player data
            updated_player = player.copy()
            # Apply the bonus to key attributes like 'speed' and 'strength'
            updated_player["speed"] = updated_player.get("speed", 0) * bonus_multiplier
            updated_player["strength"] = updated_player.get("strength", 0) * bonus_multiplier
            updated_lineup.append(updated_player)
            
        return updated_lineup

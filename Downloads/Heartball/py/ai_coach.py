# File: data/ai_coach.py

# This file contains the AI logic for an automated coach.
# It can be used to generate optimal lineups, suggest plays, or provide tips.
import random

class AICoach:
    """
    Provides AI-driven coaching advice and strategies.
    
    This class can analyze player data and provide suggestions for team management
    and in-game strategy.
    """
    def __init__(self):
        """
        Initializes the AI coach.
        """
        # A real system would load this from a file or database
        self.coaching_tips = [
            "Focus on team chemistry for a performance boost.",
            "Utilize your players' strengths. A fast WR excels on deep routes.",
            "Pay attention to fatigue. Rotate your players to keep them fresh."
        ]
        
    def suggest_lineup(self, player_pool: list) -> list:
        """
        Suggests an optimal lineup based on player stats.
        
        This is a simple algorithm that picks the best player for each position
        based on their overall rating. In a real game, this would be much more
        complex, considering chemistry, player form, and opponent strengths.
        
        Args:
            player_pool (list): A list of all available players.
        
        Returns:
            list: A list of players representing the suggested lineup.
        """
        # A simple model: select the highest-rated player for key positions.
        lineup = {}
        selected_players = set()
        
        def find_best_player(position: str, exclude_players: set = None) -> dict:
            exclude_players = exclude_players or set()
            best_player = None
            highest_overall = -1
            
            for player in player_pool:
                if (player.get("position") == position and 
                    player.get("overall", 0) > highest_overall and
                    id(player) not in exclude_players):
                    highest_overall = player["overall"]
                    best_player = player
            return best_player

        lineup["QB"] = find_best_player("QB")
        if lineup["QB"]: selected_players.add(id(lineup["QB"]))
        
        lineup["RB"] = find_best_player("RB", selected_players)
        if lineup["RB"]: selected_players.add(id(lineup["RB"]))
        
        lineup["WR1"] = find_best_player("WR", selected_players)
        if lineup["WR1"]: selected_players.add(id(lineup["WR1"]))
        
        lineup["WR2"] = find_best_player("WR", selected_players)
        if lineup["WR2"]: selected_players.add(id(lineup["WR2"]))
        
        lineup["DL1"] = find_best_player("DL", selected_players)
        if lineup["DL1"]: selected_players.add(id(lineup["DL1"]))
        
        lineup["LB1"] = find_best_player("LB", selected_players)
        if lineup["LB1"]: selected_players.add(id(lineup["LB1"]))
        
        # Filter out any None values if no player was found for a position
        return [p for p in lineup.values() if p is not None]

    def get_coaching_tip(self) -> str:
        """
        Provides a random, general coaching tip.
        
        Returns:
            str: A random coaching tip.
        """
        return random.choice(self.coaching_tips)

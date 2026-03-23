# File: data/daily_fantasy/fantasy_monetization_system.py

# This file handles all monetization-specific logic for the Daily Fantasy mode.
# It is separate from the main monetization system to allow for different
# reward structures and entry fees.

import uuid

class FantasyMonetizationSystem:
    """
    Manages all monetization for the daily fantasy mode.
    
    This includes defining contest entry fees, prize pools, and payout structures.
    It is kept separate from the core monetization system to maintain
    modularity and allow for different financial models.
    """
    def __init__(self):
        """
        Initializes the system with predefined contest data.
        """
        self.contests = {
            "contest_50_50": {
                "id": str(uuid.uuid4()),
                "name": "50/50 Challenge",
                "description": "Top 50% of players win a prize.",
                "entry_fee": 50,
                "prize_pool_multiplier": 1.8, # Total prizes are 1.8x the total entry fees
                "payout_structure": "50_50"
            },
            "contest_winner_take_all": {
                "id": str(uuid.uuid4()),
                "name": "Winner Takes All",
                "description": "The top player wins the entire prize pool.",
                "entry_fee": 100,
                "prize_pool_multiplier": 1.95,
                "payout_structure": "winner_take_all"
            }
        }
    
    def get_contest_details(self, contest_id: str) -> dict | None:
        """
        Retrieves the details for a specific contest.
        
        Args:
            contest_id (str): The ID of the contest.
        
        Returns:
            dict: The contest details, or None if not found.
        """
        for contest in self.contests.values():
            if contest["id"] == contest_id:
                return contest
        return None
        
    def calculate_payouts(self, contest_id: str, total_entries: int) -> dict:
        """
        Calculates the prize money distribution for a contest based on entries.
        
        Args:
            contest_id (str): The ID of the contest.
            total_entries (int): The total number of users who entered the contest.
            
        Returns:
            dict: The payout structure and prize amounts.
        """
        contest = self.get_contest_details(contest_id)
        if not contest:
            return {"error": "Contest not found."}
            
        prize_pool = contest["entry_fee"] * total_entries * contest["prize_pool_multiplier"]
        
        if contest["payout_structure"] == "winner_take_all":
            return {"1st_place_prize": prize_pool}
        elif contest["payout_structure"] == "50_50":
            num_winners = int(total_entries * 0.5)
            prize_per_winner = prize_pool / num_winners
            return {"winners_count": num_winners, "prize_per_winner": prize_per_winner}
        
        return {"error": "Invalid payout structure."}

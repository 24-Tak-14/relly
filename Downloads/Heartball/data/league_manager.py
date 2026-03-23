# File: data/league_manager.py

# This file handles the overall league management, including scheduling games,
# managing standings, and handling league-wide events.

import random
import logging

class LeagueManager:
    """
    Manages the entire league's operations, including scheduling, standings,
    and season progression.
    """
    def __init__(self, teams: list = None):
        """
        Initializes the LeagueManager with a list of teams.
        
        Args:
            teams (list): A list of team dictionaries to be managed by the league.
        """
        self.teams = teams or []
        self.schedule = []
        self.standings = {}

    def generate_schedule(self, weeks: int = 17):
        """
        Generates a new game schedule for the season.
        
        This is a simple round-robin scheduling algorithm. In a real-world
        application, this would be a much more complex system.
        
        Args:
            weeks (int): The number of weeks in the season.
        """
        if len(self.teams) % 2 != 0:
            print("Scheduling requires an even number of teams.")
            return

        team_ids = [team.get("id") for team in self.teams if team and team.get("id")]
        
        # Proper round-robin scheduling algorithm
        num_teams = len(team_ids)
        for week in range(1, min(weeks + 1, num_teams)):
            week_schedule = []
            for i in range(num_teams // 2):
                home_idx = i
                away_idx = (num_teams - 1 - i + week - 1) % num_teams
                if home_idx != away_idx:
                    week_schedule.append({"week": week, "home_team": team_ids[home_idx], "away_team": team_ids[away_idx]})
            self.schedule.append(week_schedule)

        print("Season schedule generated successfully.")

    def update_standings(self, winning_team_id: str, losing_team_id: str):
        """
        Updates the league standings after a game.
        
        Args:
            winning_team_id (str): The ID of the winning team.
            losing_team_id (str): The ID of the losing team.
        """
        # Ensure teams are in standings dictionary
        if winning_team_id not in self.standings:
            self.standings[winning_team_id] = {"wins": 0, "losses": 0}
        if losing_team_id not in self.standings:
            self.standings[losing_team_id] = {"wins": 0, "losses": 0}

        self.standings[winning_team_id]["wins"] += 1
        self.standings[losing_team_id]["losses"] += 1
        logging.info("Standings updated.")

    def get_standings(self) -> dict:
        """
        Returns the current league standings.
        
        Returns:
            dict: A dictionary containing the wins and losses for each team.
        """
        return self.standings

    def get_schedule(self) -> list:
        """
        Returns the full season schedule.
        
        Returns:
            list: The list of weekly matchups.
        """
        return self.schedule

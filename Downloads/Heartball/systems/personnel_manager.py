# File: Hrt-Hrt/systems/personnel_manager.py
# Role: T24CODAI
# Description: Manages all player personnel actions, including drafting,
#              free agency, and roster management.

import uuid
import random

# A placeholder for player positions.
PLAYER_POSITIONS = ["QB", "RB", "FB", "WR", "TE", "OL", "DL", "LB", "CB", "SS", "FS", "KR", "PR", "K", "P"]

class Player:
    """
    Represents a player in the league.
    """
    def __init__(self, name: str, position: str, attributes: dict, is_free_agent: bool = True):
        """
        Initializes a new Player instance.

        Args:
            name (str): The player's name.
            position (str): The player's position (e.g., "QB", "RB").
            attributes (dict): A dictionary of the player's skills.
            is_free_agent (bool): True if the player is a free agent, False otherwise.
        """
        self.id = str(uuid.uuid4())
        self.name = name
        self.position = position
        self.attributes = attributes
        self.is_free_agent = is_free_agent
        self.team = None # The team the player is currently on.
        self.contract = None # The contract object.

class PersonnelManager:
    """
    Manages all player personnel for the league.
    """
    def __init__(self, all_teams: list):
        """
        Initializes the PersonnelManager.

        Args:
            all_teams (list): A list of all Team objects in the league.
        """
        self.all_teams = all_teams
        self.draft_class = self.generate_draft_class(100) # Generate 100 players for the draft.
        self.free_agents = []

    def generate_draft_class(self, number_of_players: int) -> list[Player]:
        """
        Generates a new class of rookie players for the draft.

        Args:
            number_of_players (int): The number of players to generate.

        Returns:
            list[Player]: A list of new Player objects.
        """
        draft_class = []
        for _ in range(number_of_players):
            name = f"Player{random.randint(1000, 9999)}"
            position = random.choice(PLAYER_POSITIONS)
            attributes = {
                "speed": random.randint(1, 100),
                "strength": random.randint(1, 100),
                "skill": random.randint(1, 100)
            }
            draft_class.append(Player(name, position, attributes))
        return draft_class

    def conduct_draft(self):
        """
        Conducts a mock draft for all teams.

        For now, this is a simple, non-strategic draft where each team
        randomly selects a player from the draft class.
        """
        print("--- Beginning League Draft ---")
        random.shuffle(self.all_teams) # Randomize draft order.
        
        drafted_players = set()
        for team in self.all_teams:
            if not self.draft_class:
                print("Draft class is empty. Stopping the draft.")
                break

            # Find the first available player.
            player_to_draft = None
            for player in self.draft_class:
                if player.id not in drafted_players:
                    player_to_draft = player
                    break
            
            if player_to_draft:
                # Add the player to the team's roster.
                is_added = team.add_player(player_to_draft)
                if is_added:
                    drafted_players.add(player_to_draft.id)
                    player_to_draft.team = team
                    player_to_draft.is_free_agent = False
                    print(f"{team.name} drafted {player_to_draft.name} ({player_to_draft.position}). Roster size is now {team.get_roster_size()}")
                else:
                    print(f"{team.name} was unable to draft {player_to_draft.name} due to salary cap constraints.")
        print("--- Draft Complete ---")

    def manage_free_agency(self):
        """
        Handles the free agency period.

        This is a placeholder for a more complex system. For now, it
        just moves some players into the free agent pool.
        """
        print("--- Free Agency Period ---")
        # For simplicity, let's just move some players from teams to free agency.
        for team in self.all_teams:
            if team.roster and random.random() > 0.8:
                player_to_release = random.choice(team.roster)
                team.remove_player(player_to_release.id)
                player_to_release.is_free_agent = True
                player_to_release.team = None
                self.free_agents.append(player_to_release)
                print(f"Player {player_to_release.name} released from {team.name} and is now a free agent.")
        print(f"There are now {len(self.free_agents)} players in the free agent pool.")
        print("--- Free Agency Complete ---")

# --- Example Usage for testing ---
if __name__ == "__main__":
    from team import create_teams_from_data
    
    # Placeholder for the JSON data you provided.
    json_data = [
        {"id": 1, "team_name": "Eclipse", "stadium": {"capacity": 64397}},
        {"id": 2, "team_name": "Garrison", "stadium": {"capacity": 86688}}
        # ... Add the rest of your JSON data here for full testing.
    ]
    
    # Create the teams first, as the personnel manager depends on them.
    league_teams = create_teams_from_data(json_data)

    # Initialize the personnel manager with the list of teams.
    personnel_manager = PersonnelManager(all_teams=league_teams)

    # Conduct a mock draft.
    personnel_manager.conduct_draft()

    # Manage free agency.
    personnel_manager.manage_free_agency()

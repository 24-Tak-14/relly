# File: roles/facilities_operations_roles.py

# This file defines the roles and behaviors of personnel related to facilities operations.

class FacilitiesManager:
    """
    Manages the stadium, practice facilities, and other team properties.
    """
    def __init__(self, team_name: str):
        """
        Initializes the manager for a specific team.
        
        Args:
            team_name (str): The name of the team this manager represents.
        """
        self.team_name = team_name

    def upgrade_facility(self, facility_type: str) -> str:
        """
        Simulates the upgrade of a team facility.
        
        Args:
            facility_type (str): The type of facility to upgrade (e.g., "stadium", "practice_field").
            
        Returns:
            str: A status message.
        """
        return f"The {self.team_name} have broken ground on a new {facility_type} upgrade."

class Groundskeeper:
    """
    Maintains the playing field and other outdoor areas.
    """
    def __init__(self, stadium_name: str):
        """
        Initializes the groundskeeper for a specific stadium.
        
        Args:
            stadium_name (str): The name of the stadium.
        """
        self.stadium_name = stadium_name

    def mow_field(self) -> str:
        """
        Simulates mowing the field.
        
        Returns:
            str: A status message.
        """
        return f"The grounds crew at {self.stadium_name} is mowing the field in preparation for game day."

# File: roles/fan_engagement_roles.py

# This file defines the roles and behaviors of personnel related to fan engagement.

class FanEngagementManager:
    """
    Manages fan-facing activities, social media, and community events.
    """
    def __init__(self, team_name: str):
        """
        Initializes the manager for a specific team.
        
        Args:
            team_name (str): The name of the team this manager represents.
        """
        self.team_name = team_name

    def create_social_media_post(self, content: str) -> str:
        """
        Generates a social media post for the team.
        
        Args:
            content (str): The content of the post.
            
        Returns:
            str: A formatted social media post.
        """
        return f"Attention all {self.team_name} fans! {content}"

class CommunityCoordinator:
    """
    Coordinates community outreach and fan interaction events.
    """
    def __init__(self, team_name: str):
        """
        Initializes the coordinator for a specific team.
        
        Args:
            team_name (str): The name of the team this coordinator represents.
        """
        self.team_name = team_name

    def plan_fan_event(self, event_name: str) -> str:
        """
        Plans and announces a fan event.
        
        Args:
            event_name (str): The name of the event.
            
        Returns:
            str: An announcement for the event.
        """
        return f"The {self.team_name} are excited to announce a special fan event: {event_name}!"

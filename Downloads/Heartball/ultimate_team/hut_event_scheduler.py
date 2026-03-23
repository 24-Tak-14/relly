# File: systems/ultimate_team/hut_event_scheduler.py

from datetime import datetime, timedelta
import uuid

class HUTEventScheduler:
    """
    Manages the scheduling and lifecycle of in-game events and challenges.
    Events can be daily, weekly, or special limited-time events, each with
    their own start and end times.
    """
    def __init__(self):
        """
        Initializes the event scheduler.
        The `events` dictionary will store all created events by their unique ID.
        """
        self.events = {}

    def create_event(self, name: str, description: str, start_time: datetime, duration_days: int) -> dict:
        """
        Creates a new in-game event with a specified duration.

        Args:
            name (str): The name of the event (e.g., "Daily Challenge").
            description (str): A brief description of the event.
            start_time (datetime): The start date and time of the event.
            duration_days (int): The number of days the event will last.

        Returns:
            dict: A dictionary containing the details of the created event.
        """
        event_id = str(uuid.uuid4())
        end_time = start_time + timedelta(days=duration_days)
        
        event_details = {
            "id": event_id,
            "name": name,
            "description": description,
            "start_time": start_time,
            "end_time": end_time,
            "is_active": False  # Initially not active until the start time
        }
        self.events[event_id] = event_details
        return event_details

    def get_active_events(self) -> list:
        """
        Retrieves all events that are currently active.

        Returns:
            list: A list of dictionaries for all active events.
        """
        now = datetime.now()
        active_events = []
        for event_id, event in self.events.items():
            if event["start_time"] <= now < event["end_time"]:
                event["is_active"] = True
                active_events.append(event)
            else:
                event["is_active"] = False
        return active_events

    def get_event_by_id(self, event_id: str) -> dict:
        """
        Retrieves a specific event by its ID.

        Args:
            event_id (str): The unique ID of the event.

        Returns:
            dict: The event's details, or None if the event is not found.
        """
        return self.events.get(event_id)

    def remove_event(self, event_id: str) -> bool:
        """
        Removes an event from the scheduler.

        Args:
            event_id (str): The unique ID of the event to remove.

        Returns:
            bool: True if the event was removed, False otherwise.
        """
        if event_id in self.events:
            del self.events[event_id]
            return True
        return False


# File: systems/ultimate_team/api.py
# This is the main API entry point using FastAPI.

from fastapi import FastAPI
from systems.game_engine.game_logic import GameLogic
from systems.monetization.monetization_core import MonetizationCore
from systems.ultimate_team.ultimate_team_manager import UltimateTeamManager
from systems.ultimate_team.spirit_chief_hut_foundry import SpiritChiefHUTFoundry
import uvicorn
import uuid

# --- Initialize the FastAPI application ---
app = FastAPI()

# --- Initialize instances of our core systems ---
# These are the "brains" of our application. In a real-world app, these would
# be singletons or managed by a dependency injection system.
game_logic = GameLogic()
monetization_core = MonetizationCore()
ultimate_team_manager = UltimateTeamManager()
spirit_chief_hut_foundry = SpiritChiefHUTFoundry()

# --- Mock Data to make the example runnable ---
# In a real application, this data would come from a database.
player_pool_data = [
    {"id": "player_1", "name": "Speedy Jones", "position": "WR", "speed": 95, "strength": 70, "overall": 88},
    {"id": "player_2", "name": "Brick Wall", "position": "DL", "speed": 60, "strength": 99, "overall": 92},
    {"id": "player_3", "name": "Captain Clutch", "position": "QB", "speed": 85, "strength": 80, "overall": 95},
    {"id": "player_4", "name": "The Bruiser", "position": "RB", "speed": 88, "strength": 92, "overall": 91},
]

user_data = {
    "user_123": {
        "id": "user_123",
        "username": "Gamer123",
        "players": [
            {"id": "player_1", "name": "Speedy Jones", "position": "WR", "speed": 95, "strength": 70, "overall": 88},
            {"id": "player_2", "name": "Brick Wall", "position": "DL", "speed": 60, "strength": 99, "overall": 92},
        ]
    },
    "user_456": {
        "id": "user_456",
        "username": "FantasyFan",
        "players": []
    }
}

# Add mock players to the ultimate team manager
for user_id, data in user_data.items():
    for player in data["players"]:
        ultimate_team_manager.add_player_to_collection(user_id, player)

# --- Define API Endpoints ---

@app.get("/")
def read_root():
    """
    A simple root endpoint to confirm the API is running.
    """
    return {"message": "Welcome to the HfL API"}

@app.get("/simulate-play/{offense_player_id}/{defense_player_id}")
def simulate_play_endpoint(offense_player_id: str, defense_player_id: str):
    """
    Simulates a single play between an offensive and a defensive player.
    
    Args:
        offense_player_id (str): The ID of the offensive player.
        defense_player_id (str): The ID of the defensive player.
    
    Returns:
        dict: The result of the simulated play.
    """
    off_player = next((p for p in player_pool_data if p["id"] == offense_player_id), None)
    def_player = next((p for p in player_pool_data if p["id"] == defense_player_id), None)
    
    if not off_player or not def_player:
        return {"error": "Player not found"}
        
    return game_logic.simulate_play(off_player, def_player)

@app.post("/get-daily-bonus/{user_id}")
def get_daily_bonus_endpoint(user_id: str):
    """
    Gives a daily login bonus to the specified user.
    
    Args:
        user_id (str): The ID of the user.
    
    Returns:
        dict: The updated balance and bonus amount.
    """
    bonus = monetization_core.get_daily_login_bonus(user_id)
    balance = monetization_core.get_player_balance(user_id)
    return {"message": f"Daily bonus of {bonus} tokens received!", "new_balance": balance}

@app.get("/get-user-collection/{user_id}")
def get_user_collection_endpoint(user_id: str):
    """
    Retrieves the player collection for a user.
    
    Args:
        user_id (str): The ID of the user.
        
    Returns:
        dict: The user's player collection.
    """
    players = ultimate_team_manager.get_user_collection(user_id)
    return {"user_id": user_id, "players": players}

@app.post("/forge-player/{user_id}")
def forge_player_endpoint(user_id: str, ingredient_ids: list[str]):
    """
    Forges a new player by consuming a list of ingredient players.
    
    Args:
        user_id (str): The ID of the user.
        ingredient_ids (list[str]): A list of player IDs to use as ingredients.
    
    Returns:
        dict: The newly forged player, or an error.
    """
    user_players = ultimate_team_manager.get_user_collection(user_id)
    ingredient_players = [p for p in user_players if p.get("id") in ingredient_ids]
    
    if len(ingredient_players) < 2:
        return {"error": "At least two players are needed to forge a new one."}
        
    forged_player = spirit_chief_hut_foundry.forge_player(ingredient_players, player_pool_data)
    
    if forged_player:
        # Add the new player and remove the ingredients
        ultimate_team_manager.add_player_to_collection(user_id, forged_player)
        for p in ingredient_players:
            ultimate_team_manager.remove_player_from_collection(user_id, p.get("id"))
            
        return {"message": "Player successfully forged!", "new_player": forged_player}
    
    return {"error": "Forging failed."}

# To run this file from the terminal, you would execute:
# uvicorn api:app --reload

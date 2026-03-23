from data.ai_coach import AICoach
from systems.game_engine.game_logic import GameLogic

def verify_phase1():
    coach = AICoach()
    logic = GameLogic()
    
    # 1. Test AI Coaching Play-calling
    situations = [
        {"down": 1, "yards": 10},
        {"down": 3, "yards": 12},
        {"down": 3, "yards": 1}
    ]
    
    print("--- AI Coaching Play-calling Verification ---")
    for s in situations:
        play = coach.suggest_play(s["down"], s["yards"])
        print(f"Situation: {s['down']} & {s['yards']} -> Suggestion: {play}")
        
    # 2. Test Game Logic Play Simulation
    offense = {"speed": 90, "strength": 85, "id": "OFF1"}
    defense = {"speed": 80, "strength": 88, "id": "DEF1"}
    
    print("\n--- Game Logic Play Simulation Verification ---")
    for play in ["Pass", "Run"]:
        result = logic.simulate_play(offense, defense, play_type=play)
        print(f"Play Type: {play}")
        print(f"  Offense Total: {result['offense_total']} (Rolls: {result['offense_rolls']}, Bonus: {result['offense_bonus']})")
        print(f"  Defense Total: {result['defense_total']} (Rolls: {result['defense_rolls']}, Bonus: {result['defense_bonus']})")
        print(f"  Outcome: {result['outcome']}")

if __name__ == "__main__":
    verify_phase1()

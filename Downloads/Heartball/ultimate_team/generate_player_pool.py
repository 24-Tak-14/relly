# File: data/ultimate_team/generate_player_pool.py

import json
import random
import uuid

def generate_player_pool(template_file_path: str, output_file_path: str, num_players: int = 100):
    """
    Generates a pool of unique players based on templates and saves them to a JSON file.

    This script reads player templates, applies rarity modifiers, and creates a
    diverse list of players with unique names and IDs.

    Args:
        template_file_path (str): The path to the player templates JSON file.
        output_file_path (str): The path where the generated player pool will be saved.
        num_players (int): The total number of players to generate.
    """
    try:
        # Load the player templates from the JSON file
        with open(template_file_path, 'r') as f:
            templates = json.load(f)

        if "templates" not in templates:
            print("Error: 'templates' key not found in the JSON file.")
            return

        player_pool = []
        positions = list(templates["templates"].keys())
        rarities = ["Clay", "Iron", "Bronze", "Silver", "Gold", "Glamour", "$Glamour-Bean$", "@~ZORI~@"]
        
        # List of names for generating unique players
        first_names = ["Ace", "Blaze", "Iron", "Newbie", "Dominant", "Captain", "Swift", "Strong", "Golden", "Quick", "Aaron", 
        "Adam", "Adrian", "Aidan", "Ali", "Amari", "Amin", "Andre", "Antonio", "Arjun", "Armani", "Arthur", "Aryan", "Asher", 
        "Axel", "Benjamin", "Brandon", "Bryan", "Byron", "Burl (Bags)", "Caleb", "Camilo", "Cesar", "Christian", "Christopher", 
        "Daniel", "Dario", "Demetrius", "Dennis", "David", "Diego", "Dikinya", "Dixon", "Elijah", "Emmanuel", "Ethan", "Felix", 
        "Fernando", "Gabriel", "George", "Giovanni", "Hamza", "Hector", "Henry", "Hugo", "Ibrahim", "Isaac", "Isaiah", "Ishaan", 
        "Jacob", "Jaden", "Jai", "James", "Javier", "Jayden", "Jesus", "Joel", "John", "Jonathan", "Jorge", " Jose", "Joshua", 
        "Junior", "Justin", "Kai", "Karim", "Kevin", "Khalil", "Kyle", "Leo", "Leon", "Liam", "Louis", "Lucas", "Manuel", "Marcus", 
        "Marco", "Marquith", "Mateo", "Matteo", "Max", "Michael", "Milan", "Mohamed", "Mohammed", "Nathan", "Noah", "Omar", "Oscar", 
        "Pablo", "Pedro", "Rafael", "Rajan", "Rami", "Ray", "Ricardo", "Roberto", "Rohan", "Roman", "Ruben", "Ryan", "Salem", "Samuel", 
        "Sebastian", "Simon", "Sultan", "Terrell" "Theo", "Thomas", "Victor", "Wang", "William", "Xavier", "Yousef", "Zachary", "Zain", 
        "Zayn", "Zayd"]
        last_names = ["Armstron", "Runner", "Wall", "Passer", "Defender", "Force", "Wind", "Mountain", "Glove", "Stride", 
        "Abdullah", "Ahmed", "Alonso", "Alves", "Amadi", "Andersen", "Anderson", "Arroyo", "Baker", "Barnes", "Bennett", "Butts", 
        "Chen", "Choi", "Chung" "Clarke", "Cruz", "Da Costa", "Davies", "De Souza", "Diaz", "Diop", "Dixon", "Edwards", "Enriquez", 
        "Evans", "Fair", "Fernandes", "Fernandez", "Franco", "Garcia", "Gomez", "Gonzalez", "Graham", "Green", "Gupta", "Hall", "Harris", 
        "Hawkins", "Hernandez", "Hill", "Hosier", "Hussain", "Jackson", "Jain", "James", "Jara", "Jenkins", "Johnson", "Jones", "Kahn", 
        "Kamara", "Kim", "King", "Kowalski", "Lambert", "Lee", "Lewis", "Lim", "Lopez", "Ma", "Mahmud", "Martinez", "Mendoza", "Miller", 
        "Mohammed", "Moore", "Morales", "Morgan", "Morris", "Murphy", "Myles" "Nakamura", "Nguyen", "Novak", "O'Connell", "O'Malley", 
        "Oliveira", "Ortiz", "Patel", "Perez", "Pham", "Phillips", "Rae", "Rahman", "Ramirez", "Reyes", "Reynolds", "Richardson", 
        "Rivera", "Roberts", "Robinson", "Rodrigues", "Rodriguez", "Rogers", "Ross", "Ruiz", "Santos", "Schmidt", "Singh", "Smith", 
        "Stewart", "Sy", "Tan", "Taylor", "Thomas", "Thompson", "Torres", "Tran", "Turner", "Ullah", "Walker", "Wang", "Weiss", 
        "White", "Williams", "Wilson", "Wright", "Young", "Zhang"]

        # Loop to generate the specified number of players
        for i in range(num_players):
            # Randomly select a position and rarity
            position = random.choice(positions)
            rarity = random.choice(rarities)
            template = templates["templates"].get(position)

            if not template:
                print(f"Warning: Template for position '{position}' not found. Skipping.")
                continue

            # Get the modifier for the chosen rarity
            modifier_data = template["rarity_modifiers"].get(rarity)
            if not modifier_data:
                print(f"Warning: Rarity modifier for '{rarity}' not found. Skipping.")
                continue

            overall_modifier = modifier_data["overall_modifier"]
            
            # Create a dictionary for the player's attributes
            player_attributes = {}
            for attr, base_value in template["base_attributes"].items():
                # Apply the modifier to the base attribute value
                new_value = min(100, int(base_value * overall_modifier + random.randint(-5, 5)))
                player_attributes[attr] = new_value

            # Construct the player object
            player = {
                "id": str(uuid.uuid4()),  # Generate a unique ID
                "name": f"{random.choice(first_names)} {random.choice(last_names)}",
                "position": position,
                "rarity": rarity,
                "attributes": player_attributes,
                "potential_growth": modifier_data["potential_growth"]
            }
            player_pool.append(player)

        # Write the generated player pool to a JSON file
        with open(output_file_path, 'w') as f:
            json.dump({"players": player_pool}, f, indent=2)

        print(f"Successfully generated {len(player_pool)} players to {output_file_path}")

    except FileNotFoundError:
        print(f"Error: The file '{template_file_path}' was not found.")
    except json.JSONDecodeError:
        print(f"Error: The file '{template_file_path}' is not a valid JSON file.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Example Usage:
if __name__ == "__main__":
    template_path = "player_templates.json"  # Assumes the file is in the same directory
    output_path = "hut_player_pool.json"
    generate_player_pool(template_path, output_path, num_players=150)

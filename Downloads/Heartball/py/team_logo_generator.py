#!/usr/bin/env python3
"""
Heart Football League Team Logo Generator
A complete tool for generating team logos and managing team data.
"""

import dataclasses
from typing import Union, List, Optional


@dataclasses.dataclass
class Image:
    prompt: Optional[str] = None
    url: Optional[str] = None


@dataclasses.dataclass
class ImageGenerationResult:
    content_id: Optional[str] = None
    generated_images: Optional[List[Image]] = None


@dataclasses.dataclass
class ImageGenerationResultList:
    results: Optional[List[ImageGenerationResult]] = None


class ImageGenerationUsecase:
    ALTERNATIVES = "alternatives"
    CREATION = "creation"


class ImageGeneration:
    def generate_images(self, prompts: List[str], image_generation_usecase: str) -> ImageGenerationResultList:
        """Simulates image generation API call with placeholder URLs."""
        print(f"DEBUG: Generating images for {len(prompts)} prompt(s) with usecase: {image_generation_usecase}")
        
        mock_images = []
        for i, prompt_text in enumerate(prompts):
            if image_generation_usecase == ImageGenerationUsecase.ALTERNATIVES:
                if i == 0:  # Generate 4 alternatives for first prompt
                    for j in range(1, 5):
                        mock_images.append(Image(
                            prompt=f"Alternative {j} for: {prompt_text[:50]}...",
                            url=f"https://placehold.co/400x400/808080/FFFFFF?text=Logo{j}"
                        ))
                else:
                    mock_images.append(Image(
                        prompt=prompt_text,
                        url="https://placehold.co/400x400/808080/FFFFFF?text=Logo"
                    ))
            elif image_generation_usecase == ImageGenerationUsecase.CREATION:
                mock_images.append(Image(
                    prompt=prompt_text,
                    url="https://placehold.co/400x400/808080/FFFFFF?text=Concept"
                ))

        return ImageGenerationResultList(
            results=[
                ImageGenerationResult(
                    content_id="mock_content_id_1",
                    generated_images=mock_images
                )
            ]
        )


# Initialize image generation service
image_generation = ImageGeneration()


def get_team_colors(team_name: str) -> str:
    """Returns team colors based on team name."""
    team_name_lower = team_name.lower()
    
    color_map = {
        "eclipse": "Black, Powder Purple, Off White",
        "garrison": "Teal, Orange, White",
        "miracles": "White, Lavender, Navy Blue",
        "hawks": "Tan, Eggshell White, Fuschia",
        "clovers": "Forest Green, Lime Green, Gold",
        "storks": "White, Light Blue, Grey",
        "hellcats": "Powder Blue, Crimson Red, Black, Ash Grey",
        "candy rain": "Pastel Pink, Royal Blue, Lemon Yellow",
        "jokers": "Matte Purple, Matte Green, Matte Yellow, White",
        "canary": "Shiny Yellow, Neon Yellow, Matte Yellow/White",
        "sandals": "Mocha, Beige, Crystal Ocean Blue, Cream",
        "flatteners": "Charcoal Grey, Safety Orange, Light Yellow",
        "condors": "Dark Brown, Tan, Cream, White",
        "flames": "Fiery Red, Bright Orange, Sky Blue, Yellow",
        "funnel chug": "Aqua Marine, Gold, Hot Pink",
        "saints": "Gold, Silver, Eggshell White",
        "jackals": "Desert Tan, Dark Brown, Black",
        "megaladons": "Deep Ocean Blue, Shark Grey, Baby Blue",
        "jypsees": "Silver, Ruby Red, Emerald Green, Gold",
        "stars": "Royal Blue, Silver, Teal",
        "soul": "Matte Purple, Gold, Matte Black",
        "tribe": "Earthy Brown, Copper, Forest Green, Light Brown",
        "blackouts": "Pitch Black, Matte Black, Dark Grey, Electric Gold/Blue",
        "foxes": "Burnt Orange, White, Dark Brown",
        "nomads": "Desert Sand, Dusty Rose, Teal",
        "kraken": "Deep Teal, Black, Lime Green",
        "polarbears": "Snow White, Ice Blue, Fishscale White, Grey",
        "demons": "Blood Red, Black, Fiery Orange",
        "jackrabbits": "Desert Tan, Sage Green, Cream",
        "beacons": "Powder Purple, Bright White, Matte Navy",
        "lemurs": "Ring-tailed Black, White, Grey",
        "vikings": "Royal Purple, Black, Steel Grey",
        "dismantlers": "Rust Red, Metallic Grey, Matte Black",
        "snarf dragons": "Dragon Green, Mustard Yellow, Matte Brown",
        "greyhounds": "Slate Grey, White, Silver",
        "tigers": "Tiger Orange, Black, White"
    }
    
    for key, colors in color_map.items():
        if key in team_name_lower:
            return colors
    
    return "Silver Blue, Gold, Silver, Neon Red, Powder Yellow"


def generate_team_logos(league_name: str, city_name: str, team_name: str, team_colors: str = None):
    """Generates team logos and displays results."""
    if team_colors is None:
        team_colors = get_team_colors(team_name)
    
    full_team_name = f"{city_name} {team_name}"
    
    logo_concept_prompt = (
        f"A football team logo concept for the {full_team_name} of the {league_name}, "
        f"featuring a stylized {team_name.lower()} logo design, rendered in a palette of {team_colors}. "
        f"The logo should embody the spirit of the {team_name.lower()}, showing strength and agility. "
        f"Include the text \"{full_team_name}\" prominently and \"{league_name}\" subtly. "
        f"A clean, crisp design in a modern, dynamic style suitable for a sports team."
    )

    print(f"\n--- Generating logos for {full_team_name} (Colors: {team_colors}) ---")

    logo_results = image_generation.generate_images(
        prompts=[logo_concept_prompt],
        image_generation_usecase=ImageGenerationUsecase.ALTERNATIVES
    )

    if logo_results and logo_results.results:
        generated_images = logo_results.results[0].generated_images
        print("\n--- Generated Football Team Logos ---")
        for i, img in enumerate(generated_images):
            if i < 4:
                print(f"Logo {i+1}: {img.url}")
            else:
                break

        print("\n--- Football Team Logo Concept ---")
        print(logo_concept_prompt)
    else:
        print("Failed to generate logos. No results returned.")


# Team data for Heart Football League
TEAMS_DATA = {
    "league_name": "Heart Football League",
    "teams": [
        {"city_name": "Kaitlynnville", "team_name": "Eclipse"},
        {"city_name": "Gu'Bare", "team_name": "Garrison"},
        {"city_name": "Miki Mountain", "team_name": "Miracles"},
        {"city_name": "Heirsentia", "team_name": "Hawks"},
        {"city_name": "Brightcloud", "team_name": "Clovers"},
        {"city_name": "Silvermind", "team_name": "Storks"},
        {"city_name": "Reynava", "team_name": "Hellcats"},
        {"city_name": "Christiano", "team_name": "Candy Rain"},
        {"city_name": "Jakobian", "team_name": "Jokers"},
        {"city_name": "Queens Cove", "team_name": "Canary's"},
        {"city_name": "Zorisova", "team_name": "Sandals"},
        {"city_name": "Farspace", "team_name": "Flatteners"},
        {"city_name": "Closesight", "team_name": "Condors"},
        {"city_name": "Sunsprout", "team_name": "Flames"},
        {"city_name": "Beloved", "team_name": "Funnel Chug"},
        {"city_name": "San Terrell", "team_name": "Saints"},
        {"city_name": "Justinopolis", "team_name": "Jackals"},
        {"city_name": "Matteochi", "team_name": "Megaladons"},
        {"city_name": "Jessadelphia", "team_name": "Jypsees"},
        {"city_name": "Libertine", "team_name": "Stars"},
        {"city_name": "Golden Siren", "team_name": "Soul"},
        {"city_name": "Tiapma'atzu", "team_name": "Tribe"},
        {"city_name": "San Terrell", "team_name": "Blackouts"},
        {"city_name": "Firesky", "team_name": "Foxes"},
        {"city_name": "Naveah", "team_name": "Nomads"},
        {"city_name": "Kaylean", "team_name": "Kraken"},
        {"city_name": "Emahney Park", "team_name": "Polarbears"},
        {"city_name": "Deannaton", "team_name": "Demons"},
        {"city_name": "Jasmyne Junction", "team_name": "Jackrabbits"},
        {"city_name": "Babelonia", "team_name": "Beacons"},
        {"city_name": "Longsite", "team_name": "Lemurs"},
        {"city_name": "Visiente'", "team_name": "Vikings"},
        {"city_name": "Dennisiargo", "team_name": "Dismantlers"},
        {"city_name": "Sarahite", "team_name": "Snarf Dragons"},
        {"city_name": "Golden Sunset", "team_name": "Greyhounds"},
        {"city_name": "Takumzuh", "team_name": "Tigers"}
    ]
}


def generate_all_team_logos():
    """Generate logos for all teams in the league."""
    league_name = TEAMS_DATA["league_name"]
    print(f"=== {league_name} Logo Generation ===")
    
    for team_info in TEAMS_DATA["teams"]:
        city_name = team_info["city_name"]
        team_name = team_info["team_name"]
        generate_team_logos(league_name, city_name, team_name)


def generate_single_team_logo(city_name: str, team_name: str):
    """Generate logo for a specific team."""
    league_name = TEAMS_DATA["league_name"]
    generate_team_logos(league_name, city_name, team_name)


def main():
    """Main function with interactive menu."""
    print("Heart Football League Logo Generator")
    print("1. Generate all team logos")
    print("2. Generate single team logo")
    print("3. List all teams")
    
    choice = input("\nEnter your choice (1-3): ").strip()
    
    if choice == "1":
        generate_all_team_logos()
    elif choice == "2":
        print("\nAvailable teams:")
        for i, team in enumerate(TEAMS_DATA["teams"], 1):
            print(f"{i}. {team['city_name']} {team['team_name']}")
        
        try:
            team_choice = int(input("\nEnter team number: ")) - 1
            if 0 <= team_choice < len(TEAMS_DATA["teams"]):
                team = TEAMS_DATA["teams"][team_choice]
                generate_single_team_logo(team["city_name"], team["team_name"])
            else:
                print("Invalid team number!")
        except ValueError:
            print("Please enter a valid number!")
    elif choice == "3":
        print(f"\n{TEAMS_DATA['league_name']} Teams:")
        for team in TEAMS_DATA["teams"]:
            colors = get_team_colors(team["team_name"])
            print(f"- {team['city_name']} {team['team_name']} ({colors})")
    else:
        print("Invalid choice!")


if __name__ == "__main__":
    main()
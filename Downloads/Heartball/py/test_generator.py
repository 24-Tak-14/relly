#!/usr/bin/env python3
"""
Test script for the team logo generator
"""

# Import the functions from our generator
from team_logo_generator import generate_single_team_logo, get_team_colors, TEAMS_DATA

def test_color_function():
    """Test the color assignment function"""
    print("Testing color assignment:")
    test_teams = ["Hawks", "Eclipse", "Dragons", "Unknown Team"]
    
    for team in test_teams:
        colors = get_team_colors(team)
        print(f"  {team}: {colors}")

def test_single_logo_generation():
    """Test generating a single team logo"""
    print("\nTesting single logo generation:")
    generate_single_team_logo("Heirsentia", "Hawks")

def test_team_data():
    """Test team data structure"""
    print(f"\nLeague: {TEAMS_DATA['league_name']}")
    print(f"Total teams: {len(TEAMS_DATA['teams'])}")
    print("First 5 teams:")
    for i, team in enumerate(TEAMS_DATA['teams'][:5]):
        colors = get_team_colors(team['team_name'])
        print(f"  {i+1}. {team['city_name']} {team['team_name']} - {colors}")

if __name__ == "__main__":
    print("=== Heart Football League Logo Generator Test ===")
    test_color_function()
    test_single_logo_generation()
    test_team_data()
    print("\n=== Test Complete ===")
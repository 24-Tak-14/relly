import unittest
from systems.game_engine.game_logic import GameLogic

class TestGameLogic(unittest.TestCase):
    def setUp(self):
        self.game_logic = GameLogic()
        self.offense = {"speed": 90, "id": "QB1"}
        self.defense = {"strength": 80, "id": "LB1"}

    def test_simulate_play_basic(self):
        result = self.game_logic.simulate_play(self.offense, self.defense)
        self.assertIn("outcome", result)
        self.assertIn("offense_total", result)
        self.assertIn("defense_total", result)

    def test_simulate_play_with_type_pass(self):
        # This should fail because 'play_type' is not yet supported in simulate_play
        result = self.game_logic.simulate_play(self.offense, self.defense, play_type="Pass")
        self.assertIn("play_type", result)
        self.assertEqual(result["play_type"], "Pass")

    def test_simulate_play_with_type_run(self):
        result = self.game_logic.simulate_play(self.offense, self.defense, play_type="Run")
        self.assertIn("play_type", result)
        self.assertEqual(result["play_type"], "Run")

if __name__ == "__main__":
    unittest.main()

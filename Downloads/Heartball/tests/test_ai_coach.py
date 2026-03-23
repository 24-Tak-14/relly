import unittest
from data.ai_coach import AICoach

class TestAICoach(unittest.TestCase):
    def setUp(self):
        self.ai_coach = AICoach()

    def test_suggest_play_pass_on_long_third_down(self):
        # Should suggest 'Pass' on 3rd & 10
        play = self.ai_coach.suggest_play(down=3, yards_to_go=10)
        self.assertEqual(play, "Pass")

    def test_suggest_play_run_on_short_yardage(self):
        # Should suggest 'Run' on 3rd & 1
        play = self.ai_coach.suggest_play(down=3, yards_to_go=1)
        self.assertEqual(play, "Run")

    def test_suggest_play_run_on_first_down(self):
        # Should suggest 'Run' on 1st & 10 (as a simple default strategy)
        play = self.ai_coach.suggest_play(down=1, yards_to_go=10)
        self.assertEqual(play, "Run")

if __name__ == "__main__":
    unittest.main()

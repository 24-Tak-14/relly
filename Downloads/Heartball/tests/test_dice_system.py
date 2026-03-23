import unittest
from game_engine.dice_system import DiceSystem

class TestDiceSystem(unittest.TestCase):
    def setUp(self):
        self.dice_system = DiceSystem()

    def test_roll_single_die(self):
        # Roll 100 times to ensure it's within range
        for _ in range(100):
            result = self.dice_system.roll_single_die(6)
            self.assertGreaterEqual(result, 1)
            self.assertLessEqual(result, 6)

    def test_roll_single_die_invalid_sides(self):
        with self.assertRaises(ValueError):
            self.dice_system.roll_single_die(0)

    def test_roll_multiple_dice(self):
        num_dice = 3
        sides = 6
        results = self.dice_system.roll_multiple_dice(num_dice, sides)
        self.assertEqual(len(results), num_dice)
        for result in results:
            self.assertGreaterEqual(result, 1)
            self.assertLessEqual(result, sides)

    def test_roll_multiple_dice_invalid_num(self):
        with self.assertRaises(ValueError):
            self.dice_system.roll_multiple_dice(0, 6)

    def test_get_random_float(self):
        start = 2.0
        end = 5.0
        for _ in range(100):
            result = self.dice_system.get_random_float(start, end)
            self.assertGreaterEqual(result, start)
            self.assertLessEqual(result, end)

if __name__ == "__main__":
    unittest.main()

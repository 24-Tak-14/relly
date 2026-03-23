# File: systems/game_engine/__init__.py

"""
Game Engine Package

This package contains the core logic for the Heart Football League (HfL) game simulation.
It is responsible for handling all gameplay-related calculations and outcomes.
"""

from .dice_system import DiceSystem
from .game_logic import GameLogic

# The `__all__` list defines the public API of the package.
# This means that when someone does `from systems.game_engine import *`,
# only the modules and classes listed here will be imported.
__all__ = [
    'DiceSystem',
    'GameLogic',
]

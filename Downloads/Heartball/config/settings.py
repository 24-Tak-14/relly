# File: config/settings.py
# This file holds important settings and secret keys for our HFL backend.
# Think of it like a control panel for our Python programs.

import os # This helps us talk to the computer's operating system.
from dotenv import load_dotenv # This helps us load secret keys from a special file.

# Load environment variables from a .env file.
# This is like looking up secret notes in a hidden diary to get special information.
load_dotenv()

# Firebase configuration values.
# These are like the address and password to our online Firebase database.
# We get these from the environment variables, which is safer than putting them directly here.
FIREBASE_API_KEY = os.getenv("FIREBASE_API_KEY", "your_firebase_api_key_here")
FIREBASE_AUTH_DOMAIN = os.getenv("FIREBASE_AUTH_DOMAIN", "your-project-id.firebaseapp.com")
FIREBASE_PROJECT_ID = os.getenv("FIREBASE_PROJECT_ID", "your-project-id")
FIREBASE_STORAGE_BUCKET = os.getenv("FIREBASE_STORAGE_BUCKET", "your-project-id.appspot.com")
FIREBASE_MESSAGING_SENDER_ID = os.getenv("FIREBASE_MESSAGING_SENDER_ID", "your_messaging_sender_id")
FIREBASE_APP_ID = os.getenv("FIREBASE_APP_ID", "your_app_id")
FIREBASE_MEASUREMENT_ID = os.getenv("FIREBASE_MEASUREMENT_ID", "your_measurement_id")

# Create a dictionary (like a little list with names) for all the Firebase settings.
# This makes it easy for other parts of our code to get all the Firebase info at once.
FIREBASE_CONFIG = {
    "apiKey": FIREBASE_API_KEY,
    "authDomain": FIREBASE_AUTH_DOMAIN,
    "projectId": FIREBASE_PROJECT_ID,
    "storageBucket": FIREBASE_STORAGE_BUCKET,
    "messagingSenderId": FIREBASE_MESSAGING_SENDER_ID,
    "appId": FIREBASE_APP_ID,
    "measurementId": FIREBASE_MEASUREMENT_ID
}

# General Game Settings
# These are like the basic rules of our football game, Ta'K.
GAME_DIFFICULTY = "Normal"
TOUCHDOWN_POINTS = 6
FIELD_GOAL_POINTS = 3
SAFETY_POINTS = 2
EXTRA_POINT_POINTS = 1
TWO_POINT_CONVERSION_POINTS = 2

# Player Skill Ranges
MIN_PLAYER_SKILL = 1
MAX_PLAYER_SKILL = 100
MIN_OVERALL_RATING = 40
MAX_OVERALL_RATING = 99

# Monetization Settings
STARTER_PACK_PRICE_USD = 4.99
PREMIUM_PACK_PRICE_USD = 19.99
EXCLUSIVE_PLAYER_PACK_PRICE_USD = 99.99
DAILY_LOGIN_BONUS_TOKENS = 50
CHALLENGE_REWARD_TOKENS = 200

# API Settings
API_VERSION = "v1"
API_PREFIX = "/api"

# Add other important settings here as your app grows, Ta'K!
# Like game difficulty, or how many points a touchdown is worth.
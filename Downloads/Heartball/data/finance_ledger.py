# File: data/finance_ledger.py

# This file contains the logic for managing the financial transactions of teams.
# It acts as a double-entry ledger for all income and expenses.

class FinanceLedger:
    """
    Manages team finances and transactions.
    """
    def __init__(self):
        self.transactions = []

    def record_transaction(self, team_id: str, amount: float, description: str):
        """
        Records a new financial transaction.
        """
        self.transactions.append({"team_id": team_id, "amount": amount, "description": description})


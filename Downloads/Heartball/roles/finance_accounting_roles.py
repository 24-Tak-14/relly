# File: roles/finance_accounting_roles.py

# This file defines the roles and behaviors of personnel related to finance and accounting.

class ChiefFinancialOfficer:
    """
    Manages the team's budget, financial planning, and accounting.
    """
    def __init__(self, team_name: str):
        """
        Initializes the CFO for a specific team.
        
        Args:
            team_name (str): The name of the team this CFO represents.
        """
        self.team_name = team_name

    def manage_budget(self, new_budget: float) -> str:
        """
        Sets and manages the team's budget.
        
        Args:
            new_budget (float): The new budget amount.
            
        Returns:
            str: A status message.
        """
        return f"The {self.team_name} has set its new budget at ${new_budget:,}."

class Accountant:
    """
    Records and tracks all financial transactions for the team.
    """
    def __init__(self, team_name: str):
        """
        Initializes the accountant for a specific team.
        
        Args:
            team_name (str): The name of the team this accountant represents.
        """
        self.team_name = team_name

    def record_transaction(self, amount: float, description: str) -> str:
        """
        Records a financial transaction.
        
        Args:
            amount (float): The amount of the transaction.
            description (str): A description of the transaction.
            
        Returns:
            str: A confirmation message.
        """
        return f"A transaction of ${amount} for {description} has been recorded for the {self.team_name}."

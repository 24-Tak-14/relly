```
## Key HFL Front Office Positions and Responsibilities

This document outlines high-level role descriptions for critical positions within an NFL front office, capturing their primary responsibilities and strategic impact.

| **Role**                                    | **Responsibilities**                                                                                                                                                              |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **General Manager (GM)**                    | • Oversees all player personnel decisions: draft picks, free agent acquisitions, and contract negotiations. <br>• Sets long-term roster strategy and talent pipeline development. |
| **Director of Player Personnel**            | • Manages current NFL player contracts, extensions, and free agency. <br>• Scouts opposing rosters for potential acquisitions and trade targets.                                  |
| **Director of College Scouting**            | • Leads college scouting department and draft board creation. <br>• Evaluates collegiate talent, coordinates scouting events, and finalizes draft rankings.                       |
| **Executive VP of Football Operations**     | • Supervises all aspects of football operations: player development, coaching oversight, and scouting departments. <br>• Implements league-wide policy alignment.                 |
| **Chief Football Administrative Officer**   | • Manages administrative functions across the football operations department. <br>• Coordinates cross-functional support (legal, HR, finance) for football initiatives.           |
| **Senior VP of Football Business Strategy** | • Develops and executes business strategies for revenue growth and brand expansion. <br>• Oversees sponsorship, partnerships, and business analytics initiatives.                 |
| **VP of Football Operations & Compliance**  | • Ensures team adherence to NFL rules and policies. <br>• Coordinates league audits, internal compliance training, and policy updates.                                            |
| **VP of Player Engagement**                 | • Enhances player relations through programs focusing on wellness, community outreach, and professional development. <br>• Acts as liaison between players and front office.      |
| **VP of Football Development**              | • Drives programs aimed at improving coaching, training, and player performance metrics. <br>• Integrates advanced analytics into development workflows.                          |
| **VP of Game Operations**                   | • Oversees logistics and execution of game-day operations, including staffing, facilities, and event coordination.                                                                |
| **VP of Policy & Rules Administration**     | • Manages interpretation and enforcement of league policies, rule changes, and discipline processes.                                                                              |
| **Chief Marketing Officer (CMO)**           | • Leads team branding, marketing campaigns, and promotional activities. <br>• Develops merchandising strategies and digital engagement initiatives.                               |
| **Sales Manager**                           | • Drives ticket sales, corporate partnerships, and sponsorship revenue. <br>• Manages sales teams and implements revenue optimization tactics.                                    |
```
```
## HFL Medical Roles & Media Access Policies

### Medical Roles & Responsibilities

| **Role**                          | **Responsibilities**                                                                                                                         |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Team Physician**                | • Manage player care: routine, preventative, urgent medical issues.<br>• Specialize in sports medicine; coordinate with other medical staff. |
| **Athletic Trainer**              | • Provide on-field and in-clinic injury care and rehab.<br>• Implement injury prevention protocols.                                          |
| **Physical Therapist**            | • Develop and supervise rehabilitation plans post-injury.<br>• Tailor recovery exercises to individual needs.                                |
| **Physician Assistant (PA)**      | • Assist physicians with exams, treatments, and follow-ups.<br>• Conduct minor procedures under physician oversight.                         |
| **Sports Scientist**              | • Research performance optimization and injury prevention.<br>• Analyze training data to refine workout regimens.                            |
| **Data Scientist**                | • Analyze injury and performance datasets.<br>• Identify patterns for prevention and recovery strategies.                                    |
| **Biomedical Engineer**           | • Develop tech for injury prevention (e.g., wearable sensors).<br>• Innovate equipment to enhance player safety.                             |
| **Behavioral Health Clinician**   | • Provide mental health support and counseling.<br>• Address performance anxiety and mental resilience.                                      |
| **Nutritionist**                  | • Create nutrition plans for performance & recovery.<br>• Adjust dietary strategies per positional demands.                                  |
| **Strength & Conditioning Coach** | • Design strength and conditioning programs.<br>• Focus on power, endurance, and injury resilience.                                          |
```
```
### Media Access Policies

1. **Player Availability**: <br>   • Must attend postgame interviews and weekly press sessions per contract.<br>   • Boycotts are disallowed.
2. **Coach & GM Availability**: <br>   • Head Coaches & GMs attend all scheduled press conferences.<br>   • Assistant coaches have bi-weekly media duties in-season & offseason.
3. **Press Box & Sideline Access**: <br>   • Accredited media get press box and sideline credentials.<br>   • Game footage use requires separate licensing.<br>   • Live play-by-play streaming during game prohibited.
4. **Video & Streaming**: <br>   • Sideline video requires agreement.<br>   • No live streaming of game content.<br>   • Restricted camera placement and content distribution.
5. **Communications Departments**: <br>   • NFL Communications handles league-wide inquiries.<br>   • Team PR departments manage team-specific media requests.
6. **Media Responsibilities**: <br>   • Accurate, unbiased reporting.<br>   • Promote league via stories and highlights.<br>   • Keep public informed of NFL activities.
```
```
### Stadium & League Structure

* **Leagues**: 2 PHAs (Tiama'at, Apzu), each with 3 Depots (Northwest, Northcentral, Northeast; Southwest, Southcentral, Southeast).
* **Divisions**: Each Depot comprises 6 teams (36 total).<br>  (Team & city names TBD.)
* **Stadium Data**: Use historical stadium chronology as blueprint:<br>  - Each team entry includes stadium name, opening year, capacity, and location.<br>  - Data stored in `data/stadiums/{team_name}.json`.

1. **Ecosystem Architecture**

   * Overview of modular components
   * Folder and file structure

2. **Core Gameplay**

   * Responsive on-field action loop
   * Player, ball, field, team, and game orchestrator

3. **Organizational & Business Simulation**

   * **Personnel & Contracts** (`personnel_manager.py`, `contract_system.py`)
   * **Finance & Ledger** (`finance_ledger.py`)
   * **Media Relations** (`media_relations.py`)

     * Media Relations Manager
     * Press Conference Coordinator
     * Social Media Manager
     * Sideline Reporter
     * Game Analyst
     * Press Tour Coordinator
     * Media Day Organizer
   * **Fan Engagement** (`fan_engagement.py`)

     * Fan Engagement Manager
     * Social Media Coordinator
   * **Game Operations** (`game_operations.py`)

     * Game Operations Director
     * Stadium Experience Manager
   * **Digital & Technology** (`digital_technology.py`)

     * Digital Content Producer
     * Technology Director
   * **Legal & Compliance** (`legal_compliance.py`)

     * Legal Counsel
     * Compliance Officer
   * **Finance & Accounting** (`finance_and_accounting.py`)

     * Chief Financial Officer
     * Accounting Manager
   * **Human Resources** (`human_resources.py`)

     * HR Manager
     * Talent Acquisition Specialist
   * **Facilities & Operations** (`facilities_operations.py`)

     * Facilities Manager
     * Operations Coordinator

4. **Monetization & Progression (Daily Fantasy)**

   * **Modules**: `systems/daily_fantasy.py`, `systems/monetization_system.py`, `systems/unlockable_content.py`
   * **Mechanics**: Points accrual, boost purchases, unlock speed vs. grind balance

5. **Data Management**

   * **Directory**: `data/`
   * **Artifacts**:

     * `league_structure.json`
     * `stadiums/*.json`
     * `playbooks/*.json`
     * `player_templates.json`
     * `unlockables/*.json`
```

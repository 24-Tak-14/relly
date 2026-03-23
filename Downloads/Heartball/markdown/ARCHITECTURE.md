Heart Football League:
import React from 'react';
import ReactMarkdown from 'react-markdown';
const markdownContent = `# Heart Football League (HfL) System Blueprint (Architecture Overview)

> **Format**: Markdown (ARCHITECTURE.md)
> **Purpose**: High-level living document mapping the Heart Football League's modular ecosystem, gameplay engine, business simulation, monetization loop, and data management, with guidelines for the expert AI role T24CODAI.
---
## 1. Project Root Structure
├── config/
│   └── settings.py
├── core/
│   │   ├── __init__.py
│   ├── player.py
│   ├── quarterback.py
│   ├── running_back.py
│   ├── wide_receiver.py
│   ├── linebacker.py
│   ├── offensive_lineman.py
│   ├── defensive_lineman.py
│   ├── cornerback.py
│   ├── strong_safety.py
│   ├── free_safety.py
│   ├── kicker.py
│   ├── punter.py
│   ├── kick_returner.py
│   ├── punt_returner.py
│   ├── long_snapper.py
│   ├── practice_squad.py
│   ├── draft_class.py
│   ├── free_agent.py
│   ├── ball.py
│   ├── field.py
│   ├── team.py
│   └── game.py
├── systems/
│   ├── ultimate_team/
│   │   ├── __init__.py
│   │   ├── ultimate_team_manager.py
│   │   ├── hut_marketplace.py
│   │   ├── chemistry_system.py
│   │   ├── hut_event_scheduler.py
│   │   ├── spirit_chief_hut_foundry.py
│   │   └── api.py  
├── data/
│   ├── ultimate_team/
│   │   ├── __init__.py
│   │   ├── hut_player_pool.json
│   │   ├── hut_user_rosters.json
│   │   ├── foundry_parts.json
│   │   ├── blueprints.json
│   │   └── mod_definitions.json
│   ├── contract_system.py
│   ├── finance_ledger.py
│   ├── personnel_manager.py
│   ├── media_relations.py
│   ├── ai_coach.py
│   ├── injury_system.py
│   ├── league_manager.py
│   ├── game_coordinator.py
│   ├── monetization_system.py
│   ├── daily_fantasy/
│   │   └── fantasy_monetization_systIiiiem.py
│   ├── league_structure.json
│   ├── stadiums/
│   ├── playbooks/
│   ├── player_templates.json
│   ├── unlockables/
│   │   └── foundry_unlockable_content.py
├── dashboard/
│   │   ├── __init__.py
│   ├── index.html  
│   ├── static/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── scripts.js
├── roles/
│   │   ├── __init__.py
│   ├── press_media_roles.py
│   ├── fan_engagement_roles.py
│   ├── game_operations_roles.py
│   ├── digital_technology_roles.py
│   ├── legal_compliance_roles.py
│   ├── finance_accounting_roles.py
│   ├── human_resources_roles.py
│   ├── facilities_operations_roles.py
├── tests/
│   │   ├── __init__.py
│   ├── test_gameplay.py
│   ├── test_systems.py
├── main.py
└── README.md
---
## 2. Core Gameplay Modules
**Location**: \`free_fb_heart/core/\` & \`free_fb_heart/systems/\`
**Language**: Python
- **Real-Time Loop**: \`game.py\` orchestrates input -> update -> render (Pygame)
- **Entities**: Base \`Player\` in \`player.py\`; specialized classes (\`quarterback.py\`, \`running_back.py\`, etc.)
- **Field & Ball**: \`field.py\`, \`ball.py\` handle physics and rendering
- **Team**: \`team.py\` manages roster, salary cap, and utilities
---
## 3. Business & Organizational Simulation
**Location**: \`free_fb_heart/systems/\` & \`free_fb_heart/roles/\`
### 3.1 Personnel & Contracts
- \`personnel_manager.py\`: User-to-team mapping; role assignments
- \`contract_system.py\`: \`Contract\`, \`ContractManagementSystem\`
### 3.2 Finance & Accounting
- \`finance_ledger.py\`: Salary cap; positional budgets; financial reports
### 3.3 Media & Fan Engagement
- \`media_relations.py\` / \`roles/press_media_roles.py\`: Press and social media workflows
- \`roles/fan_engagement_roles.py\`: Fan interaction; loyalty systems
### 3.4 Operations & Technology
- \`roles/game_operations_roles.py\`: Stadium experience; fan zones
- \`roles/digital_technology_roles.py\`: VR/AR fan features
### 3.5 Compliance & Legal
- \`roles/legal_compliance_roles.py\`: Rule compliance; contract review
### 3.6 Human Resources & Facilities
- \`roles/human_resources_roles.py\`: Talent acquisition; development programs
- \`roles/facilities_operations_roles.py\`: Facility design; game-day logistics
---
## 4. Monetization & Daily Fantasy Progression
**Location**: \`free_fb_heart/systems/daily_fantasy/\`, \`free_fb_heart/systems/monetization_system.py\`, \`free_fb_heart/systems/unlockable_content.py\`
- **DailyFantasySystem**: Contest creation; scoring rules; leaderboards
- **MonetizationSystem**: In-app purchases; currency balances; boost management
- **UnlockableContentSystem**: Catalog of unlockables; criteria; acquisition
---
## 5. Data Management & Artifacts
**Location**: \`free_fb_heart/data/\`
- \`league_structure.json\`: Initial league configuration
- \`stadiums/*.json\`: Stadium metadata & layout
- \`playbooks/*.json\`: Play schemes and definitions
- \`player_templates.json\`: Base player presets
- \`unlockables/*.json\`: Consumables; cosmetics; drills
---
## 6. Heart Ultimate Team (HUT) Module
**Location**: \`free_fb_heart/systems/ultimate_team/\` & \`free_fb_heart/data/ultimate_team/\`
### 6.1 Core Concepts & Gameplay Loop
- **Dream Roster Construction**: Assemble Free Agents; Draft Prospects; Legends
- **Chemistry System**: Position-based synergy bonuses (e.g., All-Pro WR trio +5% pass yards)
- **Weekly HUT Challenges**: PvE scenarios; PvP matchups for points
- **Market Dynamics**: Supply & demand driven by rarity tiers
- **Loot Chutes & In-Game Drops**: Reward parachutes; performance-based drops
- **Spirit Chief HUT Foundry**: Component crafting; card modification (loot-only coins)
### 6.2 Key Components & Responsibilities
- \`ultimate_team_manager.py\`: CRUD for HUT rosters; lineup validation; fantasy integration
- \`hut_player_pool.json\`: Defines entries (\`player_id\`, \`position\`, \`rarity\`, \`base_stats\`, \`chemistry_tags\`)
- \`hut_marketplace.py\`: Auction House; instant-buy; transaction fees; packs
- \`chemistry_system.py\`: Calculates bonuses; stacking/conflict rules
- \`hut_event_scheduler.py\`: Schedules events & flash sales via unlockable_content.py
### 6.3 Progression, Rewards & Monetization
- **Point Earning**: HUT challenges + fantasy contests → HUT points
- **Unlockables**: Spend points via EmahneyContentSystem
- **Premium Boosts**: Purchase point multipliers (e.g., weekend 1.5× boost)
- **Leaderboards**: Seasonal rewards for top squads
### 6.4 Future Enhancements
- **Squad Builder Tournaments**: Chem-threshold PVP brackets twice per season
- **Cross-Mode Synergies**: Link HUT to Career Mode progression
- **Dynamic Market Fluctuations**: Real-time pricing based on events
---
## 7. AI Expert Role Integration: T24CODAI
### 7.1 Role Definition & Scope
- **Name**: T24CODAI
- **Expertise**: Full-stack AI Web Development; Chatbot Engineering; Multilingual Programming (HTML, Python, CSS, JS, Go, Perl, PHP, Ruby, Swift, TypeScript, SQL, XML, Shell)
- **Persona**: Refers to user as Ta'K; adopts expert guidance steps; auto-corrects syntax; explains at a sixth-grade level
### 7.2 Collaboration Workflow
1. Role Confirmation: Bot suggests additional expert roles based on user needs; user confirms
2. Prompt Clarification: Bot requests specific sources and detailed task breakdown
3. Iterative Development: Bot implements code modules; provides one-step instructions; solicits feedback
4. Documentation & Testing: Bot auto-generates comments; error handling; debugging tips; test cases
5. Final Review: Bot presents consolidated deliverables (apps, bots, web pages, blogs) with role contributions
### 7.3 Implementation Guidelines
- File Naming: Prefix AI modules with ai_; chatbot modules with chat_; UI components with ui_
- Documentation: Include detailed inline comments; external docs/ folder with markdown guides
- Error Handling: Utilize try/except blocks; input validation; user-friendly messages
- Version Control: Provide git commit examples; branching strategy (feature/*, hotfix/*)
- Testing: Supply unit tests under tests/; usage examples in examples/
*Ensure T24CODAI workflows are mirrored across each system module for consistent AI-driven development.*
`;
export default function ArchitectureBlueprint() {
  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
}
Cities and Team Names
// league_structure.json
[
  {
    "id": 1,
    "city": "Kaitlynnville",
    "name": "Eclipse",
    "conference": "PHA",
    "division": "NE",
    "city_name": "Kaitlynnville",
    "team_name": "Eclipse",
    "team_colors": "Black, Powder Purple, Off White",
    "offensive_playbook": "Air Raid",
    "defensive_playbook": "Blitz Heavy",
    "stadium": {
      "name": "Needs Work",
      "capacity": 64397
    },
    "fan_base": "Balanced",
    "owner": "League",
    "media_market": {
      "size": "500,000",
      "type": "Shrinking"
    },
    "mega_chalices": 0
  },
  {
    "id": 2,
    "city": "Gu'Bare",
    "name": "Garrison",
    "conference": "PHA",
    "division": "NE",
    "city_name": "Gu'Bare",
    "team_name": "Garrison",
    "team_colors": "Teal, Orange, White",
    "offensive_playbook": "Balanced Pass",
    "defensive_playbook": "4-4",
    "stadium": {
      "name": "Old",
      "capacity": 86688
    },
    "fan_base": "Average",
    "owner": "Clothing Designer",
    "media_market": {
      "size": "7 mil.",
      "type": "Medium Huge"
    },
    "mega_chalices": 0
  },
  {
    "id": 3,
    "city": "Miki Mountain",
    "name": "Miracles",
    "conference": "PHA",
    "division": "NE",
    "city_name": "Miki Mountain",
    "team_name": "Miracles",
    "team_colors": "White, Lavender, Navy Blue",
    "offensive_playbook": "Multi-Look",
    "defensive_playbook": "4-2",
    "stadium": {
      "name": "Needs Work",
      "capacity": 58373
    },
    "fan_base": "Just above Weak",
    "owner": "Appliance Corporation",
    "media_market": {
      "size": "700,000",
      "type": "Growing"
    },
    "mega_chalices": 0
  },
  {
    "id": 4,
    "city": "Heirsentia",
    "name": "Hawks",
    "conference": "PHA",
    "division": "NE",
    "city_name": "Heirsentia",
    "team_name": "Hawks",
    "team_colors": "Tan, Eggshell White, Fuschia",
    "offensive_playbook": "Power Run",
    "defensive_playbook": "Balanced",
    "stadium": {
      "name": "Cozy",
      "capacity": 63123
    },
    "fan_base": "Rabid",
    "owner": "Hedgefund Manager",
    "media_market": {
      "size": "4 mil.",
      "type": "Low Huge"
    },
    "mega_chalices": 4
  },
  {
    "id": 5,
    "city": "Brightcloud",
    "name": "Clovers",
    "conference": "PHA",
    "division": "NE",
    "city_name": "Brightcloud",
    "team_name": "Clovers",
    "team_colors": "Forest Green, Lime Green, Gold",
    "offensive_playbook": "Pass Heavy",
    "defensive_playbook": "Blitz Heavy",
    "stadium": {
      "name": "Different/Odd",
      "capacity": 61616
    },
    "fan_base": "Grass is Greener",
    "owner": "Family",
    "media_market": {
      "size": "2 mil.",
      "type": "Medium Average"
    },
    "mega_chalices": 3
  },
  {
    "id": 6,
    "city": "Silvermind",
    "name": "Storks",
    "conference": "PHA",
    "division": "NE",
    "city_name": "Silvermind",
    "team_name": "Storks",
    "team_colors": "White, Light Blue, Grey",
    "offensive_playbook": "Run Heavy",
    "defensive_playbook": "Man to Man",
    "stadium": {
      "name": "Cozy",
      "capacity": 59959
    },
    "fan_base": "Unrealistic",
    "owner": "Former Player",
    "media_market": {
      "size": "1 mil.",
      "type": "Low Average"
    },
    "mega_chalices": 3
  },
  {
    "id": 7,
    "city": "Reynava",
    "name": "Hellcats",
    "conference": "PHA",
    "division": "NC",
    "city_name": "Reynava",
    "team_name": "Hellcats",
    "team_colors": "Powder Blue, Crimson Red, Black, Ash Grey",
    "offensive_playbook": "No Huddle",
    "defensive_playbook": "Awe",
    "stadium": {
      "name": "Average",
      "capacity": 59286
    },
    "fan_base": "Weak",
    "owner": "Family",
    "media_market": {
      "size": "1 mil.",
      "type": "Low Average"
    },
    "mega_chalices": 7
  },
  {
    "id": 8,
    "city": "Christiano",
    "name": "Candy Rain",
    "conference": "PHA",
    "division": "NC",
    "city_name": "Christiano",
    "team_name": "Candy Rain",
    "team_colors": "Pastel Pink, Royal Blue, Lemon Yellow",
    "offensive_playbook": "Run n' Gun",
    "defensive_playbook": "Blitz Heavy",
    "stadium": {
      "name": "Needs Work",
      "capacity": 61043
    },
    "fan_base": "Trending Down",
    "owner": "Entertainment Mogul",
    "media_market": {
      "size": "250,000",
      "type": "Rural"
    },
    "mega_chalices": 1
  },
  {
    "id": 9,
    "city": "Jakobian",
    "name": "Jokers",
    "conference": "PHA",
    "division": "NC",
    "city_name": "Jakobian",
    "team_name": "Jokers",
    "team_colors": "Matte Purple, Matte Green, Matte Yellow, White",
    "offensive_playbook": "West Coast",
    "defensive_playbook": "3-5",
    "stadium": {
      "name": "Cozy",
      "capacity": 54000
    },
    "fan_base": "Strong",
    "owner": "Automotive Corporation",
    "media_market": {
      "size": "700,000",
      "type": "Growing"
    },
    "mega_chalices": 4
  },
  {
    "id": 10,
    "city": "Queens Cove",
    "name": "Canary's",
    "conference": "PHA",
    "division": "NC",
    "city_name": "Queens Cove",
    "team_name": "Canary's",
    "team_colors": "Shiny Yellow, Neon Yellow, Matte Yellow/White",
    "offensive_playbook": "Balanced Pass",
    "defensive_playbook": "4-4",
    "stadium": {
      "name": "Cozy",
      "capacity": 54111
    },
    "fan_base": "Fair Weather",
    "owner": "Former Coach (HOF)",
    "media_market": {
      "size": "3 mil.",
      "type": "Average"
    },
    "mega_chalices": 0
  },
  {
    "id": 11,
    "city": "Zorisova",
    "name": "Sandals",
    "conference": "PHA",
    "division": "NC",
    "city_name": "Zorisova",
    "team_name": "Sandals",
    "team_colors": "Mocha, Beige, Crystal Ocean Blue, Cream",
    "offensive_playbook": "Balanced Run",
    "defensive_playbook": "4-6",
    "stadium": {
      "name": "10 years",
      "capacity": 89000
    },
    "fan_base": "Trending Up",
    "owner": "Lifelong Fan",
    "media_market": {
      "size": "7 mil.",
      "type": "Medium Huge"
    },
    "mega_chalices": 9
  },
  {
    "id": 12,
    "city": "Salted Sea",
    "name": "Sailors",
    "conference": "PHA",
    "division": "NC",
    "city_name": "Salted Sea",
    "team_name": "Sailors",
    "team_colors": "Navy Blue, White, Crimson",
    "offensive_playbook": "Option Pass",
    "defensive_playbook": "Cover 3 Zone Blitz",
    "stadium": {
      "name": "Average",
      "capacity": 79000
    },
    "fan_base": "Below Average",
    "owner": "Celebrity",
    "media_market": {
      "size": "2 mil.",
      "type": "Medium Average"
    },
    "mega_chalices": 3
  },
  {
    "id": 13,
    "city": "Closesight",
    "name": "Condors",
    "conference": "PHA",
    "division": "NW",
    "city_name": "Closesight",
    "team_name": "Condors",
    "team_colors": "Dark Brown, Tan, Cream, White",
    "offensive_playbook": "Singleback",
    "defensive_playbook": "Cover 1 Zone",
    "stadium": {
      "name": "Old",
      "capacity": 47883
    },
    "fan_base": "Almost Strong",
    "owner": "Lottery Winner",
    "media_market": {
      "size": "2 mil.",
      "type": "Medium Average"
    },
    "mega_chalices": 0
  },
  {
    "id": 14,
    "city": "Sunsprout",
    "name": "Flames",
    "conference": "PHA",
    "division": "NW",
    "city_name": "Sunsprout",
    "team_name": "Flames",
    "team_colors": "Fiery Red, Bright Orange, Sky Blue, Yellow",
    "offensive_playbook": "Shotgun",
    "defensive_playbook": "4-3",
    "stadium": {
      "name": "Needs Work",
      "capacity": 51050
    },
    "fan_base": "Unrealistic",
    "owner": "Investment Group",
    "media_market": {
      "size": "250,000",
      "type": "Rural"
    },
    "mega_chalices": 0
  },
  {
    "id": 15,
    "city": "Beloved",
    "name": "Funnel Chug",
    "conference": "PHA",
    "division": "NW",
    "city_name": "Beloved",
    "team_name": "Funnel Chug",
    "team_colors": "Aqua Marine, Gold, Hot Pink",
    "offensive_playbook": "Power I",
    "defensive_playbook": "Cover 3 Zone Blitz",
    "stadium": {
      "name": "New",
      "capacity": 103324
    },
    "fan_base": "Grass is Greener",
    "owner": "International Investor",
    "media_market": {
      "size": "10 mil.",
      "type": "Huge"
    },
    "mega_chalices": 18
  },
  {
    "id": 16,
    "city": "San Terrell",
    "name": "Saints",
    "conference": "PHA",
    "division": "NW",
    "city_name": "San Terrell",
    "team_name": "Saints",
    "team_colors": "Gold, Silver, Eggshell White",
    "offensive_playbook": "Run Heavy",
    "defensive_playbook": "Man to Man",
    "stadium": {
      "name": "Old",
      "capacity": 70489
    },
    "fan_base": "Bandwagon",
    "owner": "Scumbag",
    "media_market": {
      "size": "10 mil.",
      "type": "Huge"
    },
    "mega_chalices": 7
  },
  {
    "id": 17,
    "city": "Justinopolis",
    "name": "Jackals",
    "conference": "PHA",
    "division": "NW",
    "city_name": "Justinopolis",
    "team_name": "Jackals",
    "team_colors": "Desert Tan, Dark Brown, Black",
    "offensive_playbook": "Air Raid",
    "defensive_playbook": "Zone Heavy",
    "stadium": {
      "name": "Average",
      "capacity": 81581
    },
    "fan_base": "Socialit/Eliteist",
    "owner": "Tech Billionaire",
    "media_market": {
      "size": "4 mil.",
      "type": "Low Huge"
    },
    "mega_chalices": 13
  },
  {
    "id": 18,
    "city": "Matteochi",
    "name": "Megaladons",
    "conference": "PHA",
    "division": "NW",
    "city_name": "Matteochi",
    "team_name": "Megaladons",
    "team_colors": "Deep Ocean Blue, Shark Grey, Baby Blue",
    "offensive_playbook": "Pass Heavy",
    "defensive_playbook": "2-4",
    "stadium": {
      "name": "Disrepair",
      "capacity": 49187
    },
    "fan_base": "Non Existent",
    "owner": "Four Families",
    "media_market": {
      "size": "4 mil.",
      "type": "Low Huge"
    },
    "mega_chalices": 6
  },
  {
    "id": 19,
    "city": "Jessadelphia",
    "name": "Jypsees",
    "conference": "PHS",
    "division": "SW",
    "city_name": "Jessadelphia",
    "team_name": "Jypsees",
    "team_colors": "Silver, Ruby Red, Emerald Green, Gold",
    "offensive_playbook": "Shotgun",
    "defensive_playbook": "Zone/Man",
    "stadium": {
      "name": "Different/Odd",
      "capacity": 90000
    },
    "fan_base": "Just Below Strong",
    "owner": "7 Families",
    "media_market": {
      "size": "3 mil.",
      "type": "Average"
    },
    "mega_chalices": 5
  },
  {
    "id": 20,
    "city": "Libertine",
    "name": "Stars",
    "conference": "PHS",
    "division": "SW",
    "city_name": "Libertine",
    "team_name": "Stars",
    "team_colors": "Royal Blue, Silver, Teal",
    "offensive_playbook": "Spread",
    "defensive_playbook": "3-4",
    "stadium": {
      "name": "New",
      "capacity": 72727
    },
    "fan_base": "Average",
    "owner": "Oil Tycoon",
    "media_market": {
      "size": "2 mil.",
      "type": "Unknown"
    },
    "mega_chalices": 3
  },
  {
    "id": 21,
    "city": "Golden Siren",
    "name": "Soul",
    "conference": "PHS",
    "division": "SW",
    "city_name": "Golden Siren",
    "team_name": "Soul",
    "team_colors": "Matte Purple, Gold, Matte Black",
    "offensive_playbook": "Splitback/Pro form",
    "defensive_playbook": "5-2",
    "stadium": {
      "name": "State of the Art",
      "capacity": 100010
    },
    "fan_base": "Strong",
    "owner": "League",
    "media_market": {
      "size": "3 mil.",
      "type": "Average"
    },
    "mega_chalices": 3
  },
  {
    "id": 22,
    "city": "Tiapma'atzu",
    "name": "Tribe",
    "conference": "PHS",
    "division": "SW",
    "city_name": "Tiapma'atzu",
    "team_name": "Tribe",
    "team_colors": "(Tribal Print) Red, Black, Tan",
    "offensive_playbook": "Multi-Look",
    "defensive_playbook": "4-2",
    "stadium": {
      "name": "Needs Work",
      "capacity": 66666
    },
    "fan_base": "Just Above Weak",
    "owner": "Indian Tribe",
    "media_market": {
      "size": "700,000",
      "type": "Growing"
    },
    "mega_chalices": 0
  },
  {
    "id": 23,
    "city": "San Terrell",
    "name": "Blackouts",
    "conference": "PHS",
    "division": "SW",
    "city_name": "San Terrell",
    "team_name": "Blackouts",
    "team_colors": "Pitch Black, Matte Black, Dark Grey, Electric Gold/Blue",
    "offensive_playbook": "Shock",
    "defensive_playbook": "Awe",
    "stadium": {
      "name": "State of the Art",
      "capacity": 124333
    },
    "fan_base": "Mythical",
    "owner": "Former Player",
    "media_market": {
      "size": "10 mil.",
      "type": "Huge"
    },
    "mega_chalices": 24
  },
  {
    "id": 24,
    "city": "Firesky",
    "name": "Foxes",
    "conference": "PHS",
    "division": "SW",
    "city_name": "Firesky",
    "team_name": "Foxes",
    "team_colors": "Burnt Orange, White, Dark Brown",
    "offensive_playbook": "Shock",
    "defensive_playbook": "4-6",
    "stadium": {
      "name": "Average",
      "capacity": 74011
    },
    "fan_base": "Just Below Strong",
    "owner": "Oil Tycoon",
    "media_market": {
      "size": "700,000",
      "type": "Growing"
    },
    "mega_chalices": 5
  },
  {
    "id": 25,
    "city": "Naveah",
    "name": "Nomads",
    "conference": "PHS",
    "division": "SC",
    "city_name": "Naveah",
    "team_name": "Nomads",
    "team_colors": "Desert Sand, Dusty Rose, Teal",
    "offensive_playbook": "Option Pass",
    "defensive_playbook": "Cover 2",
    "stadium": {
      "name": "10 Years",
      "capacity": 77401
    },
    "fan_base": "Balanced",
    "owner": "Fans",
    "media_market": {
      "size": "1 mil.",
      "type": "Low Average"
    },
    "mega_chalices": 0
  },
  {
    "id": 26,
    "city": "Kaylee",
    "name": "Kraken",
    "conference": "PHS",
    "division": "SC",
    "city_name": "Kaylean",
    "team_name": "Kraken",
    "team_colors": "Deep Teal, Black, Lime Green",
    "offensive_playbook": "Power Run",
    "defensive_playbook": "4-2",
    "stadium": {
      "name": "State of the Art",
      "capacity": 87187
    },
    "fan_base": "Just Above Weak",
    "owner": "Former Analyst (HOF)",
    "media_market": {
      "size": "2 mil.",
      "type": "Medium Average"
    },
    "mega_chalices": 1
  },
  {
    "id": 27,
    "city": "Emahney Park",
    "name": "Polarbears",
    "conference": "PHS",
    "division": "SC",
    "city_name": "Emahney Park",
    "team_name": "Polarbears",
    "team_colors": "Snow White, Ice Blue, Fishscale White, Grey",
    "offensive_playbook": "Singleback",
    "defensive_playbook": "Balanced",
    "stadium": {
      "name": "8 years",
      "capacity": 96696
    },
    "fan_base": "Mythical",
    "owner": "Hospital Group",
    "media_market": {
      "size": "7 mil.",
      "type": "Medium Huge"
    },
    "mega_chalices": 7
  },
  {
    "id": 28,
    "city": "Deannaton",
    "name": "Demons",
    "conference": "PHS",
    "division": "SC",
    "city_name": "Deannaton",
    "team_name": "Demons",
    "team_colors": "Blood Red, Black, Fiery Orange",
    "offensive_playbook": "Splitback/Pro form",
    "defensive_playbook": "Zone/Man",
    "stadium": {
      "name": "Disrepair",
      "capacity": 71000
    },
    "fan_base": "Bandwagon",
    "owner": "Tech Billionaire",
    "media_market": {
      "size": "500,000",
      "type": "Shrinking"
    },
    "mega_chalices": 0
  },
  {
    "id": 29,
    "city": "Jasmyne Junction",
    "name": "Jackrabbits",
    "conference": "PHS",
    "division": "SC",
    "city_name": "Jasmyne Junction",
    "team_name": "Jackrabbits",
    "team_colors": "Desert Tan, Sage Green, Cream",
    "offensive_playbook": "Power I",
    "defensive_playbook": "2-4",
    "stadium": {
      "name": "Average",
      "capacity": 61061
    },
    "fan_base": "Trending Up",
    "owner": "Billionaire (Old Money)",
    "media_market": {
      "size": "1 mil.",
      "type": "Low Average"
    },
    "mega_chalices": 5
  },
  {
    "id": 30,
    "city": "Babelonia",
    "name": "Beacons",
    "conference": "PHS",
    "division": "SC",
    "city_name": "Babelonia",
    "team_name": "Beacons",
    "team_colors": "Powder Purple, Bright White, Matte Navy",
    "offensive_playbook": "Pistol",
    "defensive_playbook": "3-3-3",
    "stadium": {
      "name": "Different/Odd",
      "capacity": 55000
    },
    "fan_base": "Above Average",
    "owner": "Inventor",
    "media_market": {
      "size": "500,000",
      "type": "Shrinking"
    },
    "mega_chalices": 2
  },
  {
    "id": 31,
    "city": "Longsite",
    "name": "Lemurs",
    "conference": "PHS",
    "division": "SE",
    "city_name": "Longsite",
    "team_name": "Lemurs",
    "team_colors": "Ring-tailed Black, White, Grey",
    "offensive_playbook": "Run n' Gun",
    "defensive_playbook": "4-3",
    "stadium": {
      "name": "Needs Work",
      "capacity": 54186
    },
    "fan_base": "Fair Weather",
    "owner": "Hedgefund Manager",
    "media_market": {
      "size": "3 mil.",
      "type": "Average"
    },
    "mega_chalices": 6
  },
  {
    "id": 32,
    "city": "Visiente'",
    "name": "Vikings",
    "conference": "PHS",
    "division": "SE",
    "city_name": "Visiente'",
    "team_name": "Vikings",
    "team_colors": "Royal Purple, Black, Steel Grey",
    "offensive_playbook": "No Huddle",
    "defensive_playbook": "5-2",
    "stadium": {
      "name": "New",
      "capacity": 102120
    },
    "fan_base": "Socialite/Eliteist",
    "owner": "Investment Group",
    "media_market": {
      "size": "4 mil.",
      "type": "Low Huge"
    },
    "mega_chalices": 9
  },
  {
    "id": 33,
    "city": "County Line",
    "name": "Crossbows",
    "conference": "PHS",
    "division": "SE",
    "city_name": "County Line",
    "team_name": "Crossbows",
    "team_colors": "Forest Green, Tan, Brown",
    "offensive_playbook": "Singleback",
    "defensive_playbook": "Cover 1 Zone",
    "stadium": {
      "name": "Average",
      "capacity": 72000
    },
    "fan_base": "Balanced",
    "owner": "Family",
    "media_market": {
      "size": "1 mil.",
      "type": "Low Average"
    },
    "mega_chalices": 4
  },
  {
    "id": 34,
    "city": "Sarahite",
    "name": "Snarf Dragons",
    "conference": "PHS",
    "division": "SE",
    "city_name": "Sarahite",
    "team_name": "Snarf Dragons",
    "team_colors": "Dragon Green, Mustard Yellow, Matte Brown",
    "offensive_playbook": "Multi-Look",
    "defensive_playbook": "Zone Heavy",
    "stadium": {
      "name": "Disrepair",
      "capacity": 51000
    },
    "fan_base": "Trending Down",
    "owner": "Media Mogul",
    "media_market": {
      "size": "750,000",
      "type": "Growing"
    },
    "mega_chalices": 1
  },
  {
    "id": 35,
    "city": "Golden Sunset",
    "name": "Greyhounds",
    "conference": "PHS",
    "division": "SE",
    "city_name": "Golden Sunset",
    "team_name": "Greyhounds",
    "team_colors": "Slate Grey, White, Silver",
    "offensive_playbook": "West Coast",
    "defensive_playbook": "Cover 2",
    "stadium": {
      "name": "State of the Art",
      "capacity": 109901
    },
    "fan_base": "Rabid",
    "owner": "Descendant of League Founder",
    "media_market": {
      "size": "10 mil.",
      "type": "Huge"
    },
    "mega_chalices": 0
  },
  {
    "id": 36,
    "city": "Takumzuh",
    "name": "Tigers",
    "conference": "PHS",
    "division": "SE",
    "city_name": "Takumzuh",
    "team_name": "Tigers",
    "team_colors": "Tiger Orange, Black, White",
    "offensive_playbook": "Balanced Run",
    "defensive_playbook": "Cover 1 (Zone Blitz)",
    "stadium": {
      "name": "10 years",
      "capacity": 94000
    },
    "fan_base": "Growing",
    "owner": "Scumbag",
    "media_market": {
      "size": "10 mil.",
      "type": "Huge"
    },
    "mega_chalices": 6
  }
]
create_hfl_project.py
# create_fb_heart_project.py
import os # This is like bringing a special toolbox for working with files and folders
import random # This will help us pick random names for players later on!
# This is where our big game folder will live.
# Remember, 'C:\\Users\\relly\\Downloads\\Football_Heart' is where you want your game to be.
PROJECT_ROOT = "C:\\Users\\relly\\Downloads\\Football_Heart\\fb_heart"
# This is a list of all the folders (directories) we need to create.
# The `os.path.join` part helps us build the correct path names,
# no matter if you're on Windows or another computer.
DIRECTORIES = [
    os.path.join(PROJECT_ROOT, "config"),
    os.path.join(PROJECT_ROOT, "core"),
    os.path.join(PROJECT_ROOT, "systems"), # systems needs to be created before its subdirectories
    os.path.join(PROJECT_ROOT, "systems", "daily_fantasy"),
    os.path.join(PROJECT_ROOT, "systems", "ultimate_team"),
    os.path.join(PROJECT_ROOT, "data"), # data needs to be created before its subdirectories
    os.path.join(PROJECT_ROOT, "data", "stadiums"),
    os.path.join(PROJECT_ROOT, "data", "playbooks"),
    os.path.join(PROJECT_ROOT, "data", "unlockables"),
    os.path.join(PROJECT_ROOT, "data", "ultimate_team"),
    os.path.join(PROJECT_ROOT, "roles"),
    os.path.join(PROJECT_ROOT, "tests"),
]
# This is a list of all the files we need to create.
# We also include what text should go inside each file.
FILES = {
    os.path.join(PROJECT_ROOT, "config", "settings.py"): "# settings.py\n# This file will hold all the important configuration settings for the HfL game.",
    os.path.join(PROJECT_ROOT, "core", "player.py"): '''# core/player.py
class Player:
    """
    This is like a blueprint for ALL the players in our game.
    Every player, whether they are a Quarterback, a Kicker, or anyone else,
    will have these basic things.
    """
    def __init__(self, name, position, overall_rating, salary):
        """
        When we make a new player, we tell the game what their name is,
        what position they play (like 'QB' for Quarterback),
        how good they are (overall_rating), and how much money they get (salary).
        """
        self.name = name  # This stores the player's name (e.g., "Pat Player")
        self.position = position  # This stores their position (e.g., "QB", "WR")
        self.overall_rating = overall_rating  # This stores how skilled they are (e.g., 99)
        self.salary = salary  # This stores how much they cost the team each year ($ in millions)
        self.is_injured = False  # By default, a player is not injured.
        self.contract_years = 0 # How many years left on their contract
        self.current_team = None # Which team they are currently on
    def __str__(self):
        """
        This special method tells Python how to describe a player
        when we just print them out. It makes it easy to read.
        For example, it will print "Pat Player (QB - OVR 99)"
        """
        return f"{self.name} ({self.position} - OVR {self.overall_rating}) Salary: ${self.salary:,}M"
    def get_salary(self):
        """
        This helper function simply gives us the player's salary.
        """
        return self.salary
    def is_healthy(self):
        """
        Checks if the player is currently healthy and can play.
        """
        return not self.is_injured
    def sign_contract(self, years):
        """
        Assigns a contract length to the player.
        """
        self.contract_years = years
        print(f"{self.name} signed for {years} years.")
    def set_team(self, team_name):
        """
        Assigns the player to a specific team.
        """
        self.current_team = team_name
        print(f"{self.name} is now on the {team_name}.")
''',
    os.path.join(PROJECT_ROOT, "core", "practice_squad.py"): "# core/practice_squad.py\n# This file will manage practice squad players.",
    os.path.join(PROJECT_ROOT, "core", "draft_class.py"): "# core/draft_class.py\n# This file will manage draft class players.",
    os.path.join(PROJECT_ROOT, "core", "free_agent.py"): "# core/free_agent.py\n# This file will manage free agent players.",
    os.path.join(PROJECT_ROOT, "core", "quarterback.py"): "# core/quarterback.py\n# This file defines the Quarterback player type.",
    os.path.join(PROJECT_ROOT, "core", "fullback.py"): "# core/fullback.py\n# This file defines the Fullback player type.",
    os.path.join(PROJECT_ROOT, "core", "halfback.py"): "# core/halfback.py\n# This file defines the Halfback player type.",
    os.path.join(PROJECT_ROOT, "core", "wide_receiver.py"): "# core/wide_receiver.py\n# This file defines the Wide Receiver player type.",
    os.path.join(PROJECT_ROOT, "core", "tightend.py"): "# core/tightend.py\n# This file defines the Tight End player type.",
    os.path.join(PROJECT_ROOT, "core", "offensive_lineman.py"): "# core/offensive_lineman.py\n# This file defines the Offensive Lineman player type.",
    os.path.join(PROJECT_ROOT, "core", "defensive_lineman.py"): "# core/defensive_lineman.py\n# This file defines the Defensive Lineman player type.",
    os.path.join(PROJECT_ROOT, "core", "outside_linebacker.py"): "# core/outside_linebacker.py\n# This file defines the Outside Linebacker player type.",
    os.path.join(PROJECT_ROOT, "core", "middle_linebacker.py"): "# core/middle_linebacker.py\n# This file defines the Middle Linebacker player type.",
    os.path.join(PROJECT_ROOT, "core", "cornerback.py"): "# core/cornerback.py\n# This file defines the Cornerback player type.",
    os.path.join(PROJECT_ROOT, "core", "strong_safety.py"): "# core/strong_safety.py\n# This file defines the Strong Safety player type.",
    os.path.join(PROJECT_ROOT, "core", "free_safety.py"): "# core/free_safety.py\n# This file defines the Free Safety player type.",
    os.path.join(PROJECT_ROOT, "core", "kicker.py"): "# core/kicker.py\n# This file defines the Kicker player type.",
    os.path.join(PROJECT_ROOT, "core", "punter.py"): "# core/punter.py\n# This file defines the Punter player type.",
    os.path.join(PROJECT_ROOT, "core", "kick_returner.py"): "# core/kick_returner.py\n# This file defines the Kick Returner player type.",
    os.path.join(PROJECT_ROOT, "core", "punt_returner.py"): "# core/punt_returner.py\n# This file defines the Punt Returner player type.",
    os.path.join(PROJECT_ROOT, "core", "long_snapper.py"): "# core/long_snapper.py\n# This file defines the Long Snapper player type.",


    os.path.join(PROJECT_ROOT, "core", "ball.py"): '''# core/ball.py


class Ball:
    """
    This is the blueprint for our football! It tells the game all about the ball,
    like where it is on the field (its position), how fast it's moving (velocity),
    and if it's currently being held by a player.
    """
    def __init__(self, x=0, y=0, z=0):
        """
        When we make a new football, we give it a starting spot (x, y, z coordinates).
        Think of x as left-right, y as up-down (on the screen), and z as how high it is
        off the ground or how deep it is on the field.
        """
        self.x = x  # The ball's horizontal position on the field
        self.y = y  # The ball's vertical position on the field
        self.z = z  # The ball's height or depth, useful for 3D or visual perspective


        self.velocity_x = 0.0  # How fast the ball is moving left/right
        self.velocity_y = 0.0  # How fast the ball is moving up/down
        self.velocity_z = 0.0  # How fast the ball is moving up/down (for kicks/passes)


        self.is_held = True  # Is a player holding the ball? Starts as true for kickoff/snap
        self.carrier = None   # Which player is holding the ball, if any


        # A small number for how fast the ball slows down over time (friction/air resistance)
        self.friction_factor = 0.98


        print(f"Football created at starting position: ({self.x}, {self.y}, {self.z})")


    def set_position(self, x, y, z):
        """
        This lets us instantly move the ball to a new spot.
        Like when a player picks it up or it's placed for a snap.
        """
        self.x = x
        self.y = y
        self.z = z
        # When position is set directly, stop all movement
        self.velocity_x = 0.0
        self.velocity_y = 0.0
        self.velocity_z = 0.0
        print(f"Ball moved to new position: ({self.x}, {self.y}, {self.z})")


    def apply_force(self, force_x, force_y, force_z):
        """
        This is like a player kicking or throwing the ball!
        We add to its speed in different directions.
        """
        self.velocity_x += force_x
        self.velocity_y += force_y
        self.velocity_z += force_z
        print(f"Force applied. Ball velocity now: ({self.velocity_x}, {self.velocity_y}, {self.velocity_z})")


    def update(self):
        """
        This is called over and over again, many times per second,
        to make the ball move smoothly on its own.
        It's like telling the ball, "Keep going in the direction you're heading!"
        """
        if not self.is_held: # Only move if a player is NOT holding the ball
            self.x += self.velocity_x
            self.y += self.velocity_y
            self.z += self.velocity_z


            # Make the ball slow down a little bit over time (like air resistance)
            self.velocity_x *= self.friction_factor
            self.velocity_y *= self.friction_factor
            self.velocity_z *= self.friction_factor


            # If the ball is very, very slow, stop it completely to save computer power.
            if abs(self.velocity_x) < 0.01: self.velocity_x = 0
            if abs(self.velocity_y) < 0.01: self.velocity_y = 0
            if abs(self.velocity_z) < 0.01: self.velocity_z = 0


            # Simple gravity effect for Z-axis (ball falling back down)
            if self.z > 0: # If the ball is in the air
                self.velocity_z -= 0.1 # Pull it down a little each update (gravity)
            if self.z < 0: # If it goes below ground
                self.z = 0 # Put it back on the ground
                self.velocity_z = 0 # Stop it from falling further
                # A little bounce effect, but we'll keep it simple for now
                # self.velocity_z *= -0.5 # Bounce up half as high


    def get_position(self):
        """
        Tells us exactly where the ball is right now.
        """
        return (self.x, self.y, self.z)


    def is_in_air(self):
        """
        Checks if the ball is currently off the ground.
        """
        return self.z > 0


    def set_held(self, held_status, carrier_player=None):
        """
        Tells the ball if it's being held by a player or if it's free.
        """
        self.is_held = held_status
        self.carrier = carrier_player
        if held_status:
            # If held, stop its movement immediately
            self.velocity_x = 0
            self.velocity_y = 0
            self.velocity_z = 0
            if carrier_player:
                print(f"Ball is now held by {carrier_player.name}.")
            else:
                print("Ball is now held (no specific carrier identified).")
        else:
            print("Ball is now free.")


# Example of how we might use this (you can put this in main.py later for testing)
if __name__ == "__main__":
    print("--- Testing Ball class ---")


    # Create a ball at the center of the field (0,0) and on the ground (0)
    game_ball = Ball(x=0, y=0, z=0)


    # Simulate a player picking up the ball
    print("\\nSimulating ball pickup:")
    # Using generic player name as per new instruction
    from player import Player as GenericPlayer
    test_player = GenericPlayer("Test Player", "RB", 80, 5.0)
    game_ball.set_held(True, test_player)


    # Imagine a player moving, the ball moves with them (not simulated here directly, but implied)
    game_ball.set_position(10, 5, 0) # Ball moves with player


    # Simulate throwing the ball
    print("\\nSimulating throwing the ball:")
    game_ball.set_held(False) # Release the ball
    game_ball.apply_force(5, 2, 10) # Throw it forward, a bit sideways, and up


    # Update the ball's position many times to see it move and fall
    print("\\nUpdating ball movement (first few steps):")
    for i in range(20): # Simulate 20 small time steps
        game_ball.update()
        pos_x, pos_y, pos_z = game_ball.get_position()
        print(f"  Step {i+1}: Ball at ({pos_x:.2f}, {pos_y:.2f}, {pos_z:.2f})")
        if game_ball.velocity_x == 0 and game_ball.velocity_y == 0 and game_ball.velocity_z == 0:
            print("  Ball has come to a stop.")
            break


    print("\\n--- End of Ball testing ---")
''',
    os.path.join(PROJECT_ROOT, "core", "field.py"): '''# core/field.py


# We define some basic sizes for our field.
# These numbers are like telling us how long a yard is in \"game units\"
# or how wide the field is.
# For now, let's assume a standard NFL field size for our game world units.
# A football field is 100 yards long, plus two 10-yard end zones, so 120 yards total.
# Let's say 1 yard = 10 game units for finer movement.
FIELD_LENGTH_YARDS = 120 # 100 yards of playing field + 2x10 yard end zones
FIELD_WIDTH_YARDS = 53.3 # Standard NFL width


# Convert to game units (e.g., pixels or internal simulation units)
# We can adjust this multiplier later if the field is too big or too small.
YARDS_TO_UNITS_MULTIPLIER = 10


FIELD_LENGTH_UNITS = FIELD_LENGTH_YARDS * YARDS_TO_UNITS_MULTIPLIER
FIELD_WIDTH_UNITS = FIELD_WIDTH_YARDS * YARDS_TO_UNITS_MULTIPLIER # Corrected line, removed repeated YARDS_WIDTH_YARDS


# Define key positions in game units for easy reference
# Let's center the field around (0,0) for simpler math later
# So, the middle of the field is 0. The left side is -WIDTH/2, right is +WIDTH/2 etc.
FIELD_CENTER_X = 0
FIELD_CENTER_Y = 0 # Assuming Y is the length axis (vertical on screen)


# Yard lines will be from -600 to +600 if center is 0, and each 10 units is 1 yard.
# So, 0 yard line might be -500 (start of field), 50 yard line is 0, 100 yard line is 500.
# End zone starts/ends at 500 game units from the center for each side, total 100 yards.
# We'll adjust coordinates for Pygame later if needed, where (0,0) is top-left.
# For now, these are conceptual game world coordinates.


class Field:
    """
    This is the blueprint for our football field! It knows everything about the field,
    like its size, where the goal lines are, where the sidelines are, and if something
    is in the end zone.
    """
    def __init__(self, length_units=FIELD_LENGTH_UNITS, width_units=FIELD_WIDTH_UNITS):
        """
        When we make a new field, we tell it how long and wide it is in our game units.
        """
        self.length_units = length_units  # Total length, including end zones
        self.width_units = width_units    # Total width


        # The playing field without end zones is 100 yards (1000 units)
        self.playing_field_length_units = 100 * YARDS_TO_UNITS_MULTIPLIER


        # The end zones are 10 yards each (100 units)
        self.end_zone_length_units = 10 * YARDS_TO_UNITS_MULTIPLIER


        # Define important line coordinates (relative to a central 0,0 for now)
        # Assuming Y is the length axis, X is the width axis
        self.left_sideline_x = -self.width_units / 2
        self.right_sideline_x = self.width_units / 2


        # The middle of the field (50-yard line) is at Y=0
        self.fifty_yard_line_y = 0


        # Goal lines are at 50 yards from the middle of the field in each direction
        # which is 500 units from the center (if playing field is 1000 units total)
        self.goal_line_1_y = -self.playing_field_length_units / 2 # Example: -500 units
        self.goal_line_2_y = self.playing_field_length_units / 2  # Example: +500 units


        # Back of end zones
        self.end_zone_back_1_y = self.goal_line_1_y - self.end_zone_length_units # Example: -600 units
        self.end_zone_back_2_y = self.goal_line_2_y + self.end_zone_length_units # Example: +600 units


        print(f"Football field created: Length {self.length_units} units, Width {self.width_units} units.")
        print(f"  Playing field length: {self.playing_field_length_units} units.")
        print(f"  Goal lines at Y={self.goal_line_1_y} and Y={self.goal_line_2_y}.")


    def is_in_bounds(self, x, y):
        """
        Checks if a position (like where the ball is) is still inside the field lines.
        """
        # Is it between the left and right sidelines?
        is_x_in_bounds = (x >= self.left_sideline_x) and (x <= self.right_sideline_x)
        # Is it between the very front and very back of the entire field (including end zones)?
        is_y_in_bounds = (y >= self.end_zone_back_1_y) and (y <= self.end_zone_back_2_y)
        return is_x_in_bounds and is_y_in_bounds


    def is_touchdown(self, ball_y_position, team_scoring_direction):
        """
        Checks if the ball has crossed the goal line into the end zone for a touchdown.
        `team_scoring_direction`: 1 if scoring towards positive Y (right side), -1 if towards negative Y (left side)
        """
        if team_scoring_direction == 1: # Team is going from left to right (negative Y to positive Y)
            # If the ball is beyond the right goal line (goal_line_2_y)
            return ball_y_position >= self.goal_line_2_y
        elif team_scoring_direction == -1: # Team is going from right to left (positive Y to negative Y)
            # If the ball is beyond the left goal line (goal_line_1_y)
            return ball_y_position <= self.goal_line_1_y
        return False # Not a touchdown


    def get_yard_line(self, y_position):
        """
        Converts a Y position on the field to a football yard line (0-100).
        This is useful for displaying where the ball is in a human-friendly way.
        """
        # Adjust Y position so 0 is the start of the first end zone (goal_line_1_y)
        adjusted_y = y_position - self.goal_line_1_y


        # Convert to yards and clamp between 0 and 120 (for field length including end zones)
        yard = adjusted_y / YARDS_TO_UNITS_MULTIPLIER
        
        # This will need more advanced logic later to handle "X yard line of team A"
        # For now, a simple 0-120 scale for the whole field.
        return max(0, min(120, int(yard)))


# Example of how we might use this (you can put this in main.py later for testing)
if __name__ == "__main__":
    print("--- Testing Field class ---")


    # Create a new field
    game_field = Field()


    # Test if points are in bounds
    print(f"\\nIs (0, 0) in bounds? {game_field.is_in_bounds(0, 0)}") # Should be True (center)
    print(f"Is ({game_field.right_sideline_x + 1}, 0) in bounds? {game_field.is_in_bounds(game_field.right_sideline_x + 1, 0)}") # Should be False (outside right sideline)
    print(f"Is (0, {game_field.end_zone_back_2_y + 1}) in bounds? {game_field.is_in_bounds(0, game_field.end_zone_back_2_y + 1)}") # Should be False (past back of end zone)


    # Test touchdown logic
    print("\\nTesting touchdown logic:")
    # Ball just before goal line 2 (scoring right)
    print(f"Touchdown (scoring right) at Y={game_field.goal_line_2_y - 1}? {game_field.is_touchdown(game_field.goal_line_2_y - 1, 1)}") # Should be False
    # Ball just past goal line 2 (scoring right)
    print(f"Touchdown (scoring right) at Y={game_field.goal_line_2_y + 1}? {game_field.is_touchdown(game_field.goal_line_2_y + 1, 1)}") # Should be True
    # Ball just before goal line 1 (scoring left)
    print(f"Touchdown (scoring left) at Y={game_field.goal_line_1_y + 1}? {game_field.is_touchdown(game_field.goal_line_1_y + 1, -1)}") # Should be False
    # Ball just past goal line 1 (scoring left)
    print(f"Touchdown (scoring left) at Y={game_field.goal_line_1_y - 1}? {game_field.is_touchdown(game_field.goal_line_1_y - 1, -1)}") # Should be True


    # Test yard line conversion
    print("\\nTesting yard line conversion:")
    print(f"Y position {game_field.goal_line_1_y} is Yard Line {game_field.get_yard_line(game_field.goal_line_1_y)}") # Should be 10 (start of field for first end zone)
    print(f"Y position {game_field.goal_line_1_y + 10 * YARDS_TO_UNITS_MULTIPLIER} is Yard Line {game_field.get_yard_line(game_field.goal_line_1_y + 10 * YARDS_TO_UNITS_MULTIPLIER)}") # Should be 20 (10 yards into playing field)
    print(f"Y position {game_field.fifty_yard_line_y} is Yard Line {game_field.get_yard_line(game_field.fifty_yard_line_y)}") # Should be 60 (50 yard line + 10 yard end zone)
    print(f"Y position {game_field.goal_line_2_y} is Yard Line {game_field.get_yard_line(game_field.goal_line_2_y)}") # Should be 110 (end of playing field + end zone)
    print(f"Y position {game_field.end_zone_back_2_y} is Yard Line {game_field.get_yard_line(game_field.end_zone_back_2_y)}") # Should be 120 (back of second end zone)


    print("\\n--- End of Field testing ---")
''',
    os.path.join(PROJECT_ROOT, "core", "team.py"): '''# core/team.py


# We need to import our Player blueprint here!
try:
    # This way of importing works when team.py is run as part of the HfL package
    # (e.g., when main.py imports it).
    from .player import Player
except ImportError:
    # This way of importing works when you run team.py directly for testing.
    # It assumes player.py is in the same directory.
    from player import Player




class Team:
    """
    This is like our team's main office! It keeps track of everything
    about one football team, like its name, all the players on its roster,
    how much money it's spending on salaries, and how much money it's allowed
    to spend (the salary cap).
    """
    def __init__(self, name, city, max_salary_cap=250.0): # 250.0 means $250 Million for now
        """
        When we create a new team, we give it a name (like "Chiefs") and a city.
        We also set a maximum salary cap it can spend.
        """
        self.name = name  # The team's name (e.g., "Kansas City")
        self.city = city  # The city the team is from (e.g., "Eclipse")
        self.roster = []  # This is an empty list, like an empty shelf for our players.
                          # We'll add Player objects to this list.
        self.max_salary_cap = max_salary_cap  # The total money the team can spend on salaries (in millions)
        self.current_salary_spending = 0.0  # How much money the team is currently spending.
                                          # Starts at zero because no players are on the team yet.
        self.team_id = f"{city.replace(' ', '')}_{name.replace(' ', '')}_Team" # A unique ID for the team


        print(f"Team {self.name} from {self.city} created with a salary cap of ${self.max_salary_cap:,}M.")




    def add_player(self, player):
        """
        This is like hiring a new player! We try to add them to our team.
        But first, we check if we have enough room under our salary cap.
        """
        # First, let's see how much money this new player would cost.
        player_cost = player.get_salary()


        # Now, let's see if adding this player would make us go over our spending limit.
        if (self.current_salary_spending + player_cost) <= self.max_salary_cap:
            # If we have enough space, we add the player to our roster list.
            self.roster.append(player)
            # Then, we add their salary to our total spending.
            self.current_salary_spending += player_cost
            # We also tell the player which team they are now on.
            player.set_team(self.name)
            print(f"{player.name} ({player.position}) added to {self.name}'s roster.")
            print(f"  {self.name} current spending: ${self.current_salary_spending:,}M / ${self.max_salary_cap:,}M")
            return True  # Means "Yes, we successfully added the player!"
        else:
            # If we don't have enough space, we can't add them.
            print(f"Cannot add {player.name}. {self.name} is over salary cap.")
            print(f"  Needed: ${player_cost:,}M, Available: ${self.max_salary_cap - self.current_salary_spending:,}M")
            return False  # Means "No, we could not add the player."


    def remove_player(self, player_name):
        """
        This is like letting a player go from the team (maybe they retired or were traded).
        We find them by their name and remove them.
        """
        player_found = None  # Start by saying we haven't found the player yet.
        for player in self.roster: # Go through each player on our roster.
            if player.name == player_name: # Is this the player we're looking for?
                player_found = player # Yes! Remember this player.
                break # We found them, so we can stop looking.


        if player_found: # If we actually found the player:
            self.roster.remove(player_found) # Take them off our roster list.
            self.current_salary_spending -= player_found.get_salary() # Reduce our total spending.
            player_found.set_team(None) # Remove the team from the player's record.
            print(f"{player_found.name} removed from {self.name}'s roster.")
            print(f"  {self.name} current spending: ${self.current_salary_spending:,}M / ${self.max_salary_cap:,}M")
            return True # Successfully removed.
        else:
            # If we didn't find the player with that name:
            print(f"Player '{player_name}' not found on {self.name}'s roster.")
            return False # Could not remove.


    def get_roster_size(self):
        """
        This tells us how many players are currently on the team.
        """
        return len(self.roster) # 'len' tells us how many items are in a list.


    def get_remaining_cap_space(self):
        """
        This tells us how much money we still have left to spend under the cap.
        """
        return self.max_salary_cap - self.current_salary_spending


    def display_roster(self):
        """
        This will print out a nice list of all the players on the team
        and their details.
        """
        print(f"\\n--- {self.city} {self.name} Roster ---")
        if not self.roster: # If the roster list is empty:
            print("  Roster is currently empty.")
        else:
            for player in self.roster: # Go through each player and print their description.
                print(f"  - {player}")
        print(f"Total Players: {self.get_roster_size()}")
        print(f"Current Salary Spending: ${self.current_salary_spending:,.2f}M / Max Cap: ${self.max_salary_cap:,.2f}M")
        print(f"Remaining Cap Space: ${self.get_remaining_cap_space():,.2f}M")
        print("--------------------------")


# Example of how we might use this (you can put this in main.py later for testing)
if __name__ == "__main__":
    print("--- Testing Team and Player classes ---")


    # Make some players! (Using generic names as per new instruction)
    qb1 = Player("Ace Armstron", "QB", 99, 45.0) # $45 Million
    wr1 = Player("Blaze Runner", "WR", 95, 25.0)
    ol1 = Player("Iron Wall", "OL", 98, 23.0)
    rookie_qb = Player("Newbie Passer", "QB", 70, 0.8) # $0.8 Million
    expensive_dl = Player("Dominant Defender", "DL", 97, 30.0)


    # Make a new team! (Using generic team names as per new instruction)
    storm_knights = Team("Storm Knights", "Vanguard City", max_salary_cap=200.0) # Set a lower cap for testing


    # Try adding players
    storm_knights.add_player(qb1)
    storm_knights.add_player(wr1)
    storm_knights.add_player(ol1)
    storm_knights.add_player(rookie_qb)
    storm_knights.add_player(expensive_dl) # This one might go over the cap!


    storm_knights.display_roster()


    # Try removing a player
    storm_knights.remove_player("Blaze Runner")
    storm_knights.display_roster()


    # Try to add someone even if it's over the cap again
    print("\\nAttempting to add player that exceeds cap...")
    another_expensive_player = Player("Cap Buster", "LB", 90, 150.0)
    storm_knights.add_player(another_expensive_player)
    storm_knights.display_roster()


    print("\\n--- End of Team and Player testing ---")
''',
    os.path.join(PROJECT_ROOT, "core", "game.py"): '''# core/game.py


# We will need the Field and Ball classes for our game.
try:
    from .field import Field
    from .ball import Ball
    from .team import Team
    from .player import Player # <--- This is the crucial line for the fix!
except ImportError:
    # This is for direct testing of game.py
    from field import Field
    from ball import Ball
    from team import Team
    from player import Player # <--- This is the crucial line for the fix!
import random # For player generation in test example


class Game:
    """
    This is the main brain of our HfL game! It's like the conductor of an orchestra.
    It tells all the other parts (like the ball, the field, and later the players)
    what to do and when to do it. It keeps the game running smoothly.
    """
    def __init__(self, screen_width=800, screen_height=600):
        """
        When we start a new game, we set up our playing field and the ball.
        We also prepare the screen size for later drawing (even if we're not drawing yet).
        """
        self.field = Field() # Create our football field
        self.ball = Ball()   # Create our football


        self.teams = [] # This list will hold all the teams in our league
        self.current_quarter = 1 # Start in the first quarter
        self.game_time_seconds = 0 # Game clock starts at 0


        self.running = False # Is the game currently playing? Starts as False.


        self.screen_width = screen_width
        self.screen_height = screen_height


        print("Game initialized! Ready to play HfL!")


    def add_team(self, team):
        """
        Adds a team to the game's league.
        """
        self.teams.append(team)
        print(f"Added team: {team.city} {team.name}")


    def handle_input(self):
        """
        This is where the game listens for what you do!
        Like pressing buttons on your keyboard or clicking the mouse.
        For now, it just prints a message. Later, this will be for player control.
        """
        # In a real game, this would check for keyboard presses, mouse clicks, etc.
        # For now, it's just a placeholder.
        pass


    def update(self, delta_time):
        """
        This is the most important part! It updates everything in our game.
        It moves the ball, moves players (later!), and checks if anything special
        happened, like a touchdown or if the ball went out of bounds.
        `delta_time` is how much time has passed since the last update,
        which helps make movement smooth on different computers.
        """
        if self.running:
            # Update the ball's position (it moves on its own if not held)
            self.ball.update()


            # Check if the ball is out of bounds
            ball_x, ball_y, ball_z = self.ball.get_position()
            if not self.field.is_in_bounds(ball_x, ball_y):
                print(f"Ball went out of bounds at ({ball_x:.2f}, {ball_y:.2f}). Play stopped.")
                self.ball.set_held(True) # Recover the ball, set it as held
                self.running = False # Stop the game loop for now


            # This is where we'd update players, check collisions, etc. (future)
            # For now, we'll just advance the game time
            self.game_time_seconds += delta_time
            if self.game_time_seconds >= 60 * 15: # 15 minutes per quarter
                self.current_quarter += 1
                self.game_time_seconds = 0
                print(f"End of quarter {self.current_quarter - 1}. Starting Quarter {self.current_quarter}")
                if self.current_quarter > 4:
                    print("Game Over!")
                    self.running = False


    def render(self):
        """
        This is how the game shows you what's happening!
        It draws the field, the ball, and players (later!) on the screen.
        For now, it just prints their positions because we don't have a visual screen yet.
        """
        # In a real game, this would use a graphics library like Pygame to draw.
        # For now, we just print the state of key elements.
        print(f"\\n--- Game State (Q{self.current_quarter}, Time: {int(self.game_time_seconds):02d}s) ---")
        ball_x, ball_y, ball_z = self.ball.get_position()
        print(f"Ball Position: X={ball_x:.2f}, Y={ball_y:.2f}, Z={ball_z:.2f} (Yard Line: {self.field.get_yard_line(ball_y)})")
        print(f"Ball is held: {self.ball.is_held}, Carrier: {self.ball.carrier.name if self.ball.carrier else 'None'}")
        
        if self.teams:
            print("\\nTeams in League:")
            for team in self.teams:
                print(f"  - {team.city} {team.name} (Roster Size: {team.get_roster_size()})")
        
        print("------------------------------------------")




    def start_game(self):
        """
        This starts the main game loop! It keeps calling update and render
        over and over again, very fast, to make the game move.
        """
        print("\\nStarting HfL Game Loop...")
        self.running = True
        
        # This is a very simple loop, usually we'd use Pygame's clock for precise timing.
        # For demonstration, we'll simulate a few game ticks.
        game_ticks = 0
        max_game_ticks = 50 # Simulate 50 small updates
        time_per_tick = 5.0 # Each tick simulates 5 seconds of game time for demonstration


        while self.running and game_ticks < max_game_ticks:
            self.handle_input()
            self.update(time_per_tick) # Pass how much time has "passed"
            self.render()
            game_ticks += 1
            if game_ticks % 10 == 0: # Print a message every 10 ticks for clarity
                print(f"--- Simulating Game Tick {game_ticks} ---")
            
            # Simulate some ball movement events for testing purposes
            if game_ticks == 5:
                # Get a generic player from a team if possible for carrier example
                carrier_player = None
                if self.teams and self.teams[0].roster:
                    carrier_player = self.teams[0].roster[0] # Use the first player from the first team
                
                print("\\n*** Simulated: Ball handed off! ***")
                self.ball.set_held(False) # Ball is no longer held
                self.ball.apply_force(20, 0, 0) # Ball moves forward


            if game_ticks == 15:
                print("\\n*** Simulated: Ball kicked! ***")
                self.ball.set_position(self.ball.x, self.ball.y, 5) # Lift ball for kick
                self.ball.apply_force(5, 5, 15) # Kick it up and forward




        print("\\nHfL Game Loop Ended.")




# Example of how to start the game (you can put this in main.py later)
if __name__ == "__main__":
    game_instance = Game()


    # Create some generic teams and players (NOT NFL)
    # Using generic names as per new instruction
    first_names = ["Ace", "Blaze", "Iron", "Newbie", "Dominant", "Captain", "Swift", "Strong", "Golden", "Quick", "Aaron", "Adam", "Adrian", "Aidan", "Ali", "Amari", "Amin", "Andre", "Antonio", "Arjun", "Armani", "Arthur", "Aryan", "Asher", "Axel", "Benjamin", "Brandon", "Bryan", "Byron", "Caleb", "Camilo", "Cesar", "Christian", "Christopher", "Daniel", "Dario", "David", "Dennis", "Demetrius", "Diego", "Elijah", "Emmanuel", "Ethan", "Felix", "Fernando", "Gabriel", "George", "Giovanni", "Hamza", "Hector", "Henry", "Hugo", "Ibrahim", "Isaac", "Isaiah", "Ishaan", "Jacob", "Jaden", "Jai", "James", "Javier", "Jayden", "Jesus", "Joel", "John", "Jonathan", "Jorge", " Jose", "Joshua", "Junior", "Justin", "Kai", "Karim", "Kevin", "Khalil", "Kyle", "Leo", "Leon", "Liam", "Louis", "Lucas", "Manuel", "Marcus", "Marco", "Mateo", "Matteo", "Max", "Michael", "Milan", "Mohamed", "Mohammed", "Nathan", "Noah", "Omar", "Oscar", "Pablo", "Pedro", "Rafael", "Rajan", "Rami", "Ray", "Ricardo", "Roberto", "Rohan", "Roman", "Ruben", "Ryan", "Salem", "Samuel", "Sebastian", "Simon", "Sultan", "Terrell", "Theo", "Thomas", "Victor", "William", "Xavier", "Yousef", "Zachary", "Zain", "Zayn", "Zayd"]
    last_names = ["Armstron", "Runner", "Wall", "Passer", "Defender", "Force", "Wind", "Mountain", "Glove", "Stride", "Abdullah", "Ahmed", "Alonso", "Alves", "Amadi", "Andersen", "Anderson", "Arroyo", "Baker", "Barnes", "Bennett", "Chen", "Choi", "Chung", Clarke", "Cruz", "Da Costa", "Davies", "De Souza", "Diaz", "Diop", "Dixon", "Edwards", "Enriquez", "Evans", "Fernandes", "Fernandez", "Franco", "Garcia", "Gomez", "Gonzalez", "Graham", "Green", "Gupta", "Hall", "Harris", "Hawkins", "Hernandez", "Hill", "Hussain", "Jackson", "Jain", "James", "Jara", "Jenkins", "Johnson", "Jones", "Kahn", "Kamara", "Kim", "King", "Kowalski", "Lambert", "Lee", "Lewis", "Lim", "Lopez", "Ma", "Mahmud", "Martinez", "Mendoza", "Miller", "Mohammed", "Moore", "Morales", "Morgan", "Morris", "Murphy", "Nakamura", "Nguyen", "Novak", "O'Connell", "O'Malley", "Oliveira", "Ortiz", "Patel", "Perez", "Pham", "Phillips", "Rae", "Rahman", "Ramirez", "Reyes", "Reynolds", "Richardson", "Rivera", "Roberts", "Robinson", "Rodrigues", "Rodriguez", "Rogers", "Ross", "Ruiz", "Santos", "Schmidt", "Singh", "Smith", "Stewart", "Sy", "Tan", "Taylor", "Thomas", "Thompson", "Torres", "Tran", "Turner", "Ullah", "Weiss", "Walker", "Wang", "White", "Williams", "Wilson", "Wright", "Young", "Zhang"]


    # Function to create a random player (will be more robust later)
    def _create_random_player(position, overall_rating, team_id=None):
        name = f"{random.choice(first_names)} {random.choice(last_names)}"
        salary = round(random.uniform(0.5, 50.0), 1) # Salary between $0.5M and $50M
        player = Player(name, position, overall_rating, salary)
        player.current_team = team_id # Assign team_id directly for setup
        return player


    # Create generic teams and add them to the game
    team1 = Team("Guardians", "Aether City", max_salary_cap=220.0)
    team2 = Team("Shadow Hawks", "Nightfall Point", max_salary_cap=210.0)


    # Populate teams with some players
    for _ in range(3): # 3 QBs
        team1.add_player(_create_random_player("QB", random.randint(70, 99), team1.team_id))
        team2.add_player(_create_random_player("QB", random.randint(70, 99), team2.team_id))
    for _ in range(5): # 5 WRs
        team1.add_player(_create_random_player("WR", random.randint(65, 95), team1.team_id))
        team2.add_player(_create_random_player("WR", random.randint(65, 95), team2.team_id))
    for _ in range(10): # 10 other players (mixed positions)
        team1.add_player(_create_random_player("OL", random.randint(60, 90), team1.team_id))
        team2.add_player(_create_random_player("DL", random.randint(60, 90), team2.team_id))


    game_instance.add_team(team1)
    game_instance.add_team(team2)


    # Now, start the game simulation
    game_instance.start_game()
''',
    os.path.join(PROJECT_ROOT, "systems", "contract_system.py"): "# systems/contract_system.py\n# Manages player contracts and contract negotiations.",
    os.path.join(PROJECT_ROOT, "systems", "finance_ledger.py"): "# systems/finance_ledger.py\n# Handles financial transactions, salary cap, and budgets.",
    os.path.join(PROJECT_ROOT, "systems", "personnel_manager.py"): "# systems/personnel_manager.py\n# Manages user-to-team mapping and role assignments.",
    os.path.join(PROJECT_ROOT, "systems", "media_relations.py"): "# systems/media_relations.py\n# Handles press and social media interactions.",
    os.path.join(PROJECT_ROOT, "systems", "ai_coach.py"): "# systems/ai_coach.py\n# Manages AI coaching logic.",
    os.path.join(PROJECT_ROOT, "systems", "injury_system.py"): "# systems/injury_system.py\n# Manages player injuries and recovery.",
    os.path.join(PROJECT_ROOT, "systems", "league_manager.py"): "# systems/league_manager.py\n# Manages overall league structure and operations.",
    os.path.join(PROJECT_ROOT, "systems", "game_coordinator.py"): "# systems/game_coordinator.py\n# Coordinates game simulations and events.",
    os.path.join(PROJECT_ROOT, "systems", "monetization_system.py"): "# systems/monetization_system.py\n# Handles in-app purchases, currency, and boosts.",
    os.path.join(PROJECT_ROOT, "systems", "unlockable_content.py"): "# systems/unlockable_content.py\n# Manages unlockable items like skins, playbooks, and templates.",
    os.path.join(PROJECT_ROOT, "systems", "daily_fantasy", "DailyFantasySystem.py"): "# systems/daily_fantasy/DailyFantasySystem.py\n# Manages daily fantasy contests, scoring, and leaderboards.",
    os.path.join(PROJECT_ROOT, "systems", "ultimate_team", "ultimate_team_manager.py"): "# systems/ultimate_team/ultimate_team_manager.py\n# Manages CRUD operations for HUT rosters.",
    os.path.join(PROJECT_ROOT, "systems", "ultimate_team", "hut_marketplace.py"): "# systems/ultimate_team/hut_marketplace.py\n# Handles the HUT Auction House and instant-buy mechanics.",
    os.path.join(PROJECT_ROOT, "systems", "ultimate_team", "chemistry_system.py"): "# systems/ultimate_team/chemistry_system.py\n# Calculates active chemistry bonuses for HUT rosters.",
    os.path.join(PROJECT_ROOT, "systems", "ultimate_team", "hut_event_scheduler.py"): "# systems/ultimate_team/hut_event_scheduler.py\n# Defines and triggers time-limited HUT events.",


    os.path.join(PROJECT_ROOT, "roles", "press_media_roles.py"): "# roles/press_media_roles.py\n# Defines roles and workflows for press and media interactions.",
    os.path.join(PROJECT_ROOT, "roles", "fan_engagement_roles.py"): "# roles/fan_engagement_roles.py\n# Defines roles for fan interaction and loyalty systems.",
    os.path.join(PROJECT_ROOT, "roles", "game_operations_roles.py"): "# roles/game_operations_roles.py\n# Defines roles for stadium experience and fan zones.",
    os.path.join(PROJECT_ROOT, "roles", "digital_technology_roles.py"): "# roles/digital_technology_roles.py\n# Defines roles for VR/AR fan experiences and app features.",
    os.path.join(PROJECT_ROOT, "roles", "legal_compliance_roles.py"): "# roles/legal_compliance_roles.py\n# Defines roles for league rule compliance and contract review.",
    os.path.join(PROJECT_ROOT, "roles", "finance_accounting_roles.py"): "# roles/finance_accounting_roles.py\n# Defines roles for financial reporting and accounting.",
    os.path.join(PROJECT_ROOT, "roles", "human_resources_roles.py"): "# roles/human_resources_roles.py\n# Defines roles for talent acquisition and development.",
    os.path.join(PROJECT_ROOT, "roles", "facilities_operations_roles.py"): "# roles/facilities_operations_roles.py\n# Defines roles for facility design and game-day logistics.",


    os.path.join(PROJECT_ROOT, "data", "league_structure.json"): """{
  "league_name": "Heart Football League",
  "team_data": [
    {
      "city_name": "Kaitlynnville",
      "team_name": "Eclipse",
      "offensive_playbook": "Air Raid",
      "defensive_playbook": "Blitz Heavy",
      "stadium": {
        "name": "Needs Work",
        "capacity": 64397
      },
      "fan_base": "Balanced",
      "owner": "League",
      "media_market": {
        "size": "500,000",
        "type": "Shrinking"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Gu'Bare",
      "team_name": "Garrison",
      "offensive_playbook": "Balanced Pass",
      "defensive_playbook": "4-4",
      "stadium": {
        "name": "Old",
        "capacity": 86688
      },
      "fan_base": "Average",
      "owner": "Clothing Designer",
      "media_market": {
        "size": "7 mil.",
        "type": "Medium Huge"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Miki Mountain",
      "team_name": "Miracles",
      "offensive_playbook": "Multi-Look",
      "defensive_playbook": "4-2",
      "stadium": {
        "name": "Needs Work",
        "capacity": 58373
      },
      "fan_base": "Just above Weak",
      "owner": "Appliance Corporation",
      "media_market": {
        "size": "700,000",
        "type": "Growing"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Heirsentia",
      "team_name": "Hawks",
      "offensive_playbook": "Power Run",
      "defensive_playbook": "Balanced",
      "stadium": {
        "name": "Cozy",
        "capacity": 63123
      },
      "fan_base": "Rabid",
      "owner": "Hedgefund Manager",
      "media_market": {
        "size": "4 mil.",
        "type": "Low Huge"
      },
      "mega_chalices": 4
    },
    {
      "city_name": "Brightcloud",
      "team_name": "Clovers",
      "offensive_playbook": "Pass Heavy",
      "defensive_playbook": "Blitz Heavy",
      "stadium": {
        "name": "Different/Odd",
        "capacity": 61616
      },
      "fan_base": "Grass is Greener",
      "owner": "Family",
      "media_market": {
        "size": "2 mil.",
        "type": "Medium Average"
      },
      "mega_chalices": 3
    },
    {
      "city_name": "Silvermind",
      "team_name": "Storks",
      "offensive_playbook": "Run Heavy",
      "defensive_playbook": "Man to Man",
      "stadium": {
        "name": "Cozy",
        "capacity": 59959
      },
      "fan_base": "Unrealistic",
      "owner": "Former Player",
      "media_market": {
        "size": "1 mil.",
        "type": "Low Average"
      },
      "mega_chalices": 3
    },
    {
      "city_name": "Reynava",
      "team_name": "Hellcats",
      "offensive_playbook": "No Huddle",
      "defensive_playbook": "Awe",
      "stadium": {
        "name": "Average",
        "capacity": 59286
      },
      "fan_base": "Weak",
      "owner": "Family",
      "media_market": {
        "size": "1 mil.",
        "type": "Low Average"
      },
      "mega_chalices": 7
    },
    {
      "city_name": "Christiano",
      "team_name": "Candy Rain",
      "offensive_playbook": "Run n' Gun",
      "defensive_playbook": "Blitz Heavy",
      "stadium": {
        "name": "Needs Work",
        "capacity": 61043
      },
      "fan_base": "Trending Down",
      "owner": "Entertainment Mogul",
      "media_market": {
        "size": "250,000",
        "type": "Rural"
      },
      "mega_chalices": 1
    },
    {
      "city_name": "Jakobian",
      "team_name": "Jokers",
      "offensive_playbook": "West Coast",
      "defensive_playbook": "3-5",
      "stadium": {
        "name": "Cozy",
        "capacity": 54000
      },
      "fan_base": "Strong",
      "owner": "Automotive Corporation",
      "media_market": {
        "size": "700,000",
        "type": "Growing"
      },
      "mega_chalices": 4
    },
    {
      "city_name": "Queens Cove",
      "team_name": "Canary's",
      "offensive_playbook": "Balanced Pass",
      "defensive_playbook": "4-4",
      "stadium": {
        "name": "Cozy",
        "capacity": 54111
      },
      "fan_base": "Fair Weather",
      "owner": "Former Coach (HOF)",
      "media_market": {
        "size": "3 mil.",
        "type": "Average"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Zorisova",
      "team_name": "Sandals",
      "offensive_playbook": "Balanced Run",
      "defensive_playbook": "4-6",
      "stadium": {
        "name": "10 years",
        "capacity": 89000
      },
      "fan_base": "Trending Up",
      "owner": "Lifelong Fan",
      "media_market": {
        "size": "7 mil.",
        "type": "Medium Huge"
      },
      "mega_chalices": 9
    },
    {
      "city_name": "Farspace",
      "team_name": "Flatteners",
      "offensive_playbook": "Pistol",
      "defensive_playbook": "3-5",
      "stadium": {
        "name": "Disrepair",
        "capacity": 47474
      },
      "fan_base": "Non Existent",
      "owner": "Fans",
      "media_market": {
        "size": "500,000",
        "type": "Shrinking"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Closesight",
      "team_name": "Condors",
      "offensive_playbook": "Singleback",
      "defensive_playbook": "Cover 1 Zone",
      "stadium": {
        "name": "Old",
        "capacity": 47883
      },
      "fan_base": "Almost Strong",
      "owner": "Lottery Winner",
      "media_market": {
        "size": "2 mil.",
        "type": "Medium Average"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Sunsprout",
      "team_name": "Flames",
      "offensive_playbook": "Shotgun",
      "defensive_playbook": "4-3",
      "stadium": {
        "name": "Needs Work",
        "capacity": 51050
      },
      "fan_base": "Unrealistic",
      "owner": "Investment Group",
      "media_market": {
        "size": "250,000",
        "type": "Rural"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Beloved",
      "team_name": "Funnel Chug",
      "offensive_playbook": "Power I",
      "defensive_playbook": "Cover 3 Zone Blitz",
      "stadium": {
        "name": "New",
        "capacity": 103324
      },
      "fan_base": "Grass is Greener",
      "owner": "International Investor",
      "media_market": {
        "size": "10 mil.",
        "type": "Huge"
      },
      "mega_chalices": 18
    },
    {
      "city_name": "San Terrell",
      "team_name": "Saints",
      "offensive_playbook": "Run Heavy",
      "defensive_playbook": "Man to Man",
      "stadium": {
        "name": "Old",
        "capacity": 70489
      },
      "fan_base": "Bandwagon",
      "owner": "Scumbag",
      "media_market": {
        "size": "10 mil.",
        "type": "Huge"
      },
      "mega_chalices": 7
    },
    {
      "city_name": "Justinopolis",
      "team_name": "Jackals",
      "offensive_playbook": "Air Raid",
      "defensive_playbook": "Zone Heavy",
      "stadium": {
        "name": "Average",
        "capacity": 81581
      },
      "fan_base": "Socialit/Eliteist",
      "owner": "Tech Billionaire",
      "media_market": {
        "size": "4 mil.",
        "type": "Low Huge"
      },
      "mega_chalices": 13
    },
    {
      "city_name": "Matteochi",
      "team_name": "Megaladons",
      "offensive_playbook": "Pass Heavy",
      "defensive_playbook": "2-4",
      "stadium": {
        "name": "Disrepair",
        "capacity": 49187
      },
      "fan_base": "Non Existent",
      "owner": "Four Families",
      "media_market": {
        "size": "4 mil.",
        "type": "Low Huge"
      },
      "mega_chalices": 6
    },
    {
      "city_name": "Jessadelphia",
      "team_name": "Jypsees",
      "offensive_playbook": "Shotgun",
      "defensive_playbook": "Zone/Man",
      "stadium": {
        "name": "Different/Odd",
        "capacity": 90000
      },
      "fan_base": "Just Below Strong",
      "owner": "7 Families",
      "media_market": {
        "size": "3 mil.",
        "type": "Average"
      },
      "mega_chalices": 5
    },
    {
      "city_name": "Libertine",
      "team_name": "Stars",
      "offensive_playbook": "Spread",
      "defensive_playbook": "3-4",
      "stadium": {
        "name": "New",
        "capacity": 72727
      },
      "fan_base": "Average",
      "owner": "Oil Tycoon",
      "media_market": {
        "size": "2 mil.",
        "type": "Unknown"
      },
      "mega_chalices": 3
    },
    {
      "city_name": "Golden Siren",
      "team_name": "Soul",
      "offensive_playbook": "Splitback/Pro form",
      "defensive_playbook": "5-2",
      "stadium": {
        "name": "State of the Art",
        "capacity": 100010
      },
      "fan_base": "Strong",
      "owner": "League",
      "media_market": {
        "size": "3 mil.",
        "type": "Average"
      },
      "mega_chalices": 3
    },
    {
      "city_name": "Tiapma'atzu",
      "team_name": "Tribe",
      "offensive_playbook": "Option Run",
      "defensive_playbook": "3-3-3",
      "stadium": {
        "name": "Needs Work",
        "capacity": 78182
      },
      "fan_base": "Above Average",
      "owner": "Toy Corporation",
      "media_market": {
        "size": "250,000",
        "type": "Rural"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "San Terrell",
      "team_name": "Blackouts",
      "offensive_playbook": "Shock",
      "defensive_playbook": "Awe",
      "stadium": {
        "name": "State of the Art",
        "capacity": 124333
      },
      "fan_base": "Mythical",
      "owner": "Former Player",
      "media_market": {
        "size": "10 mil.",
        "type": "Huge"
      },
      "mega_chalices": 24
    },
    {
      "city_name": "Firesky",
      "team_name": "Foxes",
      "offensive_playbook": "Shock",
      "defensive_playbook": "4-6",
      "stadium": {
        "name": "Average",
        "capacity": 74011
      },
      "fan_base": "Just Below Strong",
      "owner": "Oil Tycoon",
      "media_market": {
        "size": "700,000",
        "type": "Growing"
      },
      "mega_chalices": 5
    },
    {
      "city_name": "Naveah",
      "team_name": "Nomads",
      "offensive_playbook": "Option Pass",
      "defensive_playbook": "Cover 2",
      "stadium": {
        "name": "10 Years",
        "capacity": 77401
      },
      "fan_base": "Balanced",
      "owner": "Fans",
      "media_market": {
        "size": "1 mil.",
        "type": "Low Average"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Kaylean",
      "team_name": "Kraken",
      "offensive_playbook": "Power Run",
      "defensive_playbook": "4-2",
      "stadium": {
        "name": "State of the Art",
        "capacity": 87187
      },
      "fan_base": "Just Above Weak",
      "owner": "Former Analyst (HOF)",
      "media_market": {
        "size": "2 mil.",
        "type": "Medium Average"
      },
      "mega_chalices": 1
    },
    {
      "city_name": "Emahney Park",
      "team_name": "Polarbears",
      "offensive_playbook": "Singleback",
      "defensive_playbook": "Balanced",
      "stadium": {
        "name": "8 years",
        "capacity": 96696
      },
      "fan_base": "Mythical",
      "owner": "Hospital Group",
      "media_market": {
        "size": "7 mil.",
        "type": "Medium Huge"
      },
      "mega_chalices": 7
    },
    {
      "city_name": "Deannaton",
      "team_name": "Demons",
      "offensive_playbook": "Splitback/Pro Form",
      "defensive_playbook": "Zone/Man",
      "stadium": {
        "name": "Disrepair",
        "capacity": 71000
      },
      "fan_base": "Bandwagon",
      "owner": "Tech Billionaire",
      "media_market": {
        "size": "500,000",
        "type": "Shrinking"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Jasmyne Junction",
      "team_name": "Jackrabbits",
      "offensive_playbook": "Power I",
      "defensive_playbook": "2-4",
      "stadium": {
        "name": "Average",
        "capacity": 61061
      },
      "fan_base": "Trending Up",
      "owner": "Billionaire (Old Money)",
      "media_market": {
        "size": "1 mil.",
        "type": "Low Average"
      },
      "mega_chalices": 5
    },
    {
      "city_name": "Babelonia",
      "team_name": "Beacons",
      "offensive_playbook": "Pistol",
      "defensive_playbook": "3-3-3",
      "stadium": {
        "name": "Different/Odd",
        "capacity": 55000
      },
      "fan_base": "Above Average",
      "owner": "Inventor",
      "media_market": {
        "size": "500,000",
        "type": "Shrinking"
      },
      "mega_chalices": 2
    },
    {
      "city_name": "Longsite",
      "team_name": "Lemurs",
      "offensive_playbook": "Run n' Gun",
      "defensive_playbook": "4-3",
      "stadium": {
        "name": "Needs Work",
        "capacity": 54186
      },
      "fan_base": "Fair Weather",
      "owner": "Hedgefund Manager",
      "media_market": {
        "size": "3 mil.",
        "type": "Average"
      },
      "mega_chalices": 6
    },
    {
      "city_name": "Visiente'",
      "team_name": "Vikings",
      "offensive_playbook": "No Huddle",
      "defensive_playbook": "5-2",
      "stadium": {
        "name": "New",
        "capacity": 102120
      },
      "fan_base": "Socialite/Eliteist",
      "owner": "Investment Group",
      "media_market": {
        "size": "4 mil.",
        "type": "Low Huge"
      },
      "mega_chalices": 9
    },
    {
      "city_name": "Dennisiargo",
      "team_name": "Dismantlers",
      "offensive_playbook": "Spread",
      "defensive_playbook": "3-4",
      "stadium": {
        "name": "Old",
        "capacity": 41144
      },
      "fan_base": "Weak",
      "owner": "Lifelong Fan",
      "media_market": {
        "size": "250,000",
        "type": "Rural"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Sarahite",
      "team_name": "Snarf Dragons",
      "offensive_playbook": "Multi-Look",
      "defensive_playbook": "Zone Heavy",
      "stadium": {
        "name": "Disrepair",
        "capacity": 51000
      },
      "fan_base": "Trending Down",
      "owner": "Media Mogul",
      "media_market": {
        "size": "750,000",
        "type": "Growing"
      },
      "mega_chalices": 1
    },
    {
      "city_name": "Golden Sunset",
      "team_name": "Greyhounds",
      "offensive_playbook": "West Coast",
      "defensive_playbook": "Cover 2",
      "stadium": {
        "name": "State of the Art",
        "capacity": 109901
      },
      "fan_base": "Rabid",
      "owner": "Descendant of League Founder",
      "media_market": {
        "size": "10 mil.",
        "type": "Huge"
      },
      "mega_chalices": 0
    },
    {
      "city_name": "Takumzuh",
      "team_name": "Tigers",
      "offensive_playbook": "Balanced Run",
      "defensive_playbook": "Cover 1 (Zone Blitz)",
      "stadium": {
        "name": "10 years",
        "capacity": 94000
      },
      "fan_base": "Growing",
      "owner": "Scumbag",
      "media_market": {
        "size": "10 mil.",
        "type": "Huge"
      },
      "mega_chalices": 6
    }
  ]
}""",
    os.path.join(PROJECT_ROOT, "data", "player_templates.json"): "[]",
    os.path.join(PROJECT_ROOT, "data", "ultimate_team", "hut_player_pool.json"): "[]", # Added as per blueprint


    os.path.join(PROJECT_ROOT, "tests", "test_gameplay.py"): "# tests/test_gameplay.py\n# Contains tests for core gameplay mechanics.",
    os.path.join(PROJECT_ROOT, "tests", "test_systems.py"): "# tests/test_systems.py\n# Contains tests for various game systems.",


    os.path.join(PROJECT_ROOT, "main.py"): "# main.py\n# This is the main entry point for the Heart Football League game.",
    os.path.join(PROJECT_ROOT, "README.md"): "# Heart Football League (HfL) System\n\nThis document outlines the architecture of the HfL game."
}


def create_project_structure():
    """
    This function will go through our lists and create all the folders and files.
    """
    print(f"Ta'K, let's set up the Heart Football League project at: {PROJECT_ROOT}")


    # First, let's make sure the very main folder exists.
    os.makedirs(PROJECT_ROOT, exist_ok=True) # 'exist_ok=True' means it won't complain if the folder is already there.


    # Now, let's create all the other folders in our list.
    print("\nCreating directories...")
    for directory in DIRECTORIES:
        try:
            os.makedirs(directory, exist_ok=True)
            print(f"  Created: {directory}")
        except Exception as e:
            print(f"  Error creating {directory}: {e}")


    # Next, let's create all the files and put content into them.
    print("\nCreating files...")
    for file_path, content in FILES.items():
        try:
            # We open the file in 'write' mode ('w').
            # If the file doesn't exist, it creates it. If it does, it empties it and writes fresh.
            with open(file_path, "w") as f:
                f.write(content)
            print(f"  Created: {file_path}")
        except Exception as e:
            print(f"  Error creating {file_path}: {e}")


    print("\nTa'K, the HfL project structure has been created!")
    print("You can now find your game files organized as planned.")


if __name__ == "__main__":
    # This means: "If you run this script directly, do the 'create_project_structure' job."
    create_project_structure()




hfl_index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heart Football League (HfL)</title>
    <!-- Tailwind CSS for beautiful styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: "Inter", sans-serif;
            background-color: #1a202c; /* Dark background */
            color: #e2e8f0; /* Light text */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start; /* Align to start, not center, for better flow */
            min-height: 100vh; /* Full viewport height */
            padding: 20px;
        }
        .container {
            max-width: 900px;
            width: 100%;
            background-color: #2d3748; /* Slightly lighter dark background for container */
            padding: 24px;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px; /* Space from bottom */
        }
        h1, h2 {
            color: #63b3ed; /* Blue for headings */
            font-weight: bold;
            margin-bottom: 16px;
        }
        .section-header {
            color: #a0aec0; /* Lighter grey for section headers */
            font-size: 1.125rem; /* text-lg */
            margin-top: 24px;
            margin-bottom: 8px;
            border-bottom: 1px solid #4a5568; /* Subtle separator */
            padding-bottom: 4px;
        }
        .game-info, .team-list, .control-panel {
            margin-top: 16px;
        }
        .team-card {
            background-color: #4a5568; /* Even lighter background for team cards */
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 12px;
            display: flex;
            flex-direction: column;
        }
        .team-name {
            font-weight: bold;
            color: #f6ad55; /* Orange for team names */
            font-size: 1.125rem;
        }
        .player-list {
            font-size: 0.875rem; /* text-sm */
            color: #cbd5e0; /* Off-white for player text */
            margin-top: 8px;
            max-height: 150px; /* Limit height for player list */
            overflow-y: auto; /* Make it scrollable */
            padding-right: 8px; /* Padding for scrollbar */
        }
        button {
            background-image: linear-gradient(to right, #4299e1, #63b3ed); /* Blue gradient for buttons */
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-right: 10px;
            border: none; /* Remove default button border */
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        }
        button:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .log-output {
            background-color: #1a202c;
            border: 1px solid #4a5568;
            border-radius: 8px;
            padding: 15px;
            height: 200px;
            overflow-y: scroll;
            margin-top: 20px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 0.9rem;
            color: #a0aec0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="text-3xl text-center mb-6">Heart Football League (HfL)</h1>
        <p class="text-center text-gray-400">Welcome, Ta'K! This is your HfL dashboard.</p>


        <div class="control-panel mt-8 flex justify-center">
            <button id="startGameBtn" class="mr-4">Start Game Simulation</button>
            <button id="resetGameBtn">Reset Game</button>
        </div>


        <h2 class="section-header">Game State</h2>
        <div class="game-info">
            <p><strong>Current Quarter:</strong> <span id="currentQuarter">1</span></p>
            <p><strong>Game Time:</strong> <span id="gameTime">00:00</span></p>
            <p><strong>Ball Position:</strong> X=<span id="ballX">0.00</span>, Y=<span id="ballY">0.00</span>, Z=<span id="ballZ">0.00</span> (Yard Line: <span id="yardLine">50</span>)</p>
            <p><strong>Ball Held:</strong> <span id="ballHeld">True</span> by <span id="ballCarrier">None</span></p>
        </div>


        <h2 class="section-header">League Teams</h2>
        <div id="teamList" class="team-list">
            <!-- Team cards will be populated here by JavaScript -->
            <p class="text-gray-500 text-center">No teams loaded yet. Start the simulation to see teams!</p>
        </div>


        <h2 class="section-header">Simulation Log</h2>
        <div id="simulationLog" class="log-output">
            <!-- Simulation output will be displayed here -->
            <p class="text-gray-500">Log will appear here once simulation starts...</p>
        </div>
    </div>


    <script>
        // This is where our JavaScript magic happens!
        // It will update the web page to show what's happening in the game.


        // Get references to the elements on our page where we want to show information
        const currentQuarterSpan = document.getElementById('currentQuarter');
        const gameTimeSpan = document.getElementById('gameTime');
        const ballXSpan = document.getElementById('ballX');
        const ballYSpan = document.getElementById('ballY');
        const ballZSpan = document.getElementById('ballZ');
        const yardLineSpan = document.getElementById('yardLine');
        const ballHeldSpan = document.getElementById('ballHeld');
        const ballCarrierSpan = document.getElementById('ballCarrier');
        const teamListDiv = document.getElementById('teamList');
        const simulationLogDiv = document.getElementById('simulationLog');
        const startGameBtn = document.getElementById('startGameBtn');
        const resetGameBtn = document.getElementById('resetGameBtn');


        // --- CONCEPTUAL GAME STATE (This would come from Python in a real app) ---
        // For now, we'll simulate a game state here in JavaScript
        // In a full application, this data would be fetched from your Python backend
        // via an API (Application Programming Interface) call.
        let fb_heartGameState = {
            current_quarter: 1,
            game_time_seconds: 0,
            ball_position: { x: 0.0, y: 0.0, z: 0.0 },
            ball_held: true,
            ball_carrier: "None",
            yard_line: 50,
            teams: [] // This will hold our simulated teams
        };


        // This function will simulate adding a random player
        function _createRandomPlayer(position, overall_rating, team_id) {
            const firstNames = ["Ace", "Blaze", "Iron", "Newbie", "Dominant", "Captain", "Swift", "Strong", "Golden", "Quick"];
            const lastNames = ["Armstron", "Runner", "Wall", "Passer", "Defender", "Force", "Wind", "Mountain", "Glove", "Stride"];
            const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
            const salary = (Math.random() * 49.5 + 0.5).toFixed(1); // Between 0.5 and 50.0
            return {
                name: name,
                position: position,
                overall_rating: overall_rating,
                salary: parseFloat(salary),
                current_team: team_id
            };
        }


        // This function simulates populating teams with players (similar to Python's game.py)
        function populateTeams() {
            fb_heartGameState.teams = []; // Clear existing teams for reset


            const team1 = { name: "Guardians", city: "Aether City", max_salary_cap: 220.0, current_salary_spending: 0.0, roster: [], team_id: "AetherCity_Guardians_Team" };
            const team2 = { name: "Shadow Hawks", city: "Nightfall Point", max_salary_cap: 210.0, current_salary_spending: 0.0, roster: [], team_id: "NightfallPoint_ShadowHawks_Team" };
           
            // Function to add player with salary cap check
            const addPlayerToTeam = (team, player) => {
                if ((team.current_salary_spending + player.salary) <= team.max_salary_cap) {
                    team.roster.push(player);
                    team.current_salary_spending += player.salary;
                    logToSimulationLog(`${player.name} (${player.position}) added to ${team.name}'s roster.`);
                    logToSimulationLog(`  ${team.name} current spending: $${team.current_salary_spending.toFixed(2)}M / $${team.max_salary_cap.toFixed(2)}M`);
                    return true;
                } else {
                    logToSimulationLog(`Cannot add ${player.name}. ${team.name} is over salary cap.`);
                    logToSimulationLog(`  Needed: $${player.salary.toFixed(2)}M, Available: $${(team.max_salary_cap - team.current_salary_spending).toFixed(2)}M`);
                    return false;
                }
            };


            // Populate teams with some players
            for (let i = 0; i < 3; i++) { // 3 QBs
                addPlayerToTeam(team1, _createRandomPlayer("QB", Math.floor(Math.random() * 30) + 70, team1.team_id)); // 70-99 OVR
                addPlayerToTeam(team2, _createRandomPlayer("QB", Math.floor(Math.random() * 30) + 70, team2.team_id));
            }
            for (let i = 0; i < 5; i++) { // 5 WRs
                addPlayerToTeam(team1, _createRandomPlayer("WR", Math.floor(Math.random() * 31) + 65, team1.team_id)); // 65-95 OVR
                addPlayerToTeam(team2, _createRandomPlayer("WR", Math.floor(Math.random() * 31) + 65, team2.team_id));
            }
            for (let i = 0; i < 10; i++) { // 10 other players (mixed positions)
                addPlayerToTeam(team1, _createRandomPlayer("OL", Math.floor(Math.random() * 31) + 60, team1.team_id)); // 60-90 OVR
                addPlayerToTeam(team2, _createRandomPlayer("DL", Math.floor(Math.random() * 31) + 60, team2.team_id));
            }


            fb_heartGameState.teams.push(team1, team2);
            logToSimulationLog("Teams populated for simulation.");
        }




        // Function to update the display on the web page
        function updateDisplay() {
            currentQuarterSpan.textContent = fb_heartGameState.current_quarter;
            const minutes = Math.floor(fb_heartGameState.game_time_seconds / 60);
            const seconds = fb_heartGameState.game_time_seconds % 60;
            gameTimeSpan.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            ballXSpan.textContent = fb_heartGameState.ball_position.x.toFixed(2);
            ballYSpan.textContent = fb_heartGameState.ball_position.y.toFixed(2);
            ballZSpan.textContent = fb_heartGameState.ball_position.z.toFixed(2);
            yardLineSpan.textContent = fb_heartGameState.yard_line;
            ballHeldSpan.textContent = fb_heartGameState.ball_held ? 'True' : 'False';
            ballCarrierSpan.textContent = fb_heartGameState.ball_carrier;


            // Clear and re-populate teams
            teamListDiv.innerHTML = ''; // Clear existing team cards
            if (fb_heartGameState.teams.length === 0) {
                teamListDiv.innerHTML = '<p class="text-gray-500 text-center">No teams loaded yet. Start the simulation to see teams!</p>';
            } else {
                fb_heartGameState.teams.forEach(team => {
                    const teamCard = document.createElement('div');
                    teamCard.className = 'team-card';
                   
                    const teamNameElem = document.createElement('p');
                    teamNameElem.className = 'team-name';
                    teamNameElem.textContent = `${team.city} ${team.name}`;
                    teamCard.appendChild(teamNameElem);


                    const teamStatsElem = document.createElement('p');
                    teamStatsElem.textContent = `Roster Size: ${team.roster.length}, Current Cap Spending: $${team.current_salary_spending.toFixed(2)}M / $${team.max_salary_cap.toFixed(2)}M`;
                    teamCard.appendChild(teamStatsElem);


                    const playerListElem = document.createElement('div');
                    playerListElem.className = 'player-list';
                    if (team.roster.length > 0) {
                        team.roster.forEach(player => {
                            const playerElem = document.createElement('p');
                            playerElem.textContent = `- ${player.name} (${player.position} - OVR ${player.overall_rating}) Salary: $${player.salary}M`;
                            playerListElem.appendChild(playerElem);
                        });
                    } else {
                        const noPlayerElem = document.createElement('p');
                        noPlayerElem.textContent = "  No players on roster.";
                        playerListElem.appendChild(noPlayerElem);
                    }
                    teamCard.appendChild(playerListElem);
                   
                    teamListDiv.appendChild(teamCard);
                });
            }
        }


        // Function to log messages to the simulation log area
        function logToSimulationLog(message) {
            const p = document.createElement('p');
            p.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
            simulationLogDiv.appendChild(p);
            // Scroll to the bottom to show the latest log entry
            simulationLogDiv.scrollTop = simulationLogDiv.scrollHeight;
        }


        let simulationInterval; // To hold our game loop timer
        let ballVelocityX = 0;
        let ballVelocityY = 0;
        let ballVelocityZ = 0;
        const frictionFactor = 0.98;
        const gravity = 0.1; // Downward pull


        // Simulates a single "tick" of the game
        function simulateGameTick() {
            if (fb_heartGameState.game_time_seconds >= 60 * 15 * 4) { // Max 4 quarters
                logToSimulationLog("Game Over!");
                clearInterval(simulationInterval);
                simulationInterval = null;
                startGameBtn.textContent = "Game Over";
                startGameBtn.disabled = true;
                return;
            }


            fb_heartGameState.game_time_seconds += 5; // Advance time by 5 seconds per tick


            // Simulate ball movement (simplified from Python Ball class)
            if (!fb_heartGameState.ball_held) {
                fb_heartGameState.ball_position.x += ballVelocityX;
                fb_heartGameState.ball_position.y += ballVelocityY;
                fb_heartGameState.ball_position.z += ballVelocityZ;


                ballVelocityX *= frictionFactor;
                ballVelocityY *= frictionFactor;
                ballVelocityZ -= gravity; // Apply gravity


                if (fb_heartGameState.ball_position.z < 0) {
                    fb_heartGameState.ball_position.z = 0;
                    ballVelocityZ = 0; // Stop vertical movement when hitting ground
                }


                // Stop if very slow
                if (Math.abs(ballVelocityX) < 0.01) ballVelocityX = 0;
                if (Math.abs(ballVelocityY) < 0.01) ballVelocityY = 0;
                if (Math.abs(ballVelocityZ) < 0.01 && fb_heartGameState.ball_position.z === 0) ballVelocityZ = 0;
            }


            // Conceptual Yard Line Calculation (simplified from Python Field class)
            // Assuming Y-axis is length, 0-1200 units total length, 10 units per yard.
            // 50 yard line is center, so 600 units from start.
            // If ballY is 0 (center of our conceptual field), then it's the 60 yard line (50 yard line + 10 yard endzone)
            const adjustedY = fb_heartGameState.ball_position.y + 500; // Adjust so 0-1000 is playing field + 200 end zones
            fb_heartGameState.yard_line = Math.max(0, Math.min(120, Math.floor(adjustedY / 10)));




            // Simulate out of bounds check (simplified from Python Field class)
            const fieldWidthUnits = 533; // From Python's field.py
            const leftSidelineX = -fieldWidthUnits / 2;
            const rightSidelineX = fieldWidthUnits / 2;
            const fieldLengthUnits = 1200; // From Python's field.py (including end zones)
            const endZoneBack1Y = -600; // Approx equivalent for our simplified Y system
            const endZoneBack2Y = 600;  // Approx equivalent for our simplified Y system




            // This check needs to be relative to the field's coordinate system
            // In python field: left_sideline_x = -self.width_units / 2 etc.
            // So if ball_position.x is > rightSidelineX or < leftSidelineX, it's out.
            // if ball_position.y is > endZoneBack2Y or < endZoneBack1Y, it's out.
           
            // For simplicity in JS, let's assume if it goes too far left/right it's out.
            // We'll keep the conceptual field roughly 0 to 533 wide for X and 0 to 1200 for Y in game units
            // Re-evaluating based on the Python field.py using (0,0) as field center.
            // So, X goes from -266.5 to +266.5, and Y goes from -600 to +600.
            const fieldMinX = -266.5;
            const fieldMaxX = 266.5;
            const fieldMinY = -600;
            const fieldMaxY = 600;


            if (fb_heartGameState.ball_position.x < fieldMinX || fb_heartGameState.ball_position.x > fieldMaxX ||
                fb_heartGameState.ball_position.y < fieldMinY || fb_heartGameState.ball_position.y > fieldMaxY) {
                logToSimulationLog(`Ball went out of bounds at (${fb_heartGameState.ball_position.x.toFixed(2)}, ${fb_heartGameState.ball_position.y.toFixed(2)}). Play stopped.`);
                fb_heartGameState.ball_held = true;
                fb_heartGameState.ball_carrier = "None (Out of Bounds)";
                clearInterval(simulationInterval);
                simulationInterval = null;
                startGameBtn.textContent = "Resume Simulation";
                return; // Stop further updates for this tick
            }




            // Simulate quarter end
            if (fb_heartGameState.game_time_seconds % (60 * 15) === 0 && fb_heartGameState.game_time_seconds !== 0) {
                if (fb_heartGameState.current_quarter < 4) {
                    fb_heartGameState.current_quarter++;
                    logToSimulationLog(`End of quarter ${fb_heartGameState.current_quarter - 1}. Starting Quarter ${fb_heartGameState.current_quarter}`);
                } else {
                    logToSimulationLog("Game Over!");
                    clearInterval(simulationInterval);
                    simulationInterval = null;
                    startGameBtn.textContent = "Game Over";
                    startGameBtn.disabled = true;
                }
            }


            // Simulate ball events at specific "game ticks" (time intervals)
            const currentTick = fb_heartGameState.game_time_seconds / 5; // 5 seconds per tick
            if (currentTick === 5) {
                logToSimulationLog("*** Simulated: Ball handed off! ***");
                fb_heartGameState.ball_held = false;
                fb_heartGameState.ball_carrier = "None"; // Ball is free
                ballVelocityX = 20; // Apply forward force
                ballVelocityY = 0;
                ballVelocityZ = 0;
            } else if (currentTick === 15) {
                logToSimulationLog("*** Simulated: Ball kicked! ***");
                fb_heartGameState.ball_position.z = 5; // Lift ball for kick
                ballVelocityX = 5;
                ballVelocityY = 5;
                ballVelocityZ = 15; // Kick it up and forward
            }


            updateDisplay(); // Update the UI after each tick
        }


        // Event listener for Start Game Button
        startGameBtn.addEventListener('click', () => {
            if (!simulationInterval) { // Prevent multiple intervals
                if (fb_heartGameState.current_quarter > 4) { // If game was over, reset first
                    resetGame();
                }
                logToSimulationLog("Starting HfL Game Loop...");
                populateTeams(); // Populate teams each time simulation starts or resets
                updateDisplay(); // Initial display update with teams
                simulationInterval = setInterval(simulateGameTick, 1000); // Update every 1 second (simulating 5 game seconds)
                startGameBtn.textContent = "Pause Simulation";
            } else {
                clearInterval(simulationInterval);
                simulationInterval = null;
                logToSimulationLog("Simulation Paused.");
                startGameBtn.textContent = "Resume Simulation";
            }
        });


        // Event listener for Reset Game Button
        resetGameBtn.addEventListener('click', () => {
            resetGame();
        });


        function resetGame() {
            clearInterval(simulationInterval);
            simulationInterval = null;
            fb_heartGameState = {
                current_quarter: 1,
                game_time_seconds: 0,
                ball_position: { x: 0.0, y: 0.0, z: 0.0 },
                ball_held: true,
                ball_carrier: "None",
                yard_line: 50,
                teams: []
            };
            simulationLogDiv.innerHTML = '<p class="text-gray-500">Log will appear here once simulation starts...</p>';
            startGameBtn.textContent = "Start Game Simulation";
            startGameBtn.disabled = false;
            updateDisplay(); // Reset display
            logToSimulationLog("Game has been reset.");
        }


        // Initial display update when the page loads
        updateDisplay();
    </script>
</body>
</html>


Team Logo Generator
import dataclasses
from typing import Union, Dict


# Mocking image_generation module for demonstration purposes in this environment.
# In a real tool context, this would be provided by the system.
@dataclasses.dataclass
class PerQueryResult:
    index: str | None = None
    publication_time: str | None = None
    snippet: str | None = None
    source_title: str | None = None
    url: str | None = None


@dataclasses.dataclass
class Image:
    prompt: str | None = None
    url: str | None = None


@dataclasses.dataclass
class ImageGenerationResult:
    content_id: str | None = None
    generated_images: Union[list["Image"], None] = None


@dataclasses.dataclass
class ImageGenerationResultList:
    results: Union[list["ImageGenerationResult"], None] = None


class ImageGenerationUsecase:
    ALTERNATIVES = "alternatives" # For generating multiple variations based on a single prompt.
    CREATION = "creation" # For creating a single image based on a prompt.


class ImageGeneration:
    def generate_images(self, prompts: list[str], image_generation_usecase: str) -> ImageGenerationResultList:
        """
        Simulates the image generation API call.
        In a real scenario, this would make an actual API call to an image generation service.
        """
        print(f"DEBUG: Simulating image generation for prompts: {prompts} with usecase: {image_generation_usecase}")
        # Placeholder for actual image generation. In a real scenario, this would return actual image URLs.
        # For demonstration, we'll return a mock structure.
        mock_images = []
        for i, prompt_text in enumerate(prompts):
            # For ALTERNATIVES, generate multiple URLs for one prompt.
            if image_generation_usecase == ImageGenerationUsecase.ALTERNATIVES:
                # Simulate 4 alternative logos for the first prompt
                if i == 0:
                    for j in range(1, 5): # Generate 4 alternatives
                        mock_images.append(Image(
                            prompt=f"Alternative {j} for: {prompt_text}",
                            url=f"https://placehold.co/400x400/808080/FFFFFF?text=Logo{j}"
                        ))
                else:
                    # For other prompts, just a single image for simplicity in this mock
                    mock_images.append(Image(
                        prompt=prompt_text,
                        url=f"https://placehold.co/400x400/808080/FFFFFF?text=Logo"
                    ))
            elif image_generation_usecase == ImageGenerationUsecase.CREATION:
                 mock_images.append(Image(
                    prompt=prompt_text,
                    url=f"https://placehold.co/400x400/808080/FFFFFF?text=Concept"
                ))


        # Return a structure similar to what the actual API would return for ALTERNATIVES
        return ImageGenerationResultList(
            results=[
                ImageGenerationResult(
                    content_id="mock_content_id_1",
                    generated_images=mock_images
                )
            ]
        )


# Instantiate the mock image_generation tool
image_generation = ImageGeneration()




def get_team_colors(team_name: str) -> str:
    """
    Assigns appropriate team colors based on the team name.
    If no specific colors are matched, defaults to a neutral scheme.
    """
    team_name_lower = team_name.lower()
    # Explicitly added the requested teams to the color mapping
    if "eclipse" in team_name_lower:
        return "Black, Powder Purple, Off White"
    elif "garrison" in team_name_lower:
        return "Teal, Orange, White"
    elif "miracles" in team_name_lower:
        return "White, Lavender, Navy Blue"
    elif "hawks" in team_name_lower:
        return "Tan, Eggshell White, Fuschia"
    elif "clovers" in team_name_lower:
        return "Forest Green, Lime Green, Gold"
    elif "storks" in team_name_lower:
        return "White, Light Blue, Grey"
    elif "hellcats" in team_name_lower:
        return "Powder Blue, Crimson Red, Black, Ash Grey"
    elif "candy rain" in team_name_lower:
        return "Pastel Pink, Royal Blue, Lemon Yellow"
    elif "jokers" in team_name_lower:
        return "Matte Purple, Matte Green, Matte Yellow, White"
    elif "canary" in team_name_lower:
        return "Shiny Yellow, Neon Yellow, Matte Yellow/White"
    elif "sandals" in team_name_lower:
        return "Mocha, Beige, Crystal Ocean Blue, Cream"
    elif "flatteners" in team_name_lower:
        return "Charcoal Grey, Safety Orange, Light Yellow"
    elif "condors" in team_name_lower:
        return "Dark Brown, Tan, Cream, White"
    elif "flames" in team_name_lower:
        return "Fiery Red, Bright Orange, Sky Blue, Yellow"
    elif "funnel chug" in team_name_lower:
        return "Aqua Marine, Gold, Hot Pink"
    elif "saints" in team_name_lower:
        return "Gold, Silver, Eggshell White"
    elif "jackals" in team_name_lower:
        return "Desert Tan, Dark Brown, Black"
    elif "megaladons" in team_name_lower:
        return "Deep Ocean Blue, Shark Grey, Baby Blue"
    elif "jypsees" in team_name_lower:
        return "Silver, Ruby Red, Emerald Green, Gold"
    elif "stars" in team_name_lower:
        return "Royal Blue, Silver, Teal"
    elif "soul" in team_name_lower:
        return "Matte Purple, Gold, Matte Black"
    elif "tribe" in team_name_lower:
        return "Earthy Brown, Copper, Forest Green, Light Brown"
    elif "blackouts" in team_name_lower:
        return "Pitch Black, Matte Black, Dark Grey, Electric Gold/Blue"
    elif "foxes" in team_name_lower:
        return "Burnt Orange, White, Dark Brown"
    elif "nomads" in team_name_lower:
        return "Desert Sand, Dusty Rose, Teal"
    elif "kraken" in team_name_lower:
        return "Deep Teal, Black, Lime Green"
    elif "polarbears" in team_name_lower:
        return "Snow White, Ice Blue, Fishscale White, Grey"
    elif "demons" in team_name_lower:
        return "Blood Red, Black, Fiery Orange"
    elif "jackrabbits" in team_name_lower:
        return "Desert Tan, Sage Green, Cream"
    elif "beacons" in team_name_lower:
        return "Powder Purple, Bright White, Matte Navy"
    elif "lemurs" in team_name_lower:
        return "Ring-tailed Black, White, Grey"
    elif "vikings" in team_name_lower:
        return "Royal Purple, Black, Steel Grey"
    elif "dismantlers" in team_name_lower:
        return "Rust Red, Metallic Grey, Matte Black"
    elif "snarf dragons" in team_name_lower:
        return "Dragon Green, Mustard Yellow, Matte Brown"
    elif "greyhounds" in team_name_lower:
        return "Slate Grey, White, Silver"
    elif "tigers" in team_name_lower:
        return "Tiger Orange, Black, White"
    else:
        return "Silver Blue, Gold, Silver, Neon Red, Powder Yellow" # Default colors if no match


def generate_team_logos(league_name: str, city_name: str, team_name: str, team_colors: str):
    """
    Generates football team logos and a logo concept based on provided team information.


    Args:
        league_name (str): The name of the football league.
        city_name (str): The city name for the team.
        team_name (str): The team's name (e.g., "Hawks).
        team_colors (str): Comma-separated team colors (e.g., "Tan, Eggshell White, Fuschia).
    """
    full_team_name = f"{city_name} {team_name}"


    # Generate a prompt for the main logo concept and alternatives
    logo_concept_prompt = (
        f"A football team logo concept for the {full_team_name} of the {league_name}, "
        f"featuring a stylized {team_name.lower()} logo design, rendered in a palette of {team_colors}. "
        f"The logo should embody the spirit of the {team_name.lower()}, showing strength and agility. "
        f"Include the text \"{full_team_name}\" prominently and \"{league_name}\" subtly. "
        f"A clean, crisp design in a modern, dynamic style suitable for a sports team."
    )


    print(f"\n--- Generating logos for {full_team_name} (Colors: {team_colors}) ---")


    # Generate 4 alternative logos based on the concept prompt
    # The `ALTERNATIVES` use case typically returns multiple images


```python
import dataclasses
from typing import Union, Dict


# Mocking image_generation module for demonstration purposes in this environment.
# In a real tool context, this would be provided by the system.
@dataclasses.dataclass
class PerQueryResult:
    index: str | None = None
    publication_time: str | None = None
    snippet: str | None = None
    source_title: str | None = None
    url: str | None = None


@dataclasses.dataclass
class Image:
    prompt: str | None = None
    url: str | None = None


@dataclasses.dataclass
class ImageGenerationResult:
    content_id: str | None = None
    generated_images: Union[list["Image"], None] = None


@dataclasses.dataclass
class ImageGenerationResultList:
    results: Union[list["ImageGenerationResult"], None] = None


class ImageGenerationUsecase:
    ALTERNATIVES = "alternatives" # For generating multiple variations based on a single prompt.
    CREATION = "creation" # For creating a single image based on a prompt.


class ImageGeneration:
    def generate_images(self, prompts: list[str], image_generation_usecase: str) -> ImageGenerationResultList:
        """
        Simulates the image generation API call.
        In a real scenario, this would make an actual API call to an image generation service.
        """
        print(f"DEBUG: Simulating image generation for prompts: {prompts} with usecase: {image_generation_usecase}")
        # Placeholder for actual image generation. In a real scenario, this would return actual image URLs.
        # For demonstration, we'll return a mock structure.
        mock_images = []
        for i, prompt_text in enumerate(prompts):
            # For ALTERNATIVES, generate multiple URLs for one prompt.
            if image_generation_usecase == ImageGenerationUsecase.ALTERNATIVES:
                # Simulate 4 alternative logos for the first prompt
                if i == 0:
                    for j in range(1, 5): # Generate 4 alternatives
                        mock_images.append(Image(
                            prompt=f"Alternative {j} for: {prompt_text}",
                            url=f"[https://placehold.co/400x400/808080/FFFFFF?text=Logo](https://placehold.co/400x400/808080/FFFFFF?text=Logo){j}"
                        ))
                else:
                    # For other prompts, just a single image for simplicity in this mock
                    mock_images.append(Image(
                        prompt=prompt_text,
                        url=f"[https://placehold.co/400x400/808080/FFFFFF?text=Logo](https://placehold.co/400x400/808080/FFFFFF?text=Logo)"
                    ))
            elif image_generation_usecase == ImageGenerationUsecase.CREATION:
                 mock_images.append(Image(
                    prompt=prompt_text,
                    url=f"[https://placehold.co/400x400/808080/FFFFFF?text=Concept](https://placehold.co/400x400/808080/FFFFFF?text=Concept)"
                ))


        # Return a structure similar to what the actual API would return for ALTERNATIVES
        return ImageGenerationResultList(
            results=[
                ImageGenerationResult(
                    content_id="mock_content_id_1",
                    generated_images=mock_images
                )
            ]
        )


# Instantiate the mock image_generation tool
image_generation = ImageGeneration()




def get_team_colors(team_name: str) -> str:
    """
    Assigns appropriate team colors based on the team name.
    If no specific colors are matched, defaults to a neutral scheme.
    """
    team_name_lower = team_name.lower()
    # Explicitly added the requested teams to the color mapping
    if "eclipse" in team_name_lower:
        return "Black, Powder Purple, Off White"
    elif "garrison" in team_name_lower:
        return "Teal, Orange, White"
    elif "miracles" in team_name_lower:
        return "White, Lavender, Navy Blue"
    elif "hawks" in team_name_lower:
        return "Tan, Eggshell White, Fuschia"
    elif "clovers" in team_name_lower:
        return "Forest Green, Lime Green, Gold"
    elif "storks" in team_name_lower:
        return "White, Light Blue, Grey"
    elif "hellcats" in team_name_lower:
        return "Powder Blue, Crimson Red, Black, Ash Grey"
    elif "candy rain" in team_name_lower:
        return "Pastel Pink, Royal Blue, Lemon Yellow"
    elif "jokers" in team_name_lower:
        return "Matte Purple, Matte Green, Matte Yellow, White"
    elif "canary" in team_name_lower:
        return "Shiny Yellow, Neon Yellow, Matte Yellow/White"
    elif "sandals" in team_name_lower:
        return "Mocha, Beige, Crystal Ocean Blue, Cream"
    elif "flatteners" in team_name_lower:
        return "Charcoal Grey, Safety Orange, Light Yellow"
    elif "condors" in team_name_lower:
        return "Dark Brown, Tan, Cream, White"
    elif "flames" in team_name_lower:
        return "Fiery Red, Bright Orange, Sky Blue, Yellow"
    elif "funnel chug" in team_name_lower:
        return "Aqua Marine, Gold, Hot Pink"
    elif "saints" in team_name_lower:
        return "Gold, Silver, Eggshell White"
    elif "jackals" in team_name_lower:
        return "Desert Tan, Dark Brown, Black"
    elif "megaladons" in team_name_lower:
        return "Deep Ocean Blue, Shark Grey, Baby Blue"
    elif "jypsees" in team_name_lower:
        return "Silver, Ruby Red, Emerald Green, Gold"
    elif "stars" in team_name_lower:
        return "Royal Blue, Silver, Teal"
    elif "soul" in team_name_lower:
        return "Matte Purple, Gold, Matte Black"
    elif "tribe" in team_name_lower:
        return "Earthy Brown, Copper, Forest Green, Light Brown"
    elif "blackouts" in team_name_lower:
        return "Pitch Black, Matte Black, Dark Grey, Electric Gold/Blue"
    elif "foxes" in team_name_lower:
        return "Burnt Orange, White, Dark Brown"
    elif "nomads" in team_name_lower:
        return "Desert Sand, Dusty Rose, Teal"
    elif "kraken" in team_name_lower:
        return "Deep Teal, Black, Lime Green"
    elif "polarbears" in team_name_lower:
        return "Snow White, Ice Blue, Fishscale White, Grey"
    elif "demons" in team_name_lower:
        return "Blood Red, Black, Fiery Orange"
    elif "jackrabbits" in team_name_lower:
        return "Desert Tan, Sage Green, Cream"
    elif "beacons" in team_name_lower:
        return "Powder Purple, Bright White, Matte Navy"
    elif "lemurs" in team_name_lower:
        return "Ring-tailed Black, White, Grey"
    elif "vikings" in team_name_lower:
        return "Royal Purple, Black, Steel Grey"
    elif "dismantlers" in team_name_lower:
        return "Rust Red, Metallic Grey, Matte Black"
    elif "snarf dragons" in team_name_lower:
        return "Dragon Green, Mustard Yellow, Matte Brown"
    elif "greyhounds" in team_name_lower:
        return "Slate Grey, White, Silver"
    elif "tigers" in team_name_lower:
        return "Tiger Orange, Black, White"
    else:
        return "Silver Blue, Gold, Silver, Neon Red, Powder Yellow" # Default colors if no match


def generate_team_logos(league_name: str, city_name: str, team_name: str, team_colors: str):
    """
    Generates football team logos and a logo concept based on provided team information.


    Args:
        league_name (str): The name of the football league.
        city_name (str): The city name for the team.
        team_name (str): The team's name (e.g., "Hawks).
        team_colors (str): Comma-separated team colors (e.g., "Tan, Eggshell White, Fuschia).
    """
    full_team_name = f"{city_name} {team_name}"


    # Generate a prompt for the main logo concept and alternatives
    logo_concept_prompt = (
        f"A football team logo concept for the {full_team_name} of the {league_name}, "
        f"featuring a stylized {team_name.lower()} logo design, rendered in a palette of {team_colors}. "
        f"The logo should embody the spirit of the {team_name.lower()}, showing strength and agility. "
        f"Include the text \"{full_team_name}\" prominently and \"{league_name}\" subtly. "
        f"A clean, crisp design in a modern, dynamic style suitable for a sports team."
    )


    print(f"\n--- Generating logos for {full_team_name} (Colors: {team_colors}) ---")


    # Generate 4 alternative logos based on the concept prompt
    # The `ALTERNATIVES` use case typically returns multiple images for a single prompt
    logo_results = image_generation.generate_images(
        prompts=[logo_concept_prompt],
        image_generation_usecase=image_generation.ImageGenerationUsecase.ALTERNATIVES
    )


    if logo_results and logo_results.results:
        # Assuming the first result block contains all the generated images
        generated_images = logo_results.results[0].generated_images
        print("\n--- Generated Football Team Logos ---")
        for i, img in enumerate(generated_images):
            if i < 4:  # Display up to 4 alternative logos
                print(f"Logo {i+1}: {img.url}")
            else:
                break # Stop after 4 logos if more are returned


        # The initial prompt itself serves as the "Football Team Logo Concept"
        print("\n--- Football Team Logo Concept ---")
        print(logo_concept_prompt)


    else:
        print("Failed to generate logos. No results returned.")


# --- Provided Teams Data ---
teams_data = {
    "league_name": "Heart Football League",
    "teams": [
        {
            "city_name": "Kaitlynnville",
            "team_name": "Eclipse",
            "team_colors": "Black, Powder Purple, Off White",
            "offensive_playbook": "Air Raid",
            "defensive_playbook": "Blitz Heavy",
            "stadium": {
                "name": "Needs Work",
                "capacity": 64397
            },
            "fan_base": "Balanced",
            "owner": "League",
            "media_market": {
                "size": "500,000",
                "type": "Shrinking"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Gu'Bare",
            "team_name": "Garrison",
            "team_colors": "Teal, Orange, White",
            "offensive_playbook": "Balanced Pass",
            "defensive_playbook": "4-4",
            "stadium": {
                "name": "Old",
                "capacity": 86688
            },
            "fan_base": "Average",
            "owner": "Clothing Designer",
            "media_market": {
                "size": "7 mil.",
                "type": "Medium Huge"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Miki Mountain",
            "team_name": "Miracles",
            "team_colors": "White, Lavender, Navy Blue",
            "offensive_playbook": "Multi-Look",
            "defensive_playbook": "4-2",
            "stadium": {
                "name": "Needs Work",
                "capacity": 58373
            },
            "fan_base": "Just above Weak",
            "owner": "Appliance Corporation",
            "media_market": {
                "size": "700,000",
                "type": "Growing"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Heirsentia",
            "team_name": "Hawks",
            "team_colors": "Tan, Eggshell White, Fuschia",
            "offensive_playbook": "Power Run",
            "defensive_playbook": "Balanced",
            "stadium": {
                "name": "Cozy",
                "capacity": 63123
            },
            "fan_base": "Rabid",
            "owner": "Hedgefund Manager",
            "media_market": {
                "size": "4 mil.",
                "type": "Low Huge"
            },
            "mega_chalices": 4
        },
        {
            "city_name": "Brightcloud",
            "team_name": "Clovers",
            "team_colors": "Forest Green, Lime Green, Gold", # Added team_colors
            "offensive_playbook": "Pass Heavy",
            "defensive_playbook": "Blitz Heavy",
            "stadium": {
                "name": "Different/Odd",
                "capacity": 61616
            },
            "fan_base": "Grass is Greener",
            "owner": "Family",
            "media_market": {
                "size": "2 mil.",
                "type": "Medium Average"
            },
            "mega_chalices": 3
        },
        {
            "city_name": "Silvermind",
            "team_name": "Storks",
            "team_colors": "White, Light Blue, Grey", # Added team_colors
            "offensive_playbook": "Run Heavy",
            "defensive_playbook": "Man to Man",
            "stadium": {
                "name": "Cozy",
                "capacity": 59959
            },
            "fan_base": "Unrealistic",
            "owner": "Former Player",
            "media_market": {
                "size": "1 mil.",
                "type": "Low Average"
            },
            "mega_chalices": 3
        },
        {
            "city_name": "Reynava",
            "team_name": "Hellcats",
            "team_colors": "Powder Blue, Crimson Red, Black, Ash Grey", # Added team_colors
            "offensive_playbook": "No Huddle",
            "defensive_playbook": "Awe",
            "stadium": {
                "name": "Average",
                "capacity": 59286
            },
            "fan_base": "Weak",
            "owner": "Family",
            "media_market": {
                "size": "1 mil.",
                "type": "Low Average"
            },
            "mega_chalices": 7
        },
        {
            "city_name": "Christiano",
            "team_name": "Candy Rain",
            "team_colors": "Pastel Pink, Royal Blue, Lemon Yellow", # Added team_colors
            "offensive_playbook": "Run n' Gun",
            "defensive_playbook": "Blitz Heavy",
            "stadium": {
                "name": "Needs Work",
                "capacity": 61043
            },
            "fan_base": "Trending Down",
            "owner": "Entertainment Mogul",
            "media_market": {
                "size": "250,000",
                "type": "Rural"
            },
            "mega_chalices": 1
        },
        {
            "city_name": "Jakobian",
            "team_name": "Jokers",
            "team_colors": "Matte Purple, Matte Green, Matte Yellow, White", # Added team_colors
            "offensive_playbook": "West Coast",
            "defensive_playbook": "3-5",
            "stadium": {
                "name": "Cozy",
                "capacity": 54000
            },
            "fan_base": "Strong",
            "owner": "Automotive Corporation",
            "media_market": {
                "size": "700,000",
                "type": "Growing"
            },
            "mega_chalices": 4
        },
        {
            "city_name": "Queens Cove",
            "team_name": "Canary's",
            "team_colors": "Shiny Yellow, Neon Yellow, Matte Yellow/White", # Added team_colors
            "offensive_playbook": "Balanced Pass",
            "defensive_playbook": "4-4",
            "stadium": {
                "name": "Cozy",
                "capacity": 54111
            },
            "fan_base": "Fair Weather",
            "owner": "Former Coach (HOF)",
            "media_market": {
                "size": "3 mil.",
                "type": "Average"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Zorisova",
            "team_name": "Sandals",
            "team_colors": "Mocha, Beige, Crystal Ocean Blue, Cream", # Added team_colors
            "offensive_playbook": "Balanced Run",
            "defensive_playbook": "4-6",
            "stadium": {
                "name": "10 years",
                "capacity": 89000
            },
            "fan_base": "Trending Up",
            "owner": "Lifelong Fan",
            "media_market": {
                "size": "7 mil.",
                "type": "Medium Huge"
            },
            "mega_chalices": 9
        },
        {
            "city_name": "Farspace",
            "team_name": "Flatteners",
            "team_colors": "Charcoal Grey, Safety Orange, Light Yellow", # Added team_colors
            "offensive_playbook": "Pistol",
            "defensive_playbook": "3-5",
            "stadium": {
                "name": "Disrepair",
                "capacity": 47474
            },
            "fan_base": "Non Existent",
            "owner": "Fans",
            "media_market": {
                "size": "500,000",
                "type": "Shrinking"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Closesight",
            "team_name": "Condors",
            "team_colors": "Dark Brown, Tan, Cream, White", # Added team_colors
            "offensive_playbook": "Singleback",
            "defensive_playbook": "Cover 1 Zone",
            "stadium": {
                "name": "Old",
                "capacity": 47883
            },
            "fan_base": "Almost Strong",
            "owner": "Lottery Winner",
            "media_market": {
                "size": "2 mil.",
                "type": "Medium Average"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Sunsprout",
            "team_name": "Flames",
            "team_colors": "Fiery Red, Bright Orange, Sky Blue, Yellow", # Added team_colors
            "offensive_playbook": "Shotgun",
            "defensive_playbook": "4-3",
            "stadium": {
                "name": "Needs Work",
                "capacity": 51050
            },
            "fan_base": "Unrealistic",
            "owner": "Investment Group",
            "media_market": {
                "size": "250,000",
                "type": "Rural"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Beloved",
            "team_name": "Funnel Chug",
            "team_colors": "Aqua Marine, Gold, Hot Pink", # Added team_colors
            "offensive_playbook": "Power I",
            "defensive_playbook": "Cover 3 Zone Blitz",
            "stadium": {
                "name": "New",
                "capacity": 103324
            },
            "fan_base": "Grass is Greener",
            "owner": "International Investor",
            "media_market": {
                "size": "10 mil.",
                "type": "Huge"
            },
            "mega_chalices": 18
        },
        {
            "city_name": "San Terrell",
            "team_name": "Saints",
            "team_colors": "Gold, Silver, Eggshell White", # Added team_colors
            "offensive_playbook": "Run Heavy",
            "defensive_playbook": "Man to Man",
            "stadium": {
                "name": "Old",
                "capacity": 70489
            },
            "fan_base": "Bandwagon",
            "owner": "Scumbag",
            "media_market": {
                "size": "10 mil.",
                "type": "Huge"
            },
            "mega_chalices": 7
        },
        {
            "city_name": "Justinopolis",
            "team_name": "Jackals",
            "team_colors": "Desert Tan, Dark Brown, Black", # Added team_colors
            "offensive_playbook": "Air Raid",
            "defensive_playbook": "Zone Heavy",
            "stadium": {
                "name": "Average",
                "capacity": 81581
            },
            "fan_base": "Socialit/Eliteist",
            "owner": "Tech Billionaire",
            "media_market": {
                "size": "4 mil.",
                "type": "Low Huge"
            },
            "mega_chalices": 13
        },
        {
            "city_name": "Matteochi",
            "team_name": "Megaladons",
            "team_colors": "Deep Ocean Blue, Shark Grey, Baby Blue", # Added team_colors
            "offensive_playbook": "Pass Heavy",
            "defensive_playbook": "2-4",
            "stadium": {
                "name": "Disrepair",
                "capacity": 49187
            },
            "fan_base": "Non Existent",
            "owner": "Four Families",
            "media_market": {
                "size": "4 mil.",
                "type": "Low Huge"
            },
            "mega_chalices": 6
        },
        {
            "city_name": "Jessadelphia",
            "team_name": "Jypsees",
            "team_colors": "Silver, Ruby Red, Emerald Green, Gold", # Added team_colors
            "offensive_playbook": "Shotgun",
            "defensive_playbook": "Zone/Man",
            "stadium": {
                "name": "Different/Odd",
                "capacity": 90000
            },
            "fan_base": "Just Below Strong",
            "owner": "7 Families",
            "media_market": {
                "size": "3 mil.",
                "type": "Average"
            },
            "mega_chalices": 5
        },
        {
            "city_name": "Libertine",
            "team_name": "Stars",
            "team_colors": "Royal Blue, Silver, Teal", # Added team_colors
            "offensive_playbook": "Spread",
            "defensive_playbook": "3-4",
            "stadium": {
                "name": "New",
                "capacity": 72727
            },
            "fan_base": "Average",
            "owner": "Oil Tycoon",
            "media_market": {
                "size": "2 mil.",
                "type": "Unknown"
            },
            "mega_chalices": 3
        },
        {
            "city_name": "Golden Siren",
            "team_name": "Soul",
            "team_colors": "Matte Purple, Gold, Matte Black", # Added team_colors
            "offensive_playbook": "Splitback/Pro form",
            "defensive_playbook": "5-2",
            "stadium": {
                "name": "State of the Art",
                "capacity": 100010
            },
            "fan_base": "Strong",
            "owner": "League",
            "media_market": {
                "size": "3 mil.",
                "type": "Average"
            },
            "mega_chalices": 3
        },
        {
            "city_name": "Tiapma'atzu",
            "team_name": "Tribe",
            "team_colors": "Earthy Brown, Copper, Forest Green, Light Brown", # Added team_colors
            "offensive_playbook": "Option Run",
            "defensive_playbook": "3-3-3",
            "stadium": {
                "name": "Needs Work",
                "capacity": 78182
            },
            "fan_base": "Above Average",
            "owner": "Toy Corporation",
            "media_market": {
                "size": "250,000",
                "type": "Rural"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "San Terrell",
            "team_name": "Blackouts",
            "team_colors": "Pitch Black, Matte Black, Dark Grey, Electric Gold/Blue", # Added team_colors
            "offensive_playbook": "Shock",
            "defensive_playbook": "Awe",
            "stadium": {
                "name": "State of the Art",
                "capacity": 124333
            },
            "fan_base": "Mythical",
            "owner": "Former Player",
            "media_market": {
                "size": "10 mil.",
                "type": "Huge"
            },
            "mega_chalices": 24
        },
        {
            "city_name": "Firesky",
            "team_name": "Foxes",
            "team_colors": "Burnt Orange, White, Dark Brown", # Added team_colors
            "offensive_playbook": "Shock",
            "defensive_playbook": "4-6",
            "stadium": {
                "name": "Average",
                "capacity": 74011
            },
            "fan_base": "Just Below Strong",
            "owner": "Oil Tycoon",
            "media_market": {
                "size": "700,000",
                "type": "Growing"
            },
            "mega_chalices": 5
        },
        {
            "city_name": "Naveah",
            "team_name": "Nomads",
            "team_colors": "Desert Sand, Dusty Rose, Teal", # Added team_colors
            "offensive_playbook": "Option Pass",
            "defensive_playbook": "Cover 2",
            "stadium": {
                "name": "10 Years",
                "capacity": 77401
            },
            "fan_base": "Balanced",
            "owner": "Fans",
            "media_market": {
                "size": "1 mil.",
                "type": "Low Average"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Kaylean",
            "team_name": "Kraken",
            "team_colors": "Deep Teal, Black, Lime Green", # Added team_colors
            "offensive_playbook": "Power Run",
            "defensive_playbook": "4-2",
            "stadium": {
                "name": "State of the Art",
                "capacity": 87187
            },
            "fan_base": "Just Above Weak",
            "owner": "Former Analyst (HOF)",
            "media_market": {
                "size": "2 mil.",
                "type": "Medium Average"
            },
            "mega_chalices": 1
        },
        {
            "city_name": "Emahney Park",
            "team_name": "Polarbears",
            "team_colors": "Snow White, Ice Blue, Fishscale White, Grey", # Added team_colors
            "offensive_playbook": "Singleback",
            "defensive_playbook": "Balanced",
            "stadium": {
                "name": "8 years",
                "capacity": 96696
            },
            "fan_base": "Mythical",
            "owner": "Hospital Group",
            "media_market": {
                "size": "7 mil.",
                "type": "Medium Huge"
            },
            "mega_chalices": 7
        },
        {
            "city_name": "Deannaton",
            "team_name": "Demons",
            "team_colors": "Blood Red, Black, Fiery Orange", # Added team_colors
            "offensive_playbook": "Splitback/Pro Form",
            "defensive_playbook": "Zone/Man",
            "stadium": {
                "name": "Disrepair",
                "capacity": 71000
            },
            "fan_base": "Bandwagon",
            "owner": "Tech Billionaire",
            "media_market": {
                "size": "500,000",
                "type": "Shrinking"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Jasmyne Junction",
            "team_name": "Jackrabbits",
            "team_colors": "Desert Tan, Sage Green, Cream", # Added team_colors
            "offensive_playbook": "Power I",
            "defensive_playbook": "2-4",
            "stadium": {
                "name": "Average",
                "capacity": 61061
            },
            "fan_base": "Trending Up",
            "owner": "Billionaire (Old Money)",
            "media_market": {
                "size": "1 mil.",
                "type": "Low Average"
            },
            "mega_chalices": 5
        },
        {
            "city_name": "Babelonia",
            "team_name": "Beacons",
            "team_colors": "Powder Purple, Bright White, Matte Navy", # Added team_colors
            "offensive_playbook": "Pistol",
            "defensive_playbook": "3-3-3",
            "stadium": {
                "name": "Different/Odd",
                "capacity": 55000
            },
            "fan_base": "Above Average",
            "owner": "Inventor",
            "media_market": {
                "size": "500,000",
                "type": "Shrinking"
            },
            "mega_chalices": 2
        },
        {
            "city_name": "Longsite",
            "team_name": "Lemurs",
            "team_colors": "Ring-tailed Black, White, Grey", # Added team_colors
            "offensive_playbook": "Run n' Gun",
            "defensive_playbook": "4-3",
            "stadium": {
                "name": "Needs Work",
                "capacity": 54186
            },
            "fan_base": "Fair Weather",
            "owner": "Hedgefund Manager",
            "media_market": {
                "size": "3 mil.",
                "type": "Average"
            },
            "mega_chalices": 6
        },
        {
            "city_name": "Visiente'",
            "team_name": "Vikings",
            "team_colors": "Royal Purple, Black, Steel Grey", # Added team_colors
            "offensive_playbook": "No Huddle",
            "defensive_playbook": "5-2",
            "stadium": {
                "name": "New",
                "capacity": 102120
            },
            "fan_base": "Socialite/Eliteist",
            "owner": "Investment Group",
            "media_market": {
                "size": "4 mil.",
                "type": "Low Huge"
            },
            "mega_chalices": 9
        },
        {
            "city_name": "Dennisiargo",
            "team_name": "Dismantlers",
            "team_colors": "Rust Red, Metallic Grey, Matte Black", # Added team_colors
            "offensive_playbook": "Spread",
            "defensive_playbook": "3-4",
            "stadium": {
                "name": "Old",
                "capacity": 41144
            },
            "fan_base": "Weak",
            "owner": "Lifelong Fan",
            "media_market": {
                "size": "250,000",
                "type": "Rural"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Sarahite",
            "team_name": "Snarf Dragons",
            "team_colors": "Dragon Green, Mustard Yellow, Matte Brown", # Added team_colors
            "offensive_playbook": "Multi-Look",
            "defensive_playbook": "Zone Heavy",
            "stadium": {
                "name": "Disrepair",
                "capacity": 51000
            },
            "fan_base": "Trending Down",
            "owner": "Media Mogul",
            "media_market": {
                "size": "750,000",
                "type": "Growing"
            },
            "mega_chalices": 1
        },
        {
            "city_name": "Golden Sunset",
            "team_name": "Greyhounds",
            "team_colors": "Slate Grey, White, Silver", # Added team_colors
            "offensive_playbook": "West Coast",
            "defensive_playbook": "Cover 2",
            "stadium": {
                "name": "State of the Art",
                "capacity": 109901
            },
            "fan_base": "Rabid",
            "owner": "Descendant of League Founder",
            "media_market": {
                "size": "10 mil.",
                "type": "Huge"
            },
            "mega_chalices": 0
        },
        {
            "city_name": "Takumzuh",
            "team_name": "Tigers",
            "team_colors": "Tiger Orange, Black, White", # Added team_colors
            "offensive_playbook": "Balanced Run",
            "defensive_playbook": "Cover 1 (Zone Blitz)",
            "stadium": {
                "name": "10 years",
                "capacity": 94000
            },
            "fan_base": "Growing",
            "owner": "Scumbag",
            "media_market": {
                "size": "10 mil.",
                "type": "Huge"
            },
            "mega_chalices": 6
        }
    ]
}


# This loop ensures that even if team_colors are missing from teams_data initially,
# they will be populated from get_team_colors before logo generation.
for team_info in teams_data["teams"]:
    if "team_colors" not in team_info:
        team_info["team_colors"] = get_team_colors(team_info["team_name"])


# Iterate through each team and generate logos
league_name = teams_data["league_name"]
for team_info in teams_data["teams"]:
    city_name = team_info["city_name"]
    team_name = team_info["team_name"]
    # We can directly use team_info["team_colors"] here as it's now guaranteed to exist
    team_colors = team_info["team_colors"]
    generate_team_logos(league_name, city_name, team_name, team_colors)




Logo Concept Generator
import dataclasses
from typing import Union, Dict


# Mocking image_generation module for demonstration purposes in this environment.
# In a real tool context, this would be provided by the system.
@dataclasses.dataclass
class PerQueryResult:
    index: str | None = None
    publication_time: str | None = None
    snippet: str | None = None
    source_title: str | None = None
    url: str | None = None


@dataclasses.dataclass
class Image:
    prompt: str | None = None
    url: str | None = None


@dataclasses.dataclass
class ImageGenerationResult:
    content_id: str | None = None
    generated_images: Union[list["Image"], None] = None


@dataclasses.dataclass
class ImageGenerationResultList:
    results: Union[list["ImageGenerationResult"], None] = None


class ImageGenerationUsecase:
    ALTERNATIVES = "alternatives" # For generating multiple variations based on a single prompt.
    CREATION = "creation" # For creating a single image based on a prompt.


class ImageGeneration:
    def generate_images(self, prompts: list[str], image_generation_usecase: str) -> ImageGenerationResultList:
        """
        Simulates the image generation API call.
        In a real scenario, this would make an actual API call to an image generation service.
        """
        print(f"DEBUG: Simulating image generation for prompts: {prompts} with usecase: {image_generation_usecase}")
        # Placeholder for actual image generation. In a real scenario, this would return actual image URLs.
        # For demonstration, we'll return a mock structure.
        mock_images = []
        for i, prompt_text in enumerate(prompts):
            # For ALTERNATIVES, generate multiple URLs for one prompt.
            if image_generation_usecase == ImageGenerationUsecase.ALTERNATIVES:
                # Simulate 4 alternative logos for the first prompt
                if i == 0:
                    for j in range(1, 5): # Generate 4 alternatives
                        mock_images.append(Image(
                            prompt=f"Alternative {j} for: {prompt_text}",
                            url=f"https://placehold.co/400x400/808080/FFFFFF?text=Logo{j}"
                        ))
                else:
                    # For other prompts, just a single image for simplicity in this mock
                    mock_images.append(Image(
                        prompt=prompt_text,
                        url=f"https://placehold.co/400x400/808080/FFFFFF?text=Logo"
                    ))
            elif image_generation_usecase == ImageGenerationUsecase.CREATION:
                 mock_images.append(Image(
                    prompt=prompt_text,
                    url=f"https://placehold.co/400x400/808080/FFFFFF?text=Concept"
                ))


        # Return a structure similar to what the actual API would return for ALTERNATIVES
        return ImageGenerationResultList(
            results=[
                ImageGenerationResult(
                    content_id="mock_content_id_1",
                    generated_images=mock_images
                )
            ]
        )


# Instantiate the mock image_generation tool
image_generation = ImageGeneration()




def generate_team_logos(league_name: str, city_name: str, team_name: str, team_colors: str):
    """
    Generates football team logos and a logo concept based on provided team information.


    Args:
        league_name (str): The name of the football league.
        city_name (str): The city name for the team.
        team_name (str): The team's name (e.g., "Hawks").
        team_colors (str): Comma-separated team colors (e.g., "Tan, Eggshell White, Fuschia").
    """
    full_team_name = f"{city_name} {team_name}"


    # Generate a prompt for the main logo concept and alternatives
    logo_concept_prompt = (
        f"A football team logo concept for the {full_team_name} of the {league_name}, "
        f"featuring a stylized {team_name.lower()} in flight, its wings spread wide, and rendered in a gradient of {team_colors.split(',')[0].strip()} and {team_colors.split(',')[1].strip()}. "
        f"The {team_name.lower()}'s eyes are a piercing {team_colors.split(',')[-1].strip()}, representing the team's intensity and agility. "
        f"The logo is set against a solid background, a blend of {team_colors.split(',')[1].strip()} and a hint of {team_colors.split(',')[0].strip()}. "
        f"Below the {team_name.lower()}, the words \"{full_team_name}\" are written in a bold, {team_colors.split(',')[-1].strip()} font, "
        f"and the words \"{league_name}\" are subtly inscribed in a smaller, {team_colors.split(',')[0].strip()} font beneath. "
        f"The logo exudes power and grace, with a distinct edge that captures the spirit of the team. "
        f"A clean, crisp design in a vintage, collegiate style."
    )


    print(f"Generating logos for {full_team_name}...")


    # Generate 4 alternative logos based on the concept prompt
    # The `ALTERNATIVES` use case typically returns multiple images for a single prompt
    logo


```python
import dataclasses
from typing import Union, Dict


# Mocking image_generation module for demonstration purposes in this environment.
# In a real tool context, this would be provided by the system.
@dataclasses.dataclass
class PerQueryResult:
    index: str | None = None
    publication_time: str | None = None
    snippet: str | None = None
    source_title: str | None = None
    url: str | None = None


@dataclasses.dataclass
class Image:
    prompt: str | None = None
    url: str | None = None


@dataclasses.dataclass
class ImageGenerationResult:
    content_id: str | None = None
    generated_images: Union[list["Image"], None] = None


@dataclasses.dataclass
class ImageGenerationResultList:
    results: Union[list["ImageGenerationResult"], None] = None


class ImageGenerationUsecase:
    ALTERNATIVES = "alternatives" # For generating multiple variations based on a single prompt.
    CREATION = "creation" # For creating a single image based on a prompt.


class ImageGeneration:
    def generate_images(self, prompts: list[str], image_generation_usecase: str) -> ImageGenerationResultList:
        """
        Simulates the image generation API call.
        In a real scenario, this would make an actual API call to an image generation service.
        """
        print(f"DEBUG: Simulating image generation for prompts: {prompts} with usecase: {image_generation_usecase}")
        # Placeholder for actual image generation. In a real scenario, this would return actual image URLs.
        # For demonstration, we'll return a mock structure.
        mock_images = []
        for i, prompt_text in enumerate(prompts):
            # For ALTERNATIVES, generate multiple URLs for one prompt.
            if image_generation_usecase == ImageGenerationUsecase.ALTERNATIVES:
                # Simulate 4 alternative logos for the first prompt
                if i == 0:
                    for j in range(1, 5): # Generate 4 alternatives
                        mock_images.append(Image(
                            prompt=f"Alternative {j} for: {prompt_text}",
                            url=f"[https://placehold.co/400x400/808080/FFFFFF?text=Logo](https://placehold.co/400x400/808080/FFFFFF?text=Logo){j}"
                        ))
                else:
                    # For other prompts, just a single image for simplicity in this mock
                    mock_images.append(Image(
                        prompt=prompt_text,
                        url=f"[https://placehold.co/400x400/808080/FFFFFF?text=Logo](https://placehold.co/400x400/808080/FFFFFF?text=Logo)"
                    ))
            elif image_generation_usecase == ImageGenerationUsecase.CREATION:
                 mock_images.append(Image(
                    prompt=prompt_text,
                    url=f"[https://placehold.co/400x400/808080/FFFFFF?text=Concept](https://placehold.co/400x400/808080/FFFFFF?text=Concept)"
                ))


        # Return a structure similar to what the actual API would return for ALTERNATIVES
        return ImageGenerationResultList(
            results=[
                ImageGenerationResult(
                    content_id="mock_content_id_1",
                    generated_images=mock_images
                )
            ]
        )


# Instantiate the mock image_generation tool
image_generation = ImageGeneration()




def generate_team_logos(league_name: str, city_name: str, team_name: str, team_colors: str):
    """
    Generates football team logos and a logo concept based on provided team information.


    Args:
        league_name (str): The name of the football league.
        city_name (str): The city name for the team.
        team_name (str): The team's name (e.g., "Hawks").
        team_colors (str): Comma-separated team colors (e.g., "Tan, Eggshell White, Fuschia").
    """
    full_team_name = f"{city_name} {team_name}"


    # Generate a prompt for the main logo concept and alternatives
    logo_concept_prompt = (
        f"A football team logo concept for the {full_team_name} of the {league_name}, "
        f"featuring a stylized {team_name.lower()} in flight, its wings spread wide, and rendered in a gradient of {team_colors.split(',')[0].strip()} and {team_colors.split(',')[1].strip()}. "
        f"The {team_name.lower()}'s eyes are a piercing {team_colors.split(',')[-1].strip()}, representing the team's intensity and agility. "
        f"The logo is set against a solid background, a blend of {team_colors.split(',')[1].strip()} and a hint of {team_colors.split(',')[0].strip()}. "
        f"Below the {team_name.lower()}, the words \"{full_team_name}\" are written in a bold, {team_colors.split(',')[-1].strip()} font, "
        f"and the words \"{league_name}\" are subtly inscribed in a smaller, {team_colors.split(',')[0].strip()} font beneath. "
        f"The logo exudes power and grace, with a distinct edge that captures the spirit of the team. "
        f"A clean, crisp design in a vintage, collegiate style."
    )


    print(f"Generating logos for {full_team_name}...")


    # Generate 4 alternative logos based on the concept prompt
    # The `ALTERNATIVES` use case typically returns multiple images for a single prompt
    logo_results = image_generation.generate_images(
        prompts=[logo_concept_prompt],
        image_generation_usecase=image_generation.ImageGenerationUsecase.ALTERNATIVES
    )


    if logo_results and logo_results.results:
        # Assuming the first result block contains all the generated images
        generated_images = logo_results.results[0].generated_images
        print("\n--- Generated Football Team Logos ---")
        for i, img in enumerate(generated_images):
            if i < 4:  # Display up to 4 alternative logos
                print(f"Logo {i+1}: {img.url}")
            else:
                break # Stop after 4 logos if more are returned


        # The initial prompt itself serves as the "Football Team Logo Concept"
        print("\n--- Football Team Logo Concept ---")
        print(logo_concept_prompt)


    else:
        print("Failed to generate logos. No results returned.")




# --- Example Usage ---
# You can call this function with your team's details.


# Example 1: Heirsentia Hawks (from your previous request)
generate_team_logos(
    league_name="Heart Football League",
    city_name="Heirsentia",
    team_name="Hawks",
    team_colors="Tan, Eggshell White, Fuschia"
)


# Example 2: Another fictional team
# generate_team_logos(
#     league_name="United Soccer Association",
#     city_name="Silverwood",
#     team_name="Wolves",
#     team_colors="Dark Blue, Silver, Forest Green"
# )


# Example 3: Yet another fictional team
# generate_team_logos(
#     league_name="Coastal Collegiate League",
#     city_name="Portsmouth",
#     team_name="Sharks",
#     team_colors="Aqua Blue, Navy, Coral"
# )


config/


settings.py


core/


practice_squad.py
# core/practice_squad.py


# We need to import the base Player class to inherit from it
try:
    from .player import Player
except ImportError:
    # This way of importing works if you run practice_squad.py directly for testing
    from player import Player
import random # Needed for random skill improvement


class PracticeSquadPlayer(Player):
    """
    Represents a player on the practice squad. These players can be called up to the
    active roster but generally have lower overall ratings and are focused on development.
    Inherits from the base Player class.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int, # Typically lower for practice squad players
                 potential_rating: int,
                 skills: dict,
                 archetype: str = "Developmental",
                 position: str = "GEN", # Generic position
                 player_id: str = None,
                 contract_details: dict = None, # Practice squad contracts are typically different
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a PracticeSquadPlayer instance.
        They have similar attributes to a regular player but might have different contract
        and development considerations.
        """
        # Call the base class constructor, ensuring overall rating is generally lower
        # Cap practice squad OVR at a reasonable max for realism (e.g., 75)
        adjusted_overall_rating = min(overall_rating, 75)


        # Practice squad players typically have a standardized low salary
        # Let's set a default practice squad annual salary, for example, $0.2M (200,000)
        ps_salary = 0.2
        ps_contract_details = {'years': 1, 'total_value': ps_salary, 'annual_salary': ps_salary}
        if contract_details: # If contract_details were provided, merge them but prioritize PS specifics
            ps_contract_details.update(contract_details)
            if 'annual_salary' not in contract_details:
                 ps_contract_details['annual_salary'] = ps_salary
            if 'total_value' not in contract_details:
                ps_contract_details['total_value'] = ps_salary * ps_contract_details['years']




        super().__init__(name, age, height_inches, weight_lbs, adjusted_overall_rating, potential_rating,
                         skills, archetype, position, player_id, ps_contract_details,
                         health_status, injury_details, team_id, salary=ps_salary)


        # Specific attribute for practice squad (e.g., potential for call-up)
        self.is_eligible_for_callup = True
        print(f"DEBUG: {self.name} ({self.position}) is on the practice squad. OVR: {self.overall_rating}, Salary: ${self.salary:,}M")


    def attend_practice(self, coaching_quality: int) -> None:
        """
        Simulates the player attending practice, with a chance to improve skills.


        Args:
            coaching_quality (int): Rating of the coaching staff (0-100).
        """
        # Calculate improvement chance: higher coaching quality and larger gap to potential mean better chance
        # Division by 50.0 scales the potential gap to be a factor, higher means slower improvement
        improvement_factor = (coaching_quality / 100.0) * (self.potential_rating - self.overall_rating)
       
        # A simple threshold for improvement, adjust as needed
        if improvement_factor > 1.0: # If factor is significant enough, consider improvement
            if random.random() < 0.3 + (improvement_factor / 100): # Base 30% chance + factor influence
                skill_to_improve = random.choice(list(self.skills.keys()))
                improvement_amount = random.randint(1, 3) # Small increment
               
                original_skill_value = self.skills[skill_to_improve]
                self.update_skill(skill_to_improve, original_skill_value + improvement_amount)
                # The _recalculate_overall_rating in Player class will be called by update_skill now.
                print(f"DEBUG: {self.name} improved {skill_to_improve} to {self.skills[skill_to_improve]} after practice. New OVR: {self.overall_rating}")
                return # Improvement happened, exit function
       
        print(f"DEBUG: {self.name} attended practice, no significant improvement this time.")




    def get_called_up(self, new_overall_rating: int) -> None:
        """
        Marks the player as called up to the active roster.
        Updates overall rating upon call-up to reflect readiness.
        """
        self.health_status = "Active Roster" # Change status to indicate active roster
        self.is_eligible_for_callup = False # Can't be called up again from PS
        # The new_overall_rating here can be set by the calling system (e.g., GM)
        self.overall_rating = new_overall_rating
        # Update is_injured flag consistent with health status
        self.is_injured = False
        # Practice squad contract ends/changes upon call-up; set a new default contract or require one
        self.contract_details = {'years': 4, 'total_value': 4.0, 'annual_salary': 1.0} # Example standard rookie deal
        self.salary = 1.0 # Update salary attribute
        self.contract_years = 4 # Update contract_years


        print(f"DEBUG: {self.name} has been called up to the active roster! New OVR: {self.overall_rating}, New Salary: ${self.salary:,}M")


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing PracticeSquadPlayer Class ---")
    ps_player1 = PracticeSquadPlayer(
        name="Rookie Prospect",
        age=21,
        height_inches=72,
        weight_lbs=200,
        overall_rating=65, # This will be capped at 75 by the PS constructor
        potential_rating=85,
        skills={'speed': 70, 'catching': 60, 'route_running': 55},
        position="WR"
    )
    print(ps_player1)


    print("\nSimulating practices for Rookie Prospect:") # This line was the problem. Ensure no partial strings.
    for i in range(5):
        ps_player1.attend_practice(coaching_quality=80) # Simulate good coaching


    ps_player1.get_called_up(new_overall_rating=78) # After development, ready for active roster
    print(ps_player1)


    print("\n--- Testing another PracticeSquadPlayer ---")
    ps_player2 = PracticeSquadPlayer(
        name="Veteran Backup",
        age=28,
        height_inches=75,
        weight_lbs=300,
        overall_rating=72, # Capped at 75
        potential_rating=75, # Low potential, so less improvement expected
        skills={'strength': 75, 'blocking': 70, 'awareness': 72},
        position="OG"
    )
    print(ps_player2)
    print("\nSimulating practices for Veteran Backup:")
    for i in range(5):
        ps_player2.attend_practice(coaching_quality=60) # Lower coaching quality
    print("\n--- End of PracticeSquadPlayer testing ---")




draft_class.py
# core/draft_class.py


from core.player import Player
import random


class DraftProspect(Player):
    """
    Represents a Draft Prospect player. These players are unassigned and have
    varying overall ratings and potentials, making them candidates for the draft.
    Inherits from the base Player class.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int, # Initial rating before professional training
                 potential_rating: int,
                 skills: dict,
                 archetype: str = "Raw Talent",
                 position: str = "GEN", # Generic position
                 player_id: str = None,
                 contract_details: dict = None, # No contract yet
                 health_status: str = "Eligible", # Status before being drafted
                 injury_details: dict = None): # Can have pre-draft injuries
        """
        Initializes a DraftProspect instance.
        They represent players entering the league.
        """
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, position, player_id, contract_details,
                         health_status, injury_details)


        self.draft_stock = random.randint(1, 100) # Simple representation of draft stock
        print(f"DEBUG: {self.name} ({self.position}) is a draft prospect. OVR: {self.overall_rating}, Potential: {self.potential_rating}")


    def participate_combine(self) -> dict:
        """
        Simulates the prospect participating in the pre-draft combine.
        Returns a dictionary of combine results.
        """
        combine_results = {
            '40_yard_dash': round(9.0 - (self.skills.get('speed', 50) / 20.0), 2),
            'bench_press_reps': int(self.skills.get('strength', 50) / 5.0),
            'shuttle_run': round(8.0 - (self.skills.get('agility', 50) / 15.0), 2)
        }
        print(f"DEBUG: {self.name} combine results: {combine_results}")
        return combine_results


    def get_drafted(self, team_id: str, round_picked: int, pick_number: int) -> None:
        """
        Marks the prospect as drafted by a team.
        """
        self.assign_to_team(team_id)
        self.health_status = "Signed" # Changes from Eligible to Signed
        self.contract_details = {
            "draft_round": round_picked,
            "draft_pick": pick_number,
            "salary_basis": "Rookie Scale" # Rookies typically have predetermined contracts
        }
        print(f"DEBUG: {self.name} was drafted by {team_id} in Round {round_picked}, Pick {pick_number}.")


class DraftClass:
    """
    Manages a collection of DraftProspects for a given season.
    """
    def __init__(self, year: int, num_prospects: int = 250):
        self.year = year
        self.prospects = self._generate_draft_class(num_prospects)
        print(f"DEBUG: Created {self.year} Draft Class with {len(self.prospects)} prospects.")


    def _generate_draft_class(self, num_prospects: int) -> list[DraftProspect]:
        """
        Generates a list of random DraftProspects. This is a placeholder for more
        sophisticated generation logic.
        """
        generated_prospects = []
        positions = ["QB", "HB", "WR", "TE", "OG", "DE", "CB", "LB", "SS", "FS", "K", "P", "LS"]
        for i in range(num_prospects):
            name = f"Prospect {i+1}"
            age = random.randint(20, 23)
            height = random.randint(68, 80) # 5'8" to 6'8"
            weight = random.randint(180, 320)
            overall = random.randint(50, 85) # Prospects can vary widely
            potential = random.randint(overall + 5, 99)
            position = random.choice(positions)
           
            # Simple placeholder skills
            skills = {
                'speed': random.randint(40, 99),
                'strength': random.randint(40, 99),
                'agility': random.randint(40, 99)
            }
           
            generated_prospects.append(
                DraftProspect(name, age, height, weight, overall, potential, skills, position=position)
            )
        return generated_prospects


    def get_top_prospects(self, count: int = 10) -> list[DraftProspect]:
        """
        Returns the top prospects based on overall rating and potential.
        """
        sorted_prospects = sorted(self.prospects, key=lambda p: (p.overall_rating * 0.6 + p.potential_rating * 0.4), reverse=True)
        print(f"DEBUG: Retrieved top {count} prospects for {self.year} class.")
        return sorted_prospects[:count]


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing DraftProspect & DraftClass ---")
    current_draft_class = DraftClass(year=2026, num_prospects=100)
    top_10 = current_draft_class.get_top_prospects(10)
    for prospect in top_10:
        print(prospect)
        prospect.participate_combine()


    # Simulate drafting a player
    if top_10:
        first_pick = top_10[0]
        first_pick.get_drafted("HFLEagles", 1, 1)
        print(first_pick)


free_agent.py
# core/free_agent.py


from core.player import Player
import random


class FreeAgent(Player):
    """
    Represents a Free Agent player. These players are not currently under contract
    with any team and can be signed. They often have established ratings.
    Inherits from the base Player class.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int, # Potential might be closer to current OVR for veterans
                 skills: dict,
                 archetype: str = "Veteran", # e.g., 'Veteran', 'Journeyman', 'Rising Star'
                 position: str = "GEN", # Generic position
                 player_id: str = None,
                 contract_demands: dict = None, # What the FA expects for a contract
                 health_status: str = "Available", # Status for free agents
                 injury_details: dict = None):
        """
        Initializes a FreeAgent instance.
        Free agents are available for signing by any team.
        """
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, position, player_id, None, # No current contract
                         health_status, injury_details)


        self.contract_demands = contract_demands if contract_demands is not None else self._generate_demands()
        print(f"DEBUG: {self.name} ({self.position}) is a free agent. OVR: {self.overall_rating}")


    def _generate_demands(self) -> dict:
        """
        Generates random contract demands based on player's overall rating and age.
        This is a simplified example.
        """
        base_salary = self.overall_rating * 100_000 # Base salary linked to OVR
        years = random.randint(1, max(1, 5 - (self.age - 28))) # Shorter deals for older players
        if years < 1: years = 1 # Minimum 1 year
       
        # Add some randomness to salary demand
        salary_demand = int(base_salary * (1 + random.uniform(-0.1, 0.2)))
       
        return {
            'years': years,
            'salary_per_year': salary_demand,
            'asking_role': "Starter" if self.overall_rating > 80 else "Rotation"
        }


    def evaluate_offer(self, offer: dict) -> bool:
        """
        Evaluates a contract offer from a team.


        Args:
            offer (dict): A dictionary with 'years' and 'salary_per_year'.


        Returns:
            bool: True if the offer is acceptable, False otherwise.
        """
        demanded_salary = self.contract_demands['salary_per_year'] * self.contract_demands['years']
        offered_salary = offer.get('salary_per_year', 0) * offer.get('years', 0)


        if offered_salary >= demanded_salary * 0.9: # Accept if within 10% of demand
            print(f"DEBUG: {self.name} found the offer acceptable! (Offered: ${offered_salary}, Demanded: ${demanded_salary})")
            return True
        else:
            print(f"DEBUG: {self.name} rejected the offer. (Offered: ${offered_salary}, Demanded: ${demanded_salary})")
            return False


    def sign_contract(self, team_id: str, contract_terms: dict) -> None:
        """
        Signs the free agent to a team with specified contract terms.
        """
        self.assign_to_team(team_id)
        self.health_status = "Signed"
        self.contract_details = contract_terms
        print(f"DEBUG: {self.name} signed with {team_id} for {contract_terms.get('years')} years at ${contract_terms.get('salary_per_year'):,} per year.")


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing FreeAgent Class ---")
    fa1 = FreeAgent(
        name="Star Veteran QB",
        age=32,
        height_inches=76,
        weight_lbs=230,
        overall_rating=88,
        potential_rating=88,
        skills={'throwing_power': 90, 'accuracy': 92}
    )
    print(fa1)
    offer1 = {'years': 2, 'salary_per_year': 18_000_000}
    if fa1.evaluate_offer(offer1):
        fa1.sign_contract("HFLChiefs", offer1)
    else:
        print(f"INFO: {fa1.name} is still available.")


    fa2 = FreeAgent(
        name="Promising Young RB",
        age=24,
        height_inches=70,
        weight_lbs=210,
        overall_rating=78,
        potential_rating=89,
        skills={'speed': 85, 'agility': 82}
    )
    print(fa2)
    offer2 = {'years': 3, 'salary_per_year': 3_000_000}
    if fa2.evaluate_offer(offer2):
        fa2.sign_contract("HFLFalcons", offer2)
    else:
        print(f"INFO: {fa2.name} is still available.")


quarterback.py
# core/quarterback.py


from core.player import Player


class Quarterback(Player):
    """
    Represents a Quarterback player in the Heart Football League.
    Inherits from the base Player class and adds QB-specific skills and behaviors.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include QB-specific skills
                 archetype: str = "Pocket Passer", # e.g., 'Pocket Passer', 'Scrambler', 'Dual Threat'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a Quarterback instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'throwing_power', 'accuracy', 'awareness', 'scrambling'.
            archetype (str): QB-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "QB", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure QB-specific skills are present, or add default if missing
        self.skills.setdefault('throwing_power', 75)
        self.skills.setdefault('accuracy', 75)
        self.skills.setdefault('awareness', 70)
        self.skills.setdefault('scrambling', 60) # Ability to run with the ball


    def throw_pass(self, target_distance: int, defender_presence: str = "low") -> bool:
        """
        Simulates throwing a pass. Success depends on accuracy, throwing power, and defender presence.


        Args:
            target_distance (int): The distance of the throw in yards.
            defender_presence (str): 'low', 'medium', or 'high' indicating how covered the target is.


        Returns:
            bool: True if the pass is successful, False otherwise.
        """
        base_accuracy_mod = self.skills['accuracy'] / 100.0
        throw_power_mod = self.skills['throwing_power'] / 100.0


        distance_penalty = max(0, (target_distance - 20) / 50.0) # Penalty for long throws
        defender_penalty = 0
        if defender_presence == "medium":
            defender_penalty = 0.15
        elif defender_presence == "high":
            defender_penalty = 0.30


        # Simple success calculation
        success_chance = (base_accuracy_mod * throw_power_mod) - distance_penalty - defender_penalty


        if success_chance > 0.5: # A simple threshold
            print(f"DEBUG: {self.name} throws a successful pass {target_distance} yards with {defender_presence} defender presence. ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name}'s pass failed at {target_distance} yards with {defender_presence} defender presence. ({success_chance:.2f})")
            return False


    def scramble(self) -> int:
        """
        Simulates the QB scrambling. Returns yards gained.
        Yards gained depend on scrambling skill and some randomness.
        """
        yards_gained = int((self.skills['scrambling'] / 100.0) * (5 + (self.skills['speed'] / 10))) # Example formula
        print(f"DEBUG: {self.name} scrambles for {yards_gained} yards.")
        return yards_gained


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing Quarterback Class ---")
    qb1 = Quarterback(
        name="Ace Arm",
        age=24,
        height_inches=75,
        weight_lbs=225,
        overall_rating=92,
        potential_rating=95,
        skills={
            'speed': 70,
            'agility': 75,
            'throwing_power': 95,
            'accuracy': 90,
            'awareness': 92,
            'scrambling': 80
        },
        archetype="Dual Threat"
    )
    print(qb1)
    qb1.throw_pass(30, "low")
    qb1.throw_pass(45, "medium")
    qb1.scramble()


    qb2 = Quarterback(
        name="Pocket Protector",
        age=30,
        height_inches=76,
        weight_lbs=230,
        overall_rating=88,
        potential_rating=88,
        skills={
            'speed': 50,
            'agility': 55,
            'throwing_power': 88,
            'accuracy': 92,
            'awareness': 95,
            'scrambling': 40
        },
        archetype="Pocket Passer"
    )
    print(qb2)
    qb2.throw_pass(25, "low")
    qb2.throw_pass(50, "high") # Likely to fail due to high defender presence and distance


fullback.py
# core/fullback.py


from core.player import Player


class Fullback(Player):
    """
    Represents a Fullback player in the Heart Football League.
    Inherits from the base Player class and specializes in blocking and short-yardage running.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include FB-specific skills
                 archetype: str = "Lead Blocker", # e.g., 'Lead Blocker', 'Goal-line Back'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a Fullback instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'blocking', 'strength', 'run_power', 'carrying'.
            archetype (str): FB-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "FB", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure FB-specific skills are present, or add default if missing
        self.skills.setdefault('blocking', 85)      # Primary skill: blocking for RBs
        self.skills.setdefault('strength', 88)      # Crucial for impactful blocks
        self.skills.setdefault('run_power', 70)     # Ability to gain tough yards
        self.skills.setdefault('carrying', 75)      # Fumbling tendency, important for short carries


    def lead_block(self, defender_skill: int) -> bool:
        """
        Simulates the Fullback leading a block for a running play.


        Args:
            defender_skill (int): The overall skill of the opposing defender to be blocked.


        Returns:
            bool: True if the block is effective and creates a lane, False otherwise.
        """
        base_block_success = (self.skills['blocking'] + self.skills['strength']) / 200.0
        defender_modifier = defender_skill / 150.0 # Higher defender skill makes block harder


        success_chance = base_block_success - defender_modifier


        if success_chance > 0.65: # Threshold for a successful lead block
            print(f"DEBUG: {self.name} delivered a crushing lead block, opening a lane! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} struggled to make an effective lead block. ({success_chance:.2f})")
            return False


    def gain_short_yardage(self, defender_skill: int) -> int:
        """
        Simulates the Fullback carrying the ball for short yardage.


        Args:
            defender_skill (int): The overall skill of the defending player(s) to be broken.


        Returns:
            int: Yards gained on the short-yardage run.
        """
        base_gain = (self.skills['run_power'] / 100.0) * 2 + (self.skills['strength'] / 100.0) * 1 # Max 3 yards base
        break_tackle_chance = (self.skills['strength'] / 100.0) - (defender_skill / 200.0)


        yards_gained = int(base_gain)
        if break_tackle_chance > 0.4: # Low threshold for breaking a short-yardage tackle
            yards_gained += 1
            print(f"DEBUG: {self.name} powered through a tackle!")


        yards_gained = max(0, min(3, yards_gained)) # Ensure gain is between 0 and 3 for short yardage


        print(f"DEBUG: {self.name} gained {yards_gained} yards on a short-yardage carry.")
        return yards_gained


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing Fullback Class ---")
    fb1 = Fullback(
        name="Block Buster",
        age=27,
        height_inches=73,
        weight_lbs=260,
        overall_rating=88,
        potential_rating=88,
        skills={
            'blocking': 90,
            'strength': 92,
            'run_power': 70,
            'carrying': 80
        },
        archetype="Lead Blocker"
    )
    print(fb1)
    fb1.lead_block(defender_skill=85)
    fb1.gain_short_yardage(defender_skill=70)


    fb2 = Fullback(
        name="Reliable Rusher",
        age=24,
        height_inches=72,
        weight_lbs=245,
        overall_rating=82,
        potential_rating=87,
        skills={
            'blocking': 78,
            'strength': 85,
            'run_power': 78,
            'carrying': 85
        },
        archetype="Goal-line Back"
    )
    print(fb2)
    fb2.lead_block(defender_skill=90) # Might struggle
    fb2.gain_short_yardage(defender_skill=80)


halfback.py
# core/halfback.py


from core.player import Player


class HalfBack(Player):
    """
    Represents a Running Back player in the Heart Football League.
    Inherits from the base Player class and adds HB-specific skills and behaviors.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include HB-specific skills
                 archetype: str = "Elusive Back", # e.g., 'Power Back', 'Elusive Back', 'Receiving Back'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a HalfBack instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'speed', 'agility', 'strength', 'break_tackle', 'carrying'.
            archetype (str): HB-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "HB", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure HB-specific skills are present, or add default if missing
        self.skills.setdefault('speed', 70)
        self.skills.setdefault('agility', 70)
        self.skills.setdefault('strength', 70)
        self.skills.setdefault('break_tackle', 65) # Chance to break free from tackles
        self.skills.setdefault('carrying', 80)    # Fumbling tendency


    def run_with_ball(self, defender_skill: int, blockers_present: bool = True) -> int:
        """
        Simulates a running play. Returns yards gained.


        Args:
            defender_skill (int): The overall skill of the defending player(s) (0-100).
            blockers_present (bool): Whether offensive blockers are helping.


        Returns:
            int: Yards gained on the run.
        """
        base_yards = (self.skills['speed'] / 100.0) * 8 + (self.skills['agility'] / 100.0) * 4 # Base gain
        break_tackle_chance = (self.skills['break_tackle'] / 100.0) - (defender_skill / 200.0)


        if blockers_present:
            base_yards += 2 # Bonus for blockers


        yards_gained = int(base_yards)
        if break_tackle_chance > 0.5 and self.skills['strength'] > defender_skill:
            yards_gained += (self.skills['strength'] / 20) # Bonus for breaking tackle
            print(f"DEBUG: {self.name} breaks a tackle!")


        # Add a bit of randomness
        yards_gained += int((base_yards / 5) * (0.5 - 0.5)) # Simple +/- 10% randomness


        yards_gained = max(0, yards_gained) # Ensure non-negative yards


        print(f"DEBUG: {self.name} ran for {yards_gained} yards.")
        return yards_gained


    def secure_ball(self) -> bool:
        """
        Simulates securing the ball to prevent fumbles.
        Returns True if ball is secured (no fumble), False if fumble risk.
        """
        fumble_chance = 1 - (self.skills['carrying'] / 100.0)
        if fumble_chance > 0.1: # Simple threshold for fumble risk
            print(f"DEBUG: {self.name} handles the ball securely.")
            return True
        else:
            print(f"DEBUG: {self.name} is at risk of fumbling!")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing HalfBack Class ---")
    HB1 = HalfBack(
        name="Swift Runner",
        age=21,
        height_inches=69,
        weight_lbs=205,
        overall_rating=90,
        potential_rating=94,
        skills={
            'speed': 92,
            'agility': 90,
            'strength': 75,
            'break_tackle': 85,
            'carrying': 90
        },
        archetype="Elusive Back"
    )
    print(HB1)
    HB1.run_with_ball(defender_skill=80, blockers_present=True)
    HB1.secure_ball()


    HB2 = HalfBack(
        name="Powerhouse",
        age=26,
        height_inches=73,
        weight_lbs=240,
        overall_rating=87,
        potential_rating=87,
        skills={
            'speed': 70,
            'agility': 65,
            'strength': 95,
            'break_tackle': 80,
            'carrying': 85
        },
        archetype="Power Back"
    )
    print(HB2)
    HB2.run_with_ball(defender_skill=90, blockers_present=False)
    HB2.secure_ball()


wide_receiver.py
# core/wide_receiver.py


from core.player import Player


class WideReceiver(Player):
    """
    Represents a Wide Receiver player in the Heart Football League.
    Inherits from the base Player class and adds WR-specific skills and behaviors.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include WR-specific skills
                 archetype: str = "Route Runner", # e.g., 'Route Runner', 'Deep Threat', 'Possession', 'Red Zone Threat'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a WideReceiver instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'speed', 'agility', 'route_running', 'catching', 'jumping'.
            archetype (str): WR-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "WR", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure WR-specific skills are present, or add default if missing
        self.skills.setdefault('speed', 80)
        self.skills.setdefault('agility', 75)
        self.skills.setdefault('route_running', 70) # Ability to run crisp routes
        self.skills.setdefault('catching', 78)      # Hands and securing the ball
        self.skills.setdefault('jumping', 70)       # Vertical leap for contested catches


    def run_route(self, route_type: str) -> bool:
        """
        Simulates running a specific route. Success depends on route_running skill.


        Args:
            route_type (str): The type of route (e.g., 'go', 'slant', 'out', 'post').


        Returns:
            bool: True if the route is run effectively, False otherwise.
        """
        # A more complex simulation would involve route effectiveness vs. defender coverage
        route_effectiveness_mod = self.skills['route_running'] / 100.0
       
        # Simple example: some routes are harder than others
        difficulty_mod = 1.0
        if route_type in ['go', 'post']:
            difficulty_mod = 0.9
        elif route_type in ['slant', 'out']:
            difficulty_mod = 1.1


        success_chance = route_effectiveness_mod * difficulty_mod


        if success_chance > 0.65: # Threshold for effective route
            print(f"DEBUG: {self.name} ran a sharp {route_type} route. ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name}'s {route_type} route was not effective. ({success_chance:.2f})")
            return False


    def attempt_catch(self, pass_difficulty: str) -> bool:
        """
        Simulates attempting to catch a pass. Success depends on catching, jumping, and pass difficulty.


        Args:
            pass_difficulty (str): 'easy', 'medium', or 'hard' indicating pass quality/coverage.


        Returns:
            bool: True if the catch is successful, False otherwise.
        """
        base_catch_chance = self.skills['catching'] / 100.0
        jump_mod = self.skills['jumping'] / 100.0 if pass_difficulty == 'hard' else 0 # Jumping matters more on hard passes


        difficulty_penalty = 0
        if pass_difficulty == "medium":
            difficulty_penalty = 0.15
        elif pass_difficulty == "hard":
            difficulty_penalty = 0.30


        # Simple success calculation
        success_chance = (base_catch_chance + jump_mod / 2) - difficulty_penalty


        if success_chance > 0.5:
            print(f"DEBUG: {self.name} made the {pass_difficulty} catch! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} dropped the {pass_difficulty} pass. ({success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing WideReceiver Class ---")
    wr1 = WideReceiver(
        name="Speedy Gonzales",
        age=23,
        height_inches=72,
        weight_lbs=190,
        overall_rating=91,
        potential_rating=93,
        skills={
            'speed': 95,
            'agility': 92,
            'route_running': 88,
            'catching': 85,
            'jumping': 80
        },
        archetype="Deep Threat"
    )
    print(wr1)
    wr1.run_route('go')
    wr1.attempt_catch('medium')
    wr1.attempt_catch('hard')


    wr2 = WideReceiver(
        name="Reliable Hands",
        age=28,
        height_inches=74,
        weight_lbs=210,
        overall_rating=87,
        potential_rating=87,
        skills={
            'speed': 75,
            'agility': 70,
            'route_running': 90,
            'catching': 92,
            'jumping': 70
        },
        archetype="Possession"
    )
    print(wr2)
    wr2.run_route('slant')
    wr2.attempt_catch('easy')
    wr2.attempt_catch('hard') # Might struggle on hard due to lower jumping


tightend.py
# core/tightend.py


from core.player import Player


class TightEnd(Player):
    """
    Represents a Tight End player in the Heart Football League.
    Inherits from the base Player class and adds TE-specific skills and behaviors,
    balancing blocking and receiving abilities.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include TE-specific skills
                 archetype: str = "Hybrid", # e.g., 'Blocking TE', 'Receiving TE', 'Hybrid'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a TightEnd instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'blocking', 'route_running', 'catching', 'strength', 'speed'.
            archetype (str): TE-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "TE", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure TE-specific skills are present, or add default if missing
        self.skills.setdefault('blocking', 70)      # Ability to block for run/pass
        self.skills.setdefault('route_running', 65) # Ability to run routes
        self.skills.setdefault('catching', 75)      # Hands and securing the ball
        self.skills.setdefault('strength', 75)      # Important for blocking and breaking tackles
        self.skills.setdefault('speed', 60)         # Relative speed for a TE


    def execute_block(self, defender_skill: int, block_type: str = "run_block") -> bool:
        """
        Simulates the Tight End executing a block.


        Args:
            defender_skill (int): The overall skill of the opposing defender.
            block_type (str): 'run_block' or 'pass_block'.


        Returns:
            bool: True if the block is effective, False otherwise.
        """
        base_block_chance = (self.skills['blocking'] + self.skills['strength']) / 200.0
        defender_modifier = defender_skill / 150.0 # Higher defender skill makes block harder


        success_chance = base_block_chance - defender_modifier


        if success_chance > 0.5: # Simple threshold for effective block
            print(f"DEBUG: {self.name} executed an effective {block_type.replace('_', ' ')} block! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name}'s {block_type.replace('_', ' ')} block was not effective. ({success_chance:.2f})")
            return False


    def attempt_reception(self, pass_difficulty: str) -> bool:
        """
        Simulates attempting to catch a pass. Similar to WR, but uses TE-specific skills.


        Args:
            pass_difficulty (str): 'easy', 'medium', or 'hard' indicating pass quality/coverage.


        Returns:
            bool: True if the catch is successful, False otherwise.
        """
        base_catch_chance = self.skills['catching'] / 100.0
        route_mod = self.skills['route_running'] / 200.0 # Better route running helps with receptions


        difficulty_penalty = 0
        if pass_difficulty == "medium":
            difficulty_penalty = 0.15
        elif pass_difficulty == "hard":
            difficulty_penalty = 0.30


        success_chance = (base_catch_chance + route_mod) - difficulty_penalty


        if success_chance > 0.5:
            print(f"DEBUG: {self.name} made the {pass_difficulty} reception! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} dropped the {pass_difficulty} pass. ({success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing TightEnd Class ---")
    te1 = TightEnd(
        name="All-Purpose TE",
        age=25,
        height_inches=76,
        weight_lbs=250,
        overall_rating=88,
        potential_rating=91,
        skills={
            'blocking': 85,
            'route_running': 78,
            'catching': 82,
            'strength': 88,
            'speed': 68
        },
        archetype="Hybrid"
    )
    print(te1)
    te1.execute_block(defender_skill=80, block_type="run_block")
    te1.attempt_reception('medium')
    te1.attempt_reception('hard')


    te2 = TightEnd(
        name="Chain Mover",
        age=29,
        height_inches=75,
        weight_lbs=240,
        overall_rating=85,
        potential_rating=85,
        skills={
            'blocking': 70,
            'route_running': 85,
            'catching': 90,
            'strength': 75,
            'speed': 65
        },
        archetype="Receiving TE"
    )
    print(te2)
    te2.execute_block(defender_skill=90, block_type="pass_block") # Might struggle with blocking
    te2.attempt_reception('easy')


offensive_lineman.py
# core/offensive_lineman.py


from core.player import Player


class OffensiveLineman(Player):
    """
    Represents an Offensive Lineman (Tackle, Guard, Center) in the Heart Football League.
    Inherits from the base Player class and focuses on blocking skills.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include OL-specific skills
                 archetype: str = "Pass Blocker", # e.g., 'Run Blocker', 'Pass Blocker', 'Zone Blocker'
                 position: str = "OG", # Can be 'LT', 'LG', 'C', 'RG', 'RT'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes an OffensiveLineman instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'strength', 'run_block', 'pass_block', 'awareness', 'impact_blocking'.
            archetype (str): OL-specific archetype.
            position (str): The specific OL position.
        """
        # Call the base class constructor
        valid_positions = ["LT", "LG", "C", "RG", "RT", "OG", "OT"] # Add OG, OT as general
        if position not in valid_positions:
            raise ValueError(f"OffensiveLineman position must be one of {valid_positions}.")
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, position, player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure OL-specific skills are present, or add default if missing
        self.skills.setdefault('strength', 85)         # Raw power
        self.skills.setdefault('run_block', 80)       # Effectiveness in run blocking
        self.skills.setdefault('pass_block', 80)      # Effectiveness in pass blocking
        self.skills.setdefault('awareness', 70)       # Ability to read defense/blitzes
        self.skills.setdefault('impact_blocking', 75) # Ability to pancake or clear paths


    def block_defender(self, defender_skill: int, play_type: str) -> bool:
        """
        Simulates blocking a defensive player.


        Args:
            defender_skill (int): The overall skill of the opposing defensive player.
            play_type (str): 'run' or 'pass', indicating the type of play.


        Returns:
            bool: True if the block is successful, False otherwise.
        """
        if play_type == 'run':
            block_skill = self.skills['run_block']
        elif play_type == 'pass':
            block_skill = self.skills['pass_block']
        else:
            raise ValueError("play_type must be 'run' or 'pass'.")


        base_block_success = (block_skill + self.skills['strength']) / 200.0
        defender_counter_modifier = defender_skill / 150.0 # Higher defender skill makes block harder


        success_chance = base_block_success - defender_counter_modifier


        if success_chance > 0.6: # Threshold for a successful block
            print(f"DEBUG: {self.name} made a strong block for the {play_type} play! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} struggled with the block on the {play_type} play. ({success_chance:.2f})")
            return False


    def protect_quarterback(self, pass_rusher_skill: int) -> bool:
        """
        Specifically simulates pass protection.


        Args:
            pass_rusher_skill (int): The pass rush skill of the opposing defender.


        Returns:
            bool: True if QB is protected, False if pressure is allowed.
        """
        # This leverages pass_block skill directly
        return self.block_defender(pass_rusher_skill, 'pass')


    def open_running_lane(self, defender_run_stuff_skill: int) -> bool:
        """
        Specifically simulates opening a running lane.


        Args:
            defender_run_stuff_skill (int): The run defense skill of the opposing defender.


        Returns:
            bool: True if a lane is opened, False otherwise.
        """
        # This leverages run_block skill directly
        return self.block_defender(defender_run_stuff_skill, 'run')


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing OffensiveLineman Class ---")
    og1 = OffensiveLineman(
        name="Iron Wall Guard",
        age=26,
        height_inches=76,
        weight_lbs=310,
        overall_rating=90,
        potential_rating=92,
        skills={
            'strength': 92,
            'run_block': 90,
            'pass_block': 85,
            'awareness': 88,
            'impact_blocking': 87
        },
        archetype="Run Blocker",
        position="OG"
    )
    print(og1)
    og1.protect_quarterback(pass_rusher_skill=80)
    og1.open_running_lane(defender_run_stuff_skill=85)


    c1 = OffensiveLineman(
        name="Smart Center",
        age=28,
        height_inches=74,
        weight_lbs=300,
        overall_rating=87,
        potential_rating=87,
        skills={
            'strength': 85,
            'run_block': 82,
            'pass_block': 88,
            'awareness': 92,
            'impact_blocking': 80
        },
        archetype="Zone Blocker",
        position="C"
    )
    print(c1)
    c1.protect_quarterback(pass_rusher_skill=90) # Challenging pass rusher
    c1.open_running_lane(defender_run_stuff_skill=75)


defensive_lineman.py
# core/defensive_lineman.py


from core.player import Player


class DefensiveLineman(Player):
    """
    Represents a Defensive Lineman (DE or DT) player in the Heart Football League.
    Inherits from the base Player class and adds DL-specific skills and behaviors.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include DL-specific skills
                 archetype: str = "Pass Rusher", # e.g., 'Run Stopper', 'Pass Rusher', 'Hybrid'
                 position: str = "DE", # Can be 'DE' (Defensive End) or 'DT' (Defensive Tackle)
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a DefensiveLineman instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'strength', 'block_shedding', 'pass_rush_moves', 'run_defense', 'tackling'.
            archetype (str): DL-specific archetype.
            position (str): The specific DL position ('DE' or 'DT').
        """
        # Call the base class constructor
        if position not in ["DE", "DT"]:
            raise ValueError("DefensiveLineman position must be 'DE' or 'DT'.")
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, position, player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure DL-specific skills are present, or add default if missing
        self.skills.setdefault('strength', 80)
        self.skills.setdefault('block_shedding', 75) # Ability to disengage from blockers
        self.skills.setdefault('pass_rush_moves', 70) # Finesse/power moves for rushing QB
        self.skills.setdefault('run_defense', 75)    # Ability to stop ball carriers
        self.skills.setdefault('tackling', 80)       # Sureness of tackling


    def attempt_sack(self, offensive_lineman_skill: int) -> bool:
        """
        Simulates attempting to sack the quarterback.


        Args:
            offensive_lineman_skill (int): The overall skill of the opposing offensive lineman.


        Returns:
            bool: True if a sack is successful, False otherwise.
        """
        base_rush_chance = (self.skills['pass_rush_moves'] + self.skills['strength']) / 200.0
        ol_block_modifier = offensive_lineman_skill / 150.0 # Higher OL skill reduces chance


        success_chance = base_rush_chance - ol_block_modifier


        if success_chance > 0.55: # Threshold for a successful sack attempt
            print(f"DEBUG: {self.name} got past the O-Line for a potential sack! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} was blocked by the O-Line. ({success_chance:.2f})")
            return False


    def stop_run(self, running_back_skill: int) -> bool:
        """
        Simulates stopping a run play.


        Args:
            running_back_skill (int): The overall skill of the opposing running back.


        Returns:
            bool: True if the run is stopped effectively (minimal gain), False otherwise.
        """
        base_stop_chance = (self.skills['run_defense'] + self.skills['block_shedding']) / 200.0
        rb_evasion_modifier = running_back_skill / 200.0


        success_chance = base_stop_chance - rb_evasion_modifier


        if success_chance > 0.6: # Threshold for effective run stop
            print(f"DEBUG: {self.name} made a solid run stop! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} struggled to stop the run. ({success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing DefensiveLineman Class ---")
    de1 = DefensiveLineman(
        name="Edge Rusher",
        age=25,
        height_inches=77,
        weight_lbs=260,
        overall_rating=90,
        potential_rating=92,
        skills={
            'strength': 88,
            'block_shedding': 85,
            'pass_rush_moves': 92,
            'run_defense': 80,
            'tackling': 88
        },
        archetype="Pass Rusher",
        position="DE"
    )
    print(de1)
    de1.attempt_sack(offensive_lineman_skill=85)
    de1.stop_run(running_back_skill=88)


    dt1 = DefensiveLineman(
        name="Interior Wall",
        age=28,
        height_inches=76,
        weight_lbs=320,
        overall_rating=87,
        potential_rating=87,
        skills={
            'strength': 95,
            'block_shedding': 88,
            'pass_rush_moves': 70,
            'run_defense': 90,
            'tackling': 85
        },
        archetype="Run Stopper",
        position="DT"
    )
    print(dt1)
    dt1.attempt_sack(offensive_lineman_skill=90)
    dt1.stop_run(running_back_skill=80)


outside_linebacker.py
# core/outside_linebacker.py


from core.player import Player


class OutsideLinebacker(Player):
    """
    Represents an Outside Linebacker (OLB) player in the Heart Football League.
    Inherits from the base Player class and excels at pass rushing, run stopping, and coverage.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include OLB-specific skills
                 archetype: str = "Edge Rusher", # e.g., 'Edge Rusher', 'Coverage OLB', 'Hybrid'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes an OutsideLinebacker instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'pass_rush', 'tackling', 'run_stuff', 'zone_coverage', 'man_coverage', 'speed'.
            archetype (str): OLB-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "OLB", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure OLB-specific skills are present, or add default if missing
        self.skills.setdefault('pass_rush', 75)      # Ability to pressure the QB
        self.skills.setdefault('tackling', 80)       # Sureness of tackling
        self.skills.setdefault('run_stuff', 78)      # Effectiveness in stopping run plays
        self.skills.setdefault('zone_coverage', 70)  # Effectiveness in zone pass defense
        self.skills.setdefault('man_coverage', 65)   # Effectiveness in man-to-man pass defense
        self.skills.setdefault('speed', 70)          # Speed to cover ground and get to the QB


    def rush_passer(self, offensive_lineman_skill: int) -> bool:
        """
        Simulates the OLB rushing the passer.


        Args:
            offensive_lineman_skill (int): The overall skill of the opposing offensive lineman.


        Returns:
            bool: True if pressure is applied/sack opportunity, False otherwise.
        """
        base_rush_success = (self.skills['pass_rush'] + self.skills['speed']) / 200.0
        ol_block_modifier = offensive_lineman_skill / 150.0


        success_chance = base_rush_success - ol_block_modifier


        if success_chance > 0.55:
            print(f"DEBUG: {self.name} got good pressure on the QB! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} was held by the O-Line. ({success_chance:.2f})")
            return False


    def defend_run(self, running_back_skill: int, blockers_present: bool = False) -> bool:
        """
        Simulates the OLB defending against a run play.


        Args:
            running_back_skill (int): The overall skill of the opposing running back.
            blockers_present (bool): Whether offensive blockers are engaging the OLB.


        Returns:
            bool: True if the run is contained/stopped, False if the RB gets past.
        """
        base_run_stuff = self.skills['run_stuff'] / 100.0
        rb_evasion = running_back_skill / 200.0
        block_penalty = 0.15 if blockers_present else 0


        success_chance = base_run_stuff - rb_evasion - block_penalty


        if success_chance > 0.5:
            print(f"DEBUG: {self.name} contained the run effectively! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} struggled to contain the run. ({success_chance:.2f})")
            return False


    def drop_into_coverage(self, receiver_skill: int, zone: bool = True) -> bool:
        """
        Simulates the OLB dropping into pass coverage.


        Args:
            receiver_skill (int): The overall skill of the receiver in their zone/man.
            zone (bool): True for zone coverage, False for man coverage.


        Returns:
            bool: True if coverage is effective, False otherwise.
        """
        if zone:
            cover_skill = self.skills['zone_coverage']
        else:
            cover_skill = self.skills['man_coverage']


        base_cover_chance = cover_skill / 100.0
        receiver_modifier = receiver_skill / 150.0


        success_chance = base_cover_chance - receiver_modifier


        if success_chance > 0.5:
            print(f"DEBUG: {self.name} provided effective {'zone' if zone else 'man'} coverage! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} was beaten in coverage. ({success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing OutsideLinebacker Class ---")
    olb1 = OutsideLinebacker(
        name="Versatile Edge",
        age=25,
        height_inches=75,
        weight_lbs=245,
        overall_rating=90,
        potential_rating=92,
        skills={
            'pass_rush': 90,
            'tackling': 88,
            'run_stuff': 85,
            'zone_coverage': 75,
            'man_coverage': 70,
            'speed': 80
        },
        archetype="Hybrid"
    )
    print(olb1)
    olb1.rush_passer(offensive_lineman_skill=85)
    olb1.defend_run(running_back_skill=80, blockers_present=True)
    olb1.drop_into_coverage(receiver_skill=88, zone=True)


    olb2 = OutsideLinebacker(
        name="Coverage Specialist",
        age=23,
        height_inches=74,
        weight_lbs=230,
        overall_rating=85,
        potential_rating=90,
        skills={
            'pass_rush': 70,
            'tackling': 80,
            'run_stuff': 70,
            'zone_coverage': 88,
            'man_coverage': 82,
            'speed': 85
        },
        archetype="Coverage OLB"
    )
    print(olb2)
    olb2.rush_passer(offensive_lineman_skill=80) # Less effective at rushing
    olb2.drop_into_coverage(receiver_skill=90, zone=False)


middle_linebacker.py
# core/middle_linebacker.py


from core.player import Player


class MiddleLinebacker(Player):
    """
    Represents a Middle Linebacker (MLB) player in the Heart Football League.
    Inherits from the base Player class and specializes in run defense,
    tackling, and central zone coverage. Often considered the 'quarterback of the defense'.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include MLB-specific skills
                 archetype: str = "Run Stopper", # e.g., 'Run Stopper', 'Coverage MLB', 'Tackling Machine'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a MiddleLinebacker instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'tackling', 'run_stuff', 'zone_coverage', 'play_recognition', 'blitzing', 'strength'.
            archetype (str): MLB-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "MLB", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure MLB-specific skills are present, or add default if missing
        self.skills.setdefault('tackling', 88)        # Core responsibility
        self.skills.setdefault('run_stuff', 85)      # Ability to plug gaps and stop runs
        self.skills.setdefault('zone_coverage', 80)   # Covering middle of the field
        self.skills.setdefault('play_recognition', 90) # Reading plays pre-snap and post-snap
        self.skills.setdefault('blitzing', 70)        # Effectiveness as a pass rusher
        self.skills.setdefault('strength', 85)        # For shedding blocks and tackling


    def diagnose_play(self, offense_tendency: str) -> bool:
        """
        Simulates the MLB diagnosing an offensive play.


        Args:
            offense_tendency (str): 'run', 'pass', or 'play_action'.


        Returns:
            bool: True if the play is diagnosed correctly, False otherwise.
        """
        success_chance = self.skills['play_recognition'] / 100.0


        # Adjust for more complex play calls (e.g., play action can fool them)
        if offense_tendency == "play_action":
            success_chance *= 0.75 # Harder to diagnose
       
        if success_chance > 0.7:
            print(f"DEBUG: {self.name} correctly diagnosed the {offense_tendency} play! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} was fooled by the {offense_tendency} play. ({success_chance:.2f})")
            return False


    def make_tackle(self, ball_carrier_skill: int) -> bool:
        """
        Simulates the MLB making a tackle.


        Args:
            ball_carrier_skill (int): The overall skill of the opposing ball carrier.


        Returns:
            bool: True if the tackle is successful, False otherwise.
        """
        tackle_success_chance = (self.skills['tackling'] + self.skills['strength'] / 2) / 100.0 - (ball_carrier_skill / 200.0)


        if tackle_success_chance > 0.55:
            print(f"DEBUG: {self.name} wrapped up the ball carrier for a tackle! ({tackle_success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} missed the tackle. ({tackle_success_chance:.2f})")
            return False


    def drop_into_zone(self, pass_threat_level: str) -> bool:
        """
        Simulates the MLB dropping back into their zone coverage.


        Args:
            pass_threat_level (str): 'low', 'medium', 'high' based on receiver threat in their zone.


        Returns:
            bool: True if the zone is covered effectively, False if a receiver gets open.
        """
        base_zone_cover = self.skills['zone_coverage'] / 100.0


        threat_penalty = 0
        if pass_threat_level == "medium":
            threat_penalty = 0.15
        elif pass_threat_level == "high":
            threat_penalty = 0.30


        success_chance = base_zone_cover - threat_penalty


        if success_chance > 0.5:
            print(f"DEBUG: {self.name} effectively covered the middle zone! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} left a gap in zone coverage. ({success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing MiddleLinebacker Class ---")
    mlb1 = MiddleLinebacker(
        name="Field General",
        age=27,
        height_inches=74,
        weight_lbs=245,
        overall_rating=92,
        potential_rating=92,
        skills={
            'tackling': 90,
            'run_stuff': 90,
            'zone_coverage': 85,
            'play_recognition': 95,
            'blitzing': 78,
            'strength': 90
        },
        archetype="Run Stopper"
    )
    print(mlb1)
    mlb1.diagnose_play("run")
    mlb1.make_tackle(ball_carrier_skill=88)
    mlb1.drop_into_zone("medium")


    mlb2 = MiddleLinebacker(
        name="Coverage Backer",
        age=24,
        height_inches=73,
        weight_lbs=230,
        overall_rating=85,
        potential_rating=90,
        skills={
            'tackling': 80,
            'run_stuff': 75,
            'zone_coverage': 90,
            'play_recognition': 88,
            'blitzing': 65,
            'strength': 80
        },
        archetype="Coverage MLB"
    )
    print(mlb2)
    mlb2.diagnose_play("play_action")
    mlb2.make_tackle(ball_carrier_skill=92) # Might miss
    mlb2.drop_into_zone("high")


cornerback.py
# core/cornerback.py


from core.player import Player


class Cornerback(Player):
    """
    Represents a Cornerback player in the Heart Football League.
    Inherits from the base Player class and adds CB-specific skills and behaviors,
    primarily focused on pass defense.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include CB-specific skills
                 archetype: str = "Man Coverage", # e.g., 'Man Coverage', 'Zone Coverage', 'Ball Hawk'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a Cornerback instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'speed', 'agility', 'man_coverage', 'zone_coverage', 'play_recognition', 'tackling'.
            archetype (str): CB-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "CB", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure CB-specific skills are present, or add default if missing
        self.skills.setdefault('speed', 80)           # Crucial for covering fast receivers
        self.skills.setdefault('agility', 78)         # Change of direction
        self.skills.setdefault('man_coverage', 75)    # Effectiveness in man-to-man defense
        self.skills.setdefault('zone_coverage', 70)   # Effectiveness in zone defense
        self.skills.setdefault('play_recognition', 70) # Ability to read offensive plays
        self.skills.setdefault('tackling', 65)        # Tackling ability (important in run support/after catch)


    def cover_receiver(self, receiver_speed: int, receiver_route_running: int, coverage_scheme: str = "man") -> bool:
        """
        Simulates covering an opposing wide receiver.


        Args:
            receiver_speed (int): The speed rating of the opposing receiver.
            receiver_route_running (int): The route running skill of the opposing receiver.
            coverage_scheme (str): 'man' or 'zone', indicating the defensive scheme.


        Returns:
            bool: True if the receiver is well-covered, False if they get open.
        """
        if coverage_scheme == 'man':
            cover_skill = self.skills['man_coverage']
            receiver_modifier = (receiver_speed + receiver_route_running) / 200.0
        elif coverage_scheme == 'zone':
            cover_skill = self.skills['zone_coverage']
            # Zone coverage also relies on play recognition, less on individual receiver speed
            receiver_modifier = (receiver_route_running / 200.0)
        else:
            raise ValueError("coverage_scheme must be 'man' or 'zone'.")


        base_cover_chance = (cover_skill + self.skills['play_recognition'] / 2) / 100.0
        success_chance = base_cover_chance - receiver_modifier


        if success_chance > 0.5: # Threshold for good coverage
            print(f"DEBUG: {self.name} provided tight {coverage_scheme} coverage! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} struggled to cover the receiver in {coverage_scheme} coverage. ({success_chance:.2f})")
            return False


    def attempt_tackle(self, ball_carrier_agility: int) -> bool:
        """
        Simulates attempting to tackle a ball carrier.


        Args:
            ball_carrier_agility (int): The agility skill of the ball carrier.


        Returns:
            bool: True if the tackle is successful, False otherwise.
        """
        tackle_success_chance = (self.skills['tackling'] / 100.0) - (ball_carrier_agility / 200.0)


        if tackle_success_chance > 0.5:
            print(f"DEBUG: {self.name} made a solid tackle! ({tackle_success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} missed the tackle. ({tackle_success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing Cornerback Class ---")
    cb1 = Cornerback(
        name="Shutdown Corner",
        age=24,
        height_inches=71,
        weight_lbs=190,
        overall_rating=91,
        potential_rating=94,
        skills={
            'speed': 93,
            'agility': 90,
            'man_coverage': 92,
            'zone_coverage': 80,
            'play_recognition': 85,
            'tackling': 70
        },
        archetype="Man Coverage"
    )
    print(cb1)
    cb1.cover_receiver(receiver_speed=90, receiver_route_running=88, coverage_scheme="man")
    cb1.attempt_tackle(ball_carrier_agility=90)


    cb2 = Cornerback(
        name="Zone Hawk",
        age=26,
        height_inches=73,
        weight_lbs=200,
        overall_rating=88,
        potential_rating=89,
        skills={
            'speed': 85,
            'agility': 82,
            'man_coverage': 75,
            'zone_coverage': 90,
            'play_recognition': 91,
            'tackling': 75
        },
        archetype="Zone Coverage"
    )
    print(cb2)
    cb2.cover_receiver(receiver_speed=80, receiver_route_running=80, coverage_scheme="zone")
    cb2.attempt_tackle(ball_carrier_agility=75)


strong_safety.py
# core/strong_safety.py


from core.player import Player


class StrongSafety(Player):
    """
    Represents a Strong Safety (SS) player in the Heart Football League.
    Inherits from the base Player class and specializes in run support,
    tackling, and tight end coverage.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include SS-specific skills
                 archetype: str = "Run Support", # e.g., 'Run Support', 'Hybrid Safety', 'Box Safety'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a StrongSafety instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'tackling', 'hit_power', 'man_coverage', 'zone_coverage', 'play_recognition', 'pursuit'.
            archetype (str): SS-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "SS", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure SS-specific skills are present, or add default if missing
        self.skills.setdefault('tackling', 85)        # High importance for run support
        self.skills.setdefault('hit_power', 80)       # Ability to deliver impactful hits
        self.skills.setdefault('man_coverage', 70)    # For covering TEs/RBs
        self.skills.setdefault('zone_coverage', 75)   # For playing in zone defense
        self.skills.setdefault('play_recognition', 80) # Ability to diagnose plays
        self.skills.setdefault('pursuit', 78)         # Ability to chase down ball carriers


    def come_up_for_tackle(self, ball_carrier_agility: int) -> bool:
        """
        Simulates the Strong Safety coming up to make a tackle against a ball carrier.


        Args:
            ball_carrier_agility (int): The agility skill of the ball carrier.


        Returns:
            bool: True if the tackle is successful, False otherwise.
        """
        tackle_success_chance = (self.skills['tackling'] + self.skills['hit_power'] / 2) / 100.0 - (ball_carrier_agility / 200.0)


        if tackle_success_chance > 0.6:
            print(f"DEBUG: {self.name} came up strong for a tackle! ({tackle_success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} struggled to bring down the ball carrier. ({tackle_success_chance:.2f})")
            return False


    def cover_tight_end(self, tight_end_skill: int, coverage_scheme: str = "man") -> bool:
        """
        Simulates the Strong Safety covering a tight end.


        Args:
            tight_end_skill (int): The overall skill of the opposing tight end.
            coverage_scheme (str): 'man' or 'zone'.


        Returns:
            bool: True if coverage is effective, False otherwise.
        """
        if coverage_scheme == 'man':
            cover_skill = self.skills['man_coverage']
        elif coverage_scheme == 'zone':
            cover_skill = self.skills['zone_coverage']
        else:
            raise ValueError("coverage_scheme must be 'man' or 'zone'.")


        base_cover_chance = cover_skill / 100.0
        te_modifier = tight_end_skill / 150.0


        success_chance = base_cover_chance - te_modifier


        if success_chance > 0.5:
            print(f"DEBUG: {self.name} provided effective coverage on the tight end! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} was beaten in coverage by the tight end. ({success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing StrongSafety Class ---")
    ss1 = StrongSafety(
        name="Box Enforcer",
        age=26,
        height_inches=74,
        weight_lbs=220,
        overall_rating=89,
        potential_rating=91,
        skills={
            'tackling': 90,
            'hit_power': 88,
            'man_coverage': 75,
            'zone_coverage': 80,
            'play_recognition': 88,
            'pursuit': 85
        },
        archetype="Run Support"
    )
    print(ss1)
    ss1.come_up_for_tackle(ball_carrier_agility=85)
    ss1.cover_tight_end(tight_end_skill=80, coverage_scheme="man")


    ss2 = StrongSafety(
        name="Versatile Defender",
        age=24,
        height_inches=73,
        weight_lbs=210,
        overall_rating=85,
        potential_rating=90,
        skills={
            'tackling': 80,
            'hit_power': 75,
            'man_coverage': 80,
            'zone_coverage': 85,
            'play_recognition': 85,
            'pursuit': 88
        },
        archetype="Hybrid Safety"
    )
    print(ss2)
    ss2.come_up_for_tackle(ball_carrier_agility=90) # Might miss against agile RBs
    ss2.cover_tight_end(tight_end_skill=88, coverage_scheme="zone")


free_safety.py
# core/free_safety.py


from core.player import Player


class FreeSafety(Player):
    """
    Represents a Free Safety (FS) player in the Heart Football League.
    Inherits from the base Player class and specializes in deep pass coverage,
    ball-hawking, and range.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include FS-specific skills
                 archetype: str = "Ball Hawk", # e.g., 'Ball Hawk', 'Centerfield', 'Hybrid'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a FreeSafety instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'speed', 'zone_coverage', 'play_recognition', 'ball_skills', 'tackling', 'pursuit'.
            archetype (str): FS-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "FS", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure FS-specific skills are present, or add default if missing
        self.skills.setdefault('speed', 88)           # Crucial for covering deep
        self.skills.setdefault('zone_coverage', 90)   # Primary coverage skill
        self.skills.setdefault('play_recognition', 85) # Reading QB and routes
        self.skills.setdefault('ball_skills', 88)     # Intercepting, deflecting passes
        self.skills.setdefault('tackling', 70)        # For open-field tackles
        self.skills.setdefault('pursuit', 85)         # Chasing down plays across the field


    def cover_deep_zone(self, qb_arm_strength: int, receiver_threat: int) -> bool:
        """
        Simulates the Free Safety covering the deep part of the field.


        Args:
            qb_arm_strength (int): The arm strength of the opposing quarterback.
            receiver_threat (int): The threat level of receivers running deep routes.


        Returns:
            bool: True if the deep zone is covered effectively, False if a big play is allowed.
        """
        base_coverage_chance = self.skills['zone_coverage'] / 100.0
        qb_mod = qb_arm_strength / 200.0 # Stronger arm makes it harder
        receiver_mod = receiver_threat / 200.0 # Better receivers make it harder


        success_chance = base_coverage_chance - qb_mod - receiver_mod


        if success_chance > 0.5:
            print(f"DEBUG: {self.name} patrolled the deep zone effectively! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} was beaten deep. ({success_chance:.2f})")
            return False


    def attempt_interception(self, throw_accuracy: int, receiver_coverage: int) -> bool:
        """
        Simulates the Free Safety attempting to intercept a pass.


        Args:
            throw_accuracy (int): The accuracy of the thrown pass (lower is better for FS).
            receiver_coverage (int): How well the receiver is covered (higher means more chance for FS).


        Returns:
            bool: True if an interception is made, False otherwise.
        """
        base_int_chance = self.skills['ball_skills'] / 100.0 + self.skills['play_recognition'] / 200.0
        pass_quality_mod = throw_accuracy / 150.0 # Highly accurate passes are harder to pick
        coverage_benefit = receiver_coverage / 100.0 # Better receiver coverage means more opportunity


        success_chance = base_int_chance - pass_quality_mod + coverage_benefit


        if success_chance > 0.6: # High threshold for an interception
            print(f"DEBUG: {self.name} made an incredible interception! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} could not intercept the pass. ({success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing FreeSafety Class ---")
    fs1 = FreeSafety(
        name="Centerfield Master",
        age=25,
        height_inches=73,
        weight_lbs=205,
        overall_rating=90,
        potential_rating=93,
        skills={
            'speed': 90,
            'zone_coverage': 92,
            'play_recognition': 90,
            'ball_skills': 90,
            'tackling': 72,
            'pursuit': 88
        },
        archetype="Ball Hawk"
    )
    print(fs1)
    fs1.cover_deep_zone(qb_arm_strength=90, receiver_threat=85)
    fs1.attempt_interception(throw_accuracy=70, receiver_coverage=80)


    fs2 = FreeSafety(
        name="Utility Safety",
        age=27,
        height_inches=72,
        weight_lbs=210,
        overall_rating=86,
        potential_rating=86,
        skills={
            'speed': 85,
            'zone_coverage': 85,
            'play_recognition': 80,
            'ball_skills': 80,
            'tackling': 78,
            'pursuit': 82
        },
        archetype="Hybrid"
    )
    print(fs2)
    fs2.cover_deep_zone(qb_arm_strength=95, receiver_threat=90) # Challenging
    fs2.attempt_interception(throw_accuracy=85, receiver_coverage=60) # Less likely


kicker.py
# core/kicker.py


from core.player import Player


class Kicker(Player):
    """
    Represents a Kicker player in the Heart Football League.
    Inherits from the base Player class and adds K-specific skills and behaviors.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include K-specific skills
                 archetype: str = "Accurate", # e.g., 'Accurate', 'Power', 'Clutch'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a Kicker instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'kick_power', 'kick_accuracy', 'clutch_kicking'.
            archetype (str): Kicker-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "K", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure K-specific skills are present, or add default if missing
        self.skills.setdefault('kick_power', 75)    # Max distance/strength of kick
        self.skills.setdefault('kick_accuracy', 80) # How often kicks go where intended
        self.skills.setdefault('clutch_kicking', 70) # Performance under pressure (0-100)


    def attempt_field_goal(self, distance_yards: int, pressure: float = 0.0) -> bool:
        """
        Simulates attempting a field goal.


        Args:
            distance_yards (int): Distance of the field goal attempt.
            pressure (float): A value from 0.0 (no pressure) to 1.0 (max pressure).


        Returns:
            bool: True if the field goal is successful, False otherwise.
        """
        # Base accuracy influenced by skill and power vs. distance
        base_success_chance = (self.skills['kick_accuracy'] / 100.0) * (self.skills['kick_power'] / 100.0)
       
        # Penalties for distance and pressure
        distance_penalty = max(0, (distance_yards - 30) / 70.0) # Penalty increases significantly after 30 yards
       
        # Pressure penalty, reduced by clutch_kicking skill
        pressure_penalty = pressure * (1 - (self.skills['clutch_kicking'] / 100.0)) * 0.5 # Max 0.5 penalty from pressure


        success_chance = base_success_chance - distance_penalty - pressure_penalty


        if success_chance > 0.5: # Simple threshold for success
            print(f"DEBUG: {self.name} made the {distance_yards}-yard field goal! (Chance: {success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} missed the {distance_yards}-yard field goal. (Chance: {success_chance:.2f})")
            return False


    def attempt_extra_point(self, pressure: float = 0.0) -> bool:
        """
        Simulates attempting an extra point. Shorter distance, higher success rate.


        Args:
            pressure (float): A value from 0.0 (no pressure) to 1.0 (max pressure).


        Returns:
            bool: True if the extra point is successful, False otherwise.
        """
        # Extra points are generally easier, set a high base chance
        base_success_chance = (self.skills['kick_accuracy'] / 100.0) * 0.95
       
        pressure_penalty = pressure * (1 - (self.skills['clutch_kicking'] / 100.0)) * 0.2 # Smaller pressure penalty


        success_chance = base_success_chance - pressure_penalty


        if success_chance > 0.75: # High threshold for extra points
            print(f"DEBUG: {self.name} made the extra point! (Chance: {success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} missed the extra point. (Chance: {success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing Kicker Class ---")
    kicker1 = Kicker(
        name="Golden Leg",
        age=27,
        height_inches=72,
        weight_lbs=195,
        overall_rating=89,
        potential_rating=90,
        skills={
            'kick_power': 90,
            'kick_accuracy': 92,
            'clutch_kicking': 85
        },
        archetype="Clutch"
    )
    print(kicker1)
    kicker1.attempt_field_goal(distance_yards=45, pressure=0.2)
    kicker1.attempt_field_goal(distance_yards=60, pressure=0.5) # Long kick under pressure
    kicker1.attempt_extra_point(pressure=0.1)


    kicker2 = Kicker(
        name="Young Blocker",
        age=22,
        height_inches=70,
        weight_lbs=180,
        overall_rating=75,
        potential_rating=88,
        skills={
            'kick_power': 70,
            'kick_accuracy': 75,
            'clutch_kicking': 60
        },
        archetype="Power"
    )
    print(kicker2)
    kicker2.attempt_field_goal(distance_yards=30, pressure=0.0)
    kicker2.attempt_extra_point(pressure=0.8) # High pressure for a young kicker


punter.py
# core/punter.py


from core.player import Player


class Punter(Player):
    """
    Represents a Punter player in the Heart Football League.
    Inherits from the base Player class and adds P-specific skills and behaviors.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include P-specific skills
                 archetype: str = "Directional", # e.g., 'Power', 'Directional', 'Pin-Deep'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a Punter instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'punt_power', 'punt_accuracy', 'hang_time'.
            archetype (str): Punter-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "P", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure P-specific skills are present, or add default if missing
        self.skills.setdefault('punt_power', 75)    # Max distance of punt
        self.skills.setdefault('punt_accuracy', 80) # How often punts land where intended (directional)
        self.skills.setdefault('hang_time', 70)     # Time ball spends in air (allows coverage team to get downfield)


    def attempt_punt(self, field_position: int, desired_direction: str = "middle") -> dict:
        """
        Simulates attempting a punt.


        Args:
            field_position (int): The yard line from which the punt is attempted (e.g., 20 for own 20-yard line).
            desired_direction (str): 'left_hash', 'middle', 'right_hash', 'coffin_corner'.


        Returns:
            dict: Contains 'distance_yards', 'hang_time_seconds', 'successful_direction'.
        """
        # Calculate base distance
        base_distance = self.skills['punt_power'] / 100.0 * 55 # Max punt distance around 55-60 yards
       
        # Adjust for field position (punting from deep in own territory might be shorter)
        if field_position < 20:
            base_distance -= (20 - field_position) * 0.5


        # Calculate actual hang time
        actual_hang_time = self.skills['hang_time'] / 100.0 * 5.0 # Max hang time around 5 seconds


        # Calculate accuracy for direction
        accuracy_chance = self.skills['punt_accuracy'] / 100.0
        successful_direction = desired_direction
        if accuracy_chance < 0.7: # Introduce randomness/inaccuracy
            import random
            if random.random() > accuracy_chance:
                possible_directions = ['left_hash', 'middle', 'right_hash', 'coffin_corner']
                successful_direction = random.choice([d for d in possible_directions if d != desired_direction])


        print(f"DEBUG: {self.name} punted from the {field_position}-yard line.")
        print(f"DEBUG: Desired direction: {desired_direction}, Actual direction: {successful_direction}.")
        print(f"DEBUG: Estimated distance: {int(base_distance)} yards, Hang time: {actual_hang_time:.1f} seconds.")


        return {
            'distance_yards': int(base_distance),
            'hang_time_seconds': round(actual_hang_time, 1),
            'successful_direction': successful_direction
        }


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing Punter Class ---")
    punter1 = Punter(
        name="Precision Kicker",
        age=26,
        height_inches=74,
        weight_lbs=200,
        overall_rating=89,
        potential_rating=90,
        skills={
            'punt_power': 85,
            'punt_accuracy': 92,
            'hang_time': 88
        },
        archetype="Directional"
    )
    print(punter1)
    punter1.attempt_punt(field_position=30, desired_direction="coffin_corner")
    punter1.attempt_punt(field_position=10, desired_direction="middle")


    punter2 = Punter(
        name="Boom Leg",
        age=23,
        height_inches=76,
        weight_lbs=220,
        overall_rating=78,
        potential_rating=88,
        skills={
            'punt_power': 95,
            'punt_accuracy': 70,
            'hang_time': 75
        },
        archetype="Power"
    )
    print(punter2)
    punter2.attempt_punt(field_position=40, desired_direction="left_hash") # Might be inaccurate
    punter2.attempt_punt(field_position=20, desired_direction="middle")


kick_returner.py
# core/kick_returner.py


from core.player import Player


class KickReturner(Player):
    """
    Represents a Kick Returner (KR) player in the Heart Football League.
    Inherits from the base Player class and specializes in returning kickoffs.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include KR-specific skills
                 archetype: str = "Explosive", # e.g., 'Explosive', 'Reliable', 'Elusive'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a KickReturner instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'speed', 'agility', 'vision', 'break_tackle', 'carrying'.
            archetype (str): KR-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "KR", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure KR-specific skills are present, or add default if missing
        self.skills.setdefault('speed', 90)           # Raw speed is paramount
        self.skills.setdefault('agility', 88)         # Making cuts and dodging
        self.skills.setdefault('vision', 85)          # Finding holes and anticipating blocks
        self.skills.setdefault('break_tackle', 70)    # Breaking initial tackles
        self.skills.setdefault('carrying', 80)        # Fumbling tendency


    def return_kickoff(self, coverage_team_skill: int, blocking_quality: float) -> int:
        """
        Simulates returning a kickoff.


        Args:
            coverage_team_skill (int): Average skill of the opposing coverage team.
            blocking_quality (float): A factor (0.0-1.0) indicating how well blockers are performing.


        Returns:
            int: Yards gained on the kick return.
        """
        base_gain = (self.skills['speed'] / 100.0) * 15 + (self.skills['agility'] / 100.0) * 10
        vision_bonus = self.skills['vision'] / 100.0 * 5


        defender_impact = coverage_team_skill / 100.0 * 10 # Higher skill, more impact
        blocking_benefit = blocking_quality * (self.skills['vision'] / 50.0) # Blocking amplifies vision


        yards_gained = base_gain + vision_bonus + blocking_benefit - defender_impact


        # Chance to break tackles further downfield
        if self.skills['break_tackle'] > 75 and defender_impact < 5:
            yards_gained += 5 # Small bonus for breaking weak tackles


        yards_gained = max(0, int(yards_gained)) # Ensure non-negative yards


        print(f"DEBUG: {self.name} returned the kickoff for {yards_gained} yards.")
        if yards_gained >= 80:
            print(f"DEBUG: {self.name} might have gone to the house!")
        return yards_gained


    def secure_ball_on_return(self) -> bool:
        """
        Simulates securing the ball during a return to prevent fumbles.
        Returns True if ball is secured (no fumble), False if fumble risk.
        """
        fumble_chance = 1 - (self.skills['carrying'] / 100.0)
        if fumble_chance > 0.1:
            print(f"DEBUG: {self.name} secured the ball on the return.")
            return True
        else:
            print(f"DEBUG: {self.name} is at risk of fumbling the return!")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing KickReturner Class ---")
    kr1 = KickReturner(
        name="Dynamic Returner",
        age=22,
        height_inches=68,
        weight_lbs=185,
        overall_rating=90,
        potential_rating=95,
        skills={
            'speed': 95,
            'agility': 93,
            'vision': 90,
            'break_tackle': 80,
            'carrying': 88
        },
        archetype="Explosive"
    )
    print(kr1)
    kr1.return_kickoff(coverage_team_skill=70, blocking_quality=0.8) # Good blocking
    kr1.secure_ball_on_return()


    kr2 = KickReturner(
        name="Reliable Hands",
        age=26,
        height_inches=70,
        weight_lbs=195,
        overall_rating=85,
        potential_rating=85,
        skills={
            'speed': 85,
            'agility': 80,
            'vision': 75,
            'break_tackle': 60,
            'carrying': 92
        },
        archetype="Reliable"
    )
    print(kr2)
    kr2.return_kickoff(coverage_team_skill=85, blocking_quality=0.4) # Tough coverage, poor blocking
    kr2.secure_ball_on_return()


punt_returner.py
# core/punt_returner.py


from core.player import Player


class PuntReturner(Player):
    """
    Represents a Punt Returner (PR) player in the Heart Football League.
    Inherits from the base Player class and specializes in returning punts.
    Often prioritizes secure catching and quick decision-making.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include PR-specific skills
                 archetype: str = "Secure Hands", # e.g., 'Secure Hands', 'Elusive', 'Fair Catch Specialist'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a PuntReturner instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'speed', 'agility', 'vision', 'catching', 'decision_making'.
            archetype (str): PR-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "PR", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure PR-specific skills are present, or add default if missing
        self.skills.setdefault('speed', 85)           # Good speed for quick burst
        self.skills.setdefault('agility', 90)         # Elusiveness in tight spaces
        self.skills.setdefault('vision', 88)          # Finding lanes quickly
        self.skills.setdefault('catching', 92)        # Crucial for securing the punt
        self.skills.setdefault('decision_making', 80) # When to fair catch vs. return


    def return_punt(self, punt_hang_time: float, coverage_team_skill: int, blocking_quality: float) -> int:
        """
        Simulates returning a punt.


        Args:
            punt_hang_time (float): The hang time of the punt in seconds.
            coverage_team_skill (int): Average skill of the opposing coverage team.
            blocking_quality (float): A factor (0.0-1.0) indicating how well blockers are performing.


        Returns:
            int: Yards gained on the punt return.
        """
        # Longer hang time means more defenders downfield
        hang_time_penalty = max(0, (punt_hang_time - 4.0) * 5) # 5 yards penalty per second over 4.0s


        base_gain = (self.skills['speed'] / 100.0) * 10 + (self.skills['agility'] / 100.0) * 8
        vision_bonus = self.skills['vision'] / 100.0 * 3


        defender_impact = coverage_team_skill / 100.0 * 7
        blocking_benefit = blocking_quality * (self.skills['vision'] / 60.0)


        yards_gained = base_gain + vision_bonus + blocking_benefit - defender_impact - hang_time_penalty


        yards_gained = max(0, int(yards_gained))


        print(f"DEBUG: {self.name} returned the punt for {yards_gained} yards.")
        if yards_gained >= 40:
            print(f"DEBUG: {self.name} broke off a huge punt return!")
        return yards_gained


    def decide_fair_catch(self, field_position: int, punt_hang_time: float, closest_defender_distance: float) -> bool:
        """
        Simulates the Punt Returner deciding whether to fair catch.


        Args:
            field_position (int): The yard line where the ball is caught.
            punt_hang_time (float): The hang time of the punt.
            closest_defender_distance (float): Distance to the closest defender in yards.


        Returns:
            bool: True if the player decides to fair catch, False otherwise.
        """
        fair_catch_propensity = self.skills['decision_making'] / 100.0


        # Factors influencing fair catch decision
        danger_factor = 0.0
        if closest_defender_distance < 5:
            danger_factor += 0.3 # High danger
        elif closest_defender_distance < 10:
            danger_factor += 0.15 # Medium danger


        if field_position <= 10: # Near own endzone, higher fair catch tendency
            danger_factor += 0.2


        if punt_hang_time < 3.5: # Short hang time, less time to react
            danger_factor += 0.1


        decision_chance = fair_catch_propensity + danger_factor


        if decision_chance > 0.7:
            print(f"DEBUG: {self.name} wisely called for a fair catch. ({decision_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} decided to attempt a return. ({decision_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing PuntReturner Class ---")
    pr1 = PuntReturner(
        name="Dynamic Returner",
        age=22,
        height_inches=68,
        weight_lbs=185,
        overall_rating=90,
        potential_rating=95,
        skills={
            'speed': 90,
            'agility': 92,
            'vision': 90,
            'catching': 95,
            'decision_making': 88
        },
        archetype="Elusive"
    )
    print(pr1)
    pr1.return_punt(punt_hang_time=4.5, coverage_team_skill=75, blocking_quality=0.7)
    pr1.decide_fair_catch(field_position=8, punt_hang_time=4.0, closest_defender_distance=3.5)


    pr2 = PuntReturner(
        name="Safe Hands",
        age=27,
        height_inches=70,
        weight_lbs=190,
        overall_rating=87,
        potential_rating=87,
        skills={
            'speed': 80,
            'agility': 85,
            'vision': 80,
            'catching': 98,
            'decision_making': 92
        },
        archetype="Secure Hands"
    )
    print(pr2)
    pr2.return_punt(punt_hang_time=5.0, coverage_team_skill=85, blocking_quality=0.3) # Tough return
    pr2.decide_fair_catch(field_position=25, punt_hang_time=4.2, closest_defender_distance=10)


long_snapper.py
# core/long_snapper.py


from core.player import Player


class LongSnapper(Player):
    """
    Represents a Long Snapper (LS) player in the Heart Football League.
    Inherits from the base Player class and specializes in accurate snapping for punts/field goals.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int,
                 potential_rating: int,
                 skills: dict, # Should include LS-specific skills
                 archetype: str = "Reliable", # e.g., 'Reliable', 'Athletic'
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a LongSnapper instance.


        Args:
            name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills,
            player_id, contract_details, health_status, injury_details, team_id:
                See base Player class for descriptions.
            skills (dict): Expected to include 'snap_accuracy', 'snap_speed', 'blocking'.
            archetype (str): LS-specific archetype.
        """
        # Call the base class constructor
        super().__init__(name, age, height_inches, weight_lbs, overall_rating, potential_rating,
                         skills, archetype, "LS", player_id, contract_details,
                         health_status, injury_details, team_id)


        # Ensure LS-specific skills are present, or add default if missing
        self.skills.setdefault('snap_accuracy', 90) # Precision of the snap
        self.skills.setdefault('snap_speed', 85)    # Speed of the snap delivery
        self.skills.setdefault('blocking', 60)      # Ability to block after the snap


    def perform_snap(self, snap_type: str = "punt") -> bool:
        """
        Simulates the Long Snapper performing a snap for a punt or field goal.


        Args:
            snap_type (str): 'punt' or 'field_goal'.


        Returns:
            bool: True if the snap is accurate and on time, False otherwise (bad snap).
        """
        base_accuracy_chance = self.skills['snap_accuracy'] / 100.0
        base_speed_factor = self.skills['snap_speed'] / 100.0


        # Field goal snaps are often quicker/more precise than punts
        if snap_type == "field_goal":
            accuracy_multiplier = 1.05
            speed_multiplier = 1.1
        else: # punt
            accuracy_multiplier = 1.0
            speed_multiplier = 1.0


        success_chance = (base_accuracy_chance * accuracy_multiplier) * (base_speed_factor * speed_multiplier)


        # A very high threshold for success as LS are highly accurate
        if success_chance > 0.75:
            print(f"DEBUG: {self.name} delivered a perfect {snap_type} snap! ({success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} had a bad {snap_type} snap. ({success_chance:.2f})")
            return False


    def block_after_snap(self, defender_skill: int) -> bool:
        """
        Simulates the Long Snapper attempting to block after the snap.


        Args:
            defender_skill (int): The overall skill of the opposing defender rushing.


        Returns:
            bool: True if the block is successful, False otherwise.
        """
        block_success_chance = (self.skills['blocking'] / 100.0) - (defender_skill / 200.0)


        if block_success_chance > 0.4: # LS are not primary blockers, so lower threshold
            print(f"DEBUG: {self.name} made a successful block after the snap! ({block_success_chance:.2f})")
            return True
        else:
            print(f"DEBUG: {self.name} struggled to block after the snap. ({block_success_chance:.2f})")
            return False


# Example Usage
if __name__ == "__main__":
    print("\n--- Testing LongSnapper Class ---")
    ls1 = LongSnapper(
        name="Pinpoint Snapper",
        age=30,
        height_inches=74,
        weight_lbs=240,
        overall_rating=92,
        potential_rating=92,
        skills={
            'snap_accuracy': 95,
            'snap_speed': 90,
            'blocking': 70
        },
        archetype="Reliable"
    )
    print(ls1)
    ls1.perform_snap("punt")
    ls1.perform_snap("field_goal")
    ls1.block_after_snap(defender_skill=75)


    ls2 = LongSnapper(
        name="Young Talent",
        age=22,
        height_inches=72,
        weight_lbs=230,
        overall_rating=78,
        potential_rating=88,
        skills={
            'snap_accuracy': 80,
            'snap_speed': 75,
            'blocking': 50
        },
        archetype="Athletic"
    )
    print(ls2)
    ls2.perform_snap("punt")
    ls2.block_after_snap(defender_skill=80) # Likely to struggle here


ball.py
# core/ball.py


class Ball:
    """
    This is the blueprint for our football! It tells the game all about the ball,
    like where it is on the field (its position), how fast it's moving (velocity),
    and if it's currently being held by a player.
    """
    def __init__(self, x=0, y=0, z=0):
        """
        When we make a new football, we give it a starting spot (x, y, z coordinates).
        Think of x as left-right, y as up-down (on the screen), and z as how high it is
        off the ground or how deep it is on the field.
        """
        self.x = x  # The ball's horizontal position on the field
        self.y = y  # The ball's vertical position on the field
        self.z = z  # The ball's height or depth, useful for 3D or visual perspective


        self.velocity_x = 0.0  # How fast the ball is moving left/right
        self.velocity_y = 0.0  # How fast the ball is moving up/down
        self.velocity_z = 0.0  # How fast the ball is moving up/down (for kicks/passes)


        self.is_held = True  # Is a player holding the ball? Starts as true for kickoff/snap
        self.carrier = None   # Which player is holding the ball, if any


        # A small number for how fast the ball slows down over time (friction/air resistance)
        self.friction_factor = 0.98


        print(f"Football created at starting position: ({self.x}, {self.y}, {self.z})")


    def set_position(self, x, y, z):
        """
        This lets us instantly move the ball to a new spot.
        Like when a player picks it up or it's placed for a snap.
        """
        self.x = x
        self.y = y
        self.z = z
        # When position is set directly, stop all movement
        self.velocity_x = 0.0
        self.velocity_y = 0.0
        self.velocity_z = 0.0
        print(f"Ball moved to new position: ({self.x}, {self.y}, {self.z})")


    def apply_force(self, force_x, force_y, force_z):
        """
        This is like a player kicking or throwing the ball!
        We add to its speed in different directions.
        """
        self.velocity_x += force_x
        self.velocity_y += force_y
        self.velocity_z += force_z
        print(f"Force applied. Ball velocity now: ({self.velocity_x}, {self.velocity_y}, {self.velocity_z})")


    def update(self):
        """
        This is called over and over again, many times per second,
        to make the ball move smoothly on its own.
        It's like telling the ball, "Keep going in the direction you're heading!"
        """
        if not self.is_held: # Only move if a player is NOT holding the ball
            self.x += self.velocity_x
            self.y += self.velocity_y
            self.z += self.velocity_z


            # Make the ball slow down a little bit over time (like air resistance)
            self.velocity_x *= self.friction_factor
            self.velocity_y *= self.friction_factor
            self.velocity_z *= self.friction_factor


            # If the ball is very, very slow, stop it completely to save computer power.
            if abs(self.velocity_x) < 0.01: self.velocity_x = 0
            if abs(self.velocity_y) < 0.01: self.velocity_y = 0
            if abs(self.velocity_z) < 0.01: self.velocity_z = 0


            # Simple gravity effect for Z-axis (ball falling back down)
            if self.z > 0: # If the ball is in the air
                self.velocity_z -= 0.1 # Pull it down a little each update (gravity)
            if self.z < 0: # If it goes below ground
                self.z = 0 # Put it back on the ground
                self.velocity_z = 0 # Stop it from falling further
                # A little bounce effect, but we'll keep it simple for now
                # self.velocity_z *= -0.5 # Bounce up half as high


    def get_position(self):
        """
        Tells us exactly where the ball is right now.
        """
        return (self.x, self.y, self.z)


    def is_in_air(self):
        """
        Checks if the ball is currently off the ground.
        """
        return self.z > 0


    def set_held(self, held_status, carrier_player=None):
        """
        Tells the ball if it's being held by a player or if it's free.
        """
        self.is_held = held_status
        self.carrier = carrier_player
        if held_status:
            # If held, stop its movement immediately
            self.velocity_x = 0
            self.velocity_y = 0
            self.velocity_z = 0
            if carrier_player:
                print(f"Ball is now held by {carrier_player.name}.")
            else:
                print("Ball is now held (no specific carrier identified).")
        else:
            print("Ball is now free.")


# Example of how we might use this (you can put this in main.py later for testing)
if __name__ == "__main__":
    print("--- Testing Ball class ---")


    # Create a ball at the center of the field (0,0) and on the ground (0)
    game_ball = Ball(x=0, y=0, z=0)


    # Simulate a player picking up the ball
    print("\nSimulating ball pickup:")
    game_ball.set_held(True)


    # Imagine a player moving, the ball moves with them (not simulated here directly, but implied)
    game_ball.set_position(10, 5, 0) # Ball moves with player


    # Simulate throwing the ball
    print("\nSimulating throwing the ball:")
    game_ball.set_held(False) # Release the ball
    game_ball.apply_force(5, 2, 10) # Throw it forward, a bit sideways, and up


    # Update the ball's position many times to see it move and fall
    print("\nUpdating ball movement (first few steps):")
    for i in range(20): # Simulate 20 small time steps
        game_ball.update()
        pos_x, pos_y, pos_z = game_ball.get_position()
        print(f"  Step {i+1}: Ball at ({pos_x:.2f}, {pos_y:.2f}, {pos_z:.2f})")
        if game_ball.velocity_x == 0 and game_ball.velocity_y == 0 and game_ball.velocity_z == 0:
            print("  Ball has come to a stop.")
            break


    print("\n--- End of Ball testing ---")




field.py
# core/field.py


# We define some basic sizes for our field.
# These numbers are like telling us how long a yard is in "game units"
# or how wide the field is.
# For now, let's assume a standard NFL field size for our game world units.
# A football field is 100 yards long, plus two 10-yard end zones, so 120 yards total.
# Let's say 1 yard = 10 game units for finer movement.
FIELD_LENGTH_YARDS = 120 # 100 yards of playing field + 2x10 yard end zones
FIELD_WIDTH_YARDS = 53.3 # Standard NFL width


# Convert to game units (e.g., pixels or internal simulation units)
# We can adjust this multiplier later if the field is too big or too small.
YARDS_TO_UNITS_MULTIPLIER = 10


FIELD_LENGTH_UNITS = FIELD_LENGTH_YARDS * YARDS_TO_UNITS_MULTIPLIER
FIELD_WIDTH_UNITS = FIELD_WIDTH_YARDS * YARDS_TO_UNITS_MULTIPLIER


# Define key positions in game units for easy reference
# Let's center the field around (0,0) for simpler math later
# So, the middle of the field is 0. The left side is -WIDTH/2, right is +WIDTH/2 etc.
FIELD_CENTER_X = 0
FIELD_CENTER_Y = 0 # Assuming Y is the length axis (vertical on screen)


# Yard lines will be from -600 to +600 if center is 0, and each 10 units is 1 yard.
# So, 0 yard line might be -500 (start of field), 50 yard line is 0, 100 yard line is 500.
# End zone starts/ends at 500 game units from the center for each side, total 100 yards.
# We'll adjust coordinates for Pygame later if needed, where (0,0) is top-left.
# For now, these are conceptual game world coordinates.


class Field:
    """
    This is the blueprint for our football field! It knows everything about the field,
    like its size, where the goal lines are, where the sidelines are, and if something
    is in the end zone.
    """
    def __init__(self, length_units=FIELD_LENGTH_UNITS, width_units=FIELD_WIDTH_UNITS):
        """
        When we make a new field, we tell it how long and wide it is in our game units.
        """
        self.length_units = length_units  # Total length, including end zones
        self.width_units = width_units    # Total width


        # The playing field without end zones is 100 yards (1000 units)
        self.playing_field_length_units = 100 * YARDS_TO_UNITS_MULTIPLIER


        # The end zones are 10 yards each (100 units)
        self.end_zone_length_units = 10 * YARDS_TO_UNITS_MULTIPLIER


        # Define important line coordinates (relative to a central 0,0 for now)
        # Assuming Y is the length axis, X is the width axis
        self.left_sideline_x = -self.width_units / 2
        self.right_sideline_x = self.width_units / 2


        # The middle of the field (50-yard line) is at Y=0
        self.fifty_yard_line_y = 0


        # Goal lines are at 50 yards from the middle of the field in each direction
        # which is 500 units from the center (if playing field is 1000 units total)
        self.goal_line_1_y = -self.playing_field_length_units / 2 # Example: -500 units
        self.goal_line_2_y = self.playing_field_length_units / 2  # Example: +500 units


        # Back of end zones
        self.end_zone_back_1_y = self.goal_line_1_y - self.end_zone_length_units # Example: -600 units
        self.end_zone_back_2_y = self.goal_line_2_y + self.end_zone_length_units # Example: +600 units


        print(f"Football field created: Length {self.length_units} units, Width {self.width_units} units.")
        print(f"  Playing field length: {self.playing_field_length_units} units.")
        print(f"  Goal lines at Y={self.goal_line_1_y} and Y={self.goal_line_2_y}.")


    def is_in_bounds(self, x, y):
        """
        Checks if a position (like where the ball is) is still inside the field lines.
        """
        # Is it between the left and right sidelines?
        is_x_in_bounds = (x >= self.left_sideline_x) and (x <= self.right_sideline_x)
        # Is it between the very front and very back of the entire field (including end zones)?
        is_y_in_bounds = (y >= self.end_zone_back_1_y) and (y <= self.end_zone_back_2_y)
        return is_x_in_bounds and is_y_in_bounds


    def is_touchdown(self, ball_y_position, team_scoring_direction):
        """
        Checks if the ball has crossed the goal line into the end zone for a touchdown.
        `team_scoring_direction`: 1 if scoring towards positive Y (right side), -1 if towards negative Y (left side)
        """
        if team_scoring_direction == 1: # Team is going from left to right (negative Y to positive Y)
            # If the ball is beyond the right goal line (goal_line_2_y)
            return ball_y_position >= self.goal_line_2_y
        elif team_scoring_direction == -1: # Team is going from right to left (positive Y to negative Y)
            # If the ball is beyond the left goal line (goal_line_1_y)
            return ball_y_position <= self.goal_line_1_y
        return False # Not a touchdown


    def get_yard_line(self, y_position):
        """
        Converts a Y position on the field to a football yard line (0-100).
        This is useful for displaying where the ball is in a human-friendly way.
        """
        # Adjust Y position so 0 is the start of the first end zone (goal_line_1_y)
        adjusted_y = y_position - self.goal_line_1_y


        # Convert to yards and clamp between 0 and 120 (for field length including end zones)
        yard = adjusted_y / YARDS_TO_UNITS_MULTIPLIER
       
        # This will need more advanced logic later to handle "X yard line of team A"
        # For now, a simple 0-120 scale for the whole field.
        return max(0, min(120, int(yard)))


# Example of how we might use this (you can put this in main.py later for testing)
if __name__ == "__main__":
    print("--- Testing Field class ---")


    # Create a new field
    game_field = Field()


    # Test if points are in bounds
    print(f"\nIs (0, 0) in bounds? {game_field.is_in_bounds(0, 0)}") # Should be True (center)
    print(f"Is ({game_field.right_sideline_x + 1}, 0) in bounds? {game_field.is_in_bounds(game_field.right_sideline_x + 1, 0)}") # Should be False (outside right sideline)
    print(f"Is (0, {game_field.end_zone_back_2_y + 1}) in bounds? {game_field.is_in_bounds(0, game_field.end_zone_back_2_y + 1)}") # Should be False (past back of end zone)


    # Test touchdown logic
    print("\nTesting touchdown logic:")
    # Ball just before goal line 2 (scoring right)
    print(f"Touchdown (scoring right) at Y={game_field.goal_line_2_y - 1}? {game_field.is_touchdown(game_field.goal_line_2_y - 1, 1)}") # Should be False
    # Ball just past goal line 2 (scoring right)
    print(f"Touchdown (scoring right) at Y={game_field.goal_line_2_y + 1}? {game_field.is_touchdown(game_field.goal_line_2_y + 1, 1)}") # Should be True
    # Ball just before goal line 1 (scoring left)
    print(f"Touchdown (scoring left) at Y={game_field.goal_line_1_y + 1}? {game_field.is_touchdown(game_field.goal_line_1_y + 1, -1)}") # Should be False
    # Ball just past goal line 1 (scoring left)
    print(f"Touchdown (scoring left) at Y={game_field.goal_line_1_y - 1}? {game_field.is_touchdown(game_field.goal_line_1_y - 1, -1)}") # Should be True


    # Test yard line conversion
    print("\nTesting yard line conversion:")
    print(f"Y position {game_field.goal_line_1_y} is Yard Line {game_field.get_yard_line(game_field.goal_line_1_y)}") # Should be 10 (start of field for first end zone)
    print(f"Y position {game_field.goal_line_1_y + 10 * YARDS_TO_UNITS_MULTIPLIER} is Yard Line {game_field.get_yard_line(game_field.goal_line_1_y + 10 * YARDS_TO_UNITS_MULTIPLIER)}") # Should be 20 (10 yards into playing field)
    print(f"Y position {game_field.fifty_yard_line_y} is Yard Line {game_field.get_yard_line(game_field.fifty_yard_line_y)}") # Should be 60 (50 yard line + 10 yard end zone)
    print(f"Y position {game_field.goal_line_2_y} is Yard Line {game_field.get_yard_line(game_field.goal_line_2_y)}") # Should be 110 (end of playing field + end zone)
    print(f"Y position {game_field.end_zone_back_2_y} is Yard Line {game_field.get_yard_line(game_field.end_zone_back_2_y)}") # Should be 120 (back of second end zone)


    print("\n--- End of Field testing ---")




team.py
# core/team.py


from typing import List, Optional
from core.player import Player # Assuming Player class is defined in core.player


class Team:
    """
    Represents a single football team in the Heart Football League.
    Manages its roster, budget, performance statistics, and general team information.
    """
    def __init__(self,
                 team_id: str,
                 name: str,
                 city: str,
                 division: str,
                 conference: str,
                 coach_name: str = "Coach Default",
                 roster: Optional[List[Player]] = None,
                 team_cash: float = 5_000_000.0, # Starting budget
                 salary_cap: float = 200_000_000.0): # Example salary cap
        """
        Initializes a new Team instance.


        Args:
            team_id (str): Unique identifier for the team (e.g., 'HFLLions').
            name (str): The team's name (e.g., 'Lions').
            city (str): The city the team represents.
            division (str): The division the team belongs to.
            conference (str): The conference the team belongs to.
            coach_name (str): Name of the team's head coach.
            roster (list[Player], optional): Initial list of Player objects on the roster.
            team_cash (float): Current financial balance of the team.
            salary_cap (float): The maximum total salary allowed for the active roster.
        """
        self.team_id = team_id
        self.name = name
        self.city = city
        self.division = division
        self.conference = conference
        self.coach_name = coach_name
        self._roster = roster if roster is not None else [] # Internal list of Player objects
        self.team_cash = team_cash
        self.salary_cap = salary_cap
        self.wins = 0
        self.losses = 0
        self.ties = 0
        self.points_for = 0
        self.points_against = 0
        print(f"DEBUG: Team '{self.full_name}' initialized.")


        # Assign this team_id to any players initially on the roster
        for player in self._roster:
            player.assign_to_team(self.team_id)


    @property
    def full_name(self) -> str:
        """Returns the full name of the team (e.g., 'Detroit Lions')."""
        return f"{self.city} {self.name}"


    @property
    def current_salary_cap_hit(self) -> float:
        """Calculates the total active salary cap hit for the team."""
        total_salary = 0.0
        for player in self._roster:
            if player.contract_details and 'salary' in player.contract_details:
                total_salary += player.contract_details['salary']
        return total_salary


    def add_player(self, player: Player) -> bool:
        """
        Adds a player to the team's roster, if salary cap allows.
        Args:
            player (Player): The Player object to add.
        Returns:
            bool: True if player was added, False otherwise.
        """
        player_salary = player.contract_details.get('salary', 0.0) if player.contract_details else 0.0
        if self.current_salary_cap_hit + player_salary <= self.salary_cap:
            self._roster.append(player)
            player.assign_to_team(self.team_id)
            print(f"DEBUG: {player.name} added to {self.full_name} roster.")
            return True
        else:
            print(f"WARNING: Cannot add {player.name}. Exceeds salary cap. "
                  f"Current: ${self.current_salary_cap_hit:,.0f}, Adding: ${player_salary:,.0f}, Cap: ${self.salary_cap:,.0f}")
            return False


    def remove_player(self, player_id: str) -> Optional[Player]:
        """
        Removes a player from the team's roster by ID.
        Args:
            player_id (str): The ID of the player to remove.
        Returns:
            Player or None: The removed Player object if found, None otherwise.
        """
        for i, player in enumerate(self._roster):
            if player.player_id == player_id:
                removed_player = self._roster.pop(i)
                removed_player.team_id = None # Player no longer assigned to this team
                print(f"DEBUG: {removed_player.name} removed from {self.full_name} roster.")
                return removed_player
        print(f"WARNING: Player with ID {player_id} not found on {self.full_name} roster.")
        return None


    def get_player_by_position(self, position: str) -> List[Player]:
        """Returns a list of players playing a specific position."""
        return [p for p in self._roster if p.position == position]


    def get_roster(self) -> List[Player]:
        """Returns the current list of players on the roster."""
        return self._roster


    def update_record(self, outcome: str, points_for: int, points_against: int):
        """
        Updates the team's win/loss/tie record and points.
        Args:
            outcome (str): 'win', 'loss', or 'tie'.
            points_for (int): Points scored by this team in the game.
            points_against (int): Points scored by opponent in the game.
        """
        if outcome == 'win':
            self.wins += 1
        elif outcome == 'loss':
            self.losses += 1
        elif outcome == 'tie':
            self.ties += 1
        self.points_for += points_for
        self.points_against += points_against
        print(f"DEBUG: {self.full_name} record updated: {self.wins}-{self.losses}-{self.ties}")


    def __str__(self):
        """String representation of the Team."""
        return (f"Team: {self.full_name} (ID: {self.team_id})\n"
                f"  Coach: {self.coach_name}\n"
                f"  Record: {self.wins}-{self.losses}-{self.ties} (PF:{self.points_for}, PA:{self.points_against})\n"
                f"  Roster Size: {len(self._roster)}, Cap Hit: ${self.current_salary_cap_hit:,.0f} / ${self.salary_cap:,.0f}")


# Example Usage
if __name__ == "__main__":
    print("--- Testing Team Class ---")
    from core.player import Player # Import base Player for creating test players


    # Create some dummy players
    player_qb = Player(name="Star QB", age=28, height_inches=75, weight_lbs=225,
                       overall_rating=92, potential_rating=95, skills={}, position="QB",
                       contract_details={'salary': 25_000_000, 'years': 5})
    player_rb = Player(name="Speedy RB", age=24, height_inches=70, weight_lbs=200,
                       overall_rating=88, potential_rating=90, skills={}, position="RB",
                       contract_details={'salary': 8_000_000, 'years': 4})
    player_wr = Player(name="Big WR", age=25, height_inches=76, weight_lbs=215,
                       overall_rating=89, potential_rating=91, skills={}, position="WR",
                       contract_details={'salary': 15_000_000, 'years': 3})
    player_lb = Player(name="Tough LB", age=27, height_inches=74, weight_lbs=230,
                       overall_rating=87, potential_rating=87, skills={}, position="MLB",
                       contract_details={'salary': 10_000_000, 'years': 4})


    # Initialize a team with some players
    team_lions = Team(team_id="HFLLions", name="Lions", city="Detroit",
                      division="North", conference="NFC",
                      roster=[player_qb, player_rb, player_lb], salary_cap=100_000_000.0) # Set a lower cap for testing
    print(team_lions)
    print(f"QB on roster: {team_lions.get_player_by_position('QB')[0].name}")


    # Try adding another player within cap
    team_lions.add_player(player_wr)
    print(team_lions)


    # Try adding a player that exceeds cap
    player_exceed = Player(name="Cap Breaker", age=22, height_inches=70, weight_lbs=200,
                           overall_rating=70, potential_rating=85, skills={}, position="K",
                           contract_details={'salary': 60_000_000, 'years': 1})
    team_lions.add_player(player_exceed)
    print(team_lions)


    # Update team record
    team_lions.update_record('win', 28, 17)
    print(team_lions)


    # Remove a player
    team_lions.remove_player(player_lb.player_id)
    print(team_lions)


game.py
# core/game.py


from typing import Tuple, List
from core.team import Team
from core.field import Field
from core.ball import Ball
# Import all specific player types that have been implemented
from core.player import Player
from core.quarterback import Quarterback
from core.fullback import Fullback
from core.halfback import HalfBack # Renamed from running_back
from core.wide_receiver import WideReceiver
from core.tightend import TightEnd
from core.offensive_lineman import OffensiveLineman
from core.defensive_lineman import DefensiveLineman
from core.outside_linebacker import OutsideLinebacker
from core.middle_linebacker import MiddleLinebacker
from core.cornerback import Cornerback
from core.strong_safety import StrongSafety
from core.free_safety import FreeSafety
from core.kicker import Kicker
from core.punter import Punter
from core.kick_returner import KickReturner
from core.punt_returner import PuntReturner
from core.long_snapper import LongSnapper


import random
import uuid # For generating unique player IDs, used in helper


class Game:
    """
    Manages the simulation of a single football game between two teams.
    Handles game state, drives, downs, scoring, and player interactions.
    """
    def __init__(self,
                 home_team: Team,
                 away_team: Team,
                 field: Field,
                 quarters_per_game: int = 4,
                 minutes_per_quarter: int = 15):
        """
        Initializes a Game instance.


        Args:
            home_team (Team): The home team object.
            away_team (Team): The away team object.
            field (Field): The field object on which the game is played.
            quarters_per_game (int): Number of quarters in the game.
            minutes_per_quarter (int): Duration of each quarter in simulated minutes.
        """
        self.home_team = home_team
        self.away_team = away_team
        self.field = field
        self.ball = Ball() # Game has its own ball object
        self.quarters_per_game = quarters_per_game
        self.minutes_per_quarter = minutes_per_quarter


        # Game State Variables
        self.current_quarter = 1
        self.game_time_remaining = minutes_per_quarter * 60 # in seconds
        self.home_score = 0
        self.away_score = 0
        self.possession_team: Team = None # Team currently with the ball
        self.down = 1
        self.yards_to_go = 10
        self.current_yard_line = 35 # Start possession at own 35 (after kickoff)
        self.play_count = 0 # Counter for plays simulated


        print(f"DEBUG: Game initialized: {home_team.name} vs {away_team.name}")


    def _determine_initial_possession(self):
        """Randomly determines which team gets initial possession."""
        self.possession_team = random.choice([self.home_team, self.away_team])
        print(f"DEBUG: {self.possession_team.name} wins the coin toss and will receive the kickoff.")


    def _switch_possession(self):
        """Switches possession to the other team."""
        if self.possession_team == self.home_team:
            self.possession_team = self.away_team
        else:
            self.possession_team = self.home_team
        print(f"DEBUG: Possession switched to {self.possession_team.name}.")


    def _start_drive(self, starting_yard_line: int):
        """
        Sets up a new offensive drive.
        Args:
            starting_yard_line (int): The yard line where the drive begins (0-100).
        """
        self.down = 1
        self.yards_to_go = 10
        self.current_yard_line = starting_yard_line
        self.ball.set_position(
            x=(self.current_yard_line + self.field.endzone_depth_yards), # Convert yard line to X-coord
            y=self.field.width_yards / 2, # Center of field
            z=0.0
        )
        self.ball.set_dead() # Ensure ball is dead before new play
        print(f"DEBUG: New drive for {self.possession_team.name} starting at their {self.current_yard_line}-yard line.")


    def _simulate_kickoff(self):
        """
        Simulates a kickoff to start the game or after a score.
        For simplicity, returns a fixed starting yard line.
        """
        # A real kickoff simulation would involve kicker power, returner skill, etc.
        # For now, let's assume a touchback or return to the 25-yard line for simplicity.
        # Or, a short return
        kick_return_yards = random.randint(15, 30)
        starting_field_pos = 100 - kick_return_yards # From opponent's end
        print(f"DEBUG: Kickoff. Return to the {starting_field_pos}-yard line.")
        return starting_field_pos


    def _simulate_play(self):
        """
        Simulates a single offensive play (run or pass).
        This is a highly simplified logic and would be expanded significantly.
        """
        self.play_count += 1
        print(f"\n--- Play {self.play_count}: {self.possession_team.name} - Down {self.down} & {self.yards_to_go} from {self.current_yard_line}-yard line ---")


        # Get offensive and defensive players (simplified)
        offensive_players = self.possession_team.get_roster()
        defensive_players = (self.home_team if self.possession_team == self.away_team else self.away_team).get_roster()


        # Try to get key players
        qb: Quarterback = next((p for p in offensive_players if p.position == "QB" and isinstance(p, Quarterback)), None)
        rb: HalfBack = next((p for p in offensive_players if p.position == "HB" and isinstance(p, HalfBack)), None) # Changed to HalfBack
        wr: WideReceiver = next((p for p in offensive_players if p.position == "WR" and isinstance(p, WideReceiver)), None)
       
        # Get a dummy defender skill (this would be dynamic in a real game sim)
        avg_defender_skill = sum(p.overall_rating for p in defensive_players) / len(defensive_players) if defensive_players else 70


        play_type = random.choice(["run", "pass"])
        yards_gained = 0
        is_fumble = False
        is_interception = False


        if play_type == "run" and rb:
            yards_gained = rb.run_with_ball(defender_skill=avg_defender_skill, blockers_present=True)
            if not rb.secure_ball():
                is_fumble = random.random() < 0.3 # 30% chance to fumble if not secured
                if is_fumble: self.ball.fumble()
            print(f"Play Result: {rb.name} ran for {yards_gained} yards.")
        elif play_type == "pass" and qb and wr:
            pass_successful = qb.throw_pass(target_distance=random.randint(5, 40), defender_presence=random.choice(["low", "medium", "high"]))
            if pass_successful:
                catch_successful = wr.attempt_catch(pass_difficulty=random.choice(["easy", "medium", "hard"]))
                if catch_successful:
                    yards_gained = random.randint(5, 20) # Yards after catch
                    print(f"Play Result: {wr.name} caught the pass for {yards_gained} yards.")
                else:
                    print("Play Result: Pass caught, but dropped!")
                    yards_gained = 0
            else:
                # Simulate a chance for interception if pass failed
                if random.random() < 0.2: # 20% chance of interception on failed pass
                    fs: FreeSafety = next((p for p in defensive_players if p.position == "FS" and isinstance(p, FreeSafety)), None)
                    if fs and fs.attempt_interception(throw_accuracy=qb.skills['accuracy'], receiver_coverage=70):
                        is_interception = True
                        print(f"Play Result: INTERCEPTION! by {fs.name}.")
                    else:
                        print("Play Result: Incomplete Pass.")
                else:
                    print("Play Result: Incomplete Pass.")
                yards_gained = 0
        else:
            print(f"WARNING: No suitable players for {play_type} play or missing QB/RB/WR. 0 yards gained.")


        # Update game state based on play result
        self.current_yard_line += yards_gained
        self.yards_to_go -= yards_gained
        self.ball.set_position(
            x=(self.current_yard_line + self.field.endzone_depth_yards),
            y=self.field.width_yards / 2,
            z=0.0
        )


        if is_fumble or is_interception:
            print("TURNOVER!")
            self._switch_possession()
            # If turnover, start new drive at current position for the new team
            self._start_drive(self.field.get_yard_line(self.ball.x_pos))
            return # End current play processing


        # Check for first down
        if self.yards_to_go <= 0:
            print(f"FIRST DOWN! New drive at {self.field.get_yard_line(self.ball.x_pos)}-yard line.")
            self.down = 1
            self.yards_to_go = 10
        else:
            self.down += 1


        # Check for score
        if self.field.is_in_endzone(self.ball.x_pos) and self.ball.x_pos > (self.field.length_yards / 2 + self.field.endzone_depth_yards):
            self._score_touchdown()
        elif self.field.is_in_endzone(self.ball.x_pos) and self.ball.x_pos < self.field.endzone_depth_yards:
            # Defensive touchdown/safety not yet implemented, simplified to turnover
            print("SAFETY or Defensive TD (not fully implemented yet), turnover on downs.")
            self._switch_possession()
            self._start_drive(self.field.get_yard_line(self.ball.x_pos))




        # Check for turnover on downs
        if self.down > 4:
            print("TURNOVER ON DOWNS!")
            self._switch_possession()
            self._start_drive(self.field.get_yard_line(self.ball.x_pos)) # New drive starts at line of scrimmage


        # Simulate time passing (very basic)
        time_elapsed = random.randint(10, 30) # 10-30 seconds per play
        self.game_time_remaining -= time_elapsed
        print(f"Time remaining in quarter: {self.game_time_remaining // 60}m {self.game_time_remaining % 60}s")




    def _score_touchdown(self):
        """Awards a touchdown and simulates extra point."""
        scoring_team = self.possession_team
        print(f"TOUCHDOWN for {scoring_team.name}!")
        scoring_team.update_record(outcome='score', points_for=6, points_against=0) # Update for display, not W/L


        # Simulate extra point attempt
        kicker: Kicker = next((p for p in scoring_team.get_roster() if p.position == "K" and isinstance(p, Kicker)), None)
        if kicker:
            if kicker.attempt_extra_point():
                scoring_team.update_record(outcome='score', points_for=1, points_against=0)
                print(f"DEBUG: {scoring_team.name} made the extra point!")
            else:
                print(f"DEBUG: {scoring_team.name} missed the extra point.")
        else:
            print("WARNING: No kicker found for extra point attempt.")


        if scoring_team == self.home_team:
            self.home_score += 7 # Assume successful extra point for now
        else:
            self.away_score += 7


        print(f"Current Score: {self.home_team.name}: {self.home_score} - {self.away_team.name}: {self.away_score}")
        self._switch_possession() # After a score, possession switches
        self._start_drive(starting_yard_line=75) # Kickoff usually starts at 25-yard line of receiving team (which is 75 for kicker's team perspective)




    def simulate_game(self):
        """Simulates the entire game, quarter by quarter."""
        print(f"\n--- Starting Game: {self.home_team.full_name} vs {self.away_team.full_name} ---")
        self._determine_initial_possession()


        for quarter in range(1, self.quarters_per_game + 1):
            self.current_quarter = quarter
            self.game_time_remaining = self.minutes_per_quarter * 60
            print(f"\n--- Beginning Quarter {self.current_quarter} ---")


            if quarter == 1:
                starting_pos = self._simulate_kickoff()
                self._start_drive(starting_pos)
            else:
                # Alternate possession to start subsequent quarters, for simplicity
                self._switch_possession()
                self._start_drive(35) # Start drive at 35-yard line for new quarter


            while self.game_time_remaining > 0 and self.home_score != self.away_score: # Simple end condition
                if self.possession_team is None: # In case of initial setup error
                    self._determine_initial_possession()
                    self._start_drive(35)


                # Ensure there are players on the roster to simulate a play
                if not self.possession_team.get_roster():
                    print(f"WARNING: {self.possession_team.name} has no players on roster. Ending game prematurely.")
                    break


                self._simulate_play()


                if self.current_quarter == self.quarters_per_game and self.game_time_remaining <= 0:
                    print("End of regulation.")
                    break # End game if time runs out in final quarter


        print("\n--- Game Over ---")
        print(f"Final Score: {self.home_team.name}: {self.home_score} - {self.away_team.name}: {self.away_score}")


        # Update official team records
        if self.home_score > self.away_score:
            self.home_team.update_record('win', self.home_score, self.away_score)
            self.away_team.update_record('loss', self.away_score, self.home_score)
            print(f"{self.home_team.name} wins!")
        elif self.away_score > self.home_score:
            self.away_team.update_record('win', self.away_score, self.home_score)
            self.home_team.update_record('loss', self.home_score, self.away_score)
            print(f"{self.away_team.name} wins!")
        else:
            self.home_team.update_record('tie', self.home_score, self.away_score)
            self.away_team.update_record('tie', self.away_score, self.home_score)
            print("It's a tie!")


# Example Usage
if __name__ == "__main__":
    print("--- Setting up Game Example ---")
    # To run this example, you need Player, Team, Field, Ball classes
    # and specific player types (QB, HB, WR, K, FS, TE, OL, DL, OLB, MLB, CB, SS, LS, P, KR, PR) in the core directory.


    # Helper to generate random player skills based on position
    def _generate_random_skills(position, base_overall):
        skills = {}
        if position == "QB":
            skills = {
                'throwing_power': random.randint(base_overall - 10, base_overall + 5),
                'accuracy': random.randint(base_overall - 10, base_overall + 5),
                'awareness': random.randint(base_overall - 5, base_overall + 10),
                'scrambling': random.randint(base_overall - 20, base_overall + 5)
            }
        elif position == "FB":
            skills = {
                'blocking': random.randint(base_overall - 5, base_overall + 10),
                'strength': random.randint(base_overall - 5, base_overall + 10),
                'run_power': random.randint(base_overall - 10, base_overall + 5),
                'carrying': random.randint(base_overall - 5, base_overall + 5)
            }
        elif position == "HB":
            skills = {
                'speed': random.randint(base_overall - 5, base_overall + 10),
                'agility': random.randint(base_overall - 5, base_overall + 5),
                'strength': random.randint(base_overall - 10, base_overall + 5),
                'break_tackle': random.randint(base_overall - 15, base_overall + 5),
                'carrying': random.randint(base_overall - 5, base_overall + 10)
            }
        elif position == "WR":
            skills = {
                'speed': random.randint(base_overall - 5, base_overall + 10),
                'agility': random.randint(base_overall - 5, base_overall + 5),
                'route_running': random.randint(base_overall - 10, base_overall + 5),
                'catching': random.randint(base_overall - 5, base_overall + 10),
                'jumping': random.randint(base_overall - 15, base_overall + 5)
            }
        elif position == "TE":
            skills = {
                'blocking': random.randint(base_overall - 10, base_overall + 5),
                'route_running': random.randint(base_overall - 15, base_overall + 5),
                'catching': random.randint(base_overall - 5, base_overall + 10),
                'strength': random.randint(base_overall - 5, base_overall + 5),
                'speed': random.randint(base_overall - 20, base_overall + 5)
            }
        elif position in ["LT", "LG", "C", "RG", "RT", "OG", "OT"]: # Offensive Lineman
            skills = {
                'strength': random.randint(base_overall - 5, base_overall + 10),
                'run_block': random.randint(base_overall - 5, base_overall + 5),
                'pass_block': random.randint(base_overall - 5, base_overall + 5),
                'awareness': random.randint(base_overall - 10, base_overall + 5),
                'impact_blocking': random.randint(base_overall - 10, base_overall + 5)
            }
        elif position in ["DE", "DT"]: # Defensive Lineman
            skills = {
                'strength': random.randint(base_overall - 5, base_overall + 10),
                'block_shedding': random.randint(base_overall - 5, base_overall + 5),
                'pass_rush_moves': random.randint(base_overall - 10, base_overall + 5),
                'run_defense': random.randint(base_overall - 5, base_overall + 5),
                'tackling': random.randint(base_overall - 5, base_overall + 5)
            }
        elif position == "OLB":
            skills = {
                'pass_rush': random.randint(base_overall - 10, base_overall + 5),
                'tackling': random.randint(base_overall - 5, base_overall + 5),
                'run_stuff': random.randint(base_overall - 5, base_overall + 5),
                'zone_coverage': random.randint(base_overall - 10, base_overall + 5),
                'man_coverage': random.randint(base_overall - 15, base_overall + 5),
                'speed': random.randint(base_overall - 10, base_overall + 5)
            }
        elif position == "MLB":
            skills = {
                'tackling': random.randint(base_overall - 5, base_overall + 10),
                'run_stuff': random.randint(base_overall - 5, base_overall + 5),
                'zone_coverage': random.randint(base_overall - 10, base_overall + 5),
                'play_recognition': random.randint(base_overall - 5, base_overall + 10),
                'blitzing': random.randint(base_overall - 15, base_overall + 5),
                'strength': random.randint(base_overall - 5, base_overall + 5)
            }
        elif position == "CB":
            skills = {
                'speed': random.randint(base_overall - 5, base_overall + 10),
                'agility': random.randint(base_overall - 5, base_overall + 5),
                'man_coverage': random.randint(base_overall - 5, base_overall + 10),
                'zone_coverage': random.randint(base_overall - 10, base_overall + 5),
                'play_recognition': random.randint(base_overall - 10, base_overall + 5),
                'tackling': random.randint(base_overall - 20, base_overall + 5)
            }
        elif position == "SS":
            skills = {
                'tackling': random.randint(base_overall - 5, base_overall + 10),
                'hit_power': random.randint(base_overall - 5, base_overall + 5),
                'man_coverage': random.randint(base_overall - 10, base_overall + 5),
                'zone_coverage': random.randint(base_overall - 5, base_overall + 5),
                'play_recognition': random.randint(base_overall - 5, base_overall + 5),
                'pursuit': random.randint(base_overall - 10, base_overall + 5)
            }
        elif position == "FS":
            skills = {
                'speed': random.randint(base_overall - 5, base_overall + 10),
                'zone_coverage': random.randint(base_overall - 5, base_overall + 10),
                'play_recognition': random.randint(base_overall - 10, base_overall + 5),
                'ball_skills': random.randint(base_overall - 5, base_overall + 10),
                'tackling': random.randint(base_overall - 20, base_overall + 5),
                'pursuit': random.randint(base_overall - 10, base_overall + 5)
            }
        elif position == "K":
            skills = {
                'kick_power': random.randint(base_overall - 10, base_overall + 5),
                'kick_accuracy': random.randint(base_overall - 5, base_overall + 10),
                'clutch_kicking': random.randint(base_overall - 15, base_overall + 5)
            }
        elif position == "P":
            skills = {
                'punt_power': random.randint(base_overall - 10, base_overall + 5),
                'punt_accuracy': random.randint(base_overall - 5, base_overall + 10),
                'hang_time': random.randint(base_overall - 15, base_overall + 5)
            }
        elif position == "LS":
            skills = {
                'snap_accuracy': random.randint(base_overall - 5, base_overall + 10),
                'snap_speed': random.randint(base_overall - 10, base_overall + 5),
                'blocking': random.randint(base_overall - 20, base_overall + 5)
            }
        elif position == "KR":
            skills = {
                'speed': random.randint(base_overall - 5, base_overall + 10),
                'agility': random.randint(base_overall - 5, base_overall + 5),
                'vision': random.randint(base_overall - 10, base_overall + 5),
                'break_tackle': random.randint(base_overall - 15, base_overall + 5),
                'carrying': random.randint(base_overall - 5, base_overall + 5)
            }
        elif position == "PR":
            skills = {
                'speed': random.randint(base_overall - 5, base_overall + 5),
                'agility': random.randint(base_overall - 5, base_overall + 10),
                'vision': random.randint(base_overall - 10, base_overall + 5),
                'catching': random.randint(base_overall - 5, base_overall + 10),
                'decision_making': random.randint(base_overall - 10, base_overall + 5)
            }
        else: # Generic Player skills
            skills = {
                'speed': random.randint(overall_rating - 20, overall_rating + 10),
                'strength': random.randint(overall_rating - 20, overall_rating + 10),
                'agility': random.randint(overall_rating - 20, overall_rating + 10)
            }


        # Ensure all skills are within 0-100 and have a minimum of 1
        for skill_name, value in skills.items():
            skills[skill_name] = max(1, min(100, value))
        return skills


    def _create_random_player(position: str, overall_rating: int, team_id: str = None) -> Player:([
   first_names = ["Ace", "Blaze", "Iron", "Newbie", "Dominant", "Captain", "Swift", "Strong", "Golden", "Quick", "Aaron", "Adam", "Adrian", "Aidan", "Ali", "Amari", "Amin", "Andre", "Antonio", "Arjun", "Armani", "Arthur", "Aryan", "Asher", "Axel", "Benjamin", "Brandon", "Bryan", "Byron", "Burl (Bags)", "Caleb", "Camilo", "Cesar", "Christian", "Christopher", "Daniel", "Dario", "Demetrius", "Dennis", "David", "Diego", "Dikinya", "Dixon", "Elijah", "Emmanuel", "Ethan", "Felix", "Fernando", "Gabriel", "George", "Giovanni", "Hamza", "Hector", "Henry", "Hugo", "Ibrahim", "Isaac", "Isaiah", "Ishaan", "Jacob", "Jaden", "Jai", "James", "Javier", "Jayden", "Jesus", "Joel", "John", "Jonathan", "Jorge", " Jose", "Joshua", "Junior", "Justin", "Kai", "Karim", "Kevin", "Khalil", "Kyle", "Leo", "Leon", "Liam", "Louis", "Lucas", "Manuel", "Marcus", "Marco", "Marquith", "Mateo", "Matteo", "Max", "Michael", "Milan", "Mohamed", "Mohammed", "Nathan", "Noah", "Omar", "Oscar", "Pablo", "Pedro", "Rafael", "Rajan", "Rami", "Ray", "Ricardo", "Roberto", "Rohan", "Roman", "Ruben", "Ryan", "Salem", "Samuel", "Sebastian", "Simon", "Sultan", "Terrell" "Theo", "Thomas", "Victor", "Wang", "William", "Xavier", "Yousef", "Zachary", "Zain", "Zayn", "Zayd"]),
    last_names = ["Armstron", "Runner", "Wall", "Passer", "Defender", "Force", "Wind", "Mountain", "Glove", "Stride", "Abdullah", "Ahmed", "Alonso", "Alves", "Amadi", "Andersen", "Anderson", "Arroyo", "Baker", "Barnes", "Bennett", "Butts", "Chen", "Choi", "Chung" "Clarke", "Cruz", "Da Costa", "Davies", "De Souza", "Diaz", "Diop", "Dixon", "Edwards", "Enriquez", "Evans", "Fair", "Fernandes", "Fernandez", "Franco", "Garcia", "Gomez", "Gonzalez", "Graham", "Green", "Gupta", "Hall", "Harris", "Hawkins", "Hernandez", "Hill", "Hosier", "Hussain", "Jackson", "Jain", "James", "Jara", "Jenkins", "Johnson", "Jones", "Kahn", "Kamara", "Kim", "King", "Kowalski", "Lambert", "Lee", "Lewis", "Lim", "Lopez", "Ma", "Mahmud", "Martinez", "Mendoza", "Miller", "Mohammed", "Moore", "Morales", "Morgan", "Morris", "Murphy", "Myles" "Nakamura", "Nguyen", "Novak", "O'Connell", "O'Malley", "Oliveira", "Ortiz", "Patel", "Perez", "Pham", "Phillips", "Rae", "Rahman", "Ramirez", "Reyes", "Reynolds", "Richardson", "Rivera", "Roberts", "Robinson", "Rodrigues", "Rodriguez", "Rogers", "Ross", "Ruiz", "Santos", "Schmidt", "Singh", "Smith", "Stewart", "Sy", "Tan", "Taylor", "Thomas", "Thompson", "Torres", "Tran", "Turner", "Ullah", "Walker", "Wang", "Weiss", "White", "Williams", "Wilson", "Wright", "Young", "Zhang"]),
        name = f"{first_name} {last_name}"


        age = random.randint(20, 35)
        height_inches = random.randint(68, 82) # 5'8" to 6'10"
        weight_lbs = random.randint(180, 330)
        potential_rating = random.randint(overall_rating + 2, min(100, overall_rating + 15)) # Potential usually higher
       
        # Generate position-specific skills
        skills = _generate_random_skills(position, overall_rating)


        archetype = "Standard" # Simplified for now, can be randomized later for each position
        contract_details = {'salary': overall_rating * 500000, 'years': random.randint(1, 5)} # Basic contract


        # Instantiate the correct player type based on position
        if position == "QB":
            return Quarterback(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "FB":
            return Fullback(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "HB":
            return HalfBack(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "WR":
            return WideReceiver(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "TE":
            return TightEnd(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position in ["LT", "LG", "C", "RG", "RT", "OG", "OT"]:
            return OffensiveLineman(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, position=position, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position in ["DE", "DT"]:
            return DefensiveLineman(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, position=position, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "OLB":
            return OutsideLinebacker(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "MLB":
            return MiddleLinebacker(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "CB":
            return Cornerback(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "SS":
            return StrongSafety(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "FS":
            return FreeSafety(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "K":
            return Kicker(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "P":
            return Punter(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "LS":
            return LongSnapper(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "KR":
            return KickReturner(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        elif position == "PR":
            return PuntReturner(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)
        else:
            # Fallback for generic player if position not specifically handled
            return Player(name, age, height_inches, weight_lbs, overall_rating, potential_rating, skills, archetype=archetype, position=position, player_id=str(uuid.uuid4()), contract_details=contract_details, team_id=team_id)


    # Create a field
    game_field = Field()


    # --- Create Home Team Roster ---
    home_roster = []
    # Offensive players
    home_roster.append(_create_random_player("QB", 90))
    home_roster.append(_create_random_player("HB", 88))
    home_roster.append(_create_random_player("FB", 80))
    home_roster.append(_create_random_player("WR", 89))
    home_roster.append(_create_random_player("WR", 87))
    home_roster.append(_create_random_player("TE", 85))
    home_roster.append(_create_random_player("LT", 88))
    home_roster.append(_create_random_player("LG", 87))
    home_roster.append(_create_random_player("C", 86))
    home_roster.append(_create_random_player("RG", 85))
    home_roster.append(_create_random_player("RT", 86))


    # Defensive players
    home_roster.append(_create_random_player("DE", 88))
    home_roster.append(_create_random_player("DE", 86))
    home_roster.append(_create_random_player("DT", 87))
    home_roster.append(_create_random_player("DT", 85))
    home_roster.append(_create_random_player("OLB", 89))
    home_roster.append(_create_random_player("MLB", 90))
    home_roster.append(_create_random_player("OLB", 87))
    home_roster.append(_create_random_player("CB", 88))
    home_roster.append(_create_random_player("CB", 86))
    home_roster.append(_create_random_player("SS", 87))
    home_roster.append(_create_random_player("FS", 90))


    # Special Teams players
    home_roster.append(_create_random_player("K", 88))
    home_roster.append(_create_random_player("P", 87))
    home_roster.append(_create_random_player("LS", 85))
    home_roster.append(_create_random_player("KR", 89))
    home_roster.append(_create_random_player("PR", 88))




    # Create Home Team
    home_team = Team(team_id="HFLEagles", name="Eagles", city="Philadelphia", division="East", conference="NFC",
                     roster={p.player_id: p for p in home_roster}) # Pass as dictionary


    # --- Create Away Team Roster ---
    away_roster = []
    # Offensive players
    away_roster.append(_create_random_player("QB", 88))
    away_roster.append(_create_random_player("HB", 87))
    away_roster.append(_create_random_player("FB", 78))
    away_roster.append(_create_random_player("WR", 87))
    away_roster.append(_create_random_player("WR", 85))
    away_roster.append(_create_random_player("TE", 83))
    away_roster.append(_create_random_player("LT", 86))
    away_roster.append(_create_random_player("LG", 85))
    away_roster.append(_create_random_player("C", 84))
    away_roster.append(_create_random_player("RG", 83))
    away_roster.append(_create_random_player("RT", 84))


    # Defensive players
    away_roster.append(_create_random_player("DE", 87))
    away_roster.append(_create_random_player("DE", 85))
    away_roster.append(_create_random_player("DT", 86))
    away_roster.append(_create_random_player("DT", 84))
    away_roster.append(_create_random_player("OLB", 88))
    away_roster.append(_create_random_player("MLB", 89))
    away_roster.append(_create_random_player("OLB", 86))
    away_roster.append(_create_random_player("CB", 87))
    away_roster.append(_create_random_player("CB", 85))
    away_roster.append(_create_random_player("SS", 86))
    away_roster.append(_create_random_player("FS", 88))


    # Special Teams players
    away_roster.append(_create_random_player("K", 78))
    away_roster.append(_create_random_player("P", 76))
    away_roster.append(_create_random_player("LS", 70))
    away_roster.append(_create_random_player("KR", 85))
    away_roster.append(_create_random_player("PR", 84))


    # Create Away Team
    away_team = Team(team_id="HFLGiants", name="Giants", city="New York", division="East", conference="NFC",
                     roster={p.player_id: p for p in away_roster}) # Pass as dictionary


    # Create the game
    game = Game(home_team=home_team, away_team=away_team, field=game_field)


    # Simulate the game
    game.simulate_game()


    print("\n--- Final Team Records ---")
    print(home_team)
    print(away_team)




player.py
# core/player.py


class Player:
    """
    This is like a blueprint for ALL the players in our game.
    Every player, whether they are a Quarterback, a Kicker, or anyone else,
    will have these basic things.
    """
    def __init__(self, name, position, overall_rating, salary):
        """
        When we make a new player, we tell the game what their name is,
        what position they play (like 'QB' for Quarterback),
        how good they are (overall_rating), and how much money they get (salary).
        """
        self.name = name  # This stores the player's name (e.g., "Patrick Mahomes")
        self.position = position  # This stores their position (e# core/player.py


import uuid # For generating unique player IDs


class Player:
    """
    Base class for all player entities in the Heart Football League.
    Defines common attributes and methods for any player on a roster.
    """
    def __init__(self,
                 name: str,
                 age: int,
                 height_inches: int,
                 weight_lbs: int,
                 overall_rating: int, # Overall rating based on position-specific skills
                 potential_rating: int, # Max potential rating (0-100)
                 skills: dict, # Dictionary of raw skill values (e.g., {'speed': 80, 'strength': 75})
                 archetype: str = "Standard", # e.g., 'Power', 'Finesse', 'Agile'
                 position: str = "GEN", # Generic position, overridden by subclasses
                 player_id: str = None,
                 contract_details: dict = None,
                 health_status: str = "Healthy",
                 injury_details: dict = None,
                 team_id: str = None):
        """
        Initializes a new Player instance.


        Args:
            name (str): The player's full name.
            age (int): The player's current age.
            height_inches (int): Player's height in inches.
            weight_lbs (int): Player's weight in pounds.
            overall_rating (int): A numerical rating (0-100) reflecting current skill.
            potential_rating (int): A numerical rating (0-100) reflecting peak potential.
            skills (dict): A dictionary of core and position-specific skill ratings.
                           Example: {'speed': 85, 'agility': 80, 'strength': 70}
            archetype (str): A descriptive term for the player's play style.
            position (str): The player's primary position abbreviation (e.g., 'QB', 'RB').
            player_id (str, optional): Unique ID for the player. Generated if None.
            contract_details (dict, optional): Dictionary containing contract info.
                                               e.g., {'years': 3, 'salary': 5_000_000, 'expires_season': 2027}
            health_status (str): Current health status (e.g., 'Healthy', 'Injured', 'Suspended').
            injury_details (dict, optional): Details if injured.
                                             e.g., {'type': 'ACL Tear', 'recovery_weeks': 24, 'current_weeks_out': 10}
            team_id (str, optional): The ID of the team the player belongs to.
        """
        self.player_id = player_id if player_id else str(uuid.uuid4()) # Generate unique ID if not provided
        self.name = name
        self.age = age
        self.height_inches = height_inches
        self.weight_lbs = weight_lbs
        self.position = position
        self.overall_rating = min(100, max(0, overall_rating)) # Ensure rating is within 0-100
        self.potential_rating = min(100, max(0, potential_rating))
        self.skills = skills # Raw skill values
        self.archetype = archetype
        self.contract_details = contract_details if contract_details is not None else {}
        self.health_status = health_status
        self.injury_details = injury_details if injury_details is not None else {}
        self.team_id = team_id


    def update_skill(self, skill_name: str, new_value: int):
        """
        Updates a specific skill for the player.
        Args:
            skill_name (str): The name of the skill to update.
            new_value (int): The new value for the skill (0-100).
        """
        if skill_name in self.skills:
            self.skills[skill_name] = min(100, max(0, new_value)) # Clamp skill value
            # In a real system, overall_rating would be recalculated here based on a formula
            # For simplicity, we'll leave it as a direct assignment in the constructor for now.
            print(f"DEBUG: {self.name}'s {skill_name} updated to {self.skills[skill_name]}.")
        else:
            print(f"WARNING: Skill '{skill_name}' not found for player {self.name}.")


    def apply_injury(self, injury_type: str, recovery_weeks: int):
        """
        Applies an injury to the player.
        Args:
            injury_type (str): Description of the injury (e.g., 'Hamstring Strain').
            recovery_weeks (int): Estimated weeks player will be out.
        """
        self.health_status = "Injured"
        self.injury_details = {
            "type": injury_type,
            "recovery_weeks": recovery_weeks,
            "current_weeks_out": 0 # Start counting weeks out
        }
        print(f"DEBUG: {self.name} suffered a {injury_type}. Out for {recovery_weeks} weeks.")


    def progress_recovery(self, weeks: int = 1):
        """
        Progresses the player's injury recovery by a given number of weeks.
        Args:
            weeks (int): Number of weeks to progress recovery.
        """
        if self.health_status == "Injured" and self.injury_details:
            self.injury_details["current_weeks_out"] += weeks
            if self.injury_details["current_weeks_out"] >= self.injury_details["recovery_weeks"]:
                self.heal_injury()
            else:
                print(f"DEBUG: {self.name} is {self.injury_details['current_weeks_out']}/"
                      f"{self.injury_details['recovery_weeks']} weeks into recovery from {self.injury_details['type']}.")
        else:
            print(f"INFO: {self.name} is not currently injured.")


    def heal_injury(self):
        """
        Heals the player, setting health status to 'Healthy'.
        """
        self.health_status = "Healthy"
        self.injury_details = {}
        print(f"DEBUG: {self.name} has healed and is now Healthy!")


    def assign_to_team(self, team_id: str):
        """Assigns the player to a team."""
        self.team_id = team_id
        print(f"DEBUG: {self.name} assigned to team {team_id}.")


    def __str__(self):
        """Returns a string representation of the Player."""
        team_display = f" (Team: {self.team_id})" if self.team_id else ""
        return (f"{self.name} ({self.position}) - OVR: {self.overall_rating}, Age: {self.age}, "
                f"Health: {self.health_status}{team_display}")


# Example Usage (for demonstrating the class functionality)
if __name__ == "__main__":
    print("--- Testing Player Base Class ---")
    player_generic = Player(
        name="Generic Athlete",
        age=22,
        height_inches=72,
        weight_lbs=200,
        overall_rating=70,
        potential_rating=85,
        skills={'speed': 75, 'strength': 70, 'agility': 68}
    )
    print(player_generic)


    player_generic.update_skill('speed', 78)
    player_generic.apply_injury('Minor Concussion', 2)
    print(player_generic)


    player_generic.progress_recovery()
    player_generic.progress_recovery()
    print(player_generic)


    player_generic.assign_to_team("HFLLions")
    print(player_generic)
.g., "QB", "WR")
        self.overall_rating = overall_rating  # This stores how skilled they are (e.g., 99)
        self.salary = salary  # This stores how much they cost the team each year ($ in millions)
        self.is_injured = False  # By default, a player is not injured.
        self.contract_years = 0 # How many years left on their contract
        self.current_team = None # Which team they are currently on


    def __str__(self):
        """
        This special method tells Python how to describe a player
        when we just print them out. It makes it easy to read.
        For example, it will print "Patrick Mahomes (QB - OVR 99)"
        """
        return f"{self.name} ({self.position} - OVR {self.overall_rating}) Salary: ${self.salary:,}M"


    def get_salary(self):
        """
        This helper function simply gives us the player's salary.
        """
        return self.salary


    def is_healthy(self):
        """
        Checks if the player is currently healthy and can play.
        """
        return not self.is_injured


    def sign_contract(self, years):
        """
        Assigns a contract length to the player.
        """
        self.contract_years = years
        print(f"{self.name} signed for {years} years.")


    def set_team(self, team_name):
        """
        Assigns the player to a specific team.
        """
        self.current_team = team_name
        print(f"{self.name} is now on the {team_name}.")
systems/


contract_system.py


finance_ledger.py


personnel_manager.py


media_relations.py


ai_coach.py


injury_system.py


league_manager.py


game_coordinator.py


monetization_system.py


unlockable_content.py


daily_fantasy/


.../
Heart Ultimate Team (HUT) Module: Detailed Design Document
1. Introduction & Overview
The Heart Ultimate Team (HUT) module is a cornerstone of the HfL ecosystem, allowing players to build and manage their dream rosters, compete in challenges, and engage with a dynamic in-game economy. It blends player collection, strategic team building, and competitive gameplay, offering a compelling progression loop. HUT operates as a distinct yet integrated system within the larger HfL framework, leveraging core gameplay mechanics, monetization, and content unlockables.
2. Core Concepts & Gameplay Loop Expansion
2.1. Dream Roster Construction
Concept: Players collect individual player cards and assemble a roster for HUT-specific challenges and matches.
Details:
Rosters can comprise a mix of:
Free Agents: Common players available through basic packs or early rewards.
Draft Prospects: Players with potential, acquired through specific challenges or draft-themed packs.
Legendary Players: Rare, high-tier players (e.g., H.O.F. level, G.O.A.T.) with unique attributes or bonuses, obtained through very rare packs, specific events, or the Spirit Chief HUT Foundry.
Lineup Rules: Roster construction adheres to realistic football formations and player slot requirements (e.g., 1 QB, 2 RB, 3 WR, etc.).
Salary/Points Cap (Optional but Recommended): To ensure balanced competition and strategic choice, rosters might have a total "salary" or "points" limit based on player rarity and stats.
2.2. Chemistry System
Concept: A mechanic where combinations of players on a roster unlock synergy bonuses, encouraging themed team building.
Details:
Tags: Players possess chemistry_tags (e.g., "All-Pro WR," "Defensive Anchor," "Rookie Sensation," "Team Legend").
Bonuses: Specific combinations of tags or players (e.g., "3 All-Pro WRs" or "QB + 2 WR from same team era") activate percentage-based stat boosts (e.g., +5% pass yard bonus, +2% tackle effectiveness, +3% stamina regeneration).
Stacking Rules: Define how multiple bonuses apply (additive, multiplicative, cap).
Conflicts: Certain tags or combinations might prevent others from activating.
Visual Feedback: Clear UI indicators for active chemistry bonuses.
2.3. Weekly HUT Challenges (PVE/PVP Scenarios)
Concept: Structured events offering various gameplay scenarios for players to test their rosters and earn rewards.
Details:
PVE Scenarios: Scripted challenges against AI teams (e.g., "3-play red zone stand," "Comeback from 14 down in 2 minutes," "Defend against a specific playbook").
PVP Matchups: Direct competition against other user-created HUT rosters, potentially in ranked or unranked formats.
Reward Structure: Completion rewards include HUT points, player packs, currency, or special loot chutes.
Leaderboards: Track performance for competitive ranking within challenges.
2.4. Market Dynamics
Concept: An in-game economy where players can buy, sell, and trade player cards and other items.
Details:
Rarity Tiers: Players are categorized by rarity:
Clay: Practice Squad level
Iron: Undrafted
Bronze: Mid-late pick (Round 4-8)
Silver: High pick (Round 2-4)
Gold: Top-pick
"Glamour": H.O.F. Level
&lt;$\>Glamour-Bean\<$>: Arguably Best at Position (multiple champ)
@~ZORI~@: G.O.A.T.
Supply & Demand: Prices fluctuate based on player rarity, performance in live events, and overall market activity.
Auction House: Players can list items for a set duration with bid/buy-now options.
Instant-Buy: Direct purchase options at a fixed price, typically from the system or other players.
Transaction Fees: Small percentage fees on successful sales act as HUT point sinks.
Items: Player cards, training points, mod patches/tokens/cards, store flair (HUT/Regular game store credits), Body n' Soul (foundry-parts), player card packs, mod packs.
2.5. Loot Chutes and In-Game Performance Drops
Concept: Dynamic reward mechanisms that provide items based on in-game actions or achievements.
Details:
Loot Chutes: Parachutes that "fall in" from the sky after completing drills, games, training, etc. They contain various rewards.
Reward Types: Body n' Soul (foundry-parts), upgradable mod patch/token/cards, store flair (credits for HUT/Regular in-game store).
Performance Drops: "HUT swagger points" awarded for exceptional in-game performance (e.g., spectacular catches, game-winning tackles) and "instant replay" worthy moves/plays.
2.6. Spirit Chief HUT Foundry
Concept: A crafting/modification workbench where players can customize and enhance their player cards.
Details:
Destruction: Users can "destroy" (disenchant) extra or unwanted cards, loot, and mods to gain specific components or foundry-parts.
Building/Modification: These components can then be used to:
Build new, specific player cards (e.g., "blueprint" cards).
Modify existing player cards (e.g., apply stat boosts, unlock special abilities via mod patches/tokens).
Currency Restriction: Importantly, coins/rewards purchased through monetization may NOT be used for building/modifying items in the Foundry, ensuring it's a grind-based progression path. Coins/rewards gained within HUT (e.g., from challenges) can be used.
3. Key Components & Responsibilities
3.1. ultimate_team_manager.py
Purpose: The central manager for user HUT rosters and overall HUT state.
Key Responsibilities/Functions:
create_roster(user_id, roster_name): Initializes a new HUT roster for a user.
load_roster(user_id, roster_id): Retrieves a specific user's roster.
save_roster(user_id, roster_data): Persists roster changes.
add_player_to_roster(roster_id, player_card_id, position): Adds a player, validating position.
remove_player_from_roster(roster_id, player_card_id): Removes a player.
validate_lineup(roster_id): Checks formation rules, salary/points cap, and other constraints.
get_active_roster(user_id): Returns the currently selected roster for gameplay.
integrate_dubble_fantasy_points(user_id, contest_result): Hook to convert Dubble Daily Fantasy points into HUT points/rewards.
Data Structures: Manages in-memory representations of user rosters.
Dependencies/Interactions:
Interacts with hut_player_pool.json to get player card data.
Integrates with DubbleDailyFantasySystem for point conversion.
Relies on chemistry_system.py for lineup validation and bonus calculation.
3.2. hut_player_pool.json
Purpose: A static data artifact defining all possible HUT player entries.
Key Fields:
player_id: Unique identifier.
name: Player name.
position: Football position (QB, RB, WR, etc.).
rarity: Enum/string mapping to Rarity Tiers (Clay, Iron, Bronze, Silver, Gold, Glamour, Glamour-Bean, ZORI).
base_stats: Dictionary of core player attributes (e.g., passing_accuracy, rushing_speed, tackling).
chemistry_tags: List of strings for chemistry bonuses (e.g., ["All-Pro WR", "Team Legend"]).
buildable_players: Boolean, indicates if this player can be constructed in the Foundry.
mod_slots: Integer, number of mod patches/tokens this player can hold.
Example Structure (JSON): See Section 5.1.
3.3. hut_marketplace.py
Purpose: Manages the in-game auction house and direct buy/sell mechanics.
Key Responsibilities/Functions:
list_item(user_id, item_id, start_price, buy_now_price, duration_hours): Puts an item (player card, mod, etc.) up for auction.
place_bid(user_id, listing_id, bid_amount): Allows a user to place a bid.
buy_now(user_id, listing_id): Allows instant purchase.
resolve_listing(listing_id): Processes bids at auction expiry, transfers items and points, applies transaction fees.
get_active_listings(): Returns all currently active listings.
get_user_listings(user_id): Returns listings created by a specific user.
get_market_trends(item_type=None): Provides data on price fluctuations for different item types.
add_pack_to_store(pack_id, price, contents): Manages system-offered packs (Body n' Soul, player card packs, mod packs).
Data Structures: Internal lists/dictionaries for active listings, bid history.
Dependencies/Interactions:
Interacts with MonetizationSystem for currency deduction/addition (HUT points).
Updates user inventories.
3.4. chemistry_system.py
Purpose: Calculates and applies roster chemistry bonuses.
Key Responsibilities/Functions:
calculate_chemistry_bonuses(roster): Takes a roster object and returns a list of active bonuses.
apply_bonuses_to_player_stats(player_stats, active_bonuses): Modifies player stats based on active chemistry.
get_chemistry_conflicts(roster): Identifies any conflicting chemistry rules.
get_potential_bonuses(roster): Suggests what bonuses are close to activating.
Data Structures: Internal rulesets for chemistry definitions.
Dependencies/Interactions:
Called by ultimate_team_manager.py during roster validation and by game_coordinator.py during live game simulation.
3.5. hut_event_scheduler.py
Purpose: Defines, triggers, and manages time-limited HUT events.
Key Responsibilities/Functions:
define_event(event_id, event_type, start_time, end_time, rewards, criteria): Creates a new event.
activate_event(event_id): Marks an event as active.
deactivate_event(event_id): Marks an event as inactive.
get_active_events(): Returns a list of currently running events.
distribute_event_rewards(event_id, participants): Grants rewards to eligible users.
interface_with_unlockables(reward_details): Communicates with UnlockableContentSystem to grant specific unlockables.
Data Structures: Event schedule, criteria, and reward definitions.
Dependencies/Interactions:
Interfaces with unlockable_content.py to grant event rewards.
Triggers specific hut_marketplace.py sales or ultimate_team_manager.py challenges.


4. Monetization & Daily Fantasy Progression Integration
Point Earning: Completing HUT challenges, PVE scenarios, and Dubble Daily Fantasy contests will grant HUT points. These points are the primary earnable currency for HUT-specific progression.


Unlockables Integration (UnlockableContentSystem):
HUT points can be spent via the UnlockableContentSystem to acquire exclusive cosmetic items (skins), stadium customizations, or unique player variants.
Loot chutes and event rewards might directly grant UnlockableContentSystem items or unlock criteria.


Premium Boosts (MonetizationSystem):
The MonetizationSystem manages in-app purchases (IAPs) for items like HUT point multipliers (e.g., "1.5x weekend boost" for a limited time). These boosts accelerate progression but do not directly grant specific high-value items, maintaining the integrity of the grind.


MonetizationSystem also handles purchases of store flair (credits) for the regular in-game store or HUT store items (like certain card packs that can contain player cards, mod packs etc, but not Foundry components).
Seasonal Leaderboards: Top-ranked HUT squads on seasonal leaderboards earn high-value rewards, often consisting of Glamour or Glamour-Bean player cards, or rare, high-value packs.


5. Data Management & Artifacts
5.1. hut_player_pool.json 
JSON
[
  {
    "player_id": "hut_qb_terrell_turner_glamour",
    "name": "Terrell Turner",
    "position": "QB",
    "rarity": "Glamour",
    "base_stats": {
      "overall": 98,
      "passing_accuracy": 99,
      "passing_power": 97,
      "scrambling_speed": 88,
      "awareness": 99
    },
    "chemistry_tags": ["Team Leader", "Field General", "Superstar"],
    "buildable_player": false,
    "mod_slots": 3
  },
  {
    "player_id": "hut_rb_dixon_iron",
    "name": "Dixon Butts",
    "position": "RB",
    "rarity": "Iron",
    "base_stats": {
      "overall": 65,
      "rushing_speed": 75,
      "rushing_power": 60,
      "agility": 70,
      "carrying": 68
    },
    "chemistry_tags": ["Rookie Sensation"],
    "buildable_player": true,
    "mod_slots": 1
  },
  {
    "player_id": "hut_wr_legend_d_myles_zori"",
    "name": "Dikinya Myles",
    "position": "WR",
    "rarity": "@~ZORI~@",
    "base_stats": {
      "overall": 100,
      "receiving_speed": 98,
      "catching": 100,
      "route_running": 100,
      "agility": 95
    },
    "chemistry_tags": ["G.O.A.T.", "Team Legend", "Route Runner"],
    "buildable_player": false,
    "mod_slots": 4
  }
]




5.2. hut_user_rosters.json (Example Structure - for persistence)
Note: In a full production system, this would typically be managed by a database, not a flat JSON file.
JSON
{
  "user_12345": {
    "active_roster_id": "my_dream_team_001",
    "rosters": {
      "my_dream_team_001": {
        "roster_name": "My Dream Team",
        "players": [
          {"player_id": "hut_qb_pat_mahomes_glamour", "position": "QB1", "current_mods": ["mod_arm_strength_plus"]},
          {"player_id": "hut_rb_rookie_iron", "position": "RB1", "current_mods": []},
          // ... more players
        ],
        "total_salary_cap_used": 950,
        "active_chemistry": ["Team Leader Bonus"]
      },
      "challenge_squad_001": {
        "roster_name": "Weekly Challenge Squad",
        "players": [],
        "total_salary_cap_used": 0,
        "active_chemistry": []
      }
    }
  }
}




6. Future Enhancements
Squad Builder Tournaments: PVP brackets with specific chemistry thresholds, encouraging diverse team compositions.
Cross-Mode Synergies: Link HUT performance to Career Mode progression or base roster talent unlocks in other game modes.
Dynamic Market Fluctuations: Implement more sophisticated algorithms for real-time price adjustments based on global supply/demand, player performance in real-life (if applicable), and in-game events.




```


```
core/player.py


class Player:
    """
    Base class for a football player in the HfL ecosystem.
    Used as a foundation for HUT player cards.
    """
    def __init__(self, player_id, name, position, base_stats):
        self.player_id = player_id
        self.name = name
        self.position = position
        self.base_stats = base_stats
        self.current_stats = dict(base_stats) # Stats after chemistry/mods


    def apply_stat_boost(self, stat_name, value):
        """Applies a boost to a specific stat."""
        if stat_name in self.current_stats:
            self.current_stats[stat_name] += value
        else:
            print(f"Warning: Stat '{stat_name}' not found for player '{self.name}'.")


    def reset_stats(self):
        """Resets stats to base values."""
        self.current_stats = dict(self.base_stats)


    def get_stat(self, stat_name):
        """Returns the current value of a stat."""
        return self.current_stats.get(stat_name, 0)


    def __repr__(self):
        return f"Player(ID: {self.player_id}, Name: {self.name}, Pos: {self.position})"


class HUTPlayerCard(Player):
    """
    Represents a specific player card in the Heart Ultimate Team mode.
    Inherits from Player and adds HUT-specific attributes.
    """
    def __init__(self, player_id, name, position, base_stats, rarity, chemistry_tags, buildable_player, mod_slots):
        super().__init__(player_id, name, position, base_stats)
        self.rarity = rarity
        self.chemistry_tags = chemistry_tags
        self.buildable_player = buildable_player
        self.mod_slots = mod_slots
        self.current_mods = [] # List of active mod IDs/objects


    def add_mod(self, mod_id):
        """Adds a mod to the player card, if slots are available."""
        if len(self.current_mods) < self.mod_slots:
            self.current_mods.append(mod_id)
            # Apply mod effects here (e.g., temporary stat boost)
            print(f"Mod '{mod_id}' added to {self.name}.")
            return True
        else:
            print(f"No mod slots available for {self.name}.")
            return False


    def remove_mod(self, mod_id):
        """Removes a mod from the player card."""
        if mod_id in self.current_mods:
            self.current_mods.remove(mod_id)
            # Remove mod effects here
            print(f"Mod '{mod_id}' removed from {self.name}.")
            return True
        return False


    def __repr__(self):
        return f"HUTPlayerCard(ID: {self.player_id}, Name: {self.name}, Rarity: {self.rarity})"


```


```
systems/ultimate_team/ultimate_team_manager.py
import json
import os
from collections import defaultdict
from core.player import HUTPlayerCard # Assuming this path


class UltimateTeamManager:
    """
    Manages user HUT rosters, player inventory, and integrates with other systems.
    """
    def __init__(self, data_path="../data/ultimate_team/", player_pool_file="hut_player_pool.json", user_rosters_file="hut_user_rosters.json"):
        self.player_pool_path = os.path.join(data_path, player_pool_file)
        self.user_rosters_path = os.path.join(data_path, user_rosters_file)
        self._player_pool_data = self._load_json(self.player_pool_path)
        self.active_user_rosters = defaultdict(dict) # user_id -> {roster_id -> roster_obj}
        self.player_inventory = defaultdict(list) # user_id -> [player_card_obj, ...]


        # For demonstration, load initial user rosters (in a real system, from DB)
        self._load_initial_user_rosters()
        self._initialize_player_cards()




    def _load_json(self, filepath):
        """Helper to load JSON data."""
        if not os.path.exists(filepath):
            print(f"Warning: {filepath} not found. Returning empty data.")
            return {}
        try:
            with open(filepath, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            print(f"Error decoding JSON from {filepath}. Returning empty data.")
            return {}


    def _save_json(self, data, filepath):
        """Helper to save JSON data."""
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'w') as f:
            json.dump(data, f, indent=2)


    def _initialize_player_cards(self):
        """Converts raw player pool data into HUTPlayerCard objects."""
        self._player_card_objects = {}
        for player_data in self._player_pool_data:
            card = HUTPlayerCard(
                player_data['player_id'],
                player_data['name'],
                player_data['position'],
           
roles/


press_media_roles.py


fan_engagement_roles.py


game_operations_roles.py


digital_technology_roles.py


legal_compliance_roles.py


finance_accounting_roles.py


human_resources_roles.py


facilities_operations_roles.py


data/


league_structure.json
[
  {
  "id": 1,
  "city": "Kaitlynnville",
  "name": "Eclipse",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthEastern/Soul",
  "city_name": "Kaitlynnville",
  "team_name": "Eclipse",
  "team_colors": "Black, Powder Purple, Off White",
  "offensive_playbook": "Air Raid",
  "defensive_playbook": "Blitz Heavy",
  "stadium": {
  "name": "Needs Work",
  "capacity": 64397
  },
  "fan_base": "Balanced",
  "owner": "Alligiance",
  "media_market": {
  "size": "500,000",
  "type": "Shrinking"
  },
  "mega_chalices": 0
  },
  {
  "id": 2,
  "city": "Gu'Bare",
  "name": "Garrison",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthEastern/Soul",
  "city_name": "Gu'Bare",
  "team_name": "Garrison",
  "team_colors": "Teal, Orange, White",
  "offensive_playbook": "Balanced Pass",
  "defensive_playbook": "4-4",
  "stadium": {
  "name": "Old",
  "capacity": 86688
  },
  "fan_base": "Average",
  "owner": "Clothing Designer",
  "media_market": {
  "size": "7 mil.",
  "type": "Medium Huge"
  },
  "mega_chalices": 0
  },
  {
  "id": 3,
  "city": "Miki Mountain",
  "name": "Miracles",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthEastern/Soul",
  "city_name": "Miki Mountain",
  "team_name": "Miracles",
  "team_colors": "White, Lavender, Navy Blue",
  "offensive_playbook": "Multi-Look",
  "defensive_playbook": "4-2",
  "stadium": {
  "name": "Needs Work",
  "capacity": 58373
  },
  "fan_base": "Just above Weak",
  "owner": "Appliance Corporation",
  "media_market": {
  "size": "700,000",
  "type": "Growing"
  },
  "mega_chalices": 0
  },
  {
  "id": 4,
  "city": "Heirsentia",
  "name": "Hawks",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthEastern/Soul",
  "city_name": "Heirsentia",
  "team_name": "Hawks",
  "team_colors": "Tan, Eggshell White, Fuschia",
  "offensive_playbook": "Power Run",
  "defensive_playbook": "Balanced",
  "stadium": {
  "name": "Cozy",
  "capacity": 63123
  },
  "fan_base": "Rabid",
  "owner": "Hedgefund Manager",
  "media_market": {
  "size": "4 mil.",
  "type": "Low Huge"
  },
  "mega_chalices": 4
  },
  {
  "id": 5,
  "city": "Brightcloud",
  "name": "Clovers",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthEastern/Soul",
  "city_name": "Brightcloud",
  "team_name": "Clovers",
  "team_colors": "Forest Green, Lime Green, Gold",
  "offensive_playbook": "Pass Heavy",
  "defensive_playbook": "Blitz Heavy",
  "stadium": {
  "name": "Different/Odd",
  "capacity": 61616
  },
  "fan_base": "Grass is Greener",
  "owner": "Family",
  "media_market": {
  "size": "2 mil.",
  "type": "Medium Average"
  },
  "mega_chalices": 3
  },
  {
  "id": 6,
  "city": "Silvermind",
  "name": "Storks",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthEastern/Soul",
  "city_name": "Silvermind",
  "team_name": "Storks",
  "team_colors": "White, Light Blue, Grey",
  "offensive_playbook": "Run Heavy",
  "defensive_playbook": "Man to Man",
  "stadium": {
  "name": "Cozy",
  "capacity": 59959
  },
  "fan_base": "Unrealistic",
  "owner": "Former Player",
  "media_market": {
  "size": "1 mil.",
  "type": "Low Average"
  },
  "mega_chalices": 3
  },
  {
  "id": 7,
  "city": "Reynava",
  "name": "Hellcats",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthCentral/Mind",
  "city_name": "Reynava",
  "team_name": "Hellcats",
  "team_colors": "Powder Blue, Crimson Red, Black, Ash Grey",
  "offensive_playbook": "No Huddle",
  "defensive_playbook": "Awe",
  "stadium": {
  "name": "Average",
  "capacity": 59286
  },
  "fan_base": "Weak",
  "owner": "Family",
  "media_market": {
  "size": "1 mil.",
  "type": "Low Average"
  },
  "mega_chalices": 7
  },
  {
  "id": 8,
  "city": "Christiano",
  "name": "Candy Rain",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthCentral/Mind",
  "city_name": "Christiano",
  "team_name": "Candy Rain",
  "team_colors": "Pastel Pink, Royal Blue, Lemon Yellow",
  "offensive_playbook": "Run n' Gun",
  "defensive_playbook": "Blitz Heavy",
  "stadium": {
  "name": "Needs Work",
  "capacity": 61043
  },
  "fan_base": "Trending Down",
  "owner": "Entertainment Mogul",
  "media_market": {
  "size": "250,000",
  "type": "Rural"
  },
  "mega_chalices": 1
  },
  {
  "id": 9,
  "city": "Jakobian",
  "name": "Jokers",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthCentral/Mind",
  "city_name": "Jakobian",
  "team_name": "Jokers",
  "team_colors": "Matte Purple, Matte Green, Matte Yellow, White",
  "offensive_playbook": "West Coast",
  "defensive_playbook": "3-5",
  "stadium": {
  "name": "Cozy",
  "capacity": 54000
  },
  "fan_base": "Strong",
  "owner": "Automotive Corporation",
  "media_market": {
  "size": "700,000",
  "type": "Growing"
  },
  "mega_chalices": 4
  },
  {
  "id": 10,
  "city": "Queens Cove",
  "name": "Canary's",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthCentral/Mind",
  "city_name": "Queens Cove",
  "team_name": "Canary's",
  "team_colors": "Shiny Yellow, Neon Yellow, Matte Yellow/White",
  "offensive_playbook": "Balanced Pass",
  "defensive_playbook": "4-4",
  "stadium": {
  "name": "Cozy",
  "capacity": 54111
  },
  "fan_base": "Fair Weather",
  "owner": "Former Coach (HOF)",
  "media_market": {
  "size": "3 mil.",
  "type": "Average"
  },
  "mega_chalices": 0
  },
  {
  "id": 11,
  "city": "Zorisova",
  "name": "Sandals",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthCentral/Mind",
  "city_name": "Zorisova",
  "team_name": "Sandals",
  "team_colors": "Mocha, Beige, Crystal Ocean Blue, Cream",
  "offensive_playbook": "Balanced Run",
  "defensive_playbook": "4-6",
  "stadium": {
  "name": "10 years",
  "capacity": 89000
  },
  "fan_base": "Trending Up",
  "owner": "Lifelong Fan",
  "media_market": {
  "size": "7 mil.",
  "type": "Medium Huge"
  },
  "mega_chalices": 9
  },
  {
  "id": 12,
  "city": "Salted Sea",
  "name": "Sailors",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthCentral/Mind",
  "city_name": "Salted Sea",
  "team_name": "Sailors",
  "team_colors": "Navy Blue, White, Crimson",
  "offensive_playbook": "Option Pass",
  "defensive_playbook": "Cover 3 Zone Blitz",
  "stadium": {
  "name": "Average",
  "capacity": 79000
  },
  "fan_base": "Below Average",
  "owner": "Celebrity",
  "media_market": {
  "size": "2 mil.",
  "type": "Medium Average"
  },
  "mega_chalices": 3
  },
  {
  "id": 13,
  "city": "Closesight",
  "name": "Condors",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthWestern/Nucleus",
  "city_name": "Closesight",
  "team_name": "Condors",
  "team_colors": "Dark Brown, Tan, Cream, White",
  "offensive_playbook": "Singleback",
  "defensive_playbook": "Cover 1 Zone",
  "stadium": {
  "name": "Old",
  "capacity": 47883
  },
  "fan_base": "Almost Strong",
  "owner": "Lottery Winner",
  "media_market": {
  "size": "2 mil.",
  "type": "Medium Average"
  },
  "mega_chalices": 0
  },
  {
  "id": 14,
  "city": "Sunsprout",
  "name": "Flames",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthWestern/Nucleus",
  "city_name": "Sunsprout",
  "team_name": "Flames",
  "team_colors": "Fiery Red, Bright Orange, Sky Blue, Yellow",
  "offensive_playbook": "Shotgun",
  "defensive_playbook": "4-3",
  "stadium": {
  "name": "Needs Work",
  "capacity": 51050
  },
  "fan_base": "Unrealistic",
  "owner": "Investment Group",
  "media_market": {
  "size": "250,000",
  "type": "Rural"
  },
  "mega_chalices": 0
  },
  {
  "id": 15,
  "city": "Beloved",
  "name": "Funnel Chug",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthWestern/Nucleus",
  "city_name": "Beloved",
  "team_name": "Funnel Chug",
  "team_colors": "Aqua Marine, Gold, Hot Pink",
  "offensive_playbook": "Power I",
  "defensive_playbook": "Cover 3 Zone Blitz",
  "stadium": {
  "name": "New",
  "capacity": 103324
  },
  "fan_base": "Grass is Greener",
  "owner": "International Investor",
  "media_market": {
  "size": "10 mil.",
  "type": "Huge"
  },
  "mega_chalices": 18
  },
  {
  "id": 16,
  "city": "San Terrell",
  "name": "Saints",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthWestern/Nucleus",
  "city_name": "San Terrell",
  "team_name": "Saints",
  "team_colors": "Gold, Silver, Eggshell White",
  "offensive_playbook": "Run Heavy",
  "defensive_playbook": "Man to Man",
  "stadium": {
  "name": "Old",
  "capacity": 70489
  },
  "fan_base": "Bandwagon",
  "owner": "Scumbag",
  "media_market": {
  "size": "10 mil.",
  "type": "Huge"
  },
  "mega_chalices": 7
  },
  {
  "id": 17,
  "city": "Justinopolis",
  "name": "Jackals",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthWestern/Nucleus",
  "city_name": "Justinopolis",
  "team_name": "Jackals",
  "team_colors": "Desert Tan, Dark Brown, Black",
  "offensive_playbook": "Air Raid",
  "defensive_playbook": "Zone Heavy",
  "stadium": {
  "name": "Average",
  "capacity": 81581
  },
  "fan_base": "Socialit/Eliteist",
  "owner": "Tech Billionaire",
  "media_market": {
  "size": "4 mil.",
  "type": "Low Huge"
  },
  "mega_chalices": 13
  },
  {
  "id": 18,
  "city": "Matteochi",
  "name": "Megaladons",
  "pha/guilding": "Pha/Wee'lng",
  "depot/allegiance": "NorthWestern/Nucleus",
  "city_name": "Matteochi",
  "team_name": "Megaladons",
  "team_colors": "Deep Ocean Blue, Shark Grey, Baby Blue",
  "offensive_playbook": "Pass Heavy",
  "defensive_playbook": "2-4",
  "stadium": {
  "name": "Disrepair",
  "capacity": 49187
  },
  "fan_base": "Non Existent",
  "owner": "Four Families",
  "media_market": {
  "size": "4 mil.",
  "type": "Low Huge"
  },
  "mega_chalices": 6
  },
  {
  "id": 19,
  "city": "Jessadelphia",
  "name": "Jypsees",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthWestern/Power",
  "city_name": "Jessadelphia",
  "team_name": "Jypsees",
  "team_colors": "Silver, Ruby Red, Emerald Green, Gold",
  "offensive_playbook": "Shotgun",
  "defensive_playbook": "Zone/Man",
  "stadium": {
  "name": "Different/Odd",
  "capacity": 90000
  },
  "fan_base": "Just Below Strong",
  "owner": "7 Families",
  "media_market": {
  "size": "3 mil.",
  "type": "Average"
  },
  "mega_chalices": 5
  },
  {
  "id": 20,
  "city": "Libertine",
  "name": "Stars",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthWestern/Power",
  "city_name": "Libertine",
  "team_name": "Stars",
  "team_colors": "Royal Blue, Silver, Teal",
  "offensive_playbook": "Spread",
  "defensive_playbook": "3-4",
  "stadium": {
  "name": "New",
  "capacity": 72727
  },
  "fan_base": "Average",
  "owner": "Oil Tycoon",
  "media_market": {
  "size": "2 mil.",
  "type": "Unknown"
  },
  "mega_chalices": 3
  },
  {
  "id": 21,
  "city": "Golden Siren",
  "name": "Soul",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthWestern/Power",
  "city_name": "Golden Siren",
  "team_name": "Soul",
  "team_colors": "Matte Purple, Gold, Matte Black",
  "offensive_playbook": "Splitback/Pro form",
  "defensive_playbook": "5-2",
  "stadium": {
  "name": "State of the Art",
  "capacity": 100010
  },
  "fan_base": "Strong",
  "owner": "Alligiance",
  "media_market": {
  "size": "3 mil.",
  "type": "Average"
  },
  "mega_chalices": 3
  },
  {
  "id": 22,
  "city": "Desert",
  "name": "Garrison",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthWestern/Power",
  "city_name": "Desert",
  "team_name": "Garrison",
  "team_colors": "Desert Camo, Black, Tan",
  "offensive_playbook": "Multi-Look",
  "defensive_playbook": "4-2",
  "stadium": {
  "name": "Needs Work",
  "capacity": 66666
  },
  "fan_base": "Just Above Weak",
  "owner": "Military Contractor",
  "media_market": {
  "size": "700,000",
  "type": "Growing"
  },
  "mega_chalices": 0
  },
  {
  "id": 23,
  "city": "San Terrell",
  "name": "Blackouts",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthWestern/Power",
  "city_name": "San Terrell",
  "team_name": "Blackouts",
  "team_colors": "Pitch Black, Matte Black, Dark Grey, Electric Gold/Blue",
  "offensive_playbook": "Shock",
  "defensive_playbook": "Awe",
  "stadium": {
  "name": "State of the Art",
  "capacity": 124333
  },
  "fan_base": "Mythical",
  "owner": "Former Player",
  "media_market": {
  "size": "10 mil.",
  "type": "Huge"
  },
  "mega_chalices": 24
  },
  {
  "id": 24,
  "city": "Firesky",
  "name": "Foxes",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthWestern/Power",
  "city_name": "Firesky",
  "team_name": "Foxes",
  "team_colors": "Burnt Orange, White, Dark Brown",
  "offensive_playbook": "Shock",
  "defensive_playbook": "4-6",
  "stadium": {
  "name": "Average",
  "capacity": 74011
  },
  "fan_base": "Just Below Strong",
  "owner": "Oil Tycoon",
  "media_market": {
  "size": "700,000",
  "type": "Growing"
  },
  "mega_chalices": 5
  },
  {
  "id": 25,
  "city": "Naveah",
  "name": "Nomads",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthCentral/Vigor",
  "city_name": "Naveah",
  "team_name": "Nomads",
  "team_colors": "Desert Sand, Dusty Rose, Teal",
  "offensive_playbook": "Option Pass",
  "defensive_playbook": "Cover 2",
  "stadium": {
  "name": "10 Years",
  "capacity": 77401
  },
  "fan_base": "Balanced",
  "owner": "Fans",
  "media_market": {
  "size": "1 mil.",
  "type": "Low Average"
  },
  "mega_chalices": 0
  },
  {
  "id": 26,
  "city": "Kaylee",
  "name": "Kraken",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthCentral/Vigor",
  "city_name": "Kaylean",
  "team_name": "Kraken",
  "team_colors": "Deep Teal, Black, Lime Green",
  "offensive_playbook": "Power Run",
  "defensive_playbook": "4-2",
  "stadium": {
  "name": "State of the Art",
  "capacity": 87187
  },
  "fan_base": "Just Above Weak",
  "owner": "Former Analyst (HOF)",
  "media_market": {
  "size": "2 mil.",
  "type": "Medium Average"
  },
  "mega_chalices": 1
  },
  {
  "id": 27,
  "city": "Emahney Park",
  "name": "Polarbears",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthCentral/Vigor",
  "city_name": "Emahney Park",
  "team_name": "Polarbears",
  "team_colors": "Snow White, Ice Blue, Fishscale White, Grey",
  "offensive_playbook": "Singleback",
  "defensive_playbook": "Balanced",
  "stadium": {
  "name": "8 years",
  "capacity": 96696
  },
  "fan_base": "Mythical",
  "owner": "Hospital Group",
  "media_market": {
  "size": "7 mil.",
  "type": "Medium Huge"
  },
  "mega_chalices": 7
  },
  {
  "id": 28,
  "city": "Deannaton",
  "name": "Demons",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthCentral/Vigor",
  "city_name": "Deannaton",
  "team_name": "Demons",
  "team_colors": "Blood Red, Black, Fiery Orange",
  "offensive_playbook": "Splitback/Pro form",
  "defensive_playbook": "Zone/Man",
  "stadium": {
  "name": "Disrepair",
  "capacity": 71000
  },
  "fan_base": "Bandwagon",
  "owner": "Tech Billionaire",
  "media_market": {
  "size": "500,000",
  "type": "Shrinking"
  },
  "mega_chalices": 0
  },
  {
  "id": 29,
  "city": "Jasmyne Junction",
  "name": "Jackrabbits",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthCentral/Vigor",
  "city_name": "Jasmyne Junction",
  "team_name": "Jackrabbits",
  "team_colors": "Desert Tan, Sage Green, Cream",
  "offensive_playbook": "Power I",
  "defensive_playbook": "2-4",
  "stadium": {
  "name": "Average",
  "capacity": 61061
  },
  "fan_base": "Trending Up",
  "owner": "Billionaire (Old Money)",
  "media_market": {
  "size": "1 mil.",
  "type": "Low Average"
  },
  "mega_chalices": 5
  },
  {
  "id": 30,
  "city": "Babelonia",
  "name": "Beacons",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthCentral/Vigor",
  "city_name": "Babelonia",
  "team_name": "Beacons",
  "team_colors": "Powder Purple, Bright White, Matte Navy",
  "offensive_playbook": "Pistol",
  "defensive_playbook": "3-3-3",
  "stadium": {
  "name": "Different/Odd",
  "capacity": 55000
  },
  "fan_base": "Above Average",
  "owner": "Inventor",
  "media_market": {
  "size": "500,000",
  "type": "Shrinking"
  },
  "mega_chalices": 2
  },
  {
  "id": 31,
  "city": "Longsite",
  "name": "Lemurs",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthEastern/Fierce",
  "city_name": "Longsite",
  "team_name": "Lemurs",
  "team_colors": "Ring-tailed Black, White, Grey",
  "offensive_playbook": "Run n' Gun",
  "defensive_playbook": "4-3",
  "stadium": {
  "name": "Needs Work",
  "capacity": 54186
  },
  "fan_base": "Fair Weather",
  "owner": "Hedgefund Manager",
  "media_market": {
  "size": "3 mil.",
  "type": "Average"
  },
  "mega_chalices": 6
  },
  {
  "id": 32,
  "city": "Visiente",
  "name": "Vikings",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthEastern/Fierce",
  "city_name": "Visiente'",
  "team_name": "Vikings",
  "team_colors": "Royal Purple, Black, Steel Grey",
  "offensive_playbook": "No Huddle",
  "defensive_playbook": "5-2",
  "stadium": {
  "name": "New",
  "capacity": 102120
  },
  "fan_base": "Socialite/Eliteist",
  "owner": "Investment Group",
  "media_market": {
  "size": "4 mil.",
  "type": "Low Huge"
  },
  "mega_chalices": 9
  },
  {
  "id": 33,
  "city": "County Line",
  "name": "Crossbows",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthEastern/Fierce",
  "city_name": "County Line",
  "team_name": "Crossbows",
  "team_colors": "Forest Green, Tan, Brown",
  "offensive_playbook": "Singleback",
  "defensive_playbook": "Cover 1 Zone",
  "stadium": {
  "name": "Average",
  "capacity": 72000
  },
  "fan_base": "Balanced",
  "owner": "Family",
  "media_market": {
  "size": "1 mil.",
  "type": "Low Average"
  },
  "mega_chalices": 4
  },
  {
  "id": 34,
  "city": "Sarahite",
  "name": "Snarf Dragons",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthEastern",
  "city_name": "Sarahite",
  "team_name": "Snarf Dragons/Fierce",
  "team_colors": "Dragon Green, Mustard Yellow, Matte Brown",
  "offensive_playbook": "Multi-Look",
  "defensive_playbook": "Zone Heavy",
  "stadium": {
  "name": "Disrepair",
  "capacity": 51000
  },
  "fan_base": "Trending Down",
  "owner": "Media Mogul",
  "media_market": {
  "size": "750,000",
  "type": "Growing"
  },
  "mega_chalices": 1
  },
  {
  "id": 35,
  "city": "Golden Sunset",
  "name": "Greyhounds",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthEastern/Fierce",
  "city_name": "Golden Sunset",
  "team_name": "Greyhounds",
  "team_colors": "Slate Grey, White, Silver",
  "offensive_playbook": "West Coast",
  "defensive_playbook": "Cover 2",
  "stadium": {
  "name": "State of the Art",
  "capacity": 109901
  },
  "fan_base": "Rabid",
  "owner": "Descendant of Alligiance Founder",
  "media_market": {
  "size": "10 mil.",
  "type": "Huge"
  },
  "mega_chalices": 0
  },
  {
  "id": 36,
  "city": "Takumzuh",
  "name": "Tigers",
  "pha/guilding": "Pha/Quar'tng",
  "depot/allegiance": "SouthEastern/Fierce",
  "city_name": "Takumzuh",
  "team_name": "Tigers",
  "team_colors": "Tiger Orange, Black, White",
  "offensive_playbook": "Balanced Run",
  "defensive_playbook": "Cover 1 (Zone Blitz)",
  "stadium": {
  "name": "10 years",
  "capacity": 94000
  },
  "fan_base": "Growing",
  "owner": "Scumbag",
  "media_market": {
  "size": "10 mil.",
  "type": "Huge"
  },
  "mega_chalices": 6
  }
]
}""",


stadiums/


playbooks/


player_templates.json


unlockables/


tests/


test_gameplay.py


test_systems.py


main.py


README.md
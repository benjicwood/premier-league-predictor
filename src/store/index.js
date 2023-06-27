import { createStore } from 'vuex'

export default createStore({

  state: {
    league: [
      { "id": 1, "name": "Arsenal", "icon": "arsenal", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
      { "id": 12, "name": "Manchester City", "icon": "manchestercity", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "lightblue", "current": true },
      { "id": 14, "name": "Newcastle United", "icon": "newcastleunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "black", "current": true },
      { "id": 13, "name": "Manchester United", "icon": "manchesterunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
      { "id": 17, "name": "Tottenham Hotspur", "icon": "tottenhamhotspur", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "black", "current": true },
      { "id": 3, "name": "Brighton & Hove Albion", "icon": "brightonandhovealbion", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "lightblue", "current": true },
      { "id": 8, "name": "Fulham", "icon": "fulham", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "black", "current": true },
      { "id": 23, "name": "Brentford", "icon": "brentford", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
      { "id": 11, "name": "Liverpool", "icon": "liverpool", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
      { "id": 5, "name": "Chelsea", "icon": "chelsea", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "darkblue", "current": true },
      { "id": 2, "name": "Aston Villa", "icon": "astonvilla", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#7f1734", "current": true },
      { "id": 6, "name": "Crystal Palace", "icon": "crystalpalace", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "darkblue", "current": true },
      { "id": 25, "name": "Nottingham Forest", "icon": "nottinghamforest", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
      { "id": 10, "name": "Leicester City", "icon": "leicestercity", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "blue", "current": false },
      { "id": 9, "name": "Leeds United", "icon": "leedsunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "black", "current": false },
      { "id": 19, "name": "West Ham United", "icon": "westhamunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#7f1734", "current": true },
      { "id": 20, "name": "Wolverhampton Wanderers", "icon": "wolverhamptonwanderers", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#d4af37", "current": true },
      { "id": 24, "name": "Bournemouth", "icon": "bournemouth", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
      { "id": 7, "name": "Everton", "icon": "everton", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "blue", "current": true },
      { "id": 16, "name": "Southampton", "icon": "southampton", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": false },
      { "id": 21, "name": "Watford", "icon": "watford", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#fbee23", "current": false },
      { "id": 4, "name": "Burnley", "icon": "burnley", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#5F1443", "current": true },
      { "id": 22, "name": "Norwich City", "icon": "norwichcity", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "green", "current": false },
      { "id": 18, "name": "West Bromwich Albion", "icon": "westbromwichalbion", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "blue", "current": false },
      { "id": 15, "name": "Sheffield United", "icon": "sheffieldunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
      { "id": 26, "name": "Bradford City", "icon": "bradfordcity", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#F89C29", "current": false },
      { "id": 27, "name": "Blackburn Rovers", "icon": "blackburnrovers", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#00A0E1", "current": false },
      { "id": 28, "name": "Stoke City", "icon": "stokecity", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": false },
      { "id": 29, "name": "Ipswich Town", "icon": "ipswichtown", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "darkblue", "current": false },
      { "id": 30, "name": "Portsmouth", "icon": "portsmouth", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "lightblue", "current": false },
      { "id": 31, "name": "Sunderland", "icon": "sunderland", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": false },
      { "id": 32, "name": "Reading", "icon": "reading", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "blue", "current": false },
      { "id": 33, "name": "Blackpool", "icon": "blackpool", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#F6880A", "current": false },
      { "id": 34, "name": "Grimsby Town", "icon": "grimsbytown", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "black", "current": false },
      { "id": 35, "name": "Plymouth Argyle", "icon": "plymouthargyle", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#00503E", "current": false },
      { "id": 36, "name": "Luton Town", "icon": "lutontown", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#F88F20", "current": true },
      { "id": 37, "name": "Middlesbrough", "icon": "middlesbrough", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": false },
      { "id": 38, "name": "Coventry City", "icon": "coventrycity", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#0DB6E7", "current": false },
      { "id": 39, "name": "Wrexham", "icon": "wrexham", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": false },
      { "id": 40, "name": "Sheffield Wednesday", "icon": "sheffieldwednesday", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#4482D0", "current": false },

    ],
    fixtures: [
      [
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Manchester City" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Everton" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Liverpool" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Newcastle United" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Manchester City" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Aston Villa" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Fulham" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Newcastle United" }
      ],
      [
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Chelsea" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" }
      ],
      [
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Aston Villa" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Crystal Palace" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Chelsea" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Nottingham Forest" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Chelsea" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Luton Town" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Everton" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "West Ham United" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Burnley" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Aston Villa" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Sheffield United" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Brentford" }
      ],
      [
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Burnley", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Luton Town", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Sheffield United", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Burnley" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Luton Town" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Sheffield United" }
      ],
    ],
  },

  mutations: {
    setLeague(state, league) {
      state.league = league
    },
    setFixtures(state, fixtures) {
      state.fixtures = fixtures
    }
  },

  actions: {
    setLeague({ commit }, league) {
      commit('setLeague', league)
    },
    setFixtures({ commit }, fixtures) {
      commit('setFixtures', fixtures)
    }
  },

  modules: {

  }
})


// [
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" },
//   { "home": "", "homescore": null, "awayscore": null, "away": "" }
// ],
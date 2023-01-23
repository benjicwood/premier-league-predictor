import { createStore } from 'vuex'

export default createStore({

  state: {
    league: [
      { "id": 1, "name": "Arsenal", "icon": "arsenal", "played": 19, "won": 16, "drawn": 2, "lost": 1, "gd": 29, "points": 50, "color": "red", "current": true },
      { "id": 12, "name": "Manchester City", "icon": "manchestercity", "played": 20, "won": 14, "drawn": 3, "lost": 3, "gd": 33, "points": 45, "color": "lightblue", "current": true },
      { "id": 14, "name": "Newcastle United", "icon": "newcastleunited", "played": 20, "won": 10, "drawn": 9, "lost": 1, "gd": 22, "points": 39, "color": "black", "current": true },
      { "id": 13, "name": "Manchester United", "icon": "manchesterunited", "played": 20, "won": 12, "drawn": 3, "lost": 5, "gd": 7, "points": 39, "color": "red", "current": true },
      { "id": 17, "name": "Tottenham Hotspur", "icon": "tottenhamhotspur", "played": 20, "won": 10, "drawn": 3, "lost": 7, "gd": 8, "points": 33, "color": "black", "current": true },
      { "id": 3, "name": "Brighton & Hove Albion", "icon": "brightonandhovealbion", "played": 19, "won": 9, "drawn": 4, "lost": 6, "gd": 10, "points": 31, "color": "lightblue", "current": true },
      { "id": 8, "name": "Fulham", "icon": "fulham", "played": 20, "won": 9, "drawn": 4, "lost": 7, "gd": 3, "points": 31, "color": "black", "current": true },
      { "id": 23, "name": "Brentford", "icon": "brentford", "played": 20, "won": 7, "drawn": 9, "lost": 4, "gd": 4, "points": 30, "color": "red", "current": true },
      { "id": 11, "name": "Liverpool", "icon": "liverpool", "played": 19, "won": 8, "drawn": 5, "lost": 6, "gd": 9, "points": 29, "color": "red", "current": true },
      { "id": 5, "name": "Chelsea", "icon": "chelsea", "played": 20, "won": 8, "drawn": 5, "lost": 7, "gd": 1, "points": 29, "color": "darkblue", "current": true },
      { "id": 2, "name": "Aston Villa", "icon": "astonvilla", "played": 20, "won": 8, "drawn": 4, "lost": 8, "gd": -4, "points": 28, "color": "#7f1734", "current": true },
      { "id": 6, "name": "Crystal Palace", "icon": "crystalpalace", "played": 20, "won": 6, "drawn": 6, "lost": 8, "gd": -9, "points": 24, "color": "darkblue", "current": true },
      { "id": 25, "name": "Nottingham Forest", "icon": "nottinghamforest", "played": 20, "won": 5, "drawn": 6, "lost": 9, "gd": -19, "points": 21, "color": "red", "current": true },
      { "id": 10, "name": "Leicester City", "icon": "leicestercity", "played": 20, "won": 5, "drawn": 3, "lost": 12, "gd": -7, "points": 18, "color": "blue", "current": true },
      { "id": 9, "name": "Leeds United", "icon": "leedsunited", "played": 19, "won": 4, "drawn": 6, "lost": 9, "gd": -7, "points": 18, "color": "black", "current": true },
      { "id": 19, "name": "West Ham United", "icon": "westhamunited", "played": 20, "won": 5, "drawn": 3, "lost": 12, "gd": -8, "points": 18, "color": "#7f1734", "current": true },
      { "id": 20, "name": "Wolverhampton Wanderers", "icon": "wolverhamptonwanderers", "played": 20, "won": 4, "drawn": 5, "lost": 11, "gd": -18, "points": 17, "color": "#d4af37", "current": true },
      { "id": 24, "name": "Bournemouth", "icon": "bournemouth", "played": 20, "won": 4, "drawn": 5, "lost": 11, "gd": -23, "points": 17, "color": "red", "current": true },
      { "id": 7, "name": "Everton", "icon": "everton", "played": 20, "won": 3, "drawn": 6, "lost": 11, "gd": -13, "points": 15, "color": "blue", "current": true },
      { "id": 16, "name": "Southampton", "icon": "southampton", "played": 20, "won": 4, "drawn": 3, "lost": 13, "gd": -18, "points": 15, "color": "red", "current": true },
      { "id": 21, "name": "Watford", "icon": "watford", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#fbee23", "current": false },
      { "id": 4, "name": "Burnley", "icon": "burnley", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#7f1734", "current": false },
      { "id": 22, "name": "Norwich City", "icon": "norwichcity", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "green", "current": false },
      { "id": 18, "name": "West Bromwich Albion", "icon": "westbromwichalbion", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "blue", "current": false },
      { "id": 15, "name": "Sheffield United", "icon": "sheffieldunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": false },
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
    ],
    fixtures: [
      // [
      //   { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
      //   { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Liverpool" },
      // ],
      [
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Southampton" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Leeds United" },
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Manchester City" },
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Southampton" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Bournemouth" }
      ],
      [
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Southampton" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Nottingham Forest" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" }
      ],
      [
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Southampton" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Aston Villa" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Leeds United" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Southampton" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Chelsea" }
      ],
      [
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Brentford" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Southampton" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" }
      ],
      [
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Arsenal" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Southampton" }
      ],
      [
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Everton" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Southampton" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Aston Villa" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "Liverpool" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Fulham" }
      ],
      [
        { "home": "Bournemouth", "homescore": null, "awayscore": null, "away": "Manchester United" },
        { "home": "Brighton & Hove Albion", "homescore": null, "awayscore": null, "away": "Southampton" },
        { "home": "Fulham", "homescore": null, "awayscore": null, "away": "Crystal Palace" },
        { "home": "Liverpool", "homescore": null, "awayscore": null, "away": "Aston Villa" },
        { "home": "Manchester City", "homescore": null, "awayscore": null, "away": "Chelsea" },
        { "home": "Newcastle United", "homescore": null, "awayscore": null, "away": "Leicester City" },
        { "home": "Nottingham Forest", "homescore": null, "awayscore": null, "away": "Arsenal" },
        { "home": "Tottenham Hotspur", "homescore": null, "awayscore": null, "away": "Brentford" },
        { "home": "West Ham United", "homescore": null, "awayscore": null, "away": "Leeds United" },
        { "home": "Wolverhampton Wanderers", "homescore": null, "awayscore": null, "away": "Everton" }
      ],
      [
        { "home": "Arsenal", "homescore": null, "awayscore": null, "away": "Wolverhampton Wanderers" },
        { "home": "Aston Villa", "homescore": null, "awayscore": null, "away": "Brighton & Hove Albion" },
        { "home": "Brentford", "homescore": null, "awayscore": null, "away": "Manchester City" },
        { "home": "Chelsea", "homescore": null, "awayscore": null, "away": "Newcastle United" },
        { "home": "Crystal Palace", "homescore": null, "awayscore": null, "away": "Nottingham Forest" },
        { "home": "Everton", "homescore": null, "awayscore": null, "away": "Bournemouth" },
        { "home": "Leeds United", "homescore": null, "awayscore": null, "away": "Tottenham Hotspur" },
        { "home": "Leicester City", "homescore": null, "awayscore": null, "away": "West Ham United" },
        { "home": "Manchester United", "homescore": null, "awayscore": null, "away": "Fulham" },
        { "home": "Southampton", "homescore": null, "awayscore": null, "away": "Liverpool" }
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

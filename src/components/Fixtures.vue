<template>
    <div class="fixture-list-container">
        <div v-for="(fixture, index) in $store.state.fixtures[gameweek]" :key="index" class="fixture">
            <p style="text-align:right">{{ fixture.home }}</p>
            <input style="margin:auto" type="text" v-model="fixture.homescore">
            <input style="margin:auto" type="text" v-model="fixture.awayscore">
            <p style="text-align:left">{{ fixture.away }}</p>
        </div>
    <button @click="updateTable()">Update</button>
    <button @click="resetTable()">Reset</button>
    </div>

</template>

<script>
export default({
    name: 'Fixtures',
    data() {
        return {
            gameweek: 0,
        }
    },
    methods: {
        updateTable() {
            for (const fixture of this.$store.state.fixtures[this.gameweek]) {
                let home = this.$store.state.league.find(club => club.name === fixture.home)
                let away = this.$store.state.league.find(club => club.name === fixture.away)

                home.played += 1
                away.played += 1
                let goalDifference = Math.abs(fixture.homescore - fixture.awayscore)

                if (fixture.homescore > fixture.awayscore) {
                    home.points += 3
                    home.won += 1
                    home.gd += goalDifference
                    away.lost += 1
                    away.gd -= goalDifference
                }
                if (fixture.awayscore > fixture.homescore) {
                    away.points += 3
                    away.won += 1
                    away.gd += goalDifference
                    home.lost += 1
                    home.gd -= goalDifference
                }
                if (fixture.homescore === fixture.awayscore) {
                    home.points += 1
                    away.points += 1
                    home.drawn += 1
                    away.drawn += 1
                }
            }
            this.gameweek += 1

            this.$store.dispatch('setLeague', this.$store.state.league.sort(this.sortGd).sort(this.sortLeague).reverse())
        },
          sortGd(a, b) { // sortGoalDifference
            const aGoalDiff = a.gd;
            const bGoalDiff = b.gd;

            let comparison = 0;

            if (aGoalDiff > bGoalDiff) { comparison = 1; }
            if (aGoalDiff < bGoalDiff) { comparison = -1; }

            return comparison;
        },
        sortLeague(a, b) {
            const aPoints = a.points;
            const bPoints = b.points;

            let comparison = 0;

            if (aPoints > bPoints) { comparison = 1; }
            if (aPoints < bPoints) { comparison = -1; }
            return comparison;
        },
        async resetTable() {
            const defaultLeague = [
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
                { "id": 19, "name": "West Ham United", "icon": "westhamunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#7f1734", "current": true },
                { "id": 20, "name": "Wolverhampton Wanderers", "icon": "wolverhamptonwanderers", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#d4af37", "current": true },
                { "id": 24, "name": "Bournemouth", "icon": "bournemouth", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
                { "id": 7, "name": "Everton", "icon": "everton", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "blue", "current": true },
                { "id": 4, "name": "Burnley", "icon": "burnley", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#5F1443", "current": true },
                { "id": 15, "name": "Sheffield United", "icon": "sheffieldunited", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "red", "current": true },
                { "id": 36, "name": "Luton Town", "icon": "lutontown", "played": 0, "won": 0, "drawn": 0, "lost": 0, "gd": 0, "points": 0, "color": "#F88F20", "current": true },

            ];
            this.resetFixtures()

           this.$store.dispatch('setLeague', defaultLeague)

            this.gameweek = 0
        },
        resetFixtures() {
            return this.$store.state.fixtures.forEach(fixtureGroup => {
                fixtureGroup.forEach(fixture => {
                    fixture.homescore = null;
                    fixture.awayscore = null;
                })
            })
        }
    }

})
</script>

<style scoped>
.fixture-list-container {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 40%;
    height: fit-content;
    border: 1px solid black;
}

.fixture {
    display: grid;
    grid-template-columns: 40% 10% 10% 40%;
}

.fixture:nth-child(odd) {
    background-color: whitesmoke;
}

input {
    width: 30px;
    height: 20px;
}
</style>
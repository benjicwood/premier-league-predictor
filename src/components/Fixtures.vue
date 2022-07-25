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
            console.log('hello')
            // console.log(this.$store.state.fixtures[this.gameweek])
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

            // this.$store.state.league.sort(this.sortGd).sort(this.sortLeague).reverse()
            this.$store.dispatch('setLeague', this.$store.state.league.sort(this.sortGd).sort(this.sortLeague).reverse())

            // console.log(this.$store.state.league.sort(this.sortGd).sort(this.sortLeague).reverse())
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
            const leagueres = await fetch('api/premierleague')
            const league = await leagueres.json()
            this.$store.dispatch('setLeague', league)
            const fixturesres = await fetch('api/fixtures')
            const fixtures = await fixturesres.json()
            this.$store.dispatch('setFixtures', fixtures)
            this.gameweek = 0
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
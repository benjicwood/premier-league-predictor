<template>
<div class="table-row">
    <div>{{position}}</div>
    <div class="team-logo"><img :src="require(`../assets/club-logos/${team.icon}.png`)"></div>
    <div>{{team.name}}</div>
    <div>{{team.played}}</div>
    <div>{{team.won}}</div>
    <div>{{team.drawn}}</div>
    <div>{{team.lost}}</div>
    <div>{{team.gd}}</div>
    <div>{{team.points}}</div>
</div>

</template>

<script>

export default({
    name: 'TableRow',
    props: {
        team: {
            name: String,
            icon: String,
            played: Number,
            won: Number,
            drawn: Number,
            lost: Number,
            gd: Number,
            points: Number,
            color: String,
        },
        position: Number,
    }
})

</script>

<style scoped lang="scss">
img {
    height: 30px;
}

.table-row {
    // width: 50%;
    height: 35px;
    display: grid;
    grid-template-columns: 5% 19% 40% 6% 6% 6% 6% 6% 6%;
}

.table-row:nth-child(odd) {
    background-color: whitesmoke;
}

.table-row > div {
    margin: auto;
 }

</style>

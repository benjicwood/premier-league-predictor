<template>
    <div class="club-box" :style="{ border: `1px solid ${club.color}` }">
        <div class="team-logo"><img :src="require(`../assets/club-logos/${club.icon}.png`)"></div>
        <div style="background-color:whitesmoke; z-index: -1;"></div>
    </div>
</template>

<script>
export default({
    name: 'ClubBox',
    props: {
        club: {
            id: Number,
            name: String,
            icon: String,
            color: String,
        }
    }
})
</script>

<style scoped lang="scss">

.club-box {
    width: 200px;
    height: 250px;
    display: grid;
    grid-template-rows: 50% 50%;
    margin-left: 10px;
}

.club-box:hover {
    background-color: whitesmoke;
    img {
        transform: scale(1.1);
    }
}

.team-logo {
    width: 100px;
    height: 100px;
    margin: auto;
}

img {
    height: 100px;
    margin-top: 60px;
}

</style>
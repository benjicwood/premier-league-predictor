<template>
    <div class="grid">
        <ClubBox v-for="club in clubs" :key="club.id" :club="club" />
    </div>
</template>

<script>
import ClubBox from '@/components/ClubBox'

export default({
    name: 'Clubs',
    data() {
        return {
            clubs: []
        }
    },
    components: {
        ClubBox,
    },
    mounted() {
        this.clubs = this.$store.state.league.sort((a, b) => a.name.localeCompare(b.name))
    }
})
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 10px;
}
</style>
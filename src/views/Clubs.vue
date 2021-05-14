<template>
    <div class="grid">
        <ClubBox v-for="club in $store.state.league" :key="club.id" :club="club" />
    </div>
</template>

<script>
import ClubBox from '@/components/ClubBox'

export default({
    name: 'Clubs',
    components: {
        ClubBox,
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
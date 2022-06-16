<template>
<div class="league-table-container">
    <TableHeader />
    <TableRow class="table" v-for="(team, position) in currentClubs" :key="position" :team="team" :position="position + 1" />
</div>
</template>

<script>
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export default({
    name: 'League',
    components: {
        TableHeader,
        TableRow,
    },
    data() {
        return {
            currentClubs: this.$store.state.league.filter(club => club.current),
        }
    },
})
</script>

<style scoped>
.league-table-container {
    width: 50%;
}
.table {
    border-left: 1px solid black;
    border-right: 1px solid black;
}
.table:last-child {
    border-bottom: 1px solid black;
}
</style>
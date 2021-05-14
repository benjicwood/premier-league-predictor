<template>
  <div class="home" style="display: flex">
    <League />
    <Fixtures />
  </div>
</template>

<script>
// @ is an alias to /src
import League from '@/components/League'
import Fixtures from '@/components/Fixtures'

export default {
  name: 'Home',
  components: {
    League,
    Fixtures,
  },
  methods: {
    async fetchLeague() {
      const res = await fetch('api/premierleague')
      const league = await res.json()
      this.$store.dispatch('setLeague', league)
    },
    async fetchFixtures() {
      const res = await fetch('api/fixtures')
      const fixtures = await res.json()
      this.$store.dispatch('setFixtures', fixtures)
    }
  },
  mounted() {
    this.fetchLeague()
    this.fetchFixtures()
  }
}
</script>

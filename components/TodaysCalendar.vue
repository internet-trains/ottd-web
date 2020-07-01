<template>
  <v-sheet>
    <div class="welcome-info">Click <v-icon>mdi-menu</v-icon> above to see the available stats!</div>
  </v-sheet>
</template>

<script>
export default {
  name: 'TodaysCalendar',
  mounted() {
    // this.$axios
    //   .get('/time/')
    //   .then((response) => (this.time = response.data))
  }
}
</script>

<style scoped>
.welcome-info {
  max-width: 500px;
  padding: 20px 50px;
}
</style>

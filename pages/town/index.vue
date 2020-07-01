<template>
  <v-card>
    <v-card-title>
      Towns
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="towns" :search="search" @click:row="handleClick" dense>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Town',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Population', value: 'population' },
        { text: 'House Count', value: 'house_count' },
        { text: 'Growth Rate', value: 'growth_rate' },
        { text: 'Is City', value: 'is_city' },
        { text: 'Last Updated', value: 'last_updated' }
      ],
      towns: [
        // {
        //   name: 'Frozen Yogurt',
        //   calories: 159,
        //   fat: 6.0,
        //   carbs: 24,
        //   protein: 4.0,
        //   iron: '1%',
        // },
      ],
      search: ''
    }
  },
  mounted() {
    this.$axios
      .get('/town/')
      .then((response) => (this.towns = response.data))
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
    handleClick(row) {
      this.$router.push('/town/' + row.id + '/')
    }
  }
}
</script>

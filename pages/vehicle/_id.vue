<template>
  <v-card>
    <BarChart
      :data_source="'/vehicle/' + this.$route.params.id + '/timescale_data'"
      :y_axis="'profit_this_year'"
      :height="200"
    ></BarChart>
  </v-card>
</template>

<script>
import BarChart from '../../components/BarChart'
export default {
  components: {
    BarChart
  },
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
      towns: [],
      search: ''
    }
  },
  mounted() {
    this.$axios.get('/town/').then((response) => (this.towns = response.data))
  },
  methods: {}
}
</script>

<style>
v-card {
  max-width: 200px;
  height: 200px;
}
</style>

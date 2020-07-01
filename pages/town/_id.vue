<template>
  <v-card>
    <BarChart
      :data_source="
        '/town/' +
          this.$route.params.id +
          '/timescale_data'
      " y_axis="population"
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
          text: 'Towns',
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
    this.$axios
      .get('/town/')
      .then((response) => (this.towns = response.data))
  },
  methods: {
  }
}
</script>

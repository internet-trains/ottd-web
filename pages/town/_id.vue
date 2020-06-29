<template>
  <v-card>
    <BarChart
      :data_source="
        'http://192.168.2.34:5000/town/' +
          this.$route.params.id +
          '/timescale_data'
      " y_axis="population"
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
      .get('http://192.168.2.34:5000/town/')
      .then((response) => (this.towns = response.data))
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    }
  }
}
</script>

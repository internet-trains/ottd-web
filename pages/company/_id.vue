<template>
  <v-card>
    <!--    <v-card-title>-->
    <!--      Companies-->
    <!--      <v-spacer></v-spacer>-->
    <!--      <v-text-field-->
    <!--        v-model="search"-->
    <!--        append-icon="mdi-magnify"-->
    <!--        label="Search"-->
    <!--        single-line-->
    <!--        hide-details-->
    <!--      ></v-text-field>-->
    <!--    </v-card-title>-->
    <!--    <v-data-table-->
    <!--      :headers="headers"-->
    <!--      :items="companies"-->
    <!--      :search="search"-->
    <!--      @click:row="handleClick"-->
    <!--    >-->
    <!--      <template v-slot:item.color="{ item }">-->
    <!--        <v-chip :color="getColor(item.color)" dark>-->
    <!--          <v-avatar>-->
    <!--            <v-icon>mdi-account-circle</v-icon>-->
    <!--          </v-avatar>-->
    <!--        </v-chip>-->
    <!--      </template>-->
    <!--    </v-data-table>-->
    <BarChart
      :data_source="
        '/company/' +
          this.$route.params.id +
          '/timescale_data'
      "
      :y_axis="'money'"
      :height="200"
    ></BarChart>
  </v-card>
</template>

<script>
import BarChart from '../../components/BarChart'
export default {
  components: { BarChart },
  data() {
    return {
      headers: [
        {
          text: 'Companies',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Color', value: 'color' },
        { text: 'Manager', value: 'manager' },
        { text: 'Money', value: 'money' },
        { text: 'Income', value: 'income' },
        { text: 'Current Loan', value: 'current_loan' },
        { text: 'Delivered', value: 'delivered' },
        { text: 'Start Year', value: 'start_year' }
      ],
      companies: [
      ],
      search: ''
    }
  },
  mounted() {
    this.$axios
      .get('/company/')
      .then((response) => (this.companies = response.data))
  },
  methods: {
    getColor(color) {
      return [
        '#1c448c', // dark blue
        '#4C7458', // light green
        '#BC546C', // pink
        '#D49C20', // yellow
        '#C40000', // red
        '#347084', // light blue
        '#548414', // green
        '#50683C', // dark green
        '#1878DC', // blue
        '#B87050', // cream
        '#505074', // mauve
        '#684CC4', // purple
        '#FC9C00', // orange
        '#7C6848', // brown
        '#737573', // grey
        '#B8B8B8' // white
      ][color]
    },
    handleClick(row) {
      this.$router.push('/company/' + row.id)
    }
  }
}
</script>

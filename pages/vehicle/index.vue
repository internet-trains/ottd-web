<template>
  <v-card>
    <v-card-title>
      Vehicles
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="towns" :search="search" @click:row="handleClick">
      <template v-slot:item.age="{ item }">
        {{ day_delta_to_string(item.age, false) }}
      </template>
      <template v-slot:item.max_age="{ item }">
        {{ day_delta_to_string(item.max_age) }}
      </template>
      <template v-slot:item.profit_this_year="{ item }">
        {{ to_money_string(item.profit_this_year) }}
      </template>
      <template v-slot:item.profit_last_year="{ item }">
        {{ to_money_string(item.profit_last_year) }}
      </template>
      <template v-slot:item.running_cost="{ item }">
        {{ to_money_string(item.running_cost) }}
      </template>
      <template v-slot:item.value="{ item }">
        {{ to_money_string(item.value) }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      headers: [
        {
          text: 'Vehicles',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Company', value: 'company_id' },
        { text: 'Purchase Date', value: 'age' },
        { text: 'Max Age', value: 'max_age' },
        { text: 'Profit (This Year)', value: 'profit_this_year' },
        { text: 'Profit (Last Year)', value: 'profit_last_year' },
        { text: 'Running Cost', value: 'running_cost' },
        { text: 'Value', value: 'value' }
      ],
      towns: [],
      search: ''
    }
  },
  mounted() {
    this.$axios
      .get('http://192.168.2.34:5000/vehicle/')
      .then((response) => (this.towns = response.data))
  },
  methods: {
    day_delta_to_string(dd, suffix = true) {
      return moment()
        .days(-dd)
        .fromNow(suffix)
    },
    to_money_string(value) {
      return (value < 0 ? '-$' : '$') + Math.abs(value)
    },
    handleClick(row) {
      this.$router.push('/vehicle/' + row.id + '/')
    }
  }
}
</script>
<!--    "age": 4926,-->
<!--    "group_id": 0,-->
<!--    "has_shared_orders": null,-->
<!--    "id": 9,-->
<!--    "is_articulated": null,-->
<!--    "last_updated": "2023-10-05",-->
<!--    "length": 56.0,-->
<!--    "max_age": 9150,-->
<!--    "maximum_order_distance": 0,-->
<!--    "name": "Train 2",-->
<!--    "num_wagons": 6,-->
<!--    "profit_last_year": 34312,-->
<!--    "profit_this_year": 25417,-->
<!--    "reliability": 0.0,-->
<!--    "remaining_life": 4223,-->
<!--    "road_type": -1,-->
<!--    "running_cost": 4607,-->
<!--    "speed": 25,-->
<!--    "state": 0,-->
<!--    "type": null,-->
<!--    "value": 4661,-->
<!--    "vehicle_type": 0-->

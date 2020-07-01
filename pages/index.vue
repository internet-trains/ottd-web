<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <TodaysCalendar />
    </v-flex>
  </v-layout>
</template>

<script>

import BarChart from "@/components/BarChart";
import TodaysCalendar from "@/components/TodaysCalendar";
export default {
  components: {
    BarChart,
    TodaysCalendar
  }
}
</script>

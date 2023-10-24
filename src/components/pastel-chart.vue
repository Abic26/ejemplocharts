<template>
  <div>
    <apexchart type="pie" :options="chartOptionsPie" :series="chartDataPie" />
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptionsPie: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
      },
      chartDataPie: [30, 40, 25, 50, 49]
    }
  }
}
</script>

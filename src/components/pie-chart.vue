<template>
  <div>
    <apexchart type="pie" :options="chartOptions" :series="chartData" />
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
      chartOptions: {
        labels: ['January', 'February', 'March']
      },
      chartData: [40, 20, 12]
    }
  }
}
</script>

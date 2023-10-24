<template>
  <div>
    <apexchart type="bar" :options="chartOptionsColumn" :series="chartDataColumn" />
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
      chartOptionsColumn: {
        xaxis: {
          categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
        }
      },
      chartDataColumn: [
        {
          name: 'Serie 1',
          data: [30, 40, 25, 50, 49]
        }
      ]
    }
  }
}
</script>

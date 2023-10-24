<template>
  <div>
    <apexchart type="line" :options="chartOptionsLine" :series="chartDataLine" />
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
      chartOptionsLine: {
        xaxis: {
          categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
        }
      },
      chartDataLine: [
        {
          name: 'Serie 1',
          data: [30, 40, 25, 50, 49]
        },
        {
          name: 'Serie 2',
          data: [45, 35, 50, 60, 55]
        }
      ]
    }
  }
}
</script>

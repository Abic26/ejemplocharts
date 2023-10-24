<template>
  <div>
    <apexchart type="area" :options="chartOptionsArea" :series="chartDataArea" />
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
      chartOptionsArea: {
        xaxis: {
          categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
        }
      },
      chartDataArea: [
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

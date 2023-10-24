<template>
  <div>
    <apexchart type="bar" :options="chartOptions" :series="chartData" />
    <ul>
      <li v-for="(user, index) in userData" :key="user.id">
        {{ user.name }} -
        {{ user.id }}
      </li>
    </ul>
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
      userData: [],
      chartOptions: {
        xaxis: {
          categories: [] // Nombres de usuario
        }
      },
      chartData: []
    }
  },
  mounted() {
    this.fetchDataFromAPI()
  },
  methods: {
    async fetchDataFromAPI() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        // Preparar los datos para el gráfico de columnas
        const names = data.map((user) => user.name)

        this.userData = data // Mantén los datos originales
        this.chartData = [{ data: data.map((user) => user.id) }]
        this.chartOptions.xaxis.categories = names // Utiliza los nombres como etiquetas en el eje X
      } catch (error) {
        console.error('Error al obtener los datos de la API', error)
      }
    }
  }
}
</script>

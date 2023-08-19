<template>
  <div>
    <h3>Welcome back {{ username }}</h3>
    <v-row class="mt-4">
      <v-col cols="6" md="4">
        <highcharts :options="optionLine" />
      </v-col>
      <v-col cols="6" md="4">
        <highcharts :options="optionBar" />
      </v-col>
      <v-col cols="6" md="4">
        <highcharts :options="optionArea" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getSession } from '@/helpers/session'
import { Chart } from 'highcharts-vue'

export default {
  components: {
    highcharts: Chart,
  },
  data(){
    return {
      isError: false,
      didLoad: true,
      dataImg: [
        {
          id: 1,
          name: '3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWu',
        },
        {
          id: 2,
          name: '3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA',
        },
        {
          id: 3,
          name: '3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWus',
        },
      ]
    }
  },
  computed: {
    username() {
      return getSession().username
    },
    optionLine() {
      return {
        chart: {
          type: "line",
          height: 300,
          backgroundColor: "transparent"
        },
        title: {
          text: "Prasarana Air Bersih",
          style: {
            fontSize: "12px"
          }
        },
        yAxis: {
          title: {
            text: "Liter"
          },
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
        xAxis: {
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
        series: [
          {
            name: "Lombok Timur",
            data: [[2019, 2500], [2020, 3000], [2021, 3200]]
          },
          {
            name: "Lombok Tengah",
            data: [[2019, 2650], [2020, 2800], [2021, 3800]]
          }
        ],
        credits: {
          enabled: false
        }
      }
    },
    optionBar() {
      return {
        chart: {
          type: "column",
          height: 300,
          backgroundColor: "transparent"
        },
        title: {
          text: "Tingkat kepadatan penduduk",
          style: {
            fontSize: "12px"
          }
        },
        yAxis: {
          title: {
            text: "Juta orang"
          },
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
        xAxis: {
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
        series: [
          {
            name: "Lombok Timur",
            data: [[2019, 2], [2020, 4], [2021, 5]]
          },
          {
            name: "Lombok Tengah",
            data: [[2019, 3], [2020, 3], [2021, 4]]
          }
        ],
        credits: {
          enabled: false
        }
      }
    },
    optionArea() {
      return {
        chart: {
          type: "area",
          height: 300,
          backgroundColor: "transparent"
        },
        title: {
          text: "Intensitas Curah Hujan",
          style: {
            fontSize: "12px"
          }
        },
        yAxis: {
          title: {
            text: "%"
          },
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
        xAxis: {
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
        series: [
          {
            name: "Lombok Timur",
            data: [["Maret", 25], ['April', 35], ["Mei", 30]]
          },
          {
            name: "Lombok Tengah",
            data: [["Maret", 40], ['April', 60], ["Mei", 35]]
          }
        ],
        credits: {
          enabled: false
        }
      }
    },
  },
  methods: {

  },
  mounted() {
    
  }
}
</script>

<style>

</style>
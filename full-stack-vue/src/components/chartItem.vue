<template>
  <div class="example">
    <h3>Omsetning</h3>
    <apexcharts width="900" height="450" type="line" :options="chartOptions" :series="series"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import apexcharts from "vue3-apexcharts";

export default defineComponent({
  name: "YearlyIncome",
  setup() {

    const chartOptions = ref({
      chart: {
        height: 350,
        type: 'area'
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        colors: ['#E6E6FA', '#E6E6FA', '#E6E6FA']
      },
      xaxis: {
        type: "datetime",
        categories: [

          "01/01/2020",
          "05/01/2020",
          "09/01/2020",
          "12/01/2020",

          "01/01/2021",
          "05/01/2021",
          "09/01/2021",
          "12/01/2021",

        ],
      },
    });


    const series = ref([
      {
        name: '2020',
        data: [40000, 65000, 40000, 49000, 49000, 40000, 60000, 80000,]
      },
     // {
       // name: '2021',
        //data: [11, 32, 45, 32, 34, 52, 41]
      //},
    ]);


    return { chartOptions, series };


  },
  components: {
    apexcharts,
  },
  
});
</script>


     new Vue({
        el: '#app',
        components: {
          apexchart: VueApexCharts,
        },
        data: {
          
          series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
          
          
        },
        
      })
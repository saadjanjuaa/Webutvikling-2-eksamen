<template>
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" data-aos="fade-left">

        <h3>Omsetning</h3>
        <apexcharts width="850" height="450" type="line" :options="chartOptions" :series="series"/>
        
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
                type: 'line'
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

                ]
            }

        });

        const series = ref([
            {
                name: '2020',
                data: [40000, 65000, 40000, 49000, 49000, 40000, 60000, 80000,]
            }
        ]);

        return { 
            chartOptions, 
            series 
        }
    },
    components: {
        apexcharts,
    }

});
</script>

<style scoped>

    /* Fjerner grafen på ikke "ikke pc" enheter, fikk ikke til å å gjøre den responsiv. */
    @media (max-width: 1200px) {

        div {
            display: none;
        }

    }

</style>

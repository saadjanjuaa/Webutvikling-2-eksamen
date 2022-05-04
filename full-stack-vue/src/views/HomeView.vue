<template>
    <section>

        <h2 class="mt-5 mb-5" data-aos="fade-right">Dashbord</h2>

        <div class="row">
            <overview-item></overview-item>
            <chart-item></chart-item>
            <card-link-item></card-link-item>  
        </div>
        
    </section>
</template>

<script>
import ChartItem from "../components/dashboard/ChartItem.vue";
import CardLinkItem from "../components/dashboard/CardLinkItem.vue";
import OverviewItem from "../components/dashboard/OverviewItem.vue";

export default {
    components: {
        ChartItem,
        CardLinkItem,
        OverviewItem
    }
}
</script>

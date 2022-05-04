<template>

    <section>
        <h2 class="mt-5" data-aos="fade-right">Utviklere</h2>
        <search-developer-item></search-developer-item>
        <delete-developer-item></delete-developer-item>
        <developer-list></developer-list>
    </section>

</template>

<script>
import DeveloperList from '../components/developers/DeveloperList.vue'
import SearchDeveloperItem from '../components/developers/SearchDeveloperItem.vue'
import DeleteDeveloperItem from '../components/developers/DeleteDeveloperItem.vue'

export default {
    components: {
        DeveloperList,
        SearchDeveloperItem,
        DeleteDeveloperItem
    }
}
</script>

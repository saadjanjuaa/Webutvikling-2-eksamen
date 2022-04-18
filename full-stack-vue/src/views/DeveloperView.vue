<template>

    <section>
      <h2 class="mt-5">Utviklere</h2>
      <search-developer-item></search-developer-item>
      <developer-list></developer-list>
    </section>

</template>

<script>
import DeveloperList from '../components/developers/DeveloperList.vue'
import SearchDeveloperItem from '../components/developers/SearchDeveloperItem.vue'

export default {
  components: {
    DeveloperList,
    SearchDeveloperItem
  }
}
</script>

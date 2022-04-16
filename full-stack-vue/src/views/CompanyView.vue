<template>

    <section>
      <search-company-item></search-company-item>
      <company-list></company-list>
    </section>

</template>

<script>
import CompanyList from '../components/companies/CompanyList.vue'
import SearchCompanyItem from '../components/companies/SearchCompanyItem.vue'

export default {
  components: {
    CompanyList,
    SearchCompanyItem
  }
}
</script>

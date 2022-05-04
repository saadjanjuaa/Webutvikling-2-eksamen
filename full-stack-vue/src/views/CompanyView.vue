<template>

    <section>
        <h2 class="mt-5" data-aos="fade-right">Firmaer</h2>
        <search-company-item></search-company-item>
        <add-company-item></add-company-item>
        <delete-company-item></delete-company-item>
        <company-list></company-list>
    </section>

</template>

<script>
import CompanyList from '../components/companies/CompanyList.vue'
import SearchCompanyItem from '../components/companies/SearchCompanyItem.vue'
import AddCompanyItem from '../components/companies/AddCompanyItem.vue'
import DeleteCompanyItem from '@/components/companies/DeleteCompanyItem.vue'

export default {
    components: {
        CompanyList,
        SearchCompanyItem,
        AddCompanyItem,
        DeleteCompanyItem
    }
}
</script>

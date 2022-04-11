<template>
    <section>

        <h2 class="mt-5 mb-3">Firmaer</h2>

        <section class="row">
            <company-item v-for="(company,i) in companies" :key="i"
            :id="company.id"
            :name="company.name"
            :phoneNumber="company.phoneNumber"
            :international="company.international"
            :image="company.image"
            ></company-item>
        </section>

    </section>
</template>

<script>
import companyService from '../../services/companyService.js'
import CompanyItem from './CompanyItem.vue'

export default {
    setup() {
        
        const companies = companyService.getAll();

        return {companies}
    },
    components: {
        CompanyItem
    }
}
</script>
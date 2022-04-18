<template>

  <section>
    <h2 class="mt-5" data-aos="fade-right">Dashbord</h2>
    <developer-list></developer-list>
    <company-list></company-list>
    <assignment-list></assignment-list>
    
    
  </section>

</template>

<script>
import DeveloperList from '../components/developers/DeveloperList.vue'
import CompanyList from '../components/companies/CompanyList.vue'
import AssignmentList from '../components/assignments/AssignmentList.vue'

export default {
  components: {
    DeveloperList,
    AssignmentList,
    CompanyList
  }
}
</script>

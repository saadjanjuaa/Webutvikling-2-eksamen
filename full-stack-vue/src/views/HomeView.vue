<template>

  <section>
    <h2 class="mt-5 mb-5" data-aos="fade-right">Dashbord</h2>


    <section class="d-flex justify-content-around">

      <section data-aos="fade-right">
        <chart-item></chart-item>
      </section>
      


      <section data-aos="fade-left">
        <h3>Tall</h3>
        <div class="card text-white bg-dark mb-3 p-5" style="max-width: 30rem;">
          <div class="card-body">

            <h5 class="text-muted h5">Antall oppdrag</h5>
            <h4 class="h1">{{totalAssignments}}</h4>
            <br>
            <h5 class="text-muted h5">Antall firmaer</h5>
            <h4 class="h1">{{totalCompanies}}</h4>
            <br>
            <h5 class="text-muted h5">Antall utviklere</h5>
            <h4 class="h1">{{totalDevelopers}}</h4>
            
          </div>
        </div>
      </section>
      
    </section>



    <developer-list></developer-list>
    <company-list></company-list>
    <assignment-list></assignment-list>
    
    
  </section>

</template>

<script>
import DeveloperList from '../components/developers/DeveloperList.vue'
import CompanyList from '../components/companies/CompanyList.vue'
import AssignmentList from '../components/assignments/AssignmentList.vue'
import assignmentService from '../services/assignmentService.js'
import companyService from '../services/companyService.js'
import developerService from '../services/developerService.js'
import chartItem from "../components/chartItem.vue";

export default {

  setup() {

    let totalAssignments = assignmentService.getTotalAssignments();
    let totalCompanies = companyService.getTotalCompanies();
    let totalDevelopers = developerService.getTotalDevelopers();


    return {totalAssignments, totalCompanies, totalDevelopers,}
  },

  components: {
    DeveloperList,
    AssignmentList,
    CompanyList,
    chartItem
  }
}
</script>

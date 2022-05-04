<template>

    <section>

        <h2 class="mt-5 mb-5" data-aos="fade-right">Dashbord</h2>

        <section class="d-flex justify-content-around">

            <section data-aos="fade-right">
                
                <chart-item></chart-item>

                <section class="d-flex mb-5">

                    <section class="ms-5 mt-5">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title h2">Oppdrag</h5>
                                <p class="card-text text-muted">Her ser du alle oppdrag vi har fått</p>
                                <router-link class="nav-link" to="/assignments">Gå til siden</router-link>
                            </div>
                        </div>
                    </section>

                    <section class="ms-5 mt-5">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title h2">Firmaer</h5>
                                <p class="card-text text-muted">Alle firmaene vi jobber med</p>
                                <router-link class="nav-link" to="/companies">Gå til siden</router-link>
                            </div>
                        </div>
                    </section>

                    <section class="ms-5 mt-5">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title h2">Utviklere</h5>
                                <p class="card-text text-muted">Alle utviklere vi har i selskapet</p>
                                <router-link class="nav-link" to="/developers">Gå til siden</router-link>
                            </div>
                        </div>
                    </section>

                </section>

            </section>
        

            <section data-aos="fade-left">

                <h3>Tall</h3>

                <div class="card text-white bg-dark mb-3 p-5" style="max-width: 30rem;">
                    <div class="card-body">

                        <h5 class="text-muted h5">Antall oppdrag</h5>
                        <h4 class="h1 mb-5">{{totalAssignments}}</h4>

                        <h5 class="text-muted h5">Antall firmaer</h5>
                        <h4 class="h1 mb-5">{{totalCompanies}}</h4> 

                        <h5 class="text-muted h5">Antall utviklere</h5>
                        <h4 class="h1">{{totalDevelopers}}</h4>
                        
                    </div>
                </div>
            </section>
        
        </section>
        
    </section>

</template>

<script>

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
        chartItem
    }
}
</script>

<template>
    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3" data-aos="fade-right">
    
        <h3>Oversikt</h3>

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

    </div>
</template>

<script>
import assignmentService from '../../services/assignmentService.js';
import companyService from '../../services/companyService.js';
import developerService from '../../services/developerService.js';

export default {
    setup() {

        let totalAssignments = assignmentService.getTotalAssignments();
        let totalCompanies = companyService.getTotalCompanies();
        let totalDevelopers = developerService.getTotalDevelopers();

        return {
            totalAssignments,
            totalCompanies,
            totalDevelopers
        }
    },
}
</script>
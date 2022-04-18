<template>
    <section>

        <h3 class="mt-5 mb-3" data-aos="fade-right">Oppdrag</h3>

        <section class="row">
            <assignment-item v-for="(assignment,i) in assignments" :key="i"
            :id="assignment.id"
            :description="assignment.description"
            :category="assignment.category"
            :company="assignment.company"
            ></assignment-item>
        </section>

    </section>
</template>

<script>
import assignmentService from '../../services/assignmentService.js'
import AssignmentItem from './AssignmentItem.vue'

export default {
    setup() {
        
        const assignments = assignmentService.getAll();

        return {assignments}
    },
    components: {
        AssignmentItem
    }
}
</script>
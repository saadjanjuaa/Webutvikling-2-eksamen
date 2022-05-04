<template>
    <section>

        <h2 class="mt-5" data-aos="fade-right">Oppdrag</h2>

        <div class="row">
            <search-assignment-item></search-assignment-item>
            <edit-assignment-item></edit-assignment-item>
        </div>
       
        <assignment-list></assignment-list>

    </section>
</template>

<script>
import AssignmentList from '../components/assignments/AssignmentList.vue';
import SearchAssignmentItem from '../components/assignments/SearchAssignmentItem.vue';
import EditAssignmentItem from '../components/assignments/EditAssignmentItem.vue';

export default {
    components: {
        SearchAssignmentItem,
        AssignmentList,
        EditAssignmentItem
    }
}
</script>

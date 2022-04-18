<template>

    <section>
      <h2 class="mt-5">Oppdrag</h2>
      <search-assignment-item></search-assignment-item>
      <edit-assignment-item></edit-assignment-item>
      <assignment-list></assignment-list>
    </section>

</template>

<script>
import AssignmentList from '../components/assignments/AssignmentList.vue'
import SearchAssignmentItem from '../components/assignments/SearchAssignmentItem.vue'
import EditAssignmentItem from '../components/assignments/EditAssignmentItem.vue'


export default {
  components: {
    SearchAssignmentItem,
    AssignmentList,
    EditAssignmentItem
  }
}
</script>

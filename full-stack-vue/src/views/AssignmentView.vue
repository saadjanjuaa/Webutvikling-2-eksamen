<template>

    <section>
      <search-assignment-item></search-assignment-item>
      <assignment-list></assignment-list>
    </section>

</template>

<script>
import AssignmentList from '../components/assignments/AssignmentList.vue'
import SearchAssignmentItem from '../components/assignments/SearchAssignmentItem.vue'


export default {
  components: {
    SearchAssignmentItem,
    AssignmentList,
  }
}
</script>

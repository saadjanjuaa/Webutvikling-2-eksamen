<template>
    <section class="mt-5">

        <h3>Søk på id</h3>

        <show-all-button></show-all-button>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </div>

    </section>
</template>

<script>
import ShowAllButton from '../shared/showAllButton.vue'

export default {
    setup() {
        
    },
    components: {
        ShowAllButton
    }
}
</script>

<style scoped>

    input {
        width: 13rem;
    }
    
</style>
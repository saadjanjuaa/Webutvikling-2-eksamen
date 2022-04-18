<template>
    <section class="mt-4">

        <h3>Søk på id</h3>

        <show-all-button></show-all-button>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="idToSearch" class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button @click="searchById" class="btn btn-outline-success" type="submit">Search</button>
        </div>

    </section>
</template>

<script>
import ShowAllButton from '../shared/showAllButton.vue'
import companyService from '../../services/companyService.js'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        
        let idToSearch = ref(""); // PAARSE

        const searchById = () => {
            companyService.getById(parseInt(idToSearch.value))
        }

        return {idToSearch, searchById}
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
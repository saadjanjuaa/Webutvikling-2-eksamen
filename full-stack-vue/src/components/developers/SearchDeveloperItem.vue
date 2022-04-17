<template>
    <section class="mt-5">

        <h3>Søk på navn</h3>

        <show-all-button></show-all-button>
        
        <label class="mb-1">Angi navn</label>
        <div class="d-flex">
            <input v-model="nameToSearch" class="form-control me-2" type="search" placeholder="Navn" aria-label="Search">
            <button @click="searchByName" class="btn btn-outline-success" type="submit">Søk</button>
        </div>
        

        <h3 class="mt-5">Søk på rolle</h3>

        <label class="mb-1">Angi rolle (Backend utvikler, Interaksjonsdesigner)</label>
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Rolle" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Søk</button>
        </div>


    </section>
</template>


<script>
import { ref } from '@vue/reactivity'
import '../../services/developerService.js'
import developerService from '../../services/developerService.js'
import ShowAllButton from '../shared/showAllButton.vue'

export default {
    setup() {

        let nameToSearch = ref("");
        
        const searchByName = () => {
            developerService.getByName(nameToSearch.value)
        }


        return {searchByName, nameToSearch}

    },
    components: {
        ShowAllButton
    }
}
</script>


<style scoped>

    .show-all-btn {
        display: block;
    }

    input {
        width: 13rem;
    }
    
</style>
<template>
    <section class="mt-4">

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
            <input v-model="roleToSearch" class="form-control me-2" type="search" placeholder="Rolle" aria-label="Search">
            <button @click="searchByRole" class="btn btn-outline-success" type="submit">Søk</button>
        </div>


        <h3 class="mt-5 mb-2">Vis juniorer</h3>

        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio1">
            <label class="form-check-label" for="flexRadio1">
                Junior
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio2" checked>
            <label class="form-check-label" for="flexRadio2">
                Senior
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadio2" checked>
            <label class="form-check-label" for="flexRadio2">
                Alle
            </label>
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
        let roleToSearch = ref("");
        
        const searchByName = () => {

            developerService.getByName(nameToSearch.value);
        }

        const searchByRole = () => {

            developerService.getByRole(roleToSearch.value);
        }


        return {searchByName, nameToSearch, searchByRole, roleToSearch}

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

    .form-control {
        width: 13rem;
    }
    
</style>
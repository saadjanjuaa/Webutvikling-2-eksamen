<template>
    <div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">

        <h3>Søk på navn</h3>

        <label class="mb-1">Angi navn</label>
        <div class="d-flex">
            <input v-model="name" class="form-control me-2" type="search" placeholder="Navn" aria-label="Search">
            <button @click="searchByName" class="btn btn-outline-success" type="button">Søk</button>
        </div>

        <h3 class="mt-5">Søk på rolle</h3>

        <label class="mb-1">Angi rolle (Backend utvikler, Interaksjonsdesigner)</label>
        <div class="d-flex">
            <input v-model="role" class="form-control me-2" type="search" placeholder="Rolle" aria-label="Search">
            <button @click="searchByRole" class="btn btn-outline-success" type="button">Søk</button>
        </div>

        <show-all-button></show-all-button>
        
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import '../../services/developerService.js';
import developerService from '../../services/developerService.js';
import ShowAllButton from '../shared/showAllButton.vue';

export default {
    setup() {

        let name = ref("");
        let role = ref("");
        
        const searchByName = () => {

            developerService.getByName(name.value);
        }

        const searchByRole = () => {

            developerService.getByRole(role.value);
        }

        return {
            searchByName,
            name, 
            searchByRole, 
            role
        }

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
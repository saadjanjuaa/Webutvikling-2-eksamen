<template>
    <div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">

        <h3>Søk på id</h3>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="id" class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button @click="searchById" class="btn btn-outline-success" type="button">Søk</button>
        </div>

        <show-all-button></show-all-button>
        
    </div>
</template>

<script>
import ShowAllButton from '../shared/showAllButton.vue';
import companyService from '../../services/companyService.js';
import { ref } from '@vue/reactivity';

export default {
    setup() {
        
        let id = ref(""); 

        const searchById = () => {

            companyService.getById(id.value);

        }

        return {
            id,
            searchById
        }
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
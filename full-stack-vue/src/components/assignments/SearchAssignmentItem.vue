<template>
    <div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">

        <h3>Søk på id</h3>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="id" class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button @click="searchById" class="btn btn-outline-success" type="button">Søk</button>
        </div>

        <h3 class="mt-5">Søk på kategori</h3>

        <label class="mb-1">Angi kategori (Design, App-utvikling)</label>
        <div class="d-flex">
            <input v-model="category" class="form-control me-2" type="search" placeholder="Kategori" aria-label="Search">
            <button @click="searchByCategory" class="btn btn-outline-success" type="button">Søk</button>
        </div>

        <show-all-button></show-all-button>

    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import assignmentService from "../../services/assignmentService.js";
import ShowAllButton from '../shared/showAllButton.vue';

export default {
    setup() {

        let id = ref("");
        let category = ref("");

        const searchById = () => {

            assignmentService.getById(id.value);
        }

        const searchByCategory = () => {

            assignmentService.getByCategory(category.value);
        }

        return {
            id,
            searchById,
            searchByCategory, 
            category
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
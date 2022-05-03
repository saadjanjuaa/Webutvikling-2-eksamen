<template>
    <section class="mt-4">

        <h3>Søk på id</h3>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="id" class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button @click="searchById" class="btn btn-outline-success" type="submit">Search</button>
        </div>


        <h3 class="mt-5">Søk på kategori</h3>

        <label class="mb-1">Angi kategori (Design, App-utvikling)</label>
        <div class="d-flex">
            <input v-model="category" class="form-control me-2" type="search" placeholder="Kategori" aria-label="Search">
            <button @click="searchByCategory" class="btn btn-outline-success" type="submit">Search</button>
        </div>

        <show-all-button></show-all-button>

    </section>
</template>



<script>
import { ref } from '@vue/reactivity';
import assignmentService from "../../services/assignmentService.js"
import ShowAllButton from '../shared/showAllButton.vue'

export default {
    setup() {

        let id = ref("");
        let category = ref("");


        const searchById = () => {

            if (id.value == "") {
                alert("Feltet er tomt, du må skrive inn en id")
            } else {
                assignmentService.getById(parseInt(id.value))
            }

        }


        const searchByCategory = () => {

            if (category.value == "") {
                alert("Feltet er tomt, du må skrive inn en kategori")
            } else {
                assignmentService.getByCategory(category.value);
            }

        }

        return {id, searchById, searchByCategory, category}
        
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
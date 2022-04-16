<template>
    <section class="mt-5">

        <h3>Søk på id</h3>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="id" class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button @click="sea" class="btn btn-outline-success" type="submit">Search</button>
        </div>


        <h3 class="mt-5">Søk på kategori</h3>

        <label class="mb-1">Angi kategori (Design, App-utvikling)</label>
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Kategori" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </div>

    </section>
</template>



<script>
import { ref } from '@vue/reactivity';
import assignmentService from "../../services/assignmentService.js"

export default {
    setup() {

        let id = ref(0);


        const sea = async () => {
            await assignmentService.getById(id.value)
        }


        return {id, sea}
        
    }
}
</script>



<style scoped>

    input {
        width: 13rem;
    }
    
</style>
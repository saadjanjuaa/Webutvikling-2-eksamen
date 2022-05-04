<template>
    <div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">

        <h3>Slett ett firma</h3>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="id" class="form-control me-2" type="search" placeholder="Id">
            <button @click="deleteCompany" class="btn btn-outline-danger" type="button">Slett</button>
        </div>

    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import companyService from "../../services/companyService.js";

export default {
    setup() {
        
        let id = ref("");

        const deleteCompany = () => {

            companyService.deleteCompany(id.value);

        }

        return {
            id,
            deleteCompany
        }
    }
}
</script>

<style scoped>

    input {
        width: 13rem;
    }
    
</style>
<template>
    <div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">

        <h3>Slett en utvikler</h3>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="id" class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button @click="deleteDeveloper" class="btn btn-outline-danger" type="button">Slett</button>
        </div>

    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import developerService from "../../services/developerService.js";

export default {
    setup() {
        
        let id = ref("");

        const deleteDeveloper = () => {

            developerService.deleteDeveloper(id.value);
        }

        return {
            id,
            deleteDeveloper
        }
    }
}
</script>

<style scoped>

    input {
        width: 13rem;
    }
    
</style>
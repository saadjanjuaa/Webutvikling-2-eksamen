<template>
    <section class="mt-4">

        <h3>Søk på id</h3>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input v-model="id" class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button @click="searchById" class="btn btn-outline-success" type="submit">Search</button>
        </div>

        <show-all-button></show-all-button>
        
    </section>
</template>

<script>
import ShowAllButton from '../shared/showAllButton.vue'
import companyService from '../../services/companyService.js'
import { ref } from '@vue/reactivity'

export default {
    setup() {
        
        let id = ref(""); 

        const searchById = () => {

            if (id.value == "") {
                alert("Feltet er tomt, du må skrive inn en id")
            } else {
                companyService.getById(parseInt(id.value))
            }

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
<template>
    <section class="mt-4">

        <h3>Søk på navn</h3>

        <label class="mb-1">Angi navn</label>
        <div class="d-flex">
            <input v-model="name" class="form-control me-2" type="search" placeholder="Navn" aria-label="Search">
            <button @click="searchByName" class="btn btn-outline-success" type="submit">Søk</button>
        </div>
        

        <h3 class="mt-5">Søk på rolle</h3>

        <label class="mb-1">Angi rolle (Backend utvikler, Interaksjonsdesigner)</label>
        <div class="d-flex">
            <input v-model="role" class="form-control me-2" type="search" placeholder="Rolle" aria-label="Search">
            <button @click="searchByRole" class="btn btn-outline-success" type="submit">Søk</button>
        </div>

        <show-all-button></show-all-button>
        
    </section>
</template>


<script>
import { ref } from '@vue/reactivity'
import '../../services/developerService.js'
import developerService from '../../services/developerService.js'
import ShowAllButton from '../shared/showAllButton.vue'

export default {
    setup() {

        let name = ref("");
        let role = ref("");
        
        const searchByName = () => {
            
            if (name.value == "") {
                alert("Feltet er tomt, du må skrive inn ett navn")
            } else {
                developerService.getByName(name.value);
            }
            
        }

        const searchByRole = () => {

            if (role.value == "") {
                alert("Feltet er tomt, du må skrive inn en rolle")
            } else {
                developerService.getByRole(role.value);
            }

        }


        return {searchByName, name, searchByRole, role}

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
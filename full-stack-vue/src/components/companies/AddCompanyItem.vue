<template>
    <section>
        <h2>Legg til nytt firma</h2>

        
        <label class="pt-3">Navn</label>
        <input class="form-control me-2" v-model="newName" type="text">

        <label class="mt-5">Telefon Nummer</label>
        <input class="form-control me-2" v-model="newPhoneNumber" type="text">

        <label class="mt-5">Internasjonalt</label>
        <input class="form-control me-2" v-model="newInternational" type="text">

        <button class="btn btn-outline-success mt-3" @click="postNewCompany">Lagre</button>
        
    </section>
</template>


<script>
import { ref  } from '@vue/reactivity'
import companyService from '../../services/companyService.js'

export default {
    setup() {

        // BRUKE TOREF HER

        let newName = ref("");
        let newPhoneNumber = ref("");
        let newInternational = ref("");
        let newInternationalBoolean = null;
        
        const postNewCompany = async () => {

            if (newInternational.value.toUpperCase() == "JA") {
                newInternationalBoolean = true;
            } else if (newInternational.value.toUpperCase() == "NEI") {
                newInternationalBoolean = false; 
            } else {
                alert("Du må skrive ja eller nei i feltet")
                return -1
            }

            let newCompany = {
                name: newName.value,
                phoneNumber: newPhoneNumber.value,
                international: newInternationalBoolean,
                image: "no-image.jpg"
            }

            companyService.postNewCompany(newCompany)

        }

        return {postNewCompany, newName, newPhoneNumber,newInternational,}

    },
}
</script>

<template>
    <section class="mt-4">
        <h3>Legg til nytt firma</h3>
 
        <label class="mt-1">Navn</label>
        <input class="form-control me-2" v-model="newName" type="text">

        <label class="mt-5">Telefon Nummer</label>
        <input class="form-control me-2" v-model="newPhoneNumber" type="text">

        <label class="mt-5">Internasjonalt</label>
        <input class="form-control me-2" v-model="newInternational" type="text">

        <image-upload-item></image-upload-item>

        <button class="btn btn-outline-success mt-3" @click="postNewCompany">Lagre</button>
        
    </section>
</template>


<script>
import { ref  } from '@vue/reactivity'
import companyService from '../../services/companyService.js'
import ImageUploadItem from '../shared/ImageUploadItem.vue'

export default {
    setup() {

        // BRUKE TOREF HER

        let newName = ref("");
        let newPhoneNumber = ref("");
        let newInternational = ref("");
        let newInternationalBoolean = null;

        let getFileName = filePath => {
            const last = filePath.split('\\');
            return last[last.length-1];
        }

        
        const postNewCompany = async () => {

            if (newInternational.value.toUpperCase() == "JA") {
                newInternationalBoolean = true;
            } else if (newInternational.value.toUpperCase() == "NEI") {
                newInternationalBoolean = false; 
            } else {
                alert("Du må skrive ja eller nei i feltet")
                return -1
            }

            let imagePath = document.getElementById("image-input").value;

            
            let newCompany = {
                name: newName.value,
                phoneNumber: newPhoneNumber.value,
                international: newInternationalBoolean,
                image: getFileName(imagePath)
            }

            companyService.postNewCompany(newCompany)

        }

        return {postNewCompany, newName, newPhoneNumber,newInternational}

    },
    components: {
        ImageUploadItem
    }
}
</script>

<style scoped>

    input {
        width: 13rem;
    }
    
</style>
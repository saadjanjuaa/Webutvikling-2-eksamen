<template>
    <div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        
        <h3>Legg til nytt firma</h3>
 
        <label class="mt-1 mb-1">Navn</label>
        <input class="form-control me-2" v-model="name" type="text" placeholder="Navn">

        <label class="mt-3 mb-1">Telefon Nummer</label>
        <input class="form-control me-2" v-model="phoneNumber" type="text" placeholder="Telefon Nummer">

        <label class="mt-3 mb-1">Internasjonalt</label>
        <input class="form-control me-2" v-model="international" type="text" placeholder="Internasjonalt">

        <label class="mt-3 mb-1">Last opp bilde</label>
        <input class="form-control me-2" @change="setImage" type="file">

        <input class="btn btn-outline-success mt-3" type="button" value="Lagre firma"  @click="postCompany">
        
    </div>
</template>

<script>
import { reactive, toRefs  } from '@vue/reactivity';
import companyService from '../../services/companyService.js';

export default {
    setup() {

        const image = new FormData();

        const formCompany = reactive({
            name: "",
            phoneNumber: "",
            international: "",
            image: ""
        });

        const setImage = (e) => {
            image.append("file", e.target.files[0]); 
            formCompany.image = e.target.files[0].name; 
        }

        let internationalBoolean = null;

        const postCompany = () => {

            if (formCompany.name == "" || formCompany.phoneNumber == "" || formCompany.international == "" || formCompany.image == "") {
                alert("Du må fylle alle feltene");
            } else {

                // TELEFON NUMMER SJEKK
                if (isNaN(parseInt(formCompany.phoneNumber))) {
                    alert("Du må skrive tall i Telefon Nummer feltet");
                    return -1;
                }

                // INTERNASJONAL SJEKK 
                if (formCompany.international.toUpperCase() == "JA") {
                    internationalBoolean = true;
                } else if (formCompany.international.toUpperCase() == "NEI") {
                    internationalBoolean = false; 
                } else {
                    alert("Du må skrive ja eller nei i internasjonal feltet");
                    return -1;
                }

                const newCompany = {
                    name: formCompany.name,
                    phoneNumber: formCompany.phoneNumber,
                    international: internationalBoolean,
                    image: formCompany.image
                }

                companyService.postCompany(newCompany, image);
                
            }

        }

        return {
            postCompany, 
            setImage,
            ...toRefs(formCompany)
        }

    },

}
</script>

<style scoped>

    input {
        width: 13rem;
    }
    
</style>
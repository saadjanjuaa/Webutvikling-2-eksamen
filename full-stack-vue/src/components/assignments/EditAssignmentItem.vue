<template>
    <div class="mt-4 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        
        <h3>Endre ett oppdrag</h3>

        <label>Id</label>
        <div class="d-flex">
            <input class="form-control me-2" v-model="id" type="text" placeholder="Id">
            <input class="btn btn-outline-primary" @click="getAssignment" type="button" value="Hent">
        </div>

        <label class="mt-3 mb-1">Tekst</label>
        <textarea class="form-control me-2" v-model="description" rows="3"></textarea>

        <label class="mt-3 mb-1">Kategori</label>
        <input class="form-control me-2" v-model="category" type="text">
 
        <label class="mt-3 mb-1">Firma</label>
        <input class="form-control me-2" v-model="company" type="text">

        <input class="btn btn-outline-success mt-3" @click="changeAssignment" type="button" value="Lagre endringer">

    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import assignmentService from '../../services/assignmentService.js';

export default {
    setup() {

        const assignmentForm = reactive({
            id: "",
            description: "",
            category: "",
            company: ""
        })

        const getAssignment = async () => {

            const assignment = await assignmentService.getInfoById(assignmentForm.id);

            assignmentForm.description = assignment.description;
            assignmentForm.category = assignment.category;
            assignmentForm.company = assignment.company;
        }

        const changeAssignment = async () => {

            if (assignmentForm.id == "") {
                alert("Du må hente inn en id først");
            } else if (isNaN(assignmentForm.id)) {
                alert("Du må skrive inn ett tall når du henter id");
            } else {

                const editedAssignment = {

                    id: parseInt(assignmentForm.id),
                    description: assignmentForm.description,
                    category: assignmentForm.category,
                    company: assignmentForm.company

                }

                assignmentService.putAssignment(editedAssignment);

            }

        }

        return {
            getAssignment,
            changeAssignment,
            ...toRefs(assignmentForm)
        }
        
    },
}
</script>
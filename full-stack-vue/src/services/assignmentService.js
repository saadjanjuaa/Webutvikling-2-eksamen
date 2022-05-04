import axios from "axios";
import { ref } from "vue";

const assignmentService = ( function(){

    const assignments = ref([
        {
            id: -1,
            description: "Dummy description",
            category: "Dummy design",
            company: "Dummy company"
        },
    ]);


    const assignmentControllerUrl = "https://localhost:7287/api/assignment";


    // HENTE ALLE 
    (async () => {
        const request = await axios.get(assignmentControllerUrl);
        assignments.value = request.data;
    } )()


    const getTotalAssignments = () => {
        return assignments.value.length;
    }

    
    // SØKE PÅ KATEGORI
    const getByCategory = async (category) => {

        if (category == "") {
            alert("Feltet er tomt, du må skrive inn en kategori");
            return -1;
        }
        
        const request = await axios.get(assignmentControllerUrl + `/GetByCategory/${category}`);

        if (request.data.length != 0 ) {
            assignments.value = request.data;
        } else {
            alert("Det finnes ingen oppdrag med den kategorien");
        }
        
    }


    // HENTE PÅ ID FOR Å SØKE PÅ ID
    const getById = async (id) => {

        if (id == "") {
            alert("Feltet er tomt, du må skrive inn en id");
            return -1;
        } 

        if (isNaN(parseInt(id))) {
            alert("Du må skrive inn ett tall");
            return -1;
        }

        const request = await axios.get(assignmentControllerUrl + `/GetById/${parseInt(id)}`);

        if (request.data.length != 0) {
            assignments.value = [];
            assignments.value.push(request.data);
        } else {
            alert("Det finnes ingen oppdrag med den id-en");
        }
    }


    // HENTE INFO OM ETT OPPDRAG
    const getInfoById = async (id) => {

        if (id == "") {
            alert("Feltet er tomt, du må skrive inn en id");
            return -1;
        } 

        if (isNaN(parseInt(id))) {
            alert("Du må skrive inn ett tall");
            return -1;
        }

        const request = await axios.get(assignmentControllerUrl + `/GetById/${parseInt(id)}`);

        if (request.data.length != 0) {
            return request.data;
        } else {
            alert("Det finnes ingen oppdrag med den id-en");
        }
        
    }


    // ENDRE ETT OPPDRAG
    const putAssignment = async (editedAssignment) => {

        await axios.put(assignmentControllerUrl, editedAssignment);

        const temporaryArray = JSON.parse(JSON.stringify(assignments.value));

        const index = temporaryArray.findIndex(assignment => parseInt(assignment.id) === parseInt(editedAssignment.id));

        assignments.value[index].description = editedAssignment.description;
        assignments.value[index].category = editedAssignment.category;
        assignments.value[index].company = editedAssignment.company;
    }


    const getAll = () => assignments;
    

    return {
        getAll,
        getById,
        putAssignment,
        getByCategory,
        getInfoById,
        getTotalAssignments
    }


}() );

export default assignmentService;
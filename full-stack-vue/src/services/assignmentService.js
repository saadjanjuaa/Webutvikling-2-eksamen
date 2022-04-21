import axios from "axios";
import { ref } from "vue";

const assignmentService = ( function(){

    const assignments = ref([
        {
            id: -1,
            description: "Dummy description",
            category: "Dummy design",
            company: "Dummy company"
        }
    ]);


    const assignmentControllerUrl = "https://localhost:7287/api/assignment";


    // HENTE ALLE 
    (async () => {
        const request = await axios.get(assignmentControllerUrl);
        assignments.value = request.data;
    } )()

    // SØKE PÅ KATEGORI
    const getByCategory = async (category) => {
        const request = await axios.get(assignmentControllerUrl + `/GetByCategory/${category}`);
        assignments.value = request.data;
    }


    // HENTE PÅ ID FOR Å SØKE PÅ ID
    const getById = async (id) => {
        const request = await axios.get(assignmentControllerUrl + `/GetById/${id}`);
        assignments.value = [];
        assignments.value.push(request.data);
    }


    // HENTE INFO OM ETT OPPDRAG
    const getInfoById = async (id) => {
        const request = await axios.get(assignmentControllerUrl + `/GetById/${id}`);
        return request.data;
    }


    const putAssignment = async (editedAssignment) => {

        await axios.put(assignmentControllerUrl, editedAssignment);

        const temporaryArray = JSON.parse(JSON.stringify(assignments.value));

        const index = temporaryArray.findIndex(assignment => parseInt(assignment.id) === parseInt(editedAssignment.id));

        assignments.value[index].description = editedAssignment.description;
        assignments.value[index].category = editedAssignment.category;
        assignments.value[index].company = editedAssignment.company;
    }


    const getAll = () => assignments;

    return {getAll, getById, putAssignment, getByCategory, getInfoById}


}() );

export default assignmentService;
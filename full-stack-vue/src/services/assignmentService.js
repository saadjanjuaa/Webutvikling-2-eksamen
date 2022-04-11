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


    // HENTE ALLE 
    (async () => {
        const request = await axios.get("https://localhost:7287/api/assignment");
        assignments.value = request.data;
    } )()


    const getAll = () => assignments;

    return {getAll}


}() );

export default assignmentService;
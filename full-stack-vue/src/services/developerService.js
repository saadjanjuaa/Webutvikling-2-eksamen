import axios from "axios";
import { ref } from "vue";

const developerService = ( function(){

    const developers = ref([
        {
            id: -1,
            name: "Dummy name",
            role: "Dummy role",
            monthlySalary: 0,
            junior: null,
            image: "Dummy.png"
        }
    ]);

    const developerControllerUrl = "https://localhost:7287/api/developer";


    // HENTE ALLE 
    (async () => {
        const request = await axios.get(developerControllerUrl);
        developers.value = request.data;
    } )()


    // SØKE PÅ NAVN
    const getByName = async (name) => {
        const request = await axios.get(developerControllerUrl + `/GetByName/${name}`);
        developers.value = request.data;
    }

    // SØKE PÅ ROLLE
    const getByRole = async (role) => {
        const request = await axios.get(developerControllerUrl + `/GetByRole/${role}`);
        developers.value = request.data;
    }


    const getAll = () => developers;

    return {getAll,getByName, getByRole}


}() );

export default developerService;
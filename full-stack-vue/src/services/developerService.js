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


    // HENTE ALLE 
    (async () => {
        const request = await axios.get("https://localhost:7287/api/developer");
        developers.value = request.data;
    } )()


    // SØKE PÅ NAVN
    const getByName = async (name) => {
        const request = await axios.get(`https://localhost:7287/api/developer/GetByName/${name}`);
        developers.value = request.data;
    }


    const getAll = () => developers;

    return {getAll,getByName}


}() );

export default developerService;
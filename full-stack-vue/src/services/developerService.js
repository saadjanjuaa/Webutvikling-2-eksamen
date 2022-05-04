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


    const getTotalDevelopers = () => {
        return developers.value.length;
    }


    // SØKE PÅ NAVN
    const getByName = async (name) => {

        if (name == "") {
            alert("Feltet er tomt, du må skrive inn ett navn");
            return -1
        }

        const request = await axios.get(developerControllerUrl + `/GetByName/${name}`);

        if (request.data.length != 0 ) {
            developers.value = request.data;
        } else {
            alert("Det finnes ingen utviklere med det navnet");
        }
        
    }

    // SØKE PÅ ROLLE
    const getByRole = async (role) => {

        if (role == "") {
            alert("Feltet er tomt, du må skrive inn en rolle");
            return -1;
        } 

        const request = await axios.get(developerControllerUrl + `/GetByRole/${role}`);

        if (request.data.length >= 1 ) {
            developers.value = request.data;
        } else {
            alert("Det finnes ingen utviklere med den rollen");
        }

    }

    // SLETTE EN UTVIKLER
    const deleteDeveloper = async (developerToDeleteId) => {

        if (developerToDeleteId == "") {
            alert("Feltet er tomt, du må skrive inn en id");
            return -1;
        } 

        if (isNaN(parseInt(developerToDeleteId))) {
            alert("Du må skrive inn ett tall");
            return -1;
        }

        const requestId = await axios.get(developerControllerUrl + `/GetById/${parseInt(developerToDeleteId)}`);

        if (requestId.data.length != 0) {
            await axios.delete(developerControllerUrl + `/Delete/${parseInt(developerToDeleteId)}`)
            const request = await axios.get(developerControllerUrl);
            developers.value = request.data;

        } else {
            alert("Det finnes ingen utviklere med den id-en");
        }
        
    }

    const getAll = () => developers;

    return {
        getAll,
        getByName,
        getByRole,
        deleteDeveloper,
        getTotalDevelopers
    }


}() );

export default developerService;
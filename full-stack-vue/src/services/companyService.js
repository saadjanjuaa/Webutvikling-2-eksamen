import axios from "axios";
import { ref } from "vue";

const companyService = ( function(){

    const companies = ref([
        {
            id: -1,
            name: "Dummy name",
            phoneNumber: -11111111,
            international: null,
            image: "Dummy.png"
        }
    ]);


    // HENTE ALLE 
    (async () => {
        const request = await axios.get("https://localhost:7287/api/company");
        companies.value = request.data;
    } )()


    const getAll = () => companies;

    return {getAll}


}() );

export default companyService;
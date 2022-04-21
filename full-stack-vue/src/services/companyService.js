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


    // SØKE PÅ ID
    const getById = async (id) => {
        const request = await axios.get(`https://localhost:7287/api/company/GetById/${id}`);
        companies.value = [];
        companies.value.push(request.data);
         //companies.value = [];
        //companies.value = request.data;
    }


    // POSTE NY FIRMA
    const postCompany = async (newCompany, image) => {

        //const request = await axios.post("https://localhost:7287/api/company", newCompany);
        //companies.value.push(request.data)

        const request = await axios.post("https://localhost:7287/api/company", newCompany);
        
        axios({ 
            method: "POST",
            url: "https://localhost:7287/imageUpload/postImage",
            data: image,
            config: { header: {"Content-Type": "multipart/form-data"} }
        })

        companies.value.push(request.data);

    }


    const getAll = () => companies;

    return {getAll, postCompany, getById}


}() );

export default companyService;
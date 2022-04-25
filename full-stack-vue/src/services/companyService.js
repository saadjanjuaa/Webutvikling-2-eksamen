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


    const companyControllerUrl = "https://localhost:7287/api/company";


    // HENTE ALLE 
    (async () => {
        const request = await axios.get(companyControllerUrl);
        companies.value = request.data;
    } )()


    const getTotalCompanies = () => {
        return companies.value.length;
    }


    // SØKE PÅ ID
    const getById = async (id) => {
        const request = await axios.get(companyControllerUrl + `/GetById/${id}`);
        companies.value = [];
        companies.value.push(request.data);
    }


    // POSTE NY FIRMA
    const postCompany = async (newCompany, image) => {

        const request = await axios.post(companyControllerUrl, newCompany);
        
        axios({ 
            method: "POST",
            url: "https://localhost:7287/imageUpload/postImage",
            data: image,
            config: { header: {"Content-Type": "multipart/form-data"} }
        })

        companies.value.push(request.data);

    }

    
    // SLETTE EN UTVIKLER
    const deleteCompany = async (companyToDeleteId) => {
        await axios.delete(companyControllerUrl + `/Delete/${companyToDeleteId}`);
        const request = await axios.get(companyControllerUrl);
        companies.value = request.data;
    }


    const getAll = () => companies;

    return {getAll, postCompany, getById, getTotalCompanies, deleteCompany}


}() );

export default companyService;
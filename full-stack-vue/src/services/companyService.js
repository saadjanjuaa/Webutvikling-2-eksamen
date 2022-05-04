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

        if (id == "") {
            alert("Feltet er tomt, du må skrive inn en id");
            return -1;
        } 
        
        if (isNaN(parseInt(id))) {
            alert("Du må skrive inn ett tall");
            return -1;
        } 

        const request = await axios.get(companyControllerUrl + `/GetById/${parseInt(id)}`);

        if (request.data.length != 0) {
            companies.value = [];
            companies.value.push(request.data);
        } else {
            alert("Det finnes ingen firmaer med den id-en")
        }
        
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

        if (companyToDeleteId == "") {
            alert("Feltet er tomt, du må skrive inn en id")
            return -1;
        }

        if (isNaN(parseInt(companyToDeleteId))) {
            alert("Du må skrive inn ett tall");
            return -1;
        }

        const requestId = await axios.get(companyControllerUrl + `/GetById/${parseInt(companyToDeleteId)}`);


        if (requestId.data.length != 0) {
            await axios.delete(companyControllerUrl + `/Delete/${parseInt(companyToDeleteId)}`)
            const request = await axios.get(companyControllerUrl);
            companies.value = request.data;
        } else {
            alert("Det finnes ingen firmaer med den id-en")
        }

    }


    const getAll = () => companies;

    return {
        getAll,
        postCompany,
        getById,
        getTotalCompanies,
        deleteCompany
    }


}() );

export default companyService;
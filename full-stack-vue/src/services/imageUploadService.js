import axios from "axios";

const imageUploadService = (function(){

    const urlImageUpload = "https://localhost:7287/ImageUpload/PostImage";

    const postImage = (image) => {
        axios({
            method: "POST",
            url: urlImageUpload,
            data: image,
            config: {header: {"Content-Type": "multipart/form-data"}}
        })
    }

    return {
        postImage
    }

}() );

export default imageUploadService;
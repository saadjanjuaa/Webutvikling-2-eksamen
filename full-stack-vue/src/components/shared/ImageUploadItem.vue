<template>
    <section class="mt-5">
        <label>Last opp bilde</label>
        <input class="form-control me-2" id="image-input" @change="setImage" type="file">
        <input class="btn btn-outline-primary mt-3" @click="postImage" type="button" value="Last opp">
    </section>
</template>


<script>
import imageUploadService from '../../services/imageUploadService.js'

export default {
    setup() {
        
        const image = new FormData();

        const setImage = (e) => {
            image.append("file", e.target.files[0]);
            alert(e.target.files[0].name);
        }

        const postImage = () => {
            imageUploadService.postImage(image)
        }

        return {
            setImage,
            postImage,
        }


    },
}
</script>
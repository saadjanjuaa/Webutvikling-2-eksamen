<template>

    <article class="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card mb-5" style="width: 18rem;" v-bind:class="international ? 'company-is-international' : '' ">
            <img class="card-img-top" src="https://localhost:7287/images/snohetta.jpg" alt="">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <ul>
                    <li>{{id}}</li>
                    <li>{{phoneNumber}}</li>
                    <li v-if="international">Globalt firma</li>
                    <li v-else>Ikke et globalt firma</li>
                    <li>{{image}}</li>
                </ul>
            </div>
        </div>
    </article>

</template>

<script>
export default {
    setup() {
        
    },
    props: {
        id: Number,
        name: String,
        phoneNumber: Number,
        international: Boolean,
        image: String
    },
}
</script>



<style scoped>

    .company-is-international {
        background-color: #0d5900;
        color: white;
    }

</style>
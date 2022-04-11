<template>

    <article class="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="" alt="">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <ul>
                    <li>{{id}}</li>
                    <li>{{phoneNumber}}</li>
                    <li>{{international}}</li>
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
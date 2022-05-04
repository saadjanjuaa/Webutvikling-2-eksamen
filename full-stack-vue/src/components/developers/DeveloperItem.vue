<template>

    <article class="col-sm-12 col-md-6 col-lg-4 col-xl-3" data-aos="fade-right">
        <div class="card mb-5" style="width: 18rem;">
            <img class="card-img-top" :src="`https://localhost:7287/images/${image}`" :alt="`Bilde av ${name}`">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">{{name}}</h5>
                    <h5 class="text-justify">{{id}}</h5>
                </div>
                <h6 class="h6 text-muted">{{role}}</h6>
                <ul>
                    <li>Månedlig lønn: {{monthlySalary}}</li>
                    <li v-if="junior">Junior</li>
                    <li v-else>Senior</li>
                </ul>
            </div>
        </div>
    </article>

</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
        role: String,
        monthlySalary: Number,
        junior: Boolean,
        image: String
    },
}
</script>
<template>
    
    <article class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" data-aos="fade-right">
        <div class="card mb-5">
            <h5 class="card-header">{{id}}</h5>
            <div class="card-body">
                <h5 class="card-title h4">{{company}}</h5>
                <h6 class="h6 text-muted">{{category}}</h6>
                <p class="card-text">{{description}}</p>
            </div>
        </div>
    </article>

</template>

<script>
export default {
    props: {
        id: Number,
        description: String,
        category: String,
        company: String
    }
}
</script>
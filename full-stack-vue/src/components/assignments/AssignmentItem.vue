<template>
    
    <article class="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card mb-5">
            <h5 class="card-header">Id: {{id}}</h5>
            <div class="card-body">
                <h5 class="card-title h4">Firma: {{company}}</h5>
                <h6 class="h6 text-muted"> Kategori: {{category}}</h6>
                <p class="card-text">{{description}}</p>
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
        description: String,
        category: String,
        company: String
    },
}
</script>
<template>

    <article class="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://localhost:7287/images/ole-duskwood.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{name}}</h5>
                <ul>
                    <li>Id: {{id}}</li>
                    <li>Rolle: {{role}}</li>
                    <li>Månedlig lønn: {{monthlySalary}}</li>
                    <li>Junior? {{junior}}</li>
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
        role: String,
        monthlySalary: Number,
        junior: Boolean,
        image: String
    },
}
</script>
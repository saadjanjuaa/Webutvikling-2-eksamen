<template>
    <section class="mt-5">

        <h3>Søk på navn</h3>

        <label class="mb-1">Angi navn</label>
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Navn" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Søk</button>
        </div>


        <h3 class="mt-5">Søk på rolle</h3>

        <label class="mb-1">Angi rolle (Backend utvikler, Interaksjonsdesigner)</label>
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Rolle" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Søk</button>
        </div>


    </section>
</template>

<style scoped>

    input {
        width: 13rem;
    }
    
</style>
<template>
    <section class="mt-5">

        <h2>Søk på id</h2>

        <label class="mb-1">Angi id</label>
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Id" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </div>


        <h2 class="mt-5">Søk på kategori</h2>

        <label class="mb-1">Angi kategori (Design, App-utvikling)</label>
        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Kategori" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </div>

    </section>
</template>

<style scoped>

    input {
        width: 13rem;
    }
    
</style>
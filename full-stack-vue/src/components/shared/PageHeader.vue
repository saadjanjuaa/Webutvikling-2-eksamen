<template>
    <nav class="navbar navbar-expand-lg navbar-light">

        <div class="container-fluid">

            <router-link class="navbar-brand ms-4" to="/">fullStack</router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto me-4 ">
                    <li class="nav-item text-end"><router-link class="nav-link" to="/">Hjem<i class=" ms-1 bi bi-house-door-fill"></i></router-link></li> 
                    <li class="nav-item text-end"><router-link class="nav-link" to="/assignments">Oppdrag<i class="ms-1 bi bi-clipboard2-data-fill"></i></router-link></li>
                    <li class="nav-item text-end"><router-link class="nav-link" to="/companies">Firmaer<i class="ms-1 bi bi-building"></i></router-link></li>
                    <li class="nav-item text-end"><router-link class="nav-link" to="/developers">Utviklere <i class="ms-1 bi bi-people-fill"></i></router-link></li>
                </ul>
            </div>

        </div>

    </nav>
</template>

<style scoped>

    .navbar {
        background-color: #e3f2fd;
    }

</style>
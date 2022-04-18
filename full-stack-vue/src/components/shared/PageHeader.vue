<template>
    <nav class="navbar navbar-expand-lg navbar-light">

        <router-link class="navbar-brand ms-4" to="/">
            fullStack
        </router-link>

        <ul class="nav ms-auto me-4 ">
            <li class="nav-item"><router-link class="nav-link" to="/">Hjem<i class=" ms-1 bi bi-house-door-fill"></i></router-link></li> 
            <li class="nav-item"><router-link class="nav-link" to="/assignments">Oppdrag<i class="ms-1 bi bi-clipboard2-data-fill"></i></router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/companies">Firmaer<i class="ms-1 bi bi-building"></i></router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/developers">Utviklere <i class="ms-1 bi bi-people-fill"></i></router-link></li>
        </ul>

    </nav>
</template>


<style scoped>

    .navbar {
        background-color: #e3f2fd;
    }

    .nav-link {
        color: black;
    }
    
    .nav-link:hover {
        color: rgb(98, 57, 234);
    }

</style>
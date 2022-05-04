<template>
    <section class="row mb-5">

        <div class="mt-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title h2">Oppdrag</h5>
                    <p class="card-text text-muted">Her ser du alle oppdrag vi har fått.</p>
                    <router-link class="nav-link" to="/assignments">Gå til siden</router-link>
                </div>
            </div>
        </div>

        <div class="mt-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title h2">Firmaer</h5>
                    <p class="card-text text-muted">Alle firmaene vi jobber med.</p>
                    <router-link class="nav-link" to="/companies">Gå til siden</router-link>
                </div>
            </div>
        </div>

        <div class="mt-5 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title h2">Utviklere</h5>
                    <p class="card-text text-muted">Alle utviklere vi har om bord.</p>
                    <router-link class="nav-link" to="/developers">Gå til siden</router-link>
                </div>
            </div>
        </div>

    </section>
</template>
<template>
    <section>

        <h3 class="mt-5 mb-3" data-aos="fade-right">Utviklere</h3>

        <section class="row">
            <developer-item v-for="(developer,i) in developers" :key="i"
            :id="developer.id"
            :name="developer.name"
            :role="developer.role"
            :monthlySalary="developer.monthlySalary"
            :junior="developer.junior"
            :image="developer.image"
            ></developer-item>
        </section>

    </section>
</template>

<script>
import developerService from '../../services/developerService.js';
import DeveloperItem from './DeveloperItem.vue';

export default {
    setup() {
        
        const developers = developerService.getAll();

        return {
            developers
        }
    },
    components: {
        DeveloperItem
    }
}
</script>
<template>
            
    <button @click="showAll" class="btn btn-outline-primary mb-4 mt-4 show-all-btn" type="button">Vis alle</button>

</template>

<script>
export default {
    setup() {

        const showAll = () => location.reload();   

        return {
            showAll
        }
    }
}
</script>

<style scoped>

    .show-all-btn {
        display: block;
    }

</style>
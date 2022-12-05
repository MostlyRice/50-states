<template>
    
    <div>
        <h2>She's dead, Jim!</h2>

        <div id="home-link">
            <!-- Nav link + route name -->
            Would you like to go to the <router-link v-bind:to="{ name: 'StateList' }">home page?</router-link>

            <!-- or use the path directly -->
            <!-- Would you like to <router-link="/">go to the home page?</router-link> -->
        </div>

    </div>

</template>

<script>
export default {
    name: 'NotFound',
}
</script>


<style scoped>

#home-link {
    margin: 3em;
    color: maroon;
}
</style>
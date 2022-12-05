<template>

<div class="state-info">

    <span class="state-name">{{ state.name }}</span>
    
    <div>
        <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
    </div>

    <div>
        <!-- /map/Iowa or /map/Georgia -->
        <router-link v-bind:to=" {name: 'StateMap', params: {state: state.name } } ">
            <img class="map-icon" src="@/assets/map_icon.png">
        </router-link>
    </div>

</div>

</template>

<script>

export default {
    name: 'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object  // don't modify props
    },
    data() {
        return {
            visited: this.state.visited  // ok to modify data
        }
    },
    methods: {
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}

</script>


<style scoped>

.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px gainsboro solid;
    border-radius: .3rem;
    background-color: whitesmoke;
}

.visit-state {
    margin: 1rem;
    text-align: center;
}

</style>
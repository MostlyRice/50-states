<template>
    
    <div>
        <h2>You've Visited These States</h2>

                <!-- TODO fix error -->
                <p v-for="state in statesVisited" v-bind:key="state.name">
                    {{ state.name }}
                </p>

    </div>

</template>


<script>
export default {
    name: 'StatesVisited',
    data() {
        return {
            statesVisited: [] // how do I get the array of statesVisited from the request getAllVisited()?
        }
    },
    // make API request in mounted hook to get list of states visited 
    //(like a main method-- code that runs when this is generated, when it first appears)
    // lifecycle hooks - read up more
    mounted() {
        // this code will run when the component is shown on screen
        this.$stateService.getVisited().then ( statesVisited => {
            this.statesVisited = statesVisited
        }).catch(err => {
            // human friendly error message
            alert('Sorry, unable to fetch list of states you have visited')
            // message for developer
            console.log('error getting all the states', err )
        })
    },

}

</script>


<style scoped>

</style>
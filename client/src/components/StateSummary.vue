<template>
    
    <div>
        <p>There are a total of {{ states.length }} states and the District of Columbia</p>

        <p>You have visited {{ totalVisited }} {{ units }}</p>

        <p id="all-visited-message" v-if="areAllVisited">You have visited all of the states and the District of Columbia</p>
    </div>

</template>


<script>

export default {
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        totalVisited() {
            let visitedCount = 0
            this.states.forEach( state => {
                if (state.visited) {
                    visitedCount++
                }
            })
            return visitedCount
        },
        units() {
            if (this.totalVisited == 1)  {
                return 'state'
            } else {
                return 'states'
            }
        },
        areAllVisited() {
            return this.totalVisited === this.states.length
        }
    }
}

</script>


<style scoped>

#all-visited-message {
    color: rgb(24, 24, 241);
    font-weight: 700;
}

</style>
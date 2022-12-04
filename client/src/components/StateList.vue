<template>
    <div>
        <div>
            <p v-for="state in states" v-bind:key="state.name">
            {{ state }}
            </p>
        </div>
    </div>
    </template>
    <script>
    export default {
      components: { 
        },
        name: 'StateList',
        data() {
            return {
                states: []
            }
        },
        mounted() {
            this.fetchAllStates()
        },
        methods: {
            fetchAllStates() {
                this.$stateService.getAllStates().then ( states => {
                    this.states = states
                    console.log(states)
                })
                .catch( err => {
                    alert('Sorry, can\'t fetch state list')
                    console.error(err)
                })
            }
        }
    }
    </script>
    <style scoped>
    </style>
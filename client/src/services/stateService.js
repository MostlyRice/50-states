import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    setVisited(stateName, visited) {
        // example URL -- /api/states/Wisconsin
        let requestData = { visited: visited}
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    },
    // function to make request to the new API route for states Visited
    // use the /statesvisited page/route that's already set up for the statesVisited page
    // new method to call the new server route in states.js
    getVisited() {
        return axios.get('/api/statesvisited').then (response => {
            return response.data
        })
    }
}
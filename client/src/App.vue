<template>
<div>
  <page-header></page-header>
  <div>
    <p>To Do - App Content</p>
   </div>
   <state-list></state-list>
    <div>
      <p>To Do - links to different parts of the site</p>
    </div>
  <page-footer></page-footer>
</div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
import StateList from './components/StateList.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    StateList
  },
  mounted() {
    //this.$stateService.getAllStates().then( states => console.log(states))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

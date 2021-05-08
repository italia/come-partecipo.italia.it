<template>
  <div id="app">
    <Wizard msg="Welcome Wizard! 🧙🏻‍♂️"/>
  </div>
</template>

<script>
import Wizard from './components/Wizard.vue'

export default {
  name: 'App',
  components: {
    Wizard
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

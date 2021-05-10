<template>
  <div id="app">
    <Wizard />
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

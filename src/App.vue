<template>
  <div id="app" class="container">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <h2><span class="card-title">Tu oro es {{ oro_total }}</span></h2>

    <div class="row">
      <div class="col s6">
        <findgold  titulo="farm" :max_gold="20" :min_gold="10" />
      </div>
      <div class="col s6">
        <findgold  titulo="cave" :max_gold="10" :min_gold="5"/>
      </div>
      <div class="col s6">
        <findgold  titulo="house" :max_gold="5" :min_gold="2"/>
      </div>
      <div class="col s6">
        <findgold  titulo="casino" :max_gold="50" :min_gold="-50"/>
      </div>      
    </div>
      <div class="card darken-1">
      <h4>Historial de actividades</h4>
      <ul>
        <li v-for="(historial,i) in historiales" v-bind:key="i" >{{historial}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
import findgold from './components/findgold.vue'
import storeOro from './storeOro.js'

export default {
  name: 'App',
  data() {
    return  storeOro.state
  },
  components: {
    findgold
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

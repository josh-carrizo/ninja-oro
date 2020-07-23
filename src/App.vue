<template>
  <div id="app" class="container">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <h2><span class="card-title" :class="{ green: oro_total > 0, red: oro_total < 0 , yellow: oro_total == 0}" >Tu oro es {{ oro_total }}</span></h2>

    <div class="row">
      <div class="col s6">
        <Findgold  titulo="farm" :max_gold="20" :min_gold="10" />
      </div>
      <div class="col s6">
        <Findgold  titulo="cave" :max_gold="10" :min_gold="5"/>
      </div>
      <div class="col s6">
        <Findgold  titulo="house" :max_gold="5" :min_gold="2"/>
      </div>
      <div class="col s6">
        <Findgold  titulo="casino" :max_gold="50" :min_gold="-50"/>
      </div>      
    </div>

      <div class="card darken-1">
        <h4>Historial de actividades</h4>
        <ul class="list-group list-group-flush">
          <li  class="list-group-item" v-for="(historial,i) in historiales" v-bind:key="i" :class="{ green: historial.valor > 0, red: historial.valor < 0 , yellow: historial.valor == 0}">{{historial.texto}}
          <span class="close" @click="$delete(historiales, i)">x</span>
          </li>
        </ul>
      </div>
      <button class="waves-effect waves-light btn lime darken-1" @click="resetear()"> Reset</button>
      <!--<vue-confirm-dialog><button @onclick="resetear()"> Reset</button></vue-confirm-dialog> -->
  </div>
</template>

<script>
import Findgold from './components/Findgold.vue'
import storeOro from './storeOro.js'

export default {
  name: 'App',
  data() {
    return  storeOro.state
  },
  components: {
    Findgold
  },
  /*
  methods: {
    handleClick(){
      this.$confirm(
        {
          message: `Are you sure?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          
          * Callback Function
          * @param {Boolean} confirm 
          
          callback: confirm => {
            if (confirm) {
              // ... do something
            }
          }
        }
      )
    } 
  }*/
  methods:{
    resetear: function(){
      const respuesta = confirm('¿Estás seguro de borrar todo?!');
      if(respuesta){
      
      storeOro.default_data();
      console.log("Funciona!")
      } else {
        alert('Seguimos igual')
      }
      
    }
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

.close {
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0%;
  padding: 12px 16px;
  transform: translate(0%, -50%);
}
.card-title{
  background-color: rgb(195, 211, 56);
  display: block;
  color:white;
  opacity: 1;
  border-radius: 2px;
}


</style>

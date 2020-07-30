import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'


Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    oro_total :5,
    historiales: [],
  },
  // para modificar el estado de nuestro almacén
  mutations: {
  
    sumar_oro(state, nuevoPuntaje) {
      //let nuevoPuntaje = Math.floor(Math.random() * (this.card.max_gold - this.card.min_gold + 1) ) + this.card.min_gold;

      state.oro_total = state.oro_total + nuevoPuntaje;  

    },
    sumar_historial(state, actividad){
      state.historiales=[...state.historiales,actividad];
    },
    default_data(state){
      state.oro_total = 0,
      state.historiales = []
    }
    
  }
})


new Vue({
  render: h => h(App),
  store,
}).$mount('#app')

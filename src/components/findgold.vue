<template>
  <div class="card  darken-1">
      <h3>{{ titulo }}</h3>
      <p>Gana {{min_gold}} - {{max_gold}}</p>
      <div class="card-content white-text"> 
        <p><button v-on:click="generarOro" class="waves-effect waves-light btn lime darken-1">Obtener oro</button></p>
      </div>
  </div>
</template>

<script>
import storeOro from '../storeOro';

export default {
  name: "findgold",
 

  props: {
    titulo: String,
    max_gold: Number,
    min_gold: Number,
  },
   methods: {
    generarOro: function() {
      let nuevoPuntaje = Math.floor(Math.random() * (this.max_gold - this.min_gold + 1) ) + this.min_gold;
      storeOro.sumar_oro(nuevoPuntaje);

      let actividad = ('Se modifico ' + nuevoPuntaje +' de oro en '+ this.titulo);

      storeOro.sumar_info(actividad);
    }
  }
}
</script>
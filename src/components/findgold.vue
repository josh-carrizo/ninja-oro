<template>
  <div class="card darken-1">
    <img :src="require('@/assets/img/' + titulo + '.jpg')" class="card-img-top">
      <h3 class="titulo">{{ titulo }}</h3>
      <p>Gana {{min_gold}} - {{max_gold}}</p>
      <div class="card-content white-text"> 
        <p><button v-on:click="generarOro" class="waves-effect waves-light btn lime darken-1">Obtener oro</button></p>
      </div>
  </div>
</template>

<script>
import storeOro from '../storeOro';

export default {
  name: "Findgold",
 

  props: {
    titulo: String,
    max_gold: Number,
    min_gold: Number,
  },
   methods: {
    generarOro: function() {
      const fecha = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: true};
      const fechaActual =  fecha.toLocaleDateString("es-CL", options);

      let nuevoPuntaje = Math.floor(Math.random() * (this.max_gold - this.min_gold + 1) ) + this.min_gold;
      storeOro.sumar_oro(nuevoPuntaje);

      let actividad_texto = 'Se modifico ' + nuevoPuntaje +' de oro en '+ this.titulo + ' el ' + fechaActual;


      storeOro.historiales({texto: actividad_texto, valor:nuevoPuntaje});
    }
  }
}

</script>
<style scoped>
.card-img-top{
  height: 11rem;
}


</style>

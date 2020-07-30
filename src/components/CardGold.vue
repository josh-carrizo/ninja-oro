<template>
    <div>
        <img :src="require('@/assets/img/' + titulo + '.jpg')" class="card-img-top">
        <h3 class="titulo">{{ titulo }}</h3>
        <p>Gana {{min_gold}} - {{max_gold}}</p>
        <div class="card-content white-text"> 
         <p><button @click="generarOro" class="waves-effect waves-light btn lime darken-1">Obtener oro</button></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardGold',
  // esto es lo que esperamos recibir del padre
  props: {
    
      titulo: String,
      min_gold: Number,
      max_gold: Number
    
  },
   methods: {
    generarOro: function() {
        const fecha = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit', hour12: true};
        const fechaActual =  fecha.toLocaleDateString("es-CL", options);

        let nuevoPuntaje = Math.floor(Math.random() * (this.max_gold - this.min_gold + 1) ) + this.min_gold;
      //storeOro.sumar_oro(nuevoPuntaje);

        this.$store.commit("sumar_oro",nuevoPuntaje);

        let actividad_texto = 'Se modifico ' + nuevoPuntaje +' de oro en '+ this.titulo + ' el ' + fechaActual;

        this.$store.commit("sumar_historial", actividad_texto)

      //StoreOro.historiales({texto: actividad_texto, valor:nuevoPuntaje});
    }
  }

}
</script>

<style>
.card-img-top{
  height: 11rem;
}
</style>
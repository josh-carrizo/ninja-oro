<template>
  <div class="card  darken-1">
      <h4>Historial de actividades</h4>
    <ul>
        <li v-for:"historial in historiales">{{historial}} </li>
    <ul>
  </div>
</template>

<script>
import storeOro from '../storeOro';

export default {
    name: "Actividades",
    data: () => {
        return storeOro.state
    }
}
</script>
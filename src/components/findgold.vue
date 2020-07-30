<template>
  <div class="card darken-1">
    <CardGold v-for="StoreGold in StoreGolds" :key="StoreGold.card" />
  </div>
</template>

<script>
import CardGold from '@/components/CardGold.vue'

export default {
  name: "Findgold",
  components:{
    CardGold
  }

}

</script>
<style scoped>



</style>

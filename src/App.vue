<template>
  <div>
    <heardComponent />
    
    <div class="container">
      <FilmeComponent />
      <ModalComponent/>
    </div>
    
  </div>
</template>

<script>
import FilmeComponent from './components/FilmeComponent.vue';
import heardComponent from './components/heardComponent.vue';
import ModalComponent from './components/ModalComponent.vue';



export default {
  components: {
    heardComponent,
    FilmeComponent,
    ModalComponent
}
}
</script>

<style>

</style>

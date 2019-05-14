<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="./home">Recommencer la partie</router-link>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Oh non, tu t'es fait attaquer par des loups ! Ils t'ont dévoré sans aucune pitié"
    };
  }
};
</script>


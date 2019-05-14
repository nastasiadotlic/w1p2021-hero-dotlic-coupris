<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="./home">Recommencer  la  partie</router-link>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Bravo tu es arrivé à destination !"
    };
  }
};
</script>

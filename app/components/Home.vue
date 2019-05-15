<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <div class="choices">
      <router-link class="button" to="/game">Commencer la partie</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Salut, bienvenue, c'est à toi de jouer"
    };
  }
};
</script>



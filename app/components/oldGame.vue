<template>
  <div class="big-header">
    <h1>Game</h1>
    <br>
    <router-link class="button" to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      game: [
        { game: "Commencer le jeu" }
        
        ]
    };
  }
};
</script>

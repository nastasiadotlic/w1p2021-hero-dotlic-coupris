<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <div class="choices">
      <router-link class="button" to="/game">Léandre</router-link>
      <router-link class="button" to="/game">Phaenna</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Oh c'est donc toi notre héro en quête de grandes aventures, tu as décidé donc de partir sur les traces des plus grands héros de la mythologie afin de prouver sa bravoure ! Mais... qui es tu ?  "
    };
  }
};
</script>

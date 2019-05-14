<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/win">Continuer</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Vous continuez votre chemin dans la belle fôret enchantée"
    };
  }
};
</script>
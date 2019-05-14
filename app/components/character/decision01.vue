<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <div class="choices">
      <router-link class="button" to="/crossing">Revenir en arrière</router-link>
      <router-link class="button" to="/loose01">Decider d’y aller à la nage</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Bienvenue [machin], ta quête commence ici, il est temps de quitter ton île natale pour partir à l’aventure. Mais tu as besoin d’un navire !"
    };
  }
};
</script>

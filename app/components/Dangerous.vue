<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <div class="choices">
      <router-link class="button" to="/crossing">Revenir en arrière</router-link>
      <router-link class="button" to="/loose">Continuer son chemin</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Ce chemin a l'air particulièrement menaçant. Que voulez vous faire ?"
    };
  }
};
</script>

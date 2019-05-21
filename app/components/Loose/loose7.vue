<template>
  <div>
    <h1> {{ message }} </h1>
    <router-link class="button" to="/">Recommencer la partie</router-link>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "La tête de Méduse que vous transportez pétrifie de pauvres innocents sur votre passage. D’autres Athéniens s’enfuient en courant et alertent les soldats ! Vous êtes capturé par la garde et éxécuté le lendemain...",
    };
  },
}

</script>
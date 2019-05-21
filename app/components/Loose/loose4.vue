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
      message: "Le vendeur vous voit et lance les habitants à votre trousse ! Vous finissez l’aventure en prison...",
    };
  },
}

</script>
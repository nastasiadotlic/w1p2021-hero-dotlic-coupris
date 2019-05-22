<template>
  <div class="loose2">
    <h1 class="loose2__title"> {{ message }} </h1>
    <router-link class="button" to="/">Recommencer la partie</router-link>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Poséidon, fou de rage face à votre refus, déchaîne les mers et une énorme tempête éclate. Malheureusement votre vieux raffiot n’est pas de taille face à cette tempête ! Malgré tous vos efforts, votre bateau sombre dans la mer...",
    };
  },
}

</script>
<template>
  <div class="loose3">
    <h1 class="loose3__title"> {{ message }} </h1>
    <router-link class="button" to="/">Recommencer la partie</router-link>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Vous aviez tout d’une proie facile et les bandits de grand chemin qui passaient par là ont su en tirer profit ! Après vous avoir tué dans votre sommeil, ils vous ont dépouillé et se sont enfuis avec vos biens.",
    };
  },
}

</script>
<template>
  <div class="loose3">
    <h1 class="loose3__title"> {{ message }} </h1>
    <div class="button" @click="clearItem()">Recommencer la partie</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Vous aviez tout d’une proie facile et les bandits de grand chemin qui passaient par là ont su en tirer profit ! Après vous avoir tué dans votre sommeil, ils vous ont dépouillé et se sont enfuis avec vos biens.",
    };
  },
  methods: {
    clearItem() {
      localStorage.removeItem("save");
      this.$router.push({path: '/'});
    }
  },
}

</script>
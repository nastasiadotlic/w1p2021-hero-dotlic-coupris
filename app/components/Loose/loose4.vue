<template>
  <div class="loose4">
    <h1 class="loose4__title"> {{ message }} </h1>
    <div class="button" @click="clearItem()">Recommencer la partie</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Le vendeur vous voit et lance les habitants à votre trousse ! Vous finissez l’aventure en prison...",
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
<template>
  <div class="win">
    <h1 class="win__title">{{ message }}</h1>
    <div class="button" @click="clearItem()">TERMINER LA PARTIE</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: "Félicitations, vous avez bien mérité votre récompense ! Vous quittez Athènes et pouvez ainsi reprendre la route vers de nouvelles aventures, qui sait ce qui vous attend ?",
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
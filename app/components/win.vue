<template>
  <div class="win">
    <h1 class="win__title">{{ message }}</h1>
    <router-link class="button" to="/">Terminer la partie</router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: "Felicitations, vous avez bien mérité votre récompense ! Vous quittez Athène et pouvez ainsi reprendre la route vers de nouvelles aventures, qui sait ce qui vous attend ?",
    };
  },
}

</script>
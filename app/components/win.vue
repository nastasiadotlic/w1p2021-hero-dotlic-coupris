<template>
  <div class="win">
    <h1 class="win__title">{{ message }}</h1>
    <router-link class="button" to="/">TERMINER LA PARTIE</router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: "Félicitations, vous avez bien mérité votre récompense ! Vous quittez Athènes et pouvez ainsi reprendre la route vers de nouvelles aventures, qui sait ce qui vous attend ?",
    };
  },
}

</script>
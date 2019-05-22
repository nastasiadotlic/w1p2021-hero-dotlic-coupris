<template>
  <div class="loose8">
    <h1 class="loose8__title"> {{ message }} </h1>
    <router-link class="button" to="/">Recommencer la partie</router-link>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Vous êtes rapidement dépassé par le nombre et vous mourez dans l’affrontement. Dommage, si près du but... ",
    };
  },
}

</script>
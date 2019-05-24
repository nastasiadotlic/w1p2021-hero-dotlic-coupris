<template>
  <div class="loose8">
    <h1 class="loose8__title"> {{ message }} </h1>
    <div class="button" @click="clearItem()">Recommencer la partie</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Vous êtes rapidement dépassé par le nombre et vous mourez dans l’affrontement. Dommage, si près du but... ",
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
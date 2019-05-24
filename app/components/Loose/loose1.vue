<template>
  <div class="loose1">
    <h1 class="loose1__title">{{ message }}</h1>
    <div class="button" @click="clearItem()">Recommencer la partie</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      message: "Oh non ! Tu t’es fait dévorer par des requins ! Tu aurais dû prendre le bateau...",
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


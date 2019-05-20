<template>
  <div>
    <h1> {{ message }} </h1>
    <router-link class="button" to="/">Recommencer la partie</router-link>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Oh non ! Tu t’es fait dévorer par des requins ! Tu aurais dû prendre le bateau...",
    };
  },
}

</script>
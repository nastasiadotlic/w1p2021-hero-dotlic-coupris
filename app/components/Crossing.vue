<template>
  <div class="big-header">
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/Peace">Chemin paisible</router-link>
    <router-link class="button" to="/Dangerous">Chemin effrayant</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Deux chemins s'offrent à toi, mais lequel désires-tu prendre? "
    };
  }
};
</script>

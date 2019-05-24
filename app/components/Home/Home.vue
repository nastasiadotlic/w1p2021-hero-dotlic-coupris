<template>
  <div class="home">
    <video class="home__video" autoplay loop>
      <source src="../../assets/video/landscape.mp4" alt="">
    </video>
    <img src="../../assets/pictures/title.png" alt="">
    <br/>
    <router-link class="home__button" to="/game/1">Commencer la partie</router-link>
  </div>

 

</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem("save")) {
      this.$router.push({path:`/game/${localStorage.getItem("save")}`});
    };
  }
}
</script>




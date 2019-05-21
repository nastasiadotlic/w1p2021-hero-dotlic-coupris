<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br />
    <div class="choices">
      <router-link class="button" to="/game/1">Commencer la partie</router-link>
    </div>
  </div>
</template>



<script>
//import images from '../../assets/images';


export default {
  data() {
    return {
      message: "Salut, bienvenue, c'est à toi de jouer"
    };
  },
  /*mounted() {
    const background = document.querySelector(".big-header");
    background.style.backgroundImage = `url(${images.image1})`
  }*/
};
</script>



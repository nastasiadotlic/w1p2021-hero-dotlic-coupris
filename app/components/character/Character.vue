<template>
  <article>
    <h2> {{ character.name }}</h2>
    <h3> {{ character.speciality }}</h3>
  </article>
</template>

<style lang="scss" scoped> // les styles ne sortiront pas de cette page avec "scoped" 
  @import './character.scss';

  .fade-enter-active {
    transition: opacity 10s;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }
</style>


<script>
export default {
  props:['character'],
  data: function() {
    show: false
  }
};
</script>

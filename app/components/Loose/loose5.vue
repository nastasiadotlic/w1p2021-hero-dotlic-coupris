<template>
  <div class="loose5"> 
    <h1 class="loose5__title"> {{ message }} </h1>
    <router-link class="button" to="/">Recommencer la partie</router-link>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Malgré sa blessure, la bête est plus rapide que vous ! Elle esquive et vous attaque. Vous n’avez aucune arme pour vous défendre, elle n’a donc aucune difficulté à vous blesser mortellement.",
    };
  },
}

</script>
<template>
  <div class="loose7">
    <h1 class="loose7__title"> {{ message }} </h1>
    <div class="button" @click="clearItem()">Recommencer la partie</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "La tête de Méduse que vous transportez pétrifie de pauvres innocents sur votre passage. D’autres Athéniens s’enfuient en courant et alertent les soldats ! Vous êtes capturé par la garde et éxécuté le lendemain...",
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
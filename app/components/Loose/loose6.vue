<template>
  <div class="loose6">
    <h1 class="loose6__title"> {{ message }} </h1>
    <div class="button" @click="clearItem()">Recommencer la partie</div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message: "Vous pensiez sincèrement vous en sortir ainsi ? Méduse, la célèbre et redoutée gorgone n’est en tout cas pas de cet avis. Vous avez osé vous rendre sur son territoire et elle ne le tolérera pas ! D’un simple regard, Méduse vous pétrifie. Vous rejoignez ainsi sa collection de statues.",
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
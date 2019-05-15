<template>
  <div> 
    <h1><!--{{ step.message }}-->Bonjour</h1>

    <!--
    <router-link v-for="action in step.actions" 
    :to="action.goto.toString()" :key="action">
      {{ action.label }}
    </router-link>-->
  </div>
</template>



<!--
<script>
import game from '../../data.json';

export default {
  data: function() {
    return {
      step: this.getStep()
      }
    },
    
  mounted(){
    console.log("hello")
  },

  methods: {
    getStep() {
      return game.steps.find (
        step => step.id === parseInt(this.$route.params.id)
      ) 
    }
  },

  watch: {
    '$route.params.id' (to,from) {
      $this.step = this.getStep()
    }
  }
} 

</script>

-->


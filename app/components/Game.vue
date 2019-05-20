<template>
  <div>
    <h1> {{ step.message }} </h1>
    <a href="#" v-for="(action, index) in step.actions" class="button" :key="index" @click.prevent="choiceSelected(action)"> {{ action.answer }} </a>
  </div>
</template>


<script>
import game from "../../data.json";
// import characterService from '../';

export default {
  computed: {
    step() {
      return this.findStep();
    }
  },

  methods: {
    findStep() {
      return game.steps.find(step => step.id === Number(this.$route.params.id));
    },
    choiceSelected(action) {
      // let character = '';
      // if (this.step.id === 1) {
      //   characterService.setCharacter(action.answer);
      // } else {
      //   character = characterService.getCharacter();
      // }

      // message.replace('{name}', name);

      this.$router.push({name: 'game', params: {id: action.goto}}) //changer l'ID

    }
  },
}

</script>

<!-- <template>
  <div> 
    <h1>{{ step.message }}Bonjour</h1>

    
    <router-link v-for="action in step.actions" 
    :to="action.goto.toString()" :key="action">
      {{ action.label }}
    </router-link>
  </div>
</template>




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



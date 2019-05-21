<template>
  <div class="game qsdsq" v-bind:style="{ 'background-image': 'url(' + step.img + ')' }" >
    <div class="game__text">
      <h1> {{ step.message }} </h1>
      <a href="#" v-for="(action, index) in step.actions" class="button" :key="index" @click.prevent="choiceSelected(action)"> {{ action.answer }} </a>
    </div>
  </div>
</template>

<style>
  .game {
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 100px;
    margin-right: 100px;
  }
</style>



<script>
import game from "../data.js"; // changer json en js si j'utilise data.js
// import characterService from '../';
 
export default {
  /*data() {
    return {
      game: game
    }
  },*/

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
      //let character = '';
      //if (this.step.id === 1) {
      //  characterService.setCharacter(action.answer);
      //} else {
      //  character = characterService.getCharacter();
      //}

      //message.replace('{name}', name);

      if (action.loose) {
        this.$router.push({name: 'loose1'})
      } else {
        this.$router.push({name: 'game', params: {id: action.goto}})
      }
       //changer l'ID

    }
  },
}

</script>





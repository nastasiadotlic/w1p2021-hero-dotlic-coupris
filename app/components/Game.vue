<template>
  <div class="game" v-bind:style="{ 'background-image': 'url(' + step.img + ')' }" >
    <div class="game__text">
      <h1 class="game__title">{{ step.message }}</h1>
      <div class="game__buttons">
        <a href="#" v-for="(action, index) in step.actions" class="button" :key="index" @click.prevent="choiceSelected(action)" > {{ action.answer }} </a>
      </div>
    </div>
    <!--<audio controls src="/assets/audio/greekSoundtrack.mp3" autoplay></audio>-->
  </div>
</template>

<style>
  .game {
    height: 100vh;
    background-size: cover;
  }

  .game__text {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 200px;
    margin-right: 200px;
    
  }

  .game__title {
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.418);
    padding: 40px;
    border-radius: 20px;
    line-height: 40px;
  }

  .game__buttons {
    display: flex;
  }



  
</style>



<script>
import game from "../data.js";
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
        this.$router.push({name: 'loose1'} || {name:'loose2'}) /*|| this.$router.push({name: 'loose3'}) || this.$router.push({name: 'loose4'}) || this.$router.push({name: 'loose5'}) || this.$router.push({name: 'loose6'}) || this.$router.push({name: 'loose7'}) || this.$router.push({name: 'loose8'})*/
      } else {
        this.$router.push({name: 'game', params: {id: action.goto}})
      } 

       //changer l'ID

    }
  },
}

</script>





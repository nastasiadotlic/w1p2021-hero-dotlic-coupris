<template>
  <div class="game" v-bind:style="{ 'background-image': 'url(' + step.img + ')' }" >
    <img class="game__speaker" :src="image" alt="speaker" @click.prevent="playSound(sound)">
    <div class="game__text">
      <h1 class="game__title">{{ step.message }}</h1>
      <div class="game__buttons">
        <a href="#" v-for="(action, index) in step.actions" class="button" :key="index" @click.prevent="choiceSelected(action)" > {{ action.answer }} </a>
      </div>
    </div>
    <audio :src="sound" loop></audio>
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

  .game__speaker {
    height: 100px;
    width: 100px;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  
</style>



<script>
import game from "../data.js";
import image from "../assets/pictures/speakeron.png";
import sound from "../assets/audio/greekSoundtrack.mp3";
// import characterService from '../';
 
export default {
  data() {
    return {
      image: image,
      sound: sound
    }
  },

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
        this.$router.push({name: action.loose})
      } else {
        this.$router.push({name: 'game', params: {id: action.goto}})
      } 

      if (action.win) {
        this.$router.push({name: action.win})
      }
    },
    playSound(sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      } 
    },
  },
}

</script>





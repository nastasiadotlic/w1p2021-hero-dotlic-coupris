<template>
  <div class="game" v-bind:style="{ 'background-image': 'url(' + step.img + ')' }" >
    <img class="game__speaker" :src="image" alt="speaker" @click.prevent="playSound($refs.audio)">
    <div class="game__text">
      <h1 class="game__title">{{ step.message }}</h1>
      <div class="game__buttons">
        <a href="#" v-for="(action, index) in step.actions" class="button" :key="index" @click.prevent="choiceSelected(action)" > {{ action.answer }} </a>
      </div>
    </div>
    <audio autoplay loop :src="sound" ref="audio"></audio>
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
    background-color: rgba(0, 0, 0, 0.61);
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
import musique from "../assets/audio/greekSoundtrack.mp3";
import music from "../assets/soundService.js";
 
export default {
  data() {
    return {
      image: image,
      sound: musique
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
      
      if (action.loose) {
        this.$router.push({name: action.loose})
      } else {
        this.$router.push({name: 'game', params: {id: action.goto}})
      } 

      if (action.win) {
        this.$router.push({name: action.win})
      }
    },
    playSound(sound){
      music.playSound(sound);
    }
  },
  mounted() {
    if (localStorage.getItem("music")) {

      if(localStorage.getItem("music") == "true") {
        this.$refs.audio.muted = true;
      }
    }
    localStorage.setItem("save", this.step.id);
  },

}

</script>





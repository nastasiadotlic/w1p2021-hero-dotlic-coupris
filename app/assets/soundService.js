class Actions {

  playSound(sound) {
      sound.muted = !sound.muted;
      localStorage.setItem("music", sound.muted);
    } 
}

export default new Actions();

 


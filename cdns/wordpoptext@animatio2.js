class WordPopText {
    constructor(textArray, speed = 0.8) {
      this.textArray = textArray;
      this.speed = speed;
      this.currentWordIndex = 0;
      this.textElements = document.querySelectorAll('.WordPopText');
      this.loadAnimeJS().then(() => this.startTextAnimation());
    }
  
    loadAnimeJS() {
      return new Promise((resolve, reject) => {
        if (typeof anime !== 'undefined') {
          resolve();
        } else {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        }
      });
    }
  
    animateText(element) {
      if (element) {
        element.innerHTML = this.textArray[this.currentWordIndex].split(' ').map(word => `<span style='display: inline-block;'>${word}</span>`).join(' ');
  
        anime.timeline({ loop: false })
          .add({
            targets: '.letter20',
            opacity: [0, 1],
            scale: [0.2, 1],
            duration: 800 / this.speed,
          })
          .add({
            targets: '.letter20',
            opacity: 0,
            scale: 3,
            easing: "easeInExpo",
            duration: 600 / this.speed,
            delay: 500 / this.speed
          });
  
        this.currentWordIndex = (this.currentWordIndex + 1) % this.textArray.length;
      }
    }
  
    startTextAnimation() {
      this.textElements.forEach(element => this.animateText(element));
      setInterval(() => {
        this.textElements.forEach(element => this.animateText(element));
      }, 2050 / this.speed);
    }
  }
  
  // Usage example:
  // const animatio = new WordPopText(["Capture", "Animation"], 0.8);
  
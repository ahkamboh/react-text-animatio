/*@animatio: https://github.com/ahkamboh/animatio
  creator:@ahkamboh(https://alihamzakamboh.com)*/
class SwapText {
    constructor(textArray, speed = 1) {
      this.textArray = textArray;
      this.speed = speed;
      this.currentTextIndex = 0;
      this.textElements = document.querySelectorAll('.SwapText');
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
        element.innerHTML = this.textArray[this.currentTextIndex].replace(
          /\S/g,
          "<span style='display: inline-block;' class='letter2'>$&</span>"
        );
  
        anime.timeline({ loop: false })
          .add({
            targets: '.letter2',
            translateY: ["1.1em", 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 750 / this.speed,
            delay: (el, i) => 50 * i
          })
          .add({
            targets: '.letter2',
            opacity: 0,
            duration: 1500 / this.speed,
            easing: 'easeInOutQuad',
            delay: (el, i) => 50 * i + 1000
          });
  
        this.currentTextIndex = (this.currentTextIndex + 1) % this.textArray.length;
      }
    }
  
    startTextAnimation() {
      this.textElements.forEach(element => this.animateText(element));
      setInterval(() => {
        this.textElements.forEach(element => this.animateText(element));
      }, 4000 / this.speed);
    }
  }
  
  // Usage example:
  // const animatio = new SwapText(["Capture", "Animation"], 1);
  
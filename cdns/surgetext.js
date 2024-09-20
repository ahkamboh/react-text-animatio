/*@animatio: https://github.com/ahkamboh/animatio
  creator:@ahkamboh(https://alihamzakamboh.com)*/
class SurgeText {
    constructor(textArray, speed = 0.8) {
      this.textArray = textArray;
      this.speed = speed;
      this.currentWordIndex = 0;
      this.textElements = document.querySelectorAll('.SurgeText');
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
        element.innerHTML = this.textArray[this.currentWordIndex].replace(
          /\S/g,
          "<span style='display: inline-block;'>$&</span>"
        );
  
        anime.timeline({ loop: false })
          .add({
            targets: `.${element.className} span`,
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 750 / this.speed,
            easing: "easeOutExpo",
            delay: (el, i) => (50 * i) / this.speed
          })
          .add({
            targets: `.${element.className} span`,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
      }
    }
  
    startTextAnimation() {
      this.textElements.forEach(element => this.animateText(element));
      setInterval(() => {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.textArray.length;
        this.textElements.forEach(element => this.animateText(element));
      }, 2750 / this.speed);
    }
  }
  
  // Usage example:
  // const animatio = new SurgeText(["Capture", "Animation"], 0.8);
  
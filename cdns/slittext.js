/*@animatio: https://github.com/ahkamboh/animatio
  creator:@ahkamboh(https://alihamzakamboh.com)*/
class SlitText {
    constructor(textArray, speed = 0.7) {
      this.textArray = textArray;
      this.speed = speed;
      this.currentIndex = 0;
      this.textElements = document.querySelectorAll('.SlitText');
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
        const animationConfig = {
          opacityIn: [0, 1],
          scaleIn: [0.2, 1],
          scaleOut: 3,
          durationIn: 800 / this.speed,
          durationOut: 600 / this.speed,
          delay: 500 / this.speed
        };
  
        element.innerHTML = this.textArray[this.currentIndex].split('').map(char => `<span style='display: inline-block; opacity: 0;'>${char}</span>`).join('');
  
        const timeline = anime.timeline({ loop: false });
  
        timeline
          .add({
            targets: element.children,
            opacity: animationConfig.opacityIn,
            scale: animationConfig.scaleIn,
            duration: animationConfig.durationIn,
            easing: 'easeOutExpo',
            delay: anime.stagger(100 / this.speed)
          })
          .add({
            targets: element.children,
            opacity: 0,
            scale: animationConfig.scaleOut,
            duration: animationConfig.durationOut,
            easing: "easeInExpo",
            delay: animationConfig.delay
          });
      }
    }
  
    startTextAnimation() {
      this.textElements.forEach(element => this.animateText(element));
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
        this.textElements.forEach(element => this.animateText(element));
      }, 2500 / this.speed);
    }
  }
  
  // Usage example:
  // const animatio = new SlitText(["Capture", "Animation"], 0.7);
  
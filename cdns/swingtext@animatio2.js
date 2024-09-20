class SwingText {
    constructor(textArray, speed = 1) {
      this.textArray = textArray;
      this.speed = speed;
      this.currentWordIndex = 0;
      this.textElements = document.querySelectorAll('.SwingText');
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
          "<span style='display: inline-block;' class='letter3'>$&</span>"
        );
  
        anime.timeline({ loop: false })
          .add({
            targets: '.letter3',
            translateY: ["1.1em", 0],
            translateX: [0, "0.55em"],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 950 / this.speed,
            delay: (el, i) => (70 / this.speed) * i
          })
          .add({
            targets: '.letter3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
  
        this.currentWordIndex = (this.currentWordIndex + 1) % this.textArray.length;
      }
    }
  
    startTextAnimation() {
      this.textElements.forEach(element => this.animateText(element));
      setInterval(() => {
        this.textElements.forEach(element => this.animateText(element));
      }, 2750 / this.speed);
    }
  }
  
  // Usage example:
  // const animatio = new SwingText(["Capture", "Animation"], 1);
  
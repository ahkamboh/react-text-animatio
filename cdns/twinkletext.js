/*@animatio: https://github.com/ahkamboh/animatio
  creator:@ahkamboh(https://alihamzakamboh.com)*/
class TwinkleText {
    constructor(textArray, speed = 0.4, direction = "none") {
      this.textArray = textArray;
      this.speed = speed;
      this.direction = direction;
      this.currentIndex = 0;
      this.textElements = document.querySelectorAll('.TwinkleText');
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
        element.innerHTML = this.textArray[this.currentIndex].replace(
          /\S/g,
          "<span style='display: inline-block;' class='letter23'>$&</span>"
        );
  
        let animationProps;
        switch (this.direction) {
          case "left":
            animationProps = { translateX: [-90, 0] };
            break;
          case "right":
            animationProps = { translateX: [90, 0] };
            break;
          default:
            animationProps = { rotateY: [-90, 0] };
        }
  
        anime.timeline({ loop: false })
          .add({
            targets: '.letter23',
            ...animationProps,
            duration: 950 / this.speed,
            delay: (el, i) => 50 * i
          })
          .add({
            targets: '.ml44',
            duration: 2000,
            easing: "easeOutExpo",
            delay: (el, i) => 50 * i + 1000
          });
  
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
      }
    }
  
    startTextAnimation() {
      this.textElements.forEach(element => this.animateText(element));
      setInterval(() => {
        this.textElements.forEach(element => this.animateText(element));
      }, 1350 / this.speed);
    }
  }
  
  // Usage example:
  // const animatio = new TwinkleText(["Capture", "Animation"], 0.4, "none");
  
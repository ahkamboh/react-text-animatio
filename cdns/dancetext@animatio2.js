class DanceText {
    constructor(textArray, speed = 0.5, direction = "none") {
      this.textArray = textArray;
      this.speed = speed;
      this.direction = direction;
      this.currentIndex = 0;
      this.textElements = document.querySelectorAll('.DanceText');
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
          "<span style='display: inline-block;' class='letter230'>$&</span>"
        );
  
        let animationProps;
        switch (this.direction) {
          case "top":
            animationProps = { translateY: [-90, 0] };
            break;
          case "bottom":
            animationProps = { translateY: [90, 0] };
            break;
          default:
            animationProps = { translateY: [90, 0] };
        }
  
        anime.timeline({ loop: false })
          .add({
            targets: '.letter230',
            ...animationProps,
            duration: 950 / this.speed,
            delay: (el, i) => 50 * i
          })
          .add({
            targets: '.ml440',
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
  // const animatio = new DanceText(["Capture", "Animation"], 0.5, "none");
  
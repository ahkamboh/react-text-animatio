class CaptureText {
    constructor(textArray, speed = 0.7) {
      this.textArray = textArray;
      this.speed = speed;
      this.currentWordIndex = 0;
      this.textElements = document.querySelectorAll('.CaptureText');
      this.startTextAnimation();
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
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950 / this.speed,
            delay: (el, i) => (70 / this.speed) * i,
          })
          .add({
            targets: `.${element.className} span`,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
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
  
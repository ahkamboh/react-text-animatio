class DanceDualText {
    constructor(textArray, speed = 0.7, direction = 'none') {
      this.textArray = textArray;
      this.speed = speed;
      this.direction = direction;
      this.currentIndex = 0;
      this.textElements = document.querySelectorAll('.DanceDualText');
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
        const currentText = this.textArray[this.currentIndex];
        element.innerHTML = currentText.replace(/\S/g, "<span style='display: inline-block; opacity: 0;'>$&</span>");
  
        let translateYStart, translateYEnd;
  
        switch (this.direction) {
          case "top":
            translateYStart = 20;
            translateYEnd = -20;
            break;
          case "bottom":
            translateYStart = -20;
            translateYEnd = 20;
            break;
          default:
            translateYStart = 20;
            translateYEnd = -20;
        }
  
        anime.timeline({ loop: false })
          .add({
            targets: element.children,
            opacity: [0, 1],
            translateY: [translateYStart, 0],
            translateZ: 0,
            duration: 1000,
            delay: (el, i) => 50 * i,
            easing: 'easeOutExpo',
          })
          .add({
            targets: element.children,
            opacity: 0,
            translateY: [0, translateYEnd],
            duration: 1000,
            delay: (el, i) => 50 * i,
            easing: 'easeInExpo',
          }, '+=1000');
      }
    }
  
    startTextAnimation() {
      this.textElements.forEach(element => this.animateText(element));
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
        this.textElements.forEach(element => this.animateText(element));
      }, 3000 / this.speed);
    }
  }
  
  
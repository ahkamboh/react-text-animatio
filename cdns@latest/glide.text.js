
/*@animatio: https://github.com/ahkamboh/animatio, creator:@ahkamboh(https://alihamzakamboh.com) , Usage example: const animatio = new GlideText(["Capture", "Animation"], 1, "vertical");*/
class GlideText {
  constructor(textArray, speed = 1, direction = "vertical") {
    this.textArray = textArray;
    this.speed = speed;
    this.direction = direction;
    this.currentIndex = 0;
    this.textElements = document.querySelectorAll('.GlideText');
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
      element.textContent = this.textArray[this.currentIndex];
      
      let translateIn, translateOut;
      switch (this.direction) {
        case "top":
          translateIn = [20, 0];
          translateOut = -20;
          break;
        case "bottom":
          translateIn = [-20, 0];
          translateOut = 20;
          break;
        case "left":
          translateIn = [20, 0];
          translateOut = -20;
          break;
        case "right":
          translateIn = [-20, 0];
          translateOut = 20;
          break;
        case "horizontal":
          translateIn = [20, 0];
          translateOut = -20;
          break;
        case "vertical":
        default:
          translateIn = [20, 0];
          translateOut = -20;
          break;
      }

      anime.timeline({ loop: false })
        .add({
          targets: element,
          opacity: [0, 1],
          translateY: this.direction === "top" || this.direction === "bottom" || this.direction === "vertical" ? translateIn : 0,
          translateX: this.direction === "left" || this.direction === "right" || this.direction === "horizontal" ? translateIn : 0,
          easing: "easeOutExpo",
          duration: 1000 / this.speed
        })
        .add({
          targets: element,
          opacity: 0,
          translateY: this.direction === "top" || this.direction === "bottom" || this.direction === "vertical" ? translateOut : 0,
          translateX: this.direction === "left" || this.direction === "right" || this.direction === "horizontal" ? translateOut : 0,
          easing: "easeInExpo",
          duration: 1000 / this.speed,
        });

      this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
    }
  }

  startTextAnimation() {
    this.textElements.forEach(element => this.animateText(element));
    setInterval(() => {
      this.textElements.forEach(element => this.animateText(element));
    }, 2000 / this.speed);
  }
}

// Usage example:
// const glideText = new GlideText(["Hello", "World", "Glide"], 1, "vertical");
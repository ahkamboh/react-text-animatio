/*@animatio: https://github.com/ahkamboh/animatio ,creator:@ahkamboh(https://alihamzakamboh.com), Usage example: const animatio = new DanceDualText(["Capture", "Animation"], 0.7, 'top');*/
  class DanceDualText{constructor(t,e=.7,a="none"){this.textArray=t,this.speed=e,this.direction=a,this.currentIndex=0,this.textElements=document.querySelectorAll(".DanceDualText"),this.loadAnimeJS().then(()=>this.startTextAnimation())}loadAnimeJS(){return new Promise((t,e)=>{if("undefined"!=typeof anime)t();else{let a=document.createElement("script");a.src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",a.onload=t,a.onerror=e,document.head.appendChild(a)}})}animateText(t){if(t){let e=this.textArray[this.currentIndex];t.innerHTML=e.replace(/\S/g,"<span style='display: inline-block; opacity: 0;'>$&</span>");let a,n;switch(this.direction){case"top":default:a=20,n=-20;break;case"bottom":a=-20,n=20}anime.timeline({loop:!1}).add({targets:t.children,opacity:[0,1],translateY:[a,0],translateZ:0,duration:1e3,delay:(t,e)=>50*e,easing:"easeOutExpo"}).add({targets:t.children,opacity:0,translateY:[0,n],duration:1e3,delay:(t,e)=>50*e,easing:"easeInExpo"},"+=1000")}}startTextAnimation(){this.textElements.forEach(t=>this.animateText(t)),setInterval(()=>{this.currentIndex=(this.currentIndex+1)%this.textArray.length,this.textElements.forEach(t=>this.animateText(t))},3e3/this.speed)}}
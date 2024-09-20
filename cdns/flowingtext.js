/*@animatio: https://github.com/ahkamboh/animatio  ,creator:@ahkamboh(https://alihamzakamboh.com) ,Usage example: const animatio = new FlowingText(["Capture", "Animation"], 0.8);*/
class FlowingText{constructor(e,t=.8){this.textArray=e,this.speed=t,this.currentIndex=0,this.textElements=document.querySelectorAll(".FlowingText"),this.loadAnimeJS().then(()=>this.startTextAnimation())}loadAnimeJS(){return new Promise((e,t)=>{if("undefined"!=typeof anime)e();else{let i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",i.onload=e,i.onerror=t,document.head.appendChild(i)}})}animateText(e){if(e){let t={opacityIn:[0,1],scaleIn:[.2,1],scaleOut:3,durationIn:800/this.speed,durationOut:600/this.speed,delay:500/this.speed};e.innerHTML=this.textArray[this.currentIndex].split("").map(e=>`<span style='display: inline-block; opacity: 0;'>${e}</span>`).join("");let i=anime.timeline({loop:!1});i.add({targets:e.children,opacity:t.opacityIn,scale:t.scaleIn,duration:t.durationIn,easing:"easeOutExpo",delay:anime.stagger(100/this.speed)}).add({targets:e.children,opacity:0,scale:t.scaleOut,duration:t.durationOut,easing:"easeInExpo",delay:t.delay})}}startTextAnimation(){this.textElements.forEach(e=>this.animateText(e)),setInterval(()=>{this.currentIndex=(this.currentIndex+1)%this.textArray.length,this.textElements.forEach(e=>this.animateText(e))},2500/this.speed)}}
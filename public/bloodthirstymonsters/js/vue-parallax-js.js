var ParallaxJS=function(){"use strict";var t=function(t){this.os=t};t.prototype={items:[],active:!0,tProp:window.transformProp||function(){var t=document.createElement("div");if(null==t.style.transform){var e=["Webkit","Moz","ms"],i=!0,n=!1,r=void 0;try{for(var o,a=e[Symbol.iterator]();!(i=(o=a.next()).done);i=!0){var s=o.value;if(void 0!==t.style[s+"Transform"])return s+"Transform"}}catch(t){n=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw r}}}return"transform"}(),add:function(t,e){var i=e.value,n=e.arg,r=t.currentStyle||window.getComputedStyle(t),o=e.modifiers;if("none"!==r.display){var a=o.absY?window.innerHeight:t.clientHeight||t.scrollHeight;t.classList.add(this.os.className||""),this.items.push({el:t,iOT:t.offsetTop+t.offsetParent.offsetTop-parseInt(r.marginTop),style:r,value:i,arg:n,mod:o,height:a,count:0})}},move:function(){var t=this;if(this.active)if(window.innerWidth<this.os.minWidth)this.items.forEach(function(e){e.el.style[t.tProp]=""});else{var e=window.scrollY||window.pageYOffset,i=window.innerHeight;this.items.forEach(function(n){var r=n.height,o=-1*n.iOT*n.value,a=(e+i-r/2-i/2)*n.value+o;window.requestAnimationFrame(function(){var e="translate3d("+(n.mod.centerX?"-50%":"0px")+","+a.toFixed(3)+"px,0px)";n.el.style[t.tProp]=e})})}}};return{install:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new t(i);window.addEventListener("scroll",function(){n.move(n)},{passive:!0}),window.addEventListener("resize",function(){n.move(n)},{passive:!0}),e.prototype.$parallaxjs=n,window.$parallaxjs=n,e.directive("parallax",{bind:function(t,e){},inserted:function(t,e){n.add(t,e),n.move(n)}})}}}();
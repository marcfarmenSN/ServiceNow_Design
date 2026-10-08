// Scales the fixed 1920×1080 #stage to fit the viewport (letterboxed).
(function(){function fit(){var s=document.getElementById('stage');if(!s)return;var k=Math.min(window.innerWidth/1920,window.innerHeight/1080);s.style.transform='translate('+((window.innerWidth-1920*k)/2)+'px,'+((window.innerHeight-1080*k)/2)+'px) scale('+k+')';}
window.addEventListener('resize',fit);document.addEventListener('DOMContentLoaded',fit);window.__fitStage=fit;})();

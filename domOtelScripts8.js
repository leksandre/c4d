<!-- add chat reaction for page -->


<style>
@media (min-width: 450px) {
#chatIcons{
scale: 1;
border-radius: 50px;
}
#chatIcons2{
scale: 1;
border-radius: 50px;
}
}
</style>



<script type="text/javascript">


async  function swalScale(el) {

   el
   .animate({ opacity: [1, 0.7], transform: ["scale(1)", "scale(0.7)"], }, { duration: 1000, iterations: 1, easing: "ease-in" })
   .onfinish = (e) => {

   e.target.effect.target.style.opacity = 0.7;
   e.target.effect.target.style.transform = 'scale(0.7)';

   el
   .animate({ opacity: [0.7, 1], transform: ["scale(0.7)", "scale(1)"], }, { duration: 1000, iterations: 1, easing: "ease-in" })
   .onfinish = (e) => {

   e.target.effect.target.style.opacity = 1;
   e.target.effect.target.style.transform = 'scale(1)';

   };
   
   };
   
   }
   
   
window.addEventListener("DOMContentLoaded", (event) => {


var newdiv = document.createElement('div');
newdiv.id="chatIcons";
newdiv.style.background = "#e47654";

newdiv.style.width="65px";
newdiv.style.height="65px";
newdiv.style.position="fixed";
newdiv.style.right="20px";
newdiv.style.bottom="20px";
newdiv.style.borderRadius="50px";
newdiv.style.padding="15px";
newdiv.style.paddingTop="17px";
newdiv.onclick = function() {
	
	if(timer1){clearInterval(timer1);}
	if(timer1){clearInterval(timer1);}
	
        let elementWithIcons = document.getElementById('18iconsChat');


        if(elementWithIcons.style.display === 'block'){
        elementWithIcons.style.display = "none";
        }else{
        elementWithIcons.style.display = "block";
        }
		
		
          let elementWithIcons2 = document.getElementById('19iconsChat');

   

        if(elementWithIcons2.style.display === 'block'){
        elementWithIcons2.style.display = "none";
        }else{
        elementWithIcons2.style.display = "block";
        }
		
     };



newdiv.innerHTML='<div id="19iconsChat" style="display: none; position: absolute; bottom: 150px; right: 0px; width: 65px; height: 65px;">'
+'<svg id="chat_telegram_cyberpunk" style="cursor:pointer; filter: drop-shadow(0 0 8px #00ffff);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.1 240.1" height="65px" width="65px">'
+'<defs>'
+'<radialGradient id="cyberGradient" cx="50%" cy="50%" r="50%">'
+'<stop offset="0%" stop-color="#00ffff">'
+'<animate attributeName="stop-color" values="#00ffff;#ff00ff;#00ffff" dur="3s" repeatCount="indefinite"/>'
+'</stop>'
+'<stop offset="100%" stop-color="#000000">'
+'<animate attributeName="stop-color" values="#000000;#330033;#000000" dur="4s" repeatCount="indefinite"/>'
+'</stop>'
+'</radialGradient>'
+'<filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">'
+'<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>'
+'<feFlood flood-color="#00ffff" flood-opacity="0.8" result="glowColor"/>'
+'<feComposite in="glowColor" in2="blur" operator="in" result="glow"/>'
+'<feMerge>'
+'<feMergeNode in="glow"/>'
+'<feMergeNode in="SourceGraphic"/>'
+'</feMerge>'
+'</filter>'
+'<style>'
+'.cyber-line {'
+'stroke: #00ffff;'
+'stroke-width: 2;'
+'stroke-dasharray: 5,5;'
+'fill: none;'
+'}'
+'</style>'
+'</defs>'
+'<circle fill-rule="evenodd" clip-rule="evenodd" fill="url(#cyberGradient)" cx="120.1" cy="120.1" r="120.1" style="filter: drop-shadow(0 0 15px #00ffff); opacity: 0.9;">'
+'<animate attributeName="r" values="120.1;118.1;120.1" dur="2s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="120.1" cy="120.1" r="115" class="cyber-line" opacity="0.7">'
+'<animateTransform attributeName="transform" type="rotate" from="0 120.1 120.1" to="360 120.1 120.1" dur="20s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="120.1" cy="120.1" r="100" class="cyber-line" opacity="0.5">'
+'<animateTransform attributeName="transform" type="rotate" from="360 120.1 120.1" to="0 120.1 120.1" dur="15s" repeatCount="indefinite"/>'
+'</circle>'
+'<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z" style="filter: url(#neonGlow); fill: #ffffff;">'
+'<animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>'
+'</path>'
+'<rect x="10" y="10" width="220" height="220" rx="120" fill="none" stroke="#00ffff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3">'
+'<animate attributeName="stroke-dashoffset" values="0;8;0" dur="3s" repeatCount="indefinite"/>'
+'</rect>'
+'<circle cx="30" cy="30" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="210" cy="30" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="30" cy="210" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="210" cy="210" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite"/>'
+'</circle>'
+'</svg>'
+'</div>'
+'<div id="18iconsChat" style="display: none; position: absolute;bottom: 74px;right: 0px;width: 65px;height: 65px;" >'
+'<svg id="chat_telegram" style="cursor:pointer; " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.1 240.1"  height="65px" width="65px" >'
+'<linearGradient id="Oval_1_" gradientUnits="userSpaceOnUse" x1="-838.041" y1="660.581" x2="-838.041" y2="660.3427" gradientTransform="matrix(1000 0 0 -1000 838161 660581)">'
+' <stop offset="0" style="stop-color:#2AABEE"/>'
+' <stop offset="1" style="stop-color:#229ED9"/>'
+'</linearGradient>'
+'<circle fill-rule="evenodd" clip-rule="evenodd" fill="url(#Oval_1_)" cx="120.1" cy="120.1" r="120.1"/>'
+'<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3' +'c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8' +'c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z"/>'
+'</svg>'
+'</div>'
+'<svg style="cursor:pointer; " fill="#fff" height="35px" width="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
+     'viewBox="0 0 60 60" xml:space="preserve">'
+'<g>'
+    '<path d="M44.348,12.793H2.652C1.189,12.793,0,13.982,0,15.445v43.762l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.445'
+        'C47,13.982,45.811,12.793,44.348,12.793z M10,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S12.206,35.777,10,35.777z'
+        ' M23,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S25.206,35.777,23,35.777z M36,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4'
+        's4,1.794,4,4S38.206,35.777,36,35.777z"/>'
+    '<path d="M57.348,0.793H12.652C11.189,0.793,10,1.982,10,3.445v7.348h34.348c2.565,0,4.652,2.087,4.652,4.652v25.332h11V3.445'
+        'C60,1.982,58.811,0.793,57.348,0.793z"/>'
+'</g>'
+'</svg>';
document.body.appendChild(newdiv);

let elementWithIcontelegramm = document.getElementById('chat_telegram');
elementWithIcontelegramm.onclick = function() {
let url = "https://t.me/DomOtel_Tmn_bot";
    //window.location.replace(url);
    //window.location.href = url;
 window.open(url, '_blank').focus();
}

let elementWithIcontelegramm2 = document.getElementById('chat_telegram_cyberpunk');
elementWithIcontelegramm2.onclick = function() {
let url2 = "https://t.me/DomOtelManual_bot";
    //window.location.replace(url);
    //window.location.href = url;
 window.open(url2, '_blank').focus();
}


const timer1 = setInterval(() => { swalScale(newdiv); }, 3000);
setTimeout(function(){ if(timer1){clearInterval(timer1); }  if(timer1){clearInterval(timer1); }  }, 10000);
                   
});


</script><!-- add chat reaction for page -->


<style>
@media (min-width: 450px) {
#chatIcons{
scale: 1;
border-radius: 50px;
}
#chatIcons2{
scale: 1;
border-radius: 50px;
}
}
</style>



<script type="text/javascript">


async  function swalScale(el) {

   el
   .animate({ opacity: [1, 0.7], transform: ["scale(1)", "scale(0.7)"], }, { duration: 1000, iterations: 1, easing: "ease-in" })
   .onfinish = (e) => {

   e.target.effect.target.style.opacity = 0.7;
   e.target.effect.target.style.transform = 'scale(0.7)';

   el
   .animate({ opacity: [0.7, 1], transform: ["scale(0.7)", "scale(1)"], }, { duration: 1000, iterations: 1, easing: "ease-in" })
   .onfinish = (e) => {

   e.target.effect.target.style.opacity = 1;
   e.target.effect.target.style.transform = 'scale(1)';

   };
   
   };
   
   }
   
   
window.addEventListener("DOMContentLoaded", (event) => {


var newdiv = document.createElement('div');
newdiv.id="chatIcons2";
newdiv.style.background = "#e47654";

newdiv.style.width="65px";
newdiv.style.height="65px";
newdiv.style.position="fixed";
newdiv.style.right="20px";
newdiv.style.bottom="20px";
newdiv.style.borderRadius="50px";
newdiv.style.padding="15px";
newdiv.style.paddingTop="17px";
newdiv.onclick = function() {
	
	
        if(timer1){clearInterval(timer1);}
        if(timer1){clearInterval(timer1);}
	
	
          let elementWithIcons = document.getElementById('18iconsChat');


        if(elementWithIcons.style.display === 'block'){
        elementWithIcons.style.display = "none";
        }else{
        elementWithIcons.style.display = "block";
        }
		
		
          let elementWithIcons2 = document.getElementById('19iconsChat');

     

        if(elementWithIcons2.style.display === 'block'){
        elementWithIcons2.style.display = "none";
        }else{
        elementWithIcons2.style.display = "block";
        }

     };




newdiv.innerHTML='<div id="19iconsChat" style="display: none; position: absolute; bottom: 150px; right: 0px; width: 65px; height: 65px;">'
+'<svg id="chat_telegram_cyberpunk" style="cursor:pointer; filter: drop-shadow(0 0 8px #00ffff);" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.1 240.1" height="65px" width="65px">'
+'<defs>'
+'<radialGradient id="cyberGradient" cx="50%" cy="50%" r="50%">'
+'<stop offset="0%" stop-color="#00ffff">'
+'<animate attributeName="stop-color" values="#00ffff;#ff00ff;#00ffff" dur="3s" repeatCount="indefinite"/>'
+'</stop>'
+'<stop offset="100%" stop-color="#000000">'
+'<animate attributeName="stop-color" values="#000000;#330033;#000000" dur="4s" repeatCount="indefinite"/>'
+'</stop>'
+'</radialGradient>'
+'<filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">'
+'<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>'
+'<feFlood flood-color="#00ffff" flood-opacity="0.8" result="glowColor"/>'
+'<feComposite in="glowColor" in2="blur" operator="in" result="glow"/>'
+'<feMerge>'
+'<feMergeNode in="glow"/>'
+'<feMergeNode in="SourceGraphic"/>'
+'</feMerge>'
+'</filter>'
+'<style>'
+'.cyber-line {'
+'stroke: #00ffff;'
+'stroke-width: 2;'
+'stroke-dasharray: 5,5;'
+'fill: none;'
+'}'
+'</style>'
+'</defs>'
+'<circle fill-rule="evenodd" clip-rule="evenodd" fill="url(#cyberGradient)" cx="120.1" cy="120.1" r="120.1" style="filter: drop-shadow(0 0 15px #00ffff); opacity: 0.9;">'
+'<animate attributeName="r" values="120.1;118.1;120.1" dur="2s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="120.1" cy="120.1" r="115" class="cyber-line" opacity="0.7">'
+'<animateTransform attributeName="transform" type="rotate" from="0 120.1 120.1" to="360 120.1 120.1" dur="20s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="120.1" cy="120.1" r="100" class="cyber-line" opacity="0.5">'
+'<animateTransform attributeName="transform" type="rotate" from="360 120.1 120.1" to="0 120.1 120.1" dur="15s" repeatCount="indefinite"/>'
+'</circle>'
+'<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z" style="filter: url(#neonGlow); fill: #ffffff;">'
+'<animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>'
+'</path>'
+'<rect x="10" y="10" width="220" height="220" rx="120" fill="none" stroke="#00ffff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3">'
+'<animate attributeName="stroke-dashoffset" values="0;8;0" dur="3s" repeatCount="indefinite"/>'
+'</rect>'
+'<circle cx="30" cy="30" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="210" cy="30" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="30" cy="210" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite"/>'
+'</circle>'
+'<circle cx="210" cy="210" r="3" fill="#00ffff" opacity="0.8">'
+'<animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite"/>'
+'</circle>'
+'</svg>'
+'</div>'
+'<div id="18iconsChat" style="display: none; position: absolute;bottom: 74px;right: 0px;width: 65px;height: 65px;" >'
+'<svg id="chat_telegram" style="cursor:pointer; " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.1 240.1"  height="65px" width="65px" >'
+'<linearGradient id="Oval_1_" gradientUnits="userSpaceOnUse" x1="-838.041" y1="660.581" x2="-838.041" y2="660.3427" gradientTransform="matrix(1000 0 0 -1000 838161 660581)">'
+' <stop offset="0" style="stop-color:#2AABEE"/>'
+' <stop offset="1" style="stop-color:#229ED9"/>'
+'</linearGradient>'
+'<circle fill-rule="evenodd" clip-rule="evenodd" fill="url(#Oval_1_)" cx="120.1" cy="120.1" r="120.1"/>'
+'<path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M54.3,118.8c35-15.2,58.3-25.3,70-30.2 c33.3-13.9,40.3-16.3,44.8-16.4c1,0,3.2,0.2,4.7,1.4c1.2,1,1.5,2.3,1.7,3.3s0.4,3.1,0.2,4.7c-1.8,19-9.6,65.1-13.6,86.3' +'c-1.7,9-5,12-8.2,12.3c-7,0.6-12.3-4.6-19-9c-10.6-6.9-16.5-11.2-26.8-18c-11.9-7.8-4.2-12.1,2.6-19.1c1.8-1.8,32.5-29.8,33.1-32.3 c0.1-0.3,0.1-1.5-0.6-2.1c-0.7-0.6-1.7-0.4-2.5-0.2c-1.1,0.2-17.9,11.4-50.6,33.5c-4.8,3.3-9.1,4.9-13,4.8' +'c-4.3-0.1-12.5-2.4-18.7-4.4c-7.5-2.4-13.5-3.7-13-7.9C45.7,123.3,48.7,121.1,54.3,118.8z"/>'
+'</svg>'
+'</div>'
+'<svg style="cursor:pointer; " fill="#fff" height="35px" width="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" '
+     'viewBox="0 0 60 60" xml:space="preserve">'
+'<g>'
+    '<path d="M44.348,12.793H2.652C1.189,12.793,0,13.982,0,15.445v43.762l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.445'
+        'C47,13.982,45.811,12.793,44.348,12.793z M10,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S12.206,35.777,10,35.777z'
+        ' M23,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S25.206,35.777,23,35.777z M36,35.777c-2.206,0-4-1.794-4-4s1.794-4,4-4'
+        's4,1.794,4,4S38.206,35.777,36,35.777z"/>'
+    '<path d="M57.348,0.793H12.652C11.189,0.793,10,1.982,10,3.445v7.348h34.348c2.565,0,4.652,2.087,4.652,4.652v25.332h11V3.445'
+        'C60,1.982,58.811,0.793,57.348,0.793z"/>'
+'</g>'
+'</svg>';
document.body.appendChild(newdiv);

let elementWithIcontelegramm = document.getElementById('chat_telegram');
elementWithIcontelegramm.onclick = function() {
let url = "https://t.me/DomOtel_Tmn_bot";
    //window.location.replace(url);
    //window.location.href = url;
 window.open(url, '_blank').focus();
}

let elementWithIcontelegramm2 = document.getElementById('chat_telegram_cyberpunk');
elementWithIcontelegramm2.onclick = function() {
let url2 = "https://t.me/DomOtelManual_bot";
    //window.location.replace(url);
    //window.location.href = url;
 window.open(url2, '_blank').focus();
}




const timer1 = setInterval(() => { swalScale(newdiv); }, 3000);

setTimeout(function(){ if(timer1){clearInterval(timer1);}  if(timer1){clearInterval(timer1); }  }, 10000);
                   
});


</script>
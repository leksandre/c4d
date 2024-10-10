<!-- add chat reaction for page -->


<style>
@media (min-width: 450px) {
#chatIcons{
scale: 1;
border-radius: 50px;
}
}
</style>



<script type="text/javascript">


async  function swalScale(el) {

   el
   .animate({ opacity: [1, 0], transform: ["scale(1)", "scale(0)"], }, { duration: 1000, iterations: 1, easing: "ease-in" })
   .onfinish = (e) => {

   e.target.effect.target.style.opacity = 0;
   e.target.effect.target.style.transform = 'scale(0)';

   el
   .animate({ opacity: [0, 1], transform: ["scale(0)", "scale(1)"], }, { duration: 1000, iterations: 1, easing: "ease-in" })
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
          let elementWithIcons = document.getElementById('18iconsChat');

        clearInterval(timer1);

        if(elementWithIcons.style.display === 'block'){
        elementWithIcons.style.display = "none";
        }else{
        elementWithIcons.style.display = "block";
        }
     };



newdiv.innerHTML='<div id="18iconsChat" style="display: none; position: absolute;bottom: 60px;right: 0px;width: 65px;height: 65px;" >'
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
+'</svg>'
+'';
document.body.appendChild(newdiv);

let elementWithIcontelegramm = document.getElementById('chat_telegram');
elementWithIcontelegramm.onclick = function() {
let url = "https://t.me/DomOtel_Tmn_bot";
    //window.location.replace(url);
    //window.location.href = url;
 window.open(url, '_blank').focus();
}




const timer1 = setInterval(() => { swalScale(newdiv); }, 3000);
setTimeout(function(){ clearInterval(timer1); }, 30000);
                   
});


</script>

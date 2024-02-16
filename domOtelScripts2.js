<!-- Fix actions -->
<script>

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}


  window.onload = function () {


<!-- go in hell klennik -->
var buttons = document.getElementsByClassName("footer__author-logo");
var buttons = document.getElementsByClassName("footer__author");
Array.from(buttons).forEach((element) => {
if (element.innerHTML) {
    element.remove();
} else {
}
});



var buttons = document.getElementsByClassName("button j-popup-callback");
Array.from(buttons).forEach((element) => {
if (element.innerHTML) {
 if(element.innerHTML = "Заказать звонок"){
			parentDiv = element.parentNode.parentNode;
			//console.log('parentDiv', parentDiv);
			let square1 = parentDiv.querySelectorAll('.flat-block-card__info-value');
			//console.log('square1',square1);
			if(square1.length>0)
			if (square1[0].innerHTML) {
				//console.log('square1[0].innerHTML',square1[0].innerHTML);
				let text1 = square1[0].innerHTML;
				let value1 = parseFloat(text1.replace(",", "."));
				//console.log('value1', value1);
				let value2 = value1-0.01
				let value3 = value1+0.01
				let addstr1 = '?sqr='+ value2.toFixed(2) + '_' + value3.toFixed(2)
				//console.log('addstr1', addstr1);

		
				let unIdButton = makeid(15)
				//var2
				element.parentNode.innerHTML = '<button type="button" class="button j-popup-callback" data-callback="true" data-href="zakazat-zvonok" aria-label="Открыть планировку" data-init="true" id="'+unIdButton+'">Открыть планировку</button>';
				//element.remove();

				//var1
				//let element3 = parentDiv.parentNode.parentNode;//.querySelector('div.flat-block-card, div.j-animation__row-item, div.flat-block-card_theme_two-cards');
				let element3 = document.getElementById(unIdButton);
        		element3.onclick = '';
				element3.onclick = function() {
                    let rect = square1[0].getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                       document.cookie = "YposClick=" + (scrollTop) +  "; path=/"; 

                    window.location.replace('/index.html'+ addstr1); window.location.href = '/index.html'+ addstr1; 
                };



        		// parentDiv.onclick = '';
				// parentDiv.onclick = function() {
				// 	window.location.replace('/index.html'+ addstr1); window.location.href = '/index.html'+ addstr1; 
				// };

			}	
	}
} else {
}
});


var elements = document.querySelectorAll('.grid__text');
for(var i=0; i<elements.length; i++){
if(i % 2 === 0) continue

//let parentDiv1 = elements[i].parentNode;
//parentDiv1.innerHTML += '<div class="grid__text" style="background-image: url(&quot;/images_custom_1/shutterstock_2f.png&quot;);background-repeat: no-repeat;background-position: right center;background-size: contain;height: 461px;position: absolute;right: 135px;width: 692px;"> </div>'

    elements[i].style.backgroundImage = "url('/images_custom_1/shutterstock_2f.png')";
    elements[i]. style.backgroundRepeat = "no-repeat";
    elements[i]. style.backgroundPosition = "bottom right";
    elements[i]. style.backgroundSize = "contain";
}

var elements = document.querySelectorAll('.slider__slides-inner.j-slides.j-animation__slider-row');
if(false)
for(var i=0; i<elements.length; i++){
elements[i].innerHTML += '<div class="grid__text" style="background-image: url(&quot;/images_custom_1/shutterstock_2f.png&quot;);background-repeat: no-//repeat;background-position: right center;background-size: contain;height: 461px;position: absolute;right: 135px;width: 692px;"> </div>'
}

var elementi1 = document.querySelectorAll('.grid')[0];
    elementi1.style.backgroundImage = "url('/images_custom_1/shutterstock_2f.png')";
    elementi1. style.backgroundRepeat = "no-repeat";
    elementi1. style.backgroundPosition = "center right";
    elementi1. style.backgroundSize = "contain";
   }
</script>

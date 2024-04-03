просты скрипты для обеспечения работы


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
  <script>
    (function(c,r,m,f,d,e,v){c[d]=c[d]||{},e=r.createElement(m),v=r.getElementsByTagName(m)[0],e.async=1,e.src=f,v.parentNode.insertBefore(e,v)})
    (window,document,'script','/crm4devSDK.js','crm4dev');
    crm4dev.config = {
      host: 'https://do72.4dev.app',
      baseUrl: '/do72api/hs/restapi_v1',
      objectId: 'bal bla',
      btn: {
        size: 100,
        caption: 'Квартиры в наличии',
        background: '#FF5252',
        color: '#FFFFFF',
        fontSize: 10,
      }
    }
  </script>



  <!-- 1 Fix actions -->
<script>
  window.onload = function () {
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

				//var1
				let element3 = parentDiv.parentNode.parentNode;//.querySelector('div.flat-block-card, div.j-animation__row-item, div.flat-block-card_theme_two-cards');

        			element3.onclick = '';
				element3.onclick = function() {window.location.replace('/index.html'+ addstr1); window.location.href = '/index.html'+ addstr1; };


				//var2
				element.parentNode.innerHTML = '<button type="button" class="button j-popup-callback" data-callback="true" data-href="zakazat-zvonok" aria-label="Открыть планировку" data-init="true">Открыть планировку</button>';
				//element.remove();
        			parentDiv.onclick = '';
				parentDiv.onclick = function() {window.location.replace('/index.html'+ addstr1); window.location.href = '/index.html'+ addstr1; };

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




<!-- 2 onload reaction -->
<script type="text/javascript">
var wasscrolled = false;

function scroll2to(){
    if(wasscrolled){
        return false;
    }
    //console.log('element!2 index')
    let elements = document.getElementsByClassName("flat-block-card__content");
	//console.log('element!2', element)
	if (typeof elements[0] !== 'undefined')
	{
	elements[0].scrollIntoView();
    setTimeout(function(){window.scrollBy(0, 800);}, 2000);
	} else{
        //window.scrollBy(0, 200);
    }
}

function scroll1to(){
    if(wasscrolled){
        return false;
    }
    //console.log('element!1 index')
    let element = document.getElementById("flats");
	//console.log('element!1', element)
	if (typeof element !== 'undefined')
	{
	element.scrollIntoView();
    wasscrolled = true;
    setTimeout(function(){window.scrollBy(0, 370);}, 2000);
	} else{
        //window.scrollBy(0, 200);
    }
    //setTimeout(function(){scroll2to();}, 2000);
}

//console.log('element! 1')
window.addEventListener("load", (event) => {
//console.log('element! ready')
    if (window.location.href.indexOf("/#infrastructure") > -1) {
		setTimeout(function(){scroll1to();}, 1000);
		setTimeout(function(){scroll1to();}, 2000);
		setTimeout(function(){scroll1to();}, 3000);
		setTimeout(function(){scroll1to();}, 4000);
		setTimeout(function(){scroll1to();}, 5000);
		setTimeout(function(){scroll1to();}, 6000);
    }
  });
</script>



<!-- 3 adding link ya gis -->
<script>
window.addEventListener("load", (event) => {

    let aTags4 = document.getElementsByClassName("location-adv__info");
    for (var i = 0; i < aTags4.length; i++) {
	let element = aTags4[ i]
	if (element.innerText == 'Ссылка Яндекс Карты') {//"Ссылка 2Gis"

while (element.firstChild) {
  element.removeChild(element.firstChild);
}

	  let a = document.createElement('a');
	  let linkText = document.createTextNode("Ссылка Яндекс Карты");
    	  a.appendChild(linkText);
    	  a.title = "Ссылка Яндекс Карты";
    	  a.href = "https://yandex.ru/maps/-/CDRCr06d";
a.setAttribute("target", "_blank"); 
    	  element.appendChild(a);		
		

//only 1 time
element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.paddingBottom="0px";
element.parentElement.parentElement.style.marginBottom="0px";

		}



	if (element.innerText == 'Ссылка 2Gis') {

while (element.firstChild) {
  element.removeChild(element.firstChild);
}

	  let a = document.createElement('a');
	  let linkText = document.createTextNode("Ссылка 2Gis");
    	  a.appendChild(linkText);
    	  a.title = "Ссылка 2Gis";
    	  a.href = "https://go.2gis.com/g37pa";
a.setAttribute("target", "_blank"); 
    	  element.appendChild(a);		

		}





	}

  });
</script>

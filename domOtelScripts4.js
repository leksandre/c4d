<!-- adding link ya gis -->
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
element.style.textDecoration="underline";
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
	  element.style.textDecoration="underline";
		}





	}

  });
</script>

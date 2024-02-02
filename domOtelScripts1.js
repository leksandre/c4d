<!-- onload reaction -->
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
    setTimeout(function(){

        var found1 = false;
        var nameEQ = "YposClick";

        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${nameEQ}=`);
        if (parts.length === 2) {
                        var YposClickVar =  parts.pop().split(';').shift();
                        var buttons = document.getElementsByClassName("accordion__title button j-accordion-title");

                        Array.from(buttons).forEach((element) => {
                        if (element.innerHTML) {
                        if(element.innerHTML = "Показать все планировки"){
                            element.click();
                        }}});

                        setTimeout(function(){
                        found = true;
                        window.scrollTo(0, YposClickVar);
                        console.log('found1', YposClickVar)
                        document.cookie = 'YposClickVar=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                        }, 2000);

            } 
        
        
        if ( !found1) window.scrollBy(0, 370);
    
    }, 2000);
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
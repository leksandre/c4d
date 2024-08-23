<!-- add reaction for scroll galary part page -->
<script type="text/javascript">

 var timeoutScrool;
 var mobwrappers = document.getElementsByClassName('flats-block__mobile-wrapper');
 var elementWithPanels;
 for (const mobwrapper of mobwrappers){
elementWithPanels1 = mobwrapper.getElementsByClassName('flats-block__container j-animation__row');
elementWithPanels = elementWithPanels1[0];
}


var c_last = elementWithPanels.lastChild;
var c_third = elementWithPanels.children[2];
var c_second = elementWithPanels.children[1];
var c_first = elementWithPanels.children[0];




async  function scrollTo(el) {
    const elRight = el.offsetLeft + el.offsetWidth;
    const elLeft = el.offsetLeft;

    const elParentRight = el.parentNode.offsetLeft + el.parentNode.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft;

el.style.transition = "all 1s";
el.parentNode.style.transition = "all 1s";

    var steps = 10;
    var delayInMilliseconds = 100; 
    var old = (el.parentNode.scrollLeft);

    if (elRight > elParentRight + el.parentNode.scrollLeft) {
  var new1 = (elRight - elParentRight+100);
  var delta = (new1 - old)/steps;
      el.parentNode.scrollLeft = elRight - elParentRight+100;
    }

    else if (elLeft < elParentLeft + el.parentNode.scrollLeft) {
  var new1 = (elLeft - elParentRight+100);
  var delta = (new1 - old)/steps;
      el.parentNode.scrollLeft = elLeft - elParentLeft+100;
    }


	


  }

async function makeScroll() {
if(c_first.parentNode.scrollLeft<10){
setTimeout(() => {scrollTo(c_second)}, 500);
setTimeout(() => {scrollTo(c_third)}, 1500);
setTimeout(() => {scrollTo(c_second)}, 2500);
setTimeout(() => {scrollTo(c_first)}, 3500);
}
}



var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

if (x<450){
makeScroll();
}

//timeoutScrool = setInterval(() => makeScroll(),7000);

</script>
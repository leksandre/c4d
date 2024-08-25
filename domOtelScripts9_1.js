<!-- add reaction for scroll galary part page -->
<script type="text/javascript">
window.addEventListener("load", (event) => {
 var timeoutScrool;
 var mobwrappers = document.getElementsByClassName('flats-block__mobile-wrapper');
 var elementWithPanels;
 for (const mobwrapper of mobwrappers){
elementWithPanels1 = mobwrapper.getElementsByClassName('flats-block__container j-animation__row');
elementWithPanels = elementWithPanels1[0];
}




async  function hideNow(el,parent) {
                        el.style.marginRight="12px";
                        const timer1 = setInterval(() => { let x1 = el.style.marginRight;
                                                   let x2 = parseInt(x1, 10);
                                                   el.style.marginRight=""+(x2-3)+"px" }, 10);
                        
                        el
                        .animate({ opacity: [1, 0], transform: ["scale(1)", "scale(0)"], }, { duration: 1000, iterations: 1, easing: "ease-in" })
                        .onfinish = (e) => {
                        parent.appendChild(el);
                        e.target.effect.target.style.opacity = 1;
                        e.target.effect.target.style.transform = 'scale(1)';
                        clearInterval(timer1);
                        el.style.marginRight="12px";
                        };
                        
                        }


async  function scrollTo(el) {

    var c_last = el.lastChild;
    var c_third = el.children[2];
    var c_second = el.children[1];
    var c_first = el.children[0];
    hideNow(c_first,el);

  }

async function makeScroll() {
if(elementWithPanels.scrollLeft<10){
                        scrollTo(elementWithPanels);
}
                        }


var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

if (x<670){
//makeScroll();
}
if(elementWithPanels)
timeoutScrool = setInterval(() => makeScroll(),4000);
                        
  });
</script>

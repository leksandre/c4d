<!-- catch utm marks -->
<script type="text/javascript" >
function setCookieUTM(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
        setCookieUTM('get_utm_mark_'+tmparr[0],tmparr[1],365)
    }
    return params;
}


function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

//console.log('utm_marks0 - ');
var params = getSearchParameters();
setCookieUTM('get_utm_mark_source_my',document.referrer,365)
//console.log('utm_marks - ',params);

</script>



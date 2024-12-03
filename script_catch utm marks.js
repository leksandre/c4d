<!-- catch utm marks -->
<script type="text/javascript" >

var forValEvents = {};

function createEventTenant22(forVal) {
        
    // console.log('createEventTenant22--',forVal);
    // console.log('createEventTenant22--', JSON.stringify(forVal));

        var epxGlob = ''
        let objId = 27
        let tk = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkb21vdGVsX3N0YXRzIiwibmJmIjoxNzE4MzYxODY2LCJleHAiOjEwMTcxMDc4MTA2NiwidWlkIjoiYmQyYWZjYTEtYmZmNi00NWM3LTlhNTEtYTQ2ZWNlMjBjNGZmIiwic3ViIjoid2lkZ2V0cyIsIm9ianV1aWQiOiJkODQ2NmM0Yi0wYTk3LTQzM2QtOTk4Yy02NmFkZjIwNzI1NGYiLCJ1c2VydXVpZCI6IiJ9.wGgtRB-6kIAL4T1sSyYDN94YUIYyIsMs7iAIq1X9Jac'
        
        let details = {
            'ApplicationId': 3,
            'ObjectId': objId,
            'StatusId': 5,
            'ActionName': 'вход на сайт',
            'Value': JSON.stringify(forVal),
        }
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        fetch("https://domotel_stats-admin.mobsted.ru/api/v8/events", {
            method: "POST",
            body: formBody,
            headers: {
                // 'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'text/plain;charset=UTF-8',
                'Content-Type': 'application/x-www-form-urlencoded',
                "authorization": "Bearer " + tk
            }
        }).then((responseNew) => responseNew.json())
            .then((resJson) => {

                //console.log('c event json - ',resJson)

            });

    }

function setCookieUTM22(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    forValEvents[name]=(value);
}

function transformToAssocArray22( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
        setCookieUTM22('get_utm_mark_'+tmparr[0],tmparr[1],365)
    }
    return params;
}


function getSearchParameters22() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray22(prmstr) : {};
}

//console.log('utm_marks0 - ');
var params = getSearchParameters22();
setCookieUTM22('get_utm_mark_source_my',document.referrer,365)
//console.log('utm_marks - ',params);

    setTimeout(function () {
        let hasValue = false;
        for (var key in forValEvents) {
            if ((forValEvents[key]).length > 0) {
                hasValue = true;
            }
        }
        if(hasValue)
        createEventTenant22(forValEvents);
    }, 350);


</script>



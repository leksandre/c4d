<!-- on zvonok reaction -->
<script type="text/javascript">
    function createEventTenant(phone,name,data) {

    let objId = 18
    let tk = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkb21vdGVsX3N0YXRzIiwibmJmIjoxNzE4MzYxODY2LCJleHAiOjEwMTcxMDc4MTA2NiwidWlkIjoiYmQyYWZjYTEtYmZmNi00NWM3LTlhNTEtYTQ2ZWNlMjBjNGZmIiwic3ViIjoid2lkZ2V0cyIsIm9ianV1aWQiOiJkODQ2NmM0Yi0wYTk3LTQzM2QtOTk4Yy02NmFkZjIwNzI1NGYiLCJ1c2VydXVpZCI6IiJ9.wGgtRB-6kIAL4T1sSyYDN94YUIYyIsMs7iAIq1X9Jac'
    let forValEvents = {phone,name,data}


    let details = {
    'ApplicationId':2,
    'ObjectId':objId,
    'StatusId':3,
    'ActionName':'сообщение с сайта',
    'Value':JSON.stringify(forValEvents),
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
    "authorization": "Bearer "+tk
}
})   .then((responseNew) => responseNew.json())
    .then((resJson) => {

    //console.log('c event json - ',resJson)

});

}


    var timer1 = setInterval(function(){

    var forms = document.getElementsByClassName("form__form");
    Array.from(forms).forEach((element) => {
    var buttons = element.getElementsByClassName("button button_width_block");
    Array.from(buttons).forEach((element1) => {
    if (element1.innerText=='Заказать звонок') {

    clearInterval(timer1);

    element1.addEventListener("click", (event) => {

    var name1 = ''
    var phone1 = ''

    let names1 = document.getElementsByName('zakazat-zvonok[field2]')
    let phones1 = document.getElementsByName('zakazat-zvonok[field1]')

    Array.from(names1).forEach((name1elem) => {
    name1 = name1elem.value;
});
    Array.from(phones1).forEach((phone1elem) => {
    phone1 = phone1elem.value;
});

    if (name1.length==0)console.log('empty name')
    if (phone1.length==0)console.log('empty phone')

    if (name1.length==0)return
    if (phone1.length==0)return

    var dataforsend = {
    url: window.location.href
}

    let utmsMarks = document.cookie.split(';').filter(function (c) {
    return c.trim().indexOf('get_utm_mark_') === 0;
}).map(function (c) {
    return c.trim();
});

    var hasSource = false;
    var source_my = '';

    for (let utmMark of utmsMarks) {
    let arrUtm = utmMark.split('=')
    if (arrUtm.length == 2) {

    if (arrUtm[0].indexOf('get_utm_mark_') == -1)
    continue

    let nameUtm = arrUtm[0].replace('get_utm_mark_', '')
    if (nameUtm.toLowerCase() == 'source_my') {
    source_my = arrUtm[1]
    continue
}

    if ((nameUtm.toLowerCase() == 'source') && (arrUtm[1].length > 0)) {
    hasSource = true
}

    dataforsend[nameUtm] = arrUtm[1]
}
}

    if(hasSource){}else{
    dataforsend['source']=source_my
}

    let res1 = fetch("https://do72.4dev.app/do72api/hs/extint/send", {
    method: "POST",
    body: JSON.stringify({
    requestType: "call",
    typeform: "01",
    dateTime: "112345678",
    contacts: {
    phone: phone1,
    name: name1
},
    data: dataforsend

}),
    headers: {
    "Content-type": "text/plain; charset=UTF-8"
}
});

    console.log(res1)
    createEventTenant(phone1,name1,JSON.stringify(dataforsend))
});

} else {
}
});
});









}, 1000);
</script>
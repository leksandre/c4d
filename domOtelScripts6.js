<!-- on zvonok reaction -->
<script src="/canvas2image.js"></script>
<script type="text/javascript">
    function createEventTenant(phone, name, data) {
        var epxGlob = ''
        let objId = 18
        let tk = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkb21vdGVsX3N0YXRzIiwibmJmIjoxNzE4MzYxODY2LCJleHAiOjEwMTcxMDc4MTA2NiwidWlkIjoiYmQyYWZjYTEtYmZmNi00NWM3LTlhNTEtYTQ2ZWNlMjBjNGZmIiwic3ViIjoid2lkZ2V0cyIsIm9ianV1aWQiOiJkODQ2NmM0Yi0wYTk3LTQzM2QtOTk4Yy02NmFkZjIwNzI1NGYiLCJ1c2VydXVpZCI6IiJ9.wGgtRB-6kIAL4T1sSyYDN94YUIYyIsMs7iAIq1X9Jac'
        let forValEvents = { phone, name, data }


        let details = {
            'ApplicationId': 2,
            'ObjectId': objId,
            'StatusId': 3,
            'ActionName': 'сообщение с сайта',
            'Value': JSON.stringify(forValEvents),
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


    function createExpression() {

        let arr = ["+", "-"];
        let sig = arr[(Math.floor(Math.random() * arr.length))];
        let arr0 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let num1 = arr0[(Math.floor(Math.random() * arr0.length))];
        let num2 = arr0[(Math.floor(Math.random() * arr0.length))];
        return ''+num1+sig+num2+'=';
    }


    var globalCreatedCaptcha = 0;
    //data{"source":"beeline","comment":""}
    function createCatcha() {

        var forms = document.getElementsByClassName("form__form");
        Array.from(forms).forEach((element) => {
            var buttons = element.getElementsByClassName("button button_width_block");
            Array.from(buttons).forEach((element1) => {
                if (element1.innerText == 'Заказать звонок') {

                    if (globalCreatedCaptcha == 99) return

                    var div = document.createElement("div");
                    div.style.width = "200px";
                    div.style.height = "200px";
                    // div.style.background = "red"; border:1px solid #d3d3d3;
                    div.style.color = "var(--color-brand-text)";
                    div.id = "containerCanvas"
                    element1.parentElement.insertBefore(div, element1.parentElement.childNodes[0]);

                    let j = document.getElementById("containerCanvas");
                    j.innerHTML = '<span style="font-size: 14px;line-height: 1.5;font-weight: 400;color: var(--color-brand-text);">ответьте на вопрос:</span><canvas id="myCanvas" width="100" height="100" style="paddig:20px"></canvas><input type="text" class="input__input" name="code[field67]" id="id-code" aria-label="ответ" placeholder="ответ" data-validate-required="true" data-validate-name="code" data-validate-required-ms="решите пример" data-init="true">';

                    let c = document.getElementById("myCanvas");
                    let ctx = c.getContext("2d");
                    ctx.font = "20px Arial";
                    epxGlob = createExpression();
                    ctx.fillText(epxGlob, 20, 50);
                    globalCreatedCaptcha = 99;

                }
            });
        });

    }


    setTimeout(function () {
        // let element3 = document.querySelector('[data-href="zakazat-zvonok"]');
        let element3 = document.getElementsByClassName("button-circle header__mobile-phone j-popup-callback");
        if (typeof element3 !== undefined)
            if (typeof element3 !== null)
                Array.from(element3).forEach((element31) => {
                    
                    try {
                        element31.addEventListener("click", (event) => {
                            startTimerCatchFormCallingMe();
                            // console.log('-------------click button-circle')
                            globalCreatedCaptcha = 0;
                            setTimeout(function () {
                                createCatcha();
                            }, 400);
                        });
                    } catch (e) {
                        console.log('e45', e)
                    }
                });
        element3 = document.getElementsByClassName("button header__callback-button j-popup-callback");
        if (typeof element3 !== undefined)
            if (typeof element3 !== null)
                Array.from(element3).forEach((element31) => {
                    
                    try {
                        element31.addEventListener("click", (event) => {
                            startTimerCatchFormCallingMe();
                            // console.log('-------------button header')
                            globalCreatedCaptcha = 0;
                            setTimeout(function () {
                                createCatcha();
                            }, 400);
                        });
                    } catch (e) {
                        console.log('e45', e)
                    }
                });
    }, 1500);




    function startTimerCatchFormCallingMe() {


        var timer1 = setInterval(function () {


            var forms = document.getElementsByClassName("form__form");
            Array.from(forms).forEach((element) => {
                var buttons = element.getElementsByClassName("button button_width_block");
                Array.from(buttons).forEach((element1) => {
                    if (element1.innerText == 'Заказать звонок') {

                        clearInterval(timer1);
                        createCatcha();
                        element1.addEventListener("click", (event) => {

                            var name1 = ''
                            var phone1 = ''
                            var code1 = ''

                            let names1 = document.getElementsByName('zakazat-zvonok[field2]')
                            let phones1 = document.getElementsByName('zakazat-zvonok[field1]')
                            let codes1 = document.getElementsByName('code[field67]')

                            Array.from(codes1).forEach((code1elem) => {
                                code1 = code1elem.value;
                            });
                            Array.from(names1).forEach((name1elem) => {
                                name1 = name1elem.value;
                            });
                            Array.from(phones1).forEach((phone1elem) => {
                                phone1 = phone1elem.value;
                            });

                            if (name1.length == 0) console.log('empty name')
                            if (phone1.length == 0) console.log('empty phone')
                            if (code1.length == 0) console.log('empty code')

                            if (name1.length == 0) return
                            if (phone1.length == 0) return
                            if (code1.length == 0) return

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

                            if (hasSource) { } else {
                                dataforsend['source'] = source_my
                            }
                            
                            dataforsend['comment'] = " " + epxGlob + code1;

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
                            createEventTenant(phone1, name1, JSON.stringify(dataforsend))
                        });

                    } else {
                    }
                });
            });


        }, 1000);

    }


    startTimerCatchFormCallingMe();

</script>
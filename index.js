//2. На HTML-сторінці розміщено абзац (<p>). Використовуючи таймер,
// реалізувати появу прізвища та імені студента в заголовку документа (в
// tittle) через 4 секунди після завантаження сторінки. При натисканні на
// кнопку заголовок вікна має очиститись від напису (стати порожнім).

let name='Katya Hazhula'
let button = document.getElementById('changeTitle');


setTimeout(()=>{
    document.title=name;
},4000)

button.onclick=(ev)=>{
    document.title="";
    ev.preventDefault();
}

//10.Використовуючи таймер реалізувати, щоб через 3 секунди після
// завантаження сторінки відкривалось нове вікно (window.opGn) розміром
// 300 на 600 з написом «Нове вікно». Через 3 секунди після відкривання
// нове вікно має автоматично закритись.

let buttonPushMe = document.getElementById('pushMe');
let time = document.getElementById('time');

setTimeout(()=>{
    let newWin = window.open("about:blank", "hello", "width=300,height=600");
    newWin.document.write("New window");
    setTimeout(()=>{
        newWin.close();
    },3000)
},3000)

//17. На сторінці розміщено абзац та кнопка. У абзаці закладено початкове
// значення “hh:mm:ss”, який постійно 0”. При натисненні кнопки запускається таймер, який збільшує
// значення на 1.
//22. На сторінці розміщено абзац та кнопка. В абзаці за дано певне число,
// наприклад 10. При натиснені, створюється таймер, який поступово
// зменшує це число, з періодом раз на секунду. При досягненні 0, на екран
// виводиться повідомлення що “hh:mm:ss”, який постійно час вийшов”, зупиняється таймер і
// встановлюється повторно в абзац число 10, наприклад.

let time2=document.getElementById('time2');
let time2_copy=time2.textContent;
let dec = document.getElementById('dec');

buttonPushMe.onclick=()=>{
    buttonPushMe.disabled = true;
    timerInc(1);
}

dec.onclick=()=>{
    timerDec(time2.textContent-1);
}


function timerInc(seconds) {
    let remaningTime = seconds;
    setTimeout(function() {
        time.innerText=remaningTime;
        timerInc(remaningTime + 1);
    }, 1000);
}

function timerDec(seconds) {
    let remaningTime = seconds;
    setTimeout(function() {
        time2.innerText=remaningTime;
        if(remaningTime>0){
            timerDec(remaningTime - 1);
        }else{
            alert('Час вийшов');
            time2.innerText=time2_copy;
        }
    }, 1000);
}
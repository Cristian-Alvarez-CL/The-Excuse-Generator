let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying']


function texto_aleatorio(palabra){
    aleat = Math.random() * (palabra.length);
    aleat = Math.floor(aleat);
    return palabra[aleat];
 }

 let excuse = ` ${texto_aleatorio(who)} ${texto_aleatorio(action)} ${texto_aleatorio(what)} ${texto_aleatorio(when)}`;
 //console.log (excuse);

document.querySelector("#excuse").innerHTML = excuse;
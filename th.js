"use strict"
const objs=[...document.getElementsByTagName("div")]
console.log(objs)

let name="Matheus";
var idade=19;
console.log("O meu nome é " + name + " e tenho " + idade + " anos.");

function teste() {
    let nome="Thiago";
    if(true){
        console.log("teste dentro do if: " + nome);
    }
    console.log("teste fora do if e dentro do function: " + nome);
}
teste()

let n1=0,n2=0,rs=0;
n1=20
n2=80
rs=n1+n2
console.log("O resultado é " + rs);
console.log(n2-n1);
n1+=5 //num1++
n2*=2
console.log(n1)
console.log(n2)
let nome=prompt("Digite o seu nome completo");
console.log(nome)

if(navigator.userAgent.match(/android/i)
    || navigator.userAgent.match(/iphone|ipad/i)
    || navigator.userAgent.match(/Opera Mini/i)
    || navigator.userAgent.match(/Windows Phone/i)
   ){
       console.log("Celular")
   }else{
       console.log("PC")
   }
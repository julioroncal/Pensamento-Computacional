//pergunta 01
function soma(a=1, b=3) {return a+b;}
console.log(soma());
console.log(soma(3));
console.log(soma(1,2));


//pergunta 03
//3 - Dado o array: let numeros= [10, 8, 7, 99, 0, 1, 6]. Qual comando devemos executar para que a saída seja: [ 99, 10, 8, 7, 6, 1, 0] ? let numeros= [10, 8, 7, 99, 0, 1, 6]
var numeros = [10, 8, 7, 99, 0,1,6];
numeros.sort(function(a, b) {
  return b - a;
});
console.log(numeros);

//pergunta 04
var z=0;
for (var i=20; i<50; i+=10){ z+=i;}
console.log(z);

//pergunta 07
let  valor=5;
let fatorial=1;
for(let i=valor; i>1;i--){fatorial*=i;}
console.log("fatorial="+fatorial);
//pergunta 10
let frutasamarelas= ['aa','bb','cc'];
let [x1,x2,x3]= frutasamarelas;
console.log(x1);
console.log(frutasamarelas);
//pergunta 13
let x=5;
let y=  x++  + ++x;
console.log("y=  "+y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*=x+1;
console.log("x= "+x);
console.log("y="+y);
//pergunta 18
function soletrar(texto){
    console.log(texto.replace('-','').toLocaleUpperCase().split("").join("-"));
}
soletrar("digital-house");
soletrar("ctd");

for(var i=0; i<50; i+=10){console.log(i);}console.log(i);

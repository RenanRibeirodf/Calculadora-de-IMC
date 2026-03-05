function  Clicar(){

let nome = document.getElementById('usuario').value;
let tam = Number(document.getElementById('tamanho').value)
let peso= Number(document.getElementById('opeso').value)
const res= document.getElementById('mostrar')


var IMC = peso/(tam **2);
let body = document.body
let Novo =document.querySelector('.calculador')

if (IMC >= 17 && IMC <= 18.4){
    res.innerHTML=`${nome} seu imc é ${IMC.toFixed(2)}. Magreza leve`
    body.style.background='#C8E6C9'
    Novo.style.backgroundColor='#EDF7BE'
    
}

else if (IMC >=16 && IMC <= 16.9){
    res.innerHTML=`${nome} seu imc é ${IMC.toFixed(2)}. Magreza Moderada`
    body.style.backgroundColor='#089944'
    
}

else if ( IMC <= 15){
    res.innerHTML=`${nome} seu imc é ${IMC.toFixed(2)}. Magreza Grave`
    body.style.backgroundColor='#e9565b'
    Novo.style.backgroundColor='#A4CF4A'
    res.style.backgroundColor="#A4CF4A"
   
    

   
}

else if (IMC >= 25 && IMC <= 29.9){

    res.innerHTML=`${nome} seu imc é ${IMC.toFixed(2)}.Sobrepeso`
    body.style.backgroundColor='#faa153'
}

else if ( IMC >= 30 && IMC <= 34.9){

    res.innerHTML=`${nome} seu imc é ${IMC.toFixed(2)}. Obesidade 1`
    body.style.backgroundColor='#e95035'
}

else if (IMC >= 35 && IMC <=39.9){

    res.innerHTML=`${nome} seu imc é ${IMC.toFixed(2)}. Obesidade Severa`
    body.style.backgroundColor='#df3238'
}

else if ( IMC >= 40){

    res.innerHTML=`${nome} seu imc é ${IMC.toFixed(2)}. Obesidade Mórbida`
    body.style.backgroundColor='#f80617'
}




}
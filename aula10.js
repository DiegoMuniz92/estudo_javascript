/* spread - concatenação de array
const jogador1={nome:"diego",energia:100,vidas:3,magia:80};
const jogador2={nome:"carlo",energia:120,vidas:5,velocidade:150};
const jogador3={...jogador1,...jogador2}; // o spread ira concatenar os arrays onde as propriedade iguais prevalecerão os utlimos valores e incluira todas as propriedades diferentes.
console.log(jogador3);

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
let valores=[1,5,4,10];
console.log(soma(...valores));*/

const objs1=document.getElementsByTagName("div");
const objs2=[...document.getElementsByTagName("div")]; // Tramsformando collection HTML em array

objs2.forEach(element => {
    element.innerHTML="Alterado via script JS"
})

console.log(objs1);
console.log(objs2);
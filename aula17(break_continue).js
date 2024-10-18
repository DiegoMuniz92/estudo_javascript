let n = 0;
let max = 20;
let pares = 0;

/*while(n<max) {
    console.log("CFB cursos . " + n)
    if(n>10){
        break
    }
    n++
}*/

for(let i = n; i < max; i++){
    if(i%2!=0){
        continue
        
    }
    pares++
}
console.log("quantidade de numeros pares: " + pares);
console.log("Fim do programa");

/*

*/
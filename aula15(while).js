// loop while - loop utilizado quando não se sabe quantas vezes sera necessário executar.

// descobrir o fatorial de um numero que é igual a 5! = 5*4*3*2*1
let n = 5;
let fat = 1;

while(n>=1) {
    fat*=n
    n--
}
console.log(fat);
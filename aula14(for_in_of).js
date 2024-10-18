let casa = {
    area: 1000,
    altura: 7,
    andares: 2,
    [Symbol.iterator]: function* (){
        yield this.area;
        yield this.altura;
        yield this.andares;
      }
}

// for in usado para pegar as propriedades
for(n in casa) {
    console.log(n)
}

// for of usado para pegar os valores
for(n of casa) {
    console.log(n)
}
// função com parametro REST ->

function soma(...valores){
    let tam = valores.length
    let res = 0
    for(let i = 0; i < tam; i++){
        res += valores[i]
    }
    return res
}

console.log(soma(1,2,3,4,5,6,7,8,9,0))

/*
    mesma função utilizando FOR OF

    function soma(...valores){
    let res = 0
    for(let v of valores){
        res += v
    }
    return res
}
*/
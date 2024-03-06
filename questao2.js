function fibonacci(numInformado){
    if(isNaN(numInformado))
        throw new Error('Valor informado não é número!')

    let anteiror = 0, atual = 1, proximo
    
    do{
        proximo = anteiror + atual
        anteiror = atual
        atual = proximo
    }while(numInformado > proximo)
    
    if(atual === numInformado || numInformado === 0 || numInformado === 1)
        console.log('Pertence a sequência de Fibonacci!')
    else
        console.log('Não Pertence a sequência de Fibonacci!')
}

try {
    fibonacci("a")
} catch (error) {
    console.log(`Ocorreu uma exceção: \n${error}`)
}

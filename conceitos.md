##  variáveis

    let, var, const

    let exemplo = "é um exemplo"

    (variáveis trabalham com ESCOPO => {})



## objetos

    Todo objeto possui uma PROPRIEDADE e um VALOR. Serve para ESTRUTURAR melhor algum dado mais complexo

    let NomeObjeto = {
        value: 'exemplo'
        checked: true/ false
    }

    (Não precisa escrever um objeto exatamente desse jeito, pode ser diferente)


## array

    conheço melhor como LISTAS ou VETOR

    let exemplo = []


    Pode-se criar uma LISTA/VETOR de vários OBJETOS

meta1 = {
    value: beber 3 litros de água no dia"
    checked: etc
    }

    let metas = [
        
        meta1,  //Objeto criado acima e é o INDICE [0] da LISTA

        {
            value: "caminhar 15 min por dia"
            checked: etc
        }

//ESCOPO dentro da LISTA que é entendido como INDICE [1]

    ]


métodos de array: push, find, forEach, filter, map : HOF (high order functions)


##  arrow function

    const CriarMeta = () => {}
    
    (pegando uma arrow function e atribuindo a uma variável)

 ## function 

    function CriarMeta() {}

    (apenas criando uma função)   


## Módulos 

    importação de módulos (require, commonJS)

    utilizei a biblioteca "inquirer" para criar prompts interativos    

## programação assíncrona e promises:

    uso de funções assíncrona (async/await)

    // await => o programa vai "esperar" uma resposta do usuário que vai ser atribuida ao "select" que eu criei
    // async => assíncrona
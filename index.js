const { select, input, checkbox } = require('@inquirer/prompts')

let mensagem = "Bem vindo ao App de Metas";
let meta = { // "estrutura" da meta no meu programa
    value: 'meta exemplo',
    checked: false,
}


let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta: "})

    if(meta.length == 0){
        mensagem = "A meta não pode ser vazia."
        return
    }    

    metas.push({value: meta, checked: false})


    mensagem = "Meta cadastrada com sucesso!"
}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "use as Setas para mudar de meta, o Espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false, //tira as instruções em inglês no terminal
    })

    // sistema para ler cada meta e ver se o que o usuário digitou
    // condiz com o que ele está lendo e poder "marcar" (transformar true).
    // caso contrario deixará falso mesmo
    metas.forEach((m) => {
        m.checked = false //deixa todas as metas "falsas" para corrigir o problema
                          //de marcar e depois desmarcar, mas ele não "atualizar" de marcado para desmarcado.
    })

    if(respostas.length == 0){
        mensagem = "Nenhuma meta selecionada. "
        return
    }

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true

    })

    mensagem = 'Meta(s) marcadas como concluída(s)'
}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => { //"filter filtra para colocar em "realizadas"
        return meta.checked
    })

    if(realizadas.length == 0){
        mensagem = 'Não existem metas realizadas!'
        return
    }

    await select({
        message:"Metas realizadas",
        choices: [...realizadas]

    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

    if(abertas.length == 0){
        mensagem = "Não existem metas em aberto"
        return
    }

    await select({
        message:"Metas em aberto" + abertas.length,
        choices: [...abertas]
    })
}

const deletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return {value: meta.value, checked: false} //tratamento para quando entrar no campo "excluir"
                                                   //as opções sempre estaram desmarcadas(evitar excluir indesejadamente)
    })
    const itensADeletar = await checkbox({
        message: "Selecione o item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false, //tira as instruções em inglês no terminal
    })

    if(itensADeletar.length == 0){
        mensagem = "Nenhum item para deletar!"
        return
    }

    itensADeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })

    mensagem = "Meta(s) deletada(s) com sucesso!"
}

const mostrarMensagem = () => { //função para limpar console e exibir mensagens
    console.clear();

    if(mensagem != ""){ //vê se existe
        console.log(mensagem) //exibe mensagem retirada de dentro das funções
        console.log("") //quebra de linha
        mensagem = ""
    }
}

const start = async () => {
    
    while(true){
        mostrarMensagem()

        const opcao = await select({
            message: "Menu >",
            choices: [

                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"

                },
                {
                    name: "Metas realizadas",
                    value: "realizadas"

                },
                {
                    name: "Metas em aberto",
                    value: "abertas"

                },
                {
                    name: "Deletar metas",
                    value: "deletar"

                },
                {
                    name: "Sair",
                    value: "sair"

                }
            ]
        })


        switch(opcao) {

            case "cadastrar":
                await cadastrarMeta()
                break

            case "listar":
                await listarMetas()
                break
            
            case "realizadas":
                await metasRealizadas()
                break
            
            case "abertas":
                await metasAbertas()
                break
            
            case "deletar":
                await deletarMetas()
                break

            case "sair":
                console.log("Encerrando programa...")
                return


        }
    }
}

start()
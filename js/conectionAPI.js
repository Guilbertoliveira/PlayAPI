

listaVideosDaAPI()



async function listaVideosDaAPI(){
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaVideo(chegoutitulo, chegoudescricao, chegouurl, chegouimagem){
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: { //content-type especificar que tipo de arquivo ta sendo enviado ou recebendo
            "Content-type": "application/json"
        }, 
        body: JSON.stringify({ // corpo da requisicao, enviando um objeto porém como é requisição precisa ser string
            titulo: chegoutitulo, //dados que queremos cadastrar na requisicao
            descricao: `${chegoudescricao} mil visualizações`,
            url: chegouurl,
            imagem: chegouimagem
        })
    });

}


async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}



export const funçõesexportadas = {
    listaVideosDaAPI,
    criaVideo,
    buscaVideo
}





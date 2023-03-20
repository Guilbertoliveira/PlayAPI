

listaVideos()


async function listaVideos(){
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);

    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: { //content-type especificar que tipo de arquivo ta sendo enviado ou recebendo
            "content-type": "aplicacation/json"
        }, 
        body: JSON.stringify({ // corpo da requisicao, enviando um objeto porém como é requisição precisa ser string
            titulo: titulo, //dados que queremos cadastrar na requisicao
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo
}





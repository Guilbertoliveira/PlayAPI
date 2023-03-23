import { funçõesexportadas } from "./conectionAPI.js"; //exportando diversas funções que estão dentro da variavel
//import constroiCard from "./mostrarVideos.js"; //exportando somente uma função
import { funcaoMostrar } from "./mostrarVideos.js";

const listacampo = document.querySelector("[data-lista]");
const campobusca = document.getElementById('pesquisar');
let nome = [];

campobusca.addEventListener('keydown', (target)=>{
    nome.push(target.key);
    console.log(target.key);

    chamandoPesquisa()
    

})



const botaozinho = document.getElementsByClassName('pesquisar__botao')[0];
botaozinho.addEventListener('click', ()=> {
    chamandoPesquisa()
})


async function chamandoPesquisa(){
    
try{
    const retornoPesquisa = await funçõesexportadas.buscaVideo(campobusca.value);
    console.table(retornoPesquisa);
    listacampo.innerHTML = "";
    retornoPesquisa.forEach((element)=>{
        funcaoMostrar.constroiCard(element.url, element.titulo, element.imagem, element.descricao);
    })

    if(retornoPesquisa.length == 0){
        listacampo.innerHTML = `<h2 class="mensagem__titulo"> Não existem vídeos com esse termo</h2>`
    }

}

  
catch {
    alert('não foi possivel buscar vídeo');
}
}
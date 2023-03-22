import { funçõesexportadas } from "./conectionAPI.js"; //exportando diversas funções que estão dentro da variavel
//import constroiCard from "./mostrarVideos.js"; //exportando somente uma função
import { funcaoMostrar } from "./mostrarVideos.js";

const listacampo = document.querySelector("[data-lista]");
const campobusca = document.getElementById('pesquisar');
let nome = [];

campobusca.addEventListener('keypress', (target)=>{
    nome.push(target.key);
    let teste = nome.join("");
    chamandoPesquisa()
    

})

const botaozinho = document.getElementsByClassName('pesquisar__botao')[0];
botaozinho.addEventListener('click', ()=> {
    chamandoPesquisa()
})


async function chamandoPesquisa(){
    

    const retornoPesquisa = await funçõesexportadas.buscaVideo(campobusca.value);
    console.table(retornoPesquisa);
    listacampo.innerHTML = "";
    retornoPesquisa.forEach((element)=>{
        funcaoMostrar.constroiCard(element.url, element.titulo, element.imagem, element.descricao);
    })
}
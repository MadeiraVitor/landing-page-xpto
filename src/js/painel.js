const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderOuMostrarImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar');
    });

    imagensPainel[imagemAtual].classList.add('mostrar');
}

function opacidadeDasSetas(){
    if(imagemAtual === 0){
        setaVoltar.classList.add('opacidade')
    }else{
        setaVoltar.classList.remove('opacidade')
    };

    if(imagemAtual === imagensPainel.length - 1){
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove('opacidade')
    };
}

setaAvancar.addEventListener('click', function(){
    
    if(imagemAtual === imagensPainel.length - 1){
        return;
    };
    
    imagemAtual ++;

    esconderOuMostrarImagens();
    opacidadeDasSetas();
});

setaVoltar.addEventListener('click', function(){

    if(imagemAtual === 0){
        return;
    }

    imagemAtual --;

    esconderOuMostrarImagens();
    opacidadeDasSetas();
});
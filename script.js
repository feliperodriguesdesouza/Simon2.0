// criar a variavel com as cores dos botões..
var corBotoes = ["vermelho","azul","verde","amarelo"];

var sequenciajogoComputador = [];

var sequenciajogoUsuario = [];

var inicio = false;

var nivel = 0;



$(document).keypress(function () {
    if (!inicio){
        $("#titulo").text("Nível"+nivel);
        nextSequence();
        inicio = true;
    }

});



$("#botao").click(function (){
    var corEscolhidaUsuario = $(this).attr("id");
    sequenciajogoUsuario.push(corEscolhidaUsuario);
    playSound(corEscolhidaUsuario);
    AnimationPress(corEscolhidaUsuario);
    checkAnswer(sequenciajogoUsuario.length-1);

});



function checkAnswer(currenteLevel){
    if(sequenciajogoComputador[currenteLevel] === sequenciajogoUsuario[currenteLevel]){
        if(sequenciajogoUsuario === sequenciajogoComputador.length){
            setTimeout(function (){
                nextSequence();
            },1000);
        }
    }else{

        playSound("wrong");
        $("body").addClass("game-ovar");
        $("titulo").text("Fim do jogo para Beta! Pressione qualquer tecla para reiniciar.");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        starOver();
    }
}


function nextSequence(){
    sequenciajogoUsuario = [];
    nivel++;
    $("tiulo").text("Nível" + nivel);
    var numeroAleatoria = Math.floor(Math.random() * 4);
    var corAleatoriaSorteada = corBotoes[nuemroAleatorio];
    sequenciajogoComputador.push(corAleatoriaSorteada);
    $("#" + corAleatoriaSorteada)
    .fadein(100)
    .fadeOut(100)
    .fadeIn(100);

    playSound(corAleatoriaSorteada)
}

function AnimationPress(currentColor){
    $("#" + currwntColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function starOver(){
    nivel = 0;
    sequenciajogoComputador =[];
    inicio = false;
}
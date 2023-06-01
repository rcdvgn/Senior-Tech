const input = document.getElementById("search");
function searchh(){
    window.location = `index.html?s=${input.value}`;
}

var respostas = [undefined, undefined, undefined, undefined, undefined];

var id = parseInt(location.search.substring(2)) - 1;

const quiz = data.quizzes[id];

const alt_dc = document.getElementsByClassName("alt_dc");
const pergunta_dc = document.getElementById("pergunta_dc");
const quiz_title = document.getElementById("quiz_title");
const progresso = document.getElementById("progresso");
const nexxt = document.getElementById("next");
const prevvious = document.getElementById("previous");

const alts = document.getElementById("alternativas");
const alt = document.getElementsByClassName("alt");


var title = quiz.title;
document.title = title;
var questoes = quiz.questions;

quiz_title.innerText = title;

var q;
q = 0;
var i;
function show_q(n){
    if (q == 0){
        prevvious.classList.add("disabled");
    }
    else{
        prevvious.classList.remove("disabled");
    }


    progresso.innerText = `${n+1}/5`;
    pergunta_dc.innerText = questoes[n].question;
    for (i = 0; i < 4; i++){
        alt[i].classList.remove("selected");
        if (respostas[q] != undefined){
            if (respostas[q] == i){
                alt[i].classList.add("selected");
            }
        }
        
        nexxt.innerText = "Proxima Questao";
        alt_dc[i].innerText = questoes[n].options[i];
    }

    if (q == 4){
        nexxt.innerText = "Concluir";
    }
}



function previous(){
    q--;
    show_q(q);
}
function next(){
    if (q == 4){
        if (respostas.includes(undefined)){
            alert("Quiz Incompleto");
        }
        else{
            sessionStorage.setItem("respostas", JSON.stringify(respostas));
            window.location.href = `resultado.html?${location.search.substring(1)}`;
            
        }
    }
    else{
        q++;
        show_q(q);
    }
    
}


function check(x){
    alts.dataset.check = x;
    for (i=0; i< 4; i++){
        let el = alt[i]
        if(i != x){
            el.classList.remove("selected");
        }
        else{
            el.classList.add("selected");
            respostas[q] = i;
        }
    }
}
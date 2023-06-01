const input = document.getElementById("search");
function searchh(){
    window.location = `index.html?s=${input.value}`;
}

document.getElementById("retry").href = `quiz.html?${location.search.substring(1)}`;

var id = parseInt(location.search.substring(2)) - 1;

const quiz = data.quizzes[id];
var title = quiz.title;
document.title = title;
var questions = quiz.questions;


var respostas = JSON.parse(sessionStorage.getItem("respostas"));

var quiz_title = document.getElementById("quiz_title");
quiz_title.innerText = quiz.title;

var pontuacao = document.getElementById("fp");
var score;

var gabarito = document.getElementById("gabarito");
gabarito.innerHTML = "";

for (let i = 0; i < respostas.length; i++){
    gabarito.innerHTML += `
    <div class="questao">
        <div class="pergunta">
            ${i+1}. ${questions[i].question}
        </div>
        <div class="alternativas">
            
        </div>
    </div>
    `;
}

var alts = ["a", "b", "c", "d"];
var score = 5;
var q = document.getElementsByClassName(`alternativas`);
for (let i = 0; i < q.length; i++){
    q[i].innerHTML = "";
    let a = respostas[i];
    let b = quiz.questions[i].answer;
    for (let j = 0; j < alts.length; j++){
        if (j == b){
            q[i].innerHTML += `
                <div class="verde">
                    ${alts[j]}) ${questions[i].options[j]}
                </div>  
            `;
        }
        else if (j == a && a != b){
            q[i].innerHTML += `
                <div class="vermelho">
                    ${alts[j]}) ${questions[i].options[j]}
                </div>  
            `;
            score--;
        }
        else{
            q[i].innerHTML += `
                <div>
                    ${alts[j]}) ${questions[i].options[j]}
                </div>  
            `;
        }
    }
}
pontuacao.innerText = score;


{/* <div>
                a) ${questions[i].options[0]}
            </div>  
            <div>
                b) ${questions[i].options[1]}
            </div> 
            <div>
                c) ${questions[i].options[2]}
            </div> 
            <div>
                d) ${questions[i].options[3]}
            </div>  */}


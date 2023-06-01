const input = document.getElementById("search");
function searchh(){
    window.location = `index.html?s=${input.value}`;
}

var id = parseInt(location.search.substring(2)) - 1;
var start = document.getElementById("start");

var title = data.quizzes[id].title;
document.title = title;
var data_hora = [data.quizzes[id].data, data.quizzes[id].hora];
var tags = data.quizzes[id].tags;





const header_titulo = document.getElementById("header_titulo");
const ddata = document.getElementById("data");
const hhora = document.getElementById("hora");
var ttags = document.getElementById("tags");

header_titulo.innerText = title;
ddata.innerText = data_hora[0];
hhora.innerText = data_hora[1];

for (let i = 0; i < tags.length; i++){
    ttags.innerHTML += `
        <a class="tag" href='index.html?${tags[i].toLowerCase()}'>${tags[i]}</a>
    `;
}
start.setAttribute("onclick", "window.location=`quizz.html?${location.search.substring(1)}`");
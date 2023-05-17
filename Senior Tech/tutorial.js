var id = parseInt(location.search.substring(2)) - 1;
const content = document.getElementById("content");
const header_titulo = document.getElementById("header_titulo");

var ddata = document.getElementById("data");
var hhora = document.getElementById("hora");

var data_hora = [data.tutoriais[id].data, data.tutoriais[id].hora];
var title = data.tutoriais[id].title;


header_titulo.innerText = title;

var passos = data.tutoriais[id].passos;
var explicacao = data.tutoriais[id].explicacao;

ddata.innerText = data_hora[0];
hhora.innerText = data_hora[1];

var ttags = document.getElementById("tags");
var tags = data.tutoriais[id].tags;
for (let i = 0; i < tags.length; i++){
    ttags.innerHTML += `
        <a class="tag" href='index.html?${tags[i].toLowerCase()}'>${tags[i]}</a>
    `;
}

for (let i = 0; i < passos.length; i++){
    if (i%2 == 0){
        content.innerHTML += `
            <div class="row">
                <div class="step_box sbl">
                    <div class="step_title">
                        <span class="num">${i+1}.</span>
                        <span class="step">${passos[i]}</span>
                    </div>
                    
                    <span class="explanation">
                        ${explicacao[i]}
                    </span>
                </div>
            </div>
        `;
    }
    else{
        content.innerHTML += `
            <div class="row rowr">
                <div class="step_box sbr">
                    <div class="step_title">
                        <span class="num">${i+1}.</span>
                        <span class="step">${passos[i]}</span>
                    </div>
                    
                    <span class="explanation">
                        ${explicacao[i]}
                    </span>
                </div>
            </div>
        `;
    }
    
}


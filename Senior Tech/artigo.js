var id = parseInt(location.search.substring(2)) - 1;

const content = document.getElementById("content");
const header_titulo = document.getElementById("header_titulo");

var title = data.artigos[id].title;
var subtitles = data.artigos[id].subtitles;
var paragraphs = data.artigos[id].paragraphs;

var ttags = document.getElementById("tags");
var tags = data.artigos[id].tags;
for (let i = 0; i < tags.length; i++){
    ttags.innerHTML += `
        <a class="tag" href='index.html?${tags[i].toLowerCase()}'>${tags[i]}</a>
    `;
}

header_titulo.innerText = title;
//content.innerHTML += `<div class="header_titulo">${title}</div>`
for (let i = 0; i < subtitles.length; i++){
    content.innerHTML += `
        <div class="header_art">${subtitles[i]}</div>
        <div class="paragrafo">
            <p>
                ${paragraphs[i]}
            </p>
        </div>
    `;
}

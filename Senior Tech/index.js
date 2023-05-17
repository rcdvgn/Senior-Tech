const result_box = document.getElementById("result_box");
var p = location.search.substring(1);


function load_data(){
    result_box.innerHTML = "";
    var sdata;
    var type;
    if(p == "artigos"){
        sdata = data.artigos;
        type = "Artigo";
        filtro.innerText = "Artigos";
    }
    else if(p == "tutoriais"){
        sdata = data.tutoriais;
        type = "Tutorial";
        filtro.innerText = "Tutoriais";
    }
    if(p == "quizzes"){
        sdata = data.quizzes;
        type = "Quiz";
        filtro.innerText = "Quizzes";
    }
    if (p == ""){
        sdata = data.artigos;
        type = "Artigo";
        filtro.innerText = "Mais Recentes";
    }
    

    
    for (let i = 0; i < sdata.length; i++){
        let id = sdata[i].id;
        let title = sdata[i].title;
        let img = sdata[i].img;
        let data_hora = [sdata[i].data, sdata[i].hora];
        result_box.innerHTML += `
            <div class="results" onclick="window.location.href='${type.toLowerCase()}.html?${id}';">
                <div class="res_type">
                    <img src="type.svg">
                    <span>${type}</span>
                </div>
                <div class="res_metadata">
                    <div class="res_img">
                        <img src=${img} class="data_img">
                    </div>
                    <div class="res_info">
                        <div class="res_title">${title}</div>
                        <div class="res_chips">
                            <a class="chips" href='index.html';>Artigo</a>
                            <a class="chips" href='index.html';>Celular</a>
                            <a class="chips" href='index.html';>Aplicativos</a>
                            <a class="chips" href='index.html';>WhatsApp</a>
                        </div>
                        <span class="res_datetime">${data_hora[0]} · ${data_hora[1]}</span>
                    </div>
                </div>
            </div>
        `;
        //let res_img = document.getElementById("res_img");
        //res_img.style.background = `url(${img});`
        //res_img.style.border = "red thin solid";
    }
    
    
}
load_data()
const result_box = document.getElementById("result_box");
const input = document.getElementById("search");
var search = false;
var p = location.search.substring(0);

function searchh(){
    window.location = `index.html?s=${input.value}`;
}

if (p.substring(0, 3) == "?s="){
    search = true;
    p = p.substring(3);
    input.value = p;
}
else{
    p = p.substring(1);
}


function crono(a, b){
    let data_a = (a.data).split("/");
    let dia_a = parseInt(data_a[0]);
    let mes_a = parseInt(data_a[1]);
    let ano_a = parseInt(data_a[2]);
    let horario_a = (a.hora).split(":");
    let hora_a = parseInt(horario_a[0]);
    let minuto_a = parseInt(horario_a[1]);

    let data_b = (b.data).split("/");
    let dia_b = parseInt(data_b[0]);
    let mes_b = parseInt(data_b[1]);
    let ano_b = parseInt(data_b[2]);
    let horario_b = (b.hora).split(":");
    let hora_b = parseInt(horario_b[0]);
    let minuto_b = parseInt(horario_b[1]);

    if (ano_a > ano_b){
        return true;
    }
    else if (ano_a < ano_b){
        return false;
    }
    else{
        if (mes_a > mes_b){
            return true;
        }
        else if (mes_a < mes_b){
            return false;
        }
        else{
            if (dia_a > dia_b){
                return true;
            }
            else if (dia_a < dia_b){
                return false;
            }
            else{
                if (hora_a > hora_b){
                    return true;
                }
                else if (hora_a < hora_b){
                    return false;
                }
                else{
                    if (minuto_a > minuto_b){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            }
        }
    }
}


function ordem(){
    var ordem = [];
    var itens = [data.artigos, data.tutoriais, data.quizzes];
    for (let z = 0; z < itens.length; z++){
        for (let i = 0; i < itens[z].length; i++){
            let dado = itens[z][i];
            
            let index = 0
            for (let j = 0; j < ordem.length; j++){
                if (crono(dado, ordem[j])){
                    index++;
                }
                else{
                    break;
                }
            }
            ordem.splice(index, 0, dado);
            //alert(ordem[0].id);
        }
    }

    return ordem.reverse();
}

var sorted_data = ordem();

function load_data(){
    result_box.innerHTML = "";
    var category;
    var filter_type = "";
    var all = false;
    var type;
    if(p == "artigos"){
        type = "1";
        filter_type = "Artigos";
    }
    else if(p == "tutoriais"){
        type = "2";
        filter_type = "Tutoriais";
    }
    else if(p == "quizzes"){
        type = "3";
        filter_type = "Quizzes";
    }
    else if (p == ""){
        all = true;
        filter_type = "Mais Recentes";
    }
    else{
        type = "0";
        filter_type = `"${p}"`;
    }
    filtro.innerText = filter_type;
    

    
    for (let i = 0; i < sorted_data.length; i++){
        let id = sorted_data[i].id;
        let title = sorted_data[i].title;
        let tags = sorted_data[i].tags;
        if (all == false){
            if (search == true){
                if (!title.toLowerCase().includes(p)){
                    continue;
                }
            }
            else{
                let contains_tag = false; 
                for (let j = 0; j < tags.length; j++){
                    if (tags[j].toLowerCase().includes(p)){
                        contains_tag = true;
                    }
                }
                //if (!tags.toLowerCase().includes(filter_type))
                if (contains_tag == false){
                    continue;
                }
            }
            
        }
        if (id.charAt(0) == 1){
            category = "Artigo"
        }
        else if (id.charAt(0) == 2){
            category = "Tutorial"
        }
        else if (id.charAt(0) == 3){
            category = "Quiz"
        }
         
        
        let img = sorted_data[i].img;
        let data_hora = [sorted_data[i].data, sorted_data[i].hora];
        
        result_box.innerHTML += `
            <div class="results" onclick="window.location.href='${category.toLowerCase()}.html?${id}';">
                <div class="res_type">
                    <img src="type.svg">
                    <span>${category}</span>
                </div>
                <div class="res_metadata">
                    <div class="res_img">
                        <img src=${img} class="data_img">
                    </div>
                    <div class="res_info">
                        <div class="res_title">${title}</div>
                        <div id="res_chips${i}" class="res_chips">
                            
                        </div>
                        <span class="res_datetime">${data_hora[0]} · ${data_hora[1]}</span>
                    </div>
                </div>
            </div>
        `;
        let ttags = document.getElementById(`res_chips${i}`);
        for (let j = 0; j < tags.length; j++){
            ttags.innerHTML += `
                <a class="chips" href='index.html?${tags[j].toLowerCase()}'>${tags[j]}</a>
            `;
        }
        //let res_img = document.getElementById("res_img");
        //res_img.style.background = `url(${img});`
        //res_img.style.border = "red thin solid";
    }
    
    
}
load_data();
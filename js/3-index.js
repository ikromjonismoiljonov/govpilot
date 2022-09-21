var icon = document.getElementById("icon");
var inp1 = document.getElementById("inp1");
var icon1 = document.getElementById("icon1");
var inp2 = document.getElementById("inp2");
var icon3 = document.getElementById("icon3");
var inp3 = document.getElementById("inp3");
var icon4 = document.getElementById("icon4");
var inp4 = document.getElementById("inp4");
var icon5 = document.getElementById("icon5");
var inp5 = document.getElementById("inp5");
var divta = document.getElementById('divta');
var divta1 = document.getElementById('divta1');
var imgs1 = document.getElementById('imgs1');
var imgs2 = document.getElementById('imgs2');
imgs1.style.height = "30px";
imgs2.style.height = "30px";

function chan(){
        if(icon.classList[1] == "fa-pen"){
                icon.classList.remove("fa-pen");
                icon.classList.add("fa-check");
                inp1.removeAttribute("readonly", null)
        }
        else if(icon.classList[1] == "fa-check"){
                icon.classList.remove("fa-check");
                icon.classList.add("fa-pen");
                inp1.setAttribute("readonly", null)    
        }
}

function chan1(){

        if(icon1.classList[1] == "fa-pen"){
                icon1.classList.remove("fa-pen");
                icon1.classList.add("fa-check");
                inp2.removeAttribute("readonly", null)
        }
        else if(icon1.classList[1] == "fa-check"){
                icon1.classList.remove("fa-check");
                icon1.classList.add("fa-pen");
                inp2.setAttribute("readonly", null)    
        }
}

function chan2(){

        if(icon3.classList[1] == "fa-pen"){
                icon3.classList.remove("fa-pen");
                icon3.classList.add("fa-check");
                inp3.removeAttribute("readonly", null)
        }
        else if(icon3.classList[1] == "fa-check"){
                icon3.classList.remove("fa-check");
                icon3.classList.add("fa-pen");
                inp3.setAttribute("readonly", null)    
        }
}


function chan4(){

        if(icon4.classList[1] == "fa-pen"){
                icon4.classList.remove("fa-pen");
                icon4.classList.add("fa-check");
                inp4.removeAttribute("readonly", null)
        }
        else if(icon4.classList[1] == "fa-check"){
                icon4.classList.remove("fa-check");
                icon4.classList.add("fa-pen");
                inp4.setAttribute("readonly", null)    
        }
}



function chan5(){

        if(icon5.classList[1] == "fa-pen"){
                icon5.classList.remove("fa-pen");
                icon5.classList.add("fa-check");
                inp5.removeAttribute("readonly", null)
        }
        else if(icon5.classList[1] == "fa-check"){
                icon5.classList.remove("fa-check");
                icon5.classList.add("fa-pen");
                inp5.setAttribute("readonly", null)    
        }

}
function male(){
        var imgs1 = document.getElementById('imgs1');
        var imgs2 = document.getElementById('imgs2');
        var male = document.getElementById('male');
        var female = document.getElementById('female');
        male.classList.add("border-warning");
        male.classList.add('text-warning');
        imgs1.setAttribute("src", "https://tinfis.uz/img/man_yellow.png");
        female.classList.remove("border-warning");
        female.classList.remove("text-warning");
        imgs2.setAttribute("src", "https://tinfis.uz/img/female.png")
}
function female(){
        var imgs1 = document.getElementById('imgs1');
        var imgs2 = document.getElementById('imgs2');
        var male = document.getElementById('male');
        var female = document.getElementById('female');
        female.classList.add("border-warning");
        female.classList.add("text-warning");
        imgs2.setAttribute("src", "https://tinfis.uz/img/female_yellow.png")  
        male.classList.remove("border-warning");
        male.classList.remove("text-warning");
        imgs1.setAttribute("src", "https://tinfis.uz/img/man.png")
}
var btn1 = document.getElementById('btn1');
var inputPassword5 = document.getElementById('inputPassword5');
var btnhi = document.getElementById('btnhi');
var rean = document.getElementById('rean');
console.log(btnhi.classList)
var img15  = document.getElementById("img15")
var inp1 = document.getElementById('exampleInputEmail1');
var inp2 = document.getElementById('exampleInputEmail2');
var inp3 = document.getElementById('exampleInputEmail3');  
var inp4 = document.getElementById('exampleInputEmail4');
var exampleModal3 = document.getElementById('exampleModal3');

function slide(){
    if(rean.className == "slideOutRight"){
        rean.classList.remove("slideOutRight");
        rean.classList.add("slideInRight");
    }

    var hh1 = document.createElement('h1');
    hh1.innerText = localStorage.getItem('h15');
    body.
    exampleModal3.appendChild(rean);
    rean.appendChild(hh1)
}


function hide()
{
   console.log(rean.classList)
    if(rean.className == "slideInRight"){
        rean.classList.remove("slideInRight");
        rean.classList.add("slideOutRight");
    }
}
function add(){
    var p15 = document.getElementById('p15');
    var h15 = document.getElementById('h15');

    localStorage.setItem("h15", h15.innerText);
    localStorage.setItem("text", p15.innerText);
    localStorage.setItem("img", img15.getAttribute("src"));
}
// function checkk(){
// var pwar = document.getElementById('pwar');

//     if(inp01.value == 1 && inp02.value == 1 && inp03.value == 1 && inp04.value == 1){
//         window.open("../html/index3.html");
//     }
//     else{
//         pwar.innerText = "Siz xato kod kiritdingiz";
//     }
// }
function chan1(){
    if(inp1.value.length == 1 && inp2.value.length == 1 && inp3.value.length == 1 && inp4.value.length == 1)
    {
     btn2.removeAttribute("disabled")
        btn2.classList.add("active"); 
    }
   }
   
   function tek(){
        if(inp1.value == "1" && inp2.value == "1" && inp3.value == "1" && inp4.value == "1")
        {
          window.open('../html/index3.html');
        }
        else{
         h1.innerText = "Cod xato!"
         h1.style.color = "red";
         h1.style.fontSize = "10pt"
        }
}

var count1 = 0;
var count2 = 0;
var count3 = 0;

function increase1(){
    var likes1 = document.querySelector("#likes1");
    count1 +=1;
    likes1.innerText = count1 + " Like(s)";
}

function increase2(){
    var likes2 = document.querySelector("#likes2");
    count2 +=1;
    likes2.innerText = count2 + " Like(s)";
}

function increase3(){
    var likes3 = document.querySelector("#likes3");
    count3 +=1;
    likes3.innerText = count3 + " Like(s)";
}
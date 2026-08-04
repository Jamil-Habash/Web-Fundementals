var nConnections = 2;
var yourC = 418;

function user_name(){
    var username = document.querySelector("#name");
    username.innerText = "Jamil Habash";
}

function removeConnection(){
    var item = document.querySelector(".card-list-item");
    item.remove();
}

function onAccept(){
    var CR = document.querySelector("#CR1")
    nConnections -=1;
    CR.innerText =  nConnections;
    var YC = document.querySelector("#YC1");
    yourC +=1;
    YC.innerText = yourC;
}

function onDeny(){
    var CR = document.querySelector("#CR1")
    nConnections -=1;
    CR.innerText =  nConnections;
}
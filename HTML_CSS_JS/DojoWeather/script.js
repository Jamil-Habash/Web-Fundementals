
function removeCookie() {
    var cookie = document.querySelector("#cookie");
    cookie.remove();
}

function changeCity(){
    alert("Loading weather report...");
}

function tempChange(element){
    var firstDegree = document.querySelectorAll("#first-degree");
    var secondDegree = document.querySelectorAll("#second-degree");
    if(element.value == "°C"){
        firstDegree[0].innerHTML = "24°";
        secondDegree[0].innerHTML = "18°";
        firstDegree[1].innerHTML = "27°";
        secondDegree[1].innerHTML = "19°";
        firstDegree[2].innerHTML = "21°";
        secondDegree[2].innerHTML = "16°";
        firstDegree[3].innerHTML = "26°";
        secondDegree[3].innerHTML = "21°";
        
    }
    else if(element.value == "°F"){
        firstDegree[0].innerHTML = "75°";
        secondDegree[0].innerHTML = "65°";
        firstDegree[1].innerHTML = "80°";
        secondDegree[1].innerHTML = "66°";
        firstDegree[2].innerHTML = "69°";
        secondDegree[2].innerHTML = "61°";
        firstDegree[3].innerHTML = "78°";
        secondDegree[3].innerHTML = "70°";
    }
}
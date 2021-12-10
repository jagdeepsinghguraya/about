function changeMode(){
    var element =document.body;
    element.classList.toggle("darkMode");

    var iconChange =document.getElementById("changeIcon");
    iconChange.classList.toggle("fa-sun");
}

function openMenu(){
    document.getElementById("header").style.left = "0px";   
}
function closeMenu(){
   document.getElementById("header").style.left = "-100%";
}
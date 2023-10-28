let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let previousPosition = null;


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let form = document.querySelector(".form");

const formState = {
    strokewidth:3,
    strokestyle: "black"
}

function drawerOnClick() {
  form.classList.toggle("hide"); 
}
function onInput(element){
    let newValue = element.value;
    if(element.name === "strokewidth"){
        formState[element.name] = parseInt(newValue);

    }else{
        formState[element.name] = newValue;
    }
}


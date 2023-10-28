let allIconButtons = document.querySelectorAll(".icons-container>button");



let actions = {
    pencil:false,
    circle:false,
    rectangle:false,
    eraser:false,
    line:false
}

function iconButtonClicked(element){
  let iconButtons = element.id;

  allIconButtons.forEach((btn) => {
    if(btn.classList.contains("active-class") && btn.id !== iconButtons){
        btn.classList.remove("active-class")
        
    }
  })
  element.classList.toggle("active-class");

  allIconButtons.forEach((btn) => {
   let isActive = btn.classList.contains("active-class");
    actions[btn.id] = isActive;
  })
 


}

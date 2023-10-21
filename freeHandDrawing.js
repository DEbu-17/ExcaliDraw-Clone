let pencil = document.getElementById("pencil");
const selectColor = document.getElementById("selectColor")
let colorPicker = document.getElementById("colorPicker");
let activeClass = false;

pencil.addEventListener("click", () => {
  activeClass = !activeClass;
  if (activeClass) {
    selectColor.style.display = "block";
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.style.cursor = "crossHair";
  } else {
    canvas.removeEventListener("mousedown", onMouseDown);
    canvas.style.cursor = "auto";
    selectColor.style.display = "none";
  }
  pencil.classList.toggle("active-class");
});

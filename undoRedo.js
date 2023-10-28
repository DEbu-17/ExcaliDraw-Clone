const undo = document.getElementById("undo");
const redo = document.getElementById("redo");

function onUndo() {
  if (historyIndex) {
    history.pop();
    historyIndex--;
    if (historyIndex === -1) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.putImageData(history[historyIndex], 0, 0);
    }
  }
}

// function onRedo() {
  
//  ctx.putImageData(drawingFuture[0], 0, 0);
//  drawingFuture.shift();
// }

undo.addEventListener("click", onUndo);
// redo.addEventListener("click", onRedo);

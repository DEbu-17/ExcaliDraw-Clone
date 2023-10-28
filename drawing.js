let history = [];
historyIndex = -1;

function onMousedown(e) {
  startIndex = history.length - 1;
  ctx.strokeStyle = formState.strokestyle;
  ctx.lineWidth = formState.strokewidth;
  if (
    !(
      actions.pencil ||
      actions.circle ||
      actions.eraser ||
      actions.rectangle ||
      actions.line
    )
  ) {
    return;
  }
  previousPosition = { x: e.clientX, y: e.clientY };
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mouseup", onMouseUp);
}

function onMouseMove(e) {
  if (actions.pencil) {
    drawFreeHand({ x: e.clientX, y: e.clientY });
  } else if (actions.eraser) {
    handleErase({ x: e.clientX, y: e.clientY });
  } else if (actions.circle) {
    drawCircle({ x: e.clientX, y: e.clientY });
  } else if (actions.rectangle) {
    drawRectangle({ x: e.clientX, y: e.clientY });
  } else if (actions.line) {
    drawLine({ x: e.clientX, y: e.clientY });
  }
}

function onMouseUp() {
  history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
  historyIndex++;
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mouseup", onMouseUp);
}
canvas.addEventListener("mousedown", onMousedown);

function drawFreeHand(currentPosition) {
  ctx.beginPath();
  ctx.moveTo(previousPosition.x, previousPosition.y);
  ctx.lineTo(currentPosition.x, currentPosition.y);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
  previousPosition = currentPosition;
}

function handleErase(currentPosition) {
  ctx.clearRect(currentPosition.x, currentPosition.y, 20, 20);
}

function drawCircle(currentPosition) {
  if (startIndex !== -1) {
    ctx.putImageData(history[startIndex], 0, 0);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  ctx.beginPath();
  let radius = Math.sqrt(
    (currentPosition.x - previousPosition.x) ** 2 +
    (currentPosition.y - previousPosition.y) ** 2
  );
  ctx.arc(previousPosition.x,previousPosition.y, radius, 0, 2 * Math.PI, true);
  ctx.stroke();
}

function drawRectangle(currentPosition) {
  if (startIndex !== -1) {
    ctx.putImageData(history[startIndex], 0, 0);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  ctx.beginPath();
  let width = currentPosition.x - previousPosition.x;
  let height = currentPosition.y - previousPosition.y;

  ctx.strokeRect(previousPosition.x, previousPosition.y, width, height);
}
function drawLine(currentPosition) {
  if (startIndex !== -1) {
    ctx.putImageData(history[startIndex], 0, 0);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  ctx.beginPath();
  ctx.moveTo(previousPosition.x, previousPosition.y);
  ctx.lineTo(currentPosition.x, currentPosition.y);
  ctx.lineWidth = 2;
  ctx.stroke();
}

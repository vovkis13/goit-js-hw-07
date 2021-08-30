const inputRef = document.querySelector("div#controls input");
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const divBoxesRef = document.querySelector("div#boxes");

function createBoxes(amount) {
  const boxesArr = [];
  let currentSize = 30;
  for (let i = 0; i < amount; i += 1) {
    boxesArr[i] = document.createElement("div");
    boxesArr[i].style.backgroundColor =
      "#" + Math.random().toString(16).slice(2, 8);
    boxesArr[i].style.width = `${currentSize}px`;
    boxesArr[i].style.height = `${currentSize}px`;
    currentSize += 10;
  }
  divBoxesRef.append(...boxesArr);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}

renderBtnRef.addEventListener("click", () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener("click", destroyBoxes);

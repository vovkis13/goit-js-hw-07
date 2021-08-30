const inputRef = document.querySelector("input#name-input");
const outputRef = document.querySelector("span#name-output");

inputRef.addEventListener(
  "input",
  () =>
    (outputRef.textContent =
      inputRef.value.length !== 0 ? inputRef.value : "незнакомец")
);

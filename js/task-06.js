const inputRef = document.querySelector("input#validation-input");

function changeValidStatus(isValid, element) {
  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
  }
}

inputRef.addEventListener("blur", () =>
  inputRef.value.length === Number(inputRef.dataset.length)
    ? changeValidStatus(1, inputRef)
    : changeValidStatus(0, inputRef)
);

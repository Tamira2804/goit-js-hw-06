// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

const inputRef = document.querySelector("#validation-input");

function handleBlure() {
  const inputValue = inputRef.value;
  const requiredLength = inputRef.getAttribute("data-length");

  if (inputValue.length === Number(requiredLength)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}

inputRef.addEventListener("blur", handleBlure);

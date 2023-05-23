// Напиши скрипт, який під час набору тексту в інпуті input#name-input
//(подія input), підставляє його поточне значення в span#name - output.
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

console.log(nameInputRef);

nameInputRef.addEventListener("input", (event) => {
  nameOutputRef.textContent =
    event.target.value.length !== 0 ? `${event.target.value}` : "Anonymous";
});

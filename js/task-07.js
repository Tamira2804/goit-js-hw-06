// Напиши скрипт, який реагує на зміну значення input#font-size-control
//(подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір
//тексту.

const inputFontSizeControlRef = document.querySelector("#font-size-control");
const textSpanRef = document.querySelector("#text");

inputFontSizeControlRef.addEventListener("input", () => {
  const fontSizeInput = inputFontSizeControlRef.value + "px";
  textSpanRef.style.fontSize = fontSizeInput;
});

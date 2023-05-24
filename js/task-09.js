// Напиши скрипт, який змінює кольори фону елемента <body> через
// інлайн - стиль по кліку на button.change - color і виводить значення
// кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetRef = document.querySelector(".widget");
const changeColorBtnRef = widgetRef.querySelector(".change-color");
const spanColorRef = widgetRef.querySelector(".color");

changeColorBtnRef.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  widgetRef.style.backgroundColor = newColor;
  spanColorRef.textContent = newColor;
});

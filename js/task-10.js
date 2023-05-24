/* Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити, 
після чого рендериться колекція. Натисненням на кнопку Очистити, колекція 
елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у 
div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього 
на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.


Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб 
видаляючи всі створені елементи.
 */

const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.querySelector("input");
const createBtnRef = controlsRef.querySelector("[data-create]");
const destroyBtnRef = controlsRef.querySelector("[data-destroy]");
const boxesContainerRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", createBoxes);
destroyBtnRef.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(inputRef.value);
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainerRef.append(...boxes);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

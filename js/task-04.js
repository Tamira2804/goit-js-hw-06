// Лічильник складається зі спану і кнопок, які по кліку повинні
// збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");
console.log(counterValueRef);

let counterValue = 0;

function updateCounterValue() {
  counterValueRef.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  updateCounterValue();
}

function decrement() {
  counterValue -= 1;
  updateCounterValue();
}

decrementButtonRef.addEventListener("click", decrement);
incrementButtonRef.addEventListener("click", increment);

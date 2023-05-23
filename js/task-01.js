const itemArrayEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemArrayEl.length}`);

itemArrayEl.forEach((el, index, array) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.children[1].children.length}`);
});

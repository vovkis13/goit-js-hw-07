const categoriesEl = document.querySelector("ul#categories");

console.log(`В списке ${categoriesEl.children.length} категории.`);

for (let i = 0; i < categoriesEl.children.length; i += 1) {
  console.log(
    `Категория: ${categoriesEl.children[i].firstElementChild.textContent}`
  );
  console.log(
    `Количество элементов: ${categoriesEl.children[i].lastElementChild.children.length}`
  );
}

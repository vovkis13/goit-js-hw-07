const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});

const listOfIngredientsEl = document.querySelector("ul#ingredients");
listOfIngredientsEl.append(...ingredientsEl);

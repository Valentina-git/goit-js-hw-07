/**
 *Задание 2
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.

Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов 
используй document.createElement().
 */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ul = document.getElementById("ingredients");
let html = [];

ingredients.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  html.push(li)
})
ul.append(...html)


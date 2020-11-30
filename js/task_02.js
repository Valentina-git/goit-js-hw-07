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
const list = document.createElement('ul');
let html = '';

ingredients.forEach((item) => {
  html += `<li>${item}</li>`
  return html
})

list.innerHTML = html;
ul.append(list)


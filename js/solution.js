//1 Напишите код, который выведет каждый элемент списка в консоль: Используйте цикл for..of
let ul = document.getElementById("ulId");
let ulChilds = ul.querySelectorAll("li");

for (let li of ulChilds) {
  console.log(li);
}
//2 Вывести общее кол-во элементов в консоль
console.log(ulChilds.length);
//3 Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
const arr = [];

for (i = 0; i < ulChilds.length; i++) {
  let result = arr.push(ulChilds[i].textContent);
}
console.log(arr);

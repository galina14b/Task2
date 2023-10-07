const grid = document.querySelector('.grid');
const title = document.querySelector('.infoTitle');
const modal = document.querySelector('.modal');

// Дата та число картинок ==========================================

// функція додавання нулей до дати
function zeroFirstFormat(value) {
  if (value < 10) {
    value='0'+value;
  }
  return value;
}

// функція отримання відформатованої дати
function dateTime() {
  let currentDate = new Date();
  let day = zeroFirstFormat(currentDate.getDate());
  let month = zeroFirstFormat(currentDate.getMonth()+1);
  let year = currentDate.getFullYear();
  let hours = zeroFirstFormat(currentDate.getHours());
  let minutes = zeroFirstFormat(currentDate.getMinutes());
  let seconds = zeroFirstFormat(currentDate.getSeconds());

  return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}

// Кількість картинок на сторінці
let num = grid.getElementsByClassName('grid__item').length;

// Вивідення кількості картинок та дати на сторінку
title.textContent = `${dateTime()} Number of images - ${num}`;




// Модалне вікно з картинкою ==============================================

// Відкриття модалки при натисканні на картинку
grid.addEventListener('click', function (event) {
  if (event.target.classList.contains('grid__item')) {
    let className = event.target.classList[1];

    modal.classList.toggle('hidden__modal');
    modal.children[0].classList.add(`${className}`)
  }
});

// Закриття модалки при натисканні на "крестик"
modal.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal__cross')) {
    let className = event.target.parentElement.classList[1];
    
    modal.classList.toggle('hidden__modal');
    modal.children[0].classList.remove(`${className}`)
  }
})


    

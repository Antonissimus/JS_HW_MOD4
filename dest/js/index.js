'use strict';

var shownClass = [];
$('.button').click(function () {
  var buttonId = $(this).attr('id');
  var buttonClass = $(this).attr('class');
  shownClass = '.modal.' + buttonClass.split(' ')[1];
  $(shownClass).removeClass('hide');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
});

$('.close').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $(shownClass).addClass('hide');
});

// Задание 1-3

var toRed = document.querySelector("#toRed");
toRed.addEventListener('click', function () {
  var p = document.querySelectorAll('.ex1 p');
  for (var i = 0; i < p.length; i++) {
    p[i].classList.toggle('redBG');
  }
});

var addShad = document.querySelector("#addShadow");
addShad.addEventListener('click', function () {
  var img = document.querySelectorAll('.ex1 img');
  for (var i = 0; i < img.length; i++) {
    img[i].classList.toggle('shadowed');
  }
});

var addNum = document.querySelector("#addNumber");
addNum.addEventListener('click', function () {
  var p = document.querySelectorAll('.ex1 p');
  var s = document.querySelectorAll('.ex1 span');
  for (var i = 0; i < p.length; i++) {
    p[i].classList.toggle('numbered');
  }for (var _i = 0; _i < p.length; _i++) {
    var has = p[_i].classList.contains('numbered');
    // debugger;
    if (has) {
      var sp = document.createElement('span');
      sp.innerHTML = _i + 1;
      var parent = p[_i].parentElement;
      parent.insertBefore(sp, p[_i]);
      // debugger;
    } else {
      var _parent = p[_i].parentNode;
      // debugger;
      _parent.removeChild(s[_i]);
      // debugger;
    }
  }
});

// Задание 4

var clickCounter = 0;
var toCount = function toCount() {
  clickCounter++;
  var answer = document.querySelector('.ex2 .answer');
  answer.innerHTML = 'Вы нажали на кнопки : ' + clickCounter + ' раз!';
};

var click = document.querySelectorAll(".ex2 .btn");
for (var i = 0; i < click.length; i++) {
  click[i].addEventListener('click', toCount);
} // Задание 5

var toThePowBtn = document.querySelector('.ex3 #toThePow');
toThePowBtn.addEventListener('click', toPow);

function toPow() {
  var base = document.querySelector('.ex3 #base').value;
  var exp = document.querySelector('.ex3 #exp').value;
  if (isNaN(base) || isNaN(exp)) {
    alert('Введите числовые значения!!');
    return;
  } else {
    var answer = document.querySelector('.ex3 .answer');
    answer.innerHTML = base + ' В степени ' + exp + ' равняется :' + Math.pow(base, exp);
  }
}

// Задание 6

function underLine(name) {
  var underLineTeg = document.querySelectorAll(name);
  for (var _i2 = 0; _i2 < underLineTeg.length; _i2++) {
    underLineTeg[_i2].classList.toggle('underLine');
  }
}

var underlineBtn = document.querySelector('.ex4 #underLine');
underlineBtn.addEventListener('click', function () {
  var tegName = document.querySelector('.ex4 #tegName').value;
  underLine(tegName);
});

// Задание 7,8

var ageBtn = document.querySelector('.ex5 #ageBtn');
ageBtn.addEventListener('click', function () {
  var age = document.querySelector('.ex5 #age').value;
  var ans = checkAge(age);
  var answer = document.querySelector('.ex5 .answer');
  answer.innerHTML = ans;
});

function checkAge(age) {
  if (isNaN(age) || age == '') {
    return 'Введите возраст!!!!';
  } else if (age >= 16) {
    return 'Добро пожаловать !';
  } else if (age < 16) {
    return 'Вы еще молоды !';
  }
}

// Задание 9

function lengthCount(arr) {
  if (typeof arr == 'undefined') {
    alert('Ошибка, массив не задан');
    return;
  } else return arr.length;
}

var lengthCountBtn = document.querySelector('.ex6 #lengthCountBtn');
lengthCountBtn.addEventListener('click', function () {
  var arr = [1, 2, 3, 4, 5];
  var arrLength = lengthCount(arr); // Передаем в функцию массив
  var answer = document.querySelector('.ex6 .answer');
  answer.innerHTML = arrLength;
});

// Задание 10

var getNumBtn = document.querySelector('.ex7 #getNumBtn');
getNumBtn.addEventListener('click', function () {
  var num = document.querySelector('.ex7 #num').value;
  var ans = checkNum(num);
  var answer = document.querySelector('.ex7 .answer');
  answer.innerHTML = ans;
});

function checkNum(number) {
  if (isNaN(number) || number == '') {
    return 'Введите чмсловое значение!!!!';
  } else if (number > 10) {
    return 'Квадрат числа : ' + number * number;
  } else if (number < 7) {
    return 'Число меньше 7 !';
  } else if (number == 8) {
    return 7;
  } else if (number == 9) {
    return 8;
  }
}

// Задание 11
var secretNum = Math.round(Math.random() * 10);
var tryed = 3;

var getSecretNumBtn = document.querySelector('.ex8 #getSecretNumBtn');
getSecretNumBtn.addEventListener('click', function () {
  var userNum = +document.querySelector('.ex8 #secretNum').value;
  var answer = document.querySelector('.ex8 .answer');
  var ans = void 0;
  if (tryed) {
    ans = compareNum(userNum, secretNum);
    answer.innerHTML = ans + ' у Вас осталось ' + tryed + ' попыток';
  } else {
    ans = 'Очень жаль, я загадал ' + secretNum;
    answer.innerHTML = ans;
  }
});

function compareNum(userN, secretN) {

  if (isNaN(userN)) {

    return 'Введите числовое значение!!!!';
  } else if (userN > secretN) {
    tryed--;

    return 'Слишком много';
  } else if (userN < secretN) {
    tryed--;

    return 'Слишком мало';
  } else return 'Вы просто эксрасенс !!!';
}
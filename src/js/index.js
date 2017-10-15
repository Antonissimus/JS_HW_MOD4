var shownClass = [];
$('.button').click(function () {
  var buttonId = $(this).attr('id');
  var buttonClass = $(this).attr('class');
  shownClass = '.modal.' + buttonClass.split(' ')[1];
  $(shownClass).removeClass('hide');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('.close').click(function () {
  $('#modal-container').addClass('out');
  $('body').removeClass('modal-active');
  $(shownClass).addClass('hide');
});

// Задание 1-3

const toRed = document.querySelector("#toRed");
toRed.addEventListener('click', function () {
  let p = document.querySelectorAll('.ex1 p');
  for (let i = 0; i < p.length; i++) {
    p[i].classList.toggle('redBG');
  }
})

const addShad = document.querySelector("#addShadow");
addShad.addEventListener('click', function () {
  let img = document.querySelectorAll('.ex1 img');
  for (let i = 0; i < img.length; i++) {
    img[i].classList.toggle('shadowed');
  }
})

const addNum = document.querySelector("#addNumber");
addNum.addEventListener('click', function () {
  let p = document.querySelectorAll('.ex1 p');
  let s = document.querySelectorAll('.ex1 span')
  for (let i = 0; i < p.length; i++) p[i].classList.toggle('numbered');
  for (let i = 0; i < p.length; i++) {
    let has = p[i].classList.contains('numbered');
    // debugger;
    if (has) {
      let sp = document.createElement('span');
      sp.innerHTML = i + 1;
      let parent = p[i].parentElement;
      parent.insertBefore(sp, p[i]);
      // debugger;
    } else {
      let parent = p[i].parentNode;
      // debugger;
      parent.removeChild(s[i]);
      // debugger;
    }
  }
})

// Задание 4

let clickCounter = 0;
let toCount = function () {
  clickCounter++;
  let answer = document.querySelector('.ex2 .answer');
  answer.innerHTML = 'Вы нажали на кнопки : ' + clickCounter + ' раз!';

}

const click = document.querySelectorAll(".ex2 .btn");
for (let i = 0; i < click.length; i++) click[i].addEventListener('click', toCount);

// Задание 5

let toThePowBtn = document.querySelector('.ex3 #toThePow');
toThePowBtn.addEventListener('click', toPow);

function toPow() {
  let base = document.querySelector('.ex3 #base').value;
  let exp = document.querySelector('.ex3 #exp').value;
  if (isNaN(base) || isNaN(exp)) {
    alert('Введите числовые значения!!');
    return;
  } else {
    let answer = document.querySelector('.ex3 .answer');
    answer.innerHTML = base + ' В степени ' + exp + ' равняется :' + Math.pow(base, exp);
  }

}

// Задание 6

function underLine(name) {
  let underLineTeg = document.querySelectorAll(name);
  for (let i = 0; i < underLineTeg.length; i++) {
    underLineTeg[i].classList.toggle('underLine');
  }

}

let underlineBtn = document.querySelector('.ex4 #underLine');
underlineBtn.addEventListener('click', function () {
  let tegName = document.querySelector('.ex4 #tegName').value;
  underLine(tegName);
});

// Задание 7,8

let ageBtn = document.querySelector('.ex5 #ageBtn');
ageBtn.addEventListener('click', function () {
  let age = document.querySelector('.ex5 #age').value;
  let ans = checkAge(age);
  let answer = document.querySelector('.ex5 .answer');
  answer.innerHTML = ans;

});

function checkAge(age) {
  if (isNaN(age) || (age == '')) {
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

let lengthCountBtn = document.querySelector('.ex6 #lengthCountBtn');
lengthCountBtn.addEventListener('click', function () {
  let arr = [1, 2, 3, 4, 5];
  let arrLength = lengthCount(arr); // Передаем в функцию массив
  let answer = document.querySelector('.ex6 .answer');
  answer.innerHTML = arrLength;
});


// Задание 10

let getNumBtn = document.querySelector('.ex7 #getNumBtn');
getNumBtn.addEventListener('click', function () {
  let num = document.querySelector('.ex7 #num').value;
  let ans = checkNum(num);
  let answer = document.querySelector('.ex7 .answer');
  answer.innerHTML = ans;

});

function checkNum(number) {
  if (isNaN(number) || (number == '')) {
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
let secretNum = Math.round(Math.random() * 10);
let tryed = 3;

let getSecretNumBtn = document.querySelector('.ex8 #getSecretNumBtn');
getSecretNumBtn.addEventListener('click', function () {
  let userNum = +document.querySelector('.ex8 #secretNum').value;
  let answer = document.querySelector('.ex8 .answer');
  let ans
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
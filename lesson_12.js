'use strict';

// Слайд 5
// Задание 1

function task_1(){
    let a = 10;
    if (a==10){alert('верное')}
    else{alert('Не верно')}
}

// task_1()

// задание 2
function task_2(){
    let min = 1;
    let result = 0 <= min && min <= 15 ? 'первая часть' : 16 <= min && min <= 30 ? 'Вторая часть' : 
        31 <= min && min <= 45 ? 'третья часть' : 'Четвертая часть'
    
    alert(result);
}

// task_2()

// задание 3

function task_3(){
    let lang = 'en';

    let arr;
    if (lang == 'ru'){
        arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    }
    else if (lang == 'en'){
        arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }

    switch(lang){
        case 'ru':
            arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
            break
        case 'en':
            arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            break
        }
    alert(arr)
}

// task_3()

// Слайд 6

// let resul;

// Задача 1
// let a = 1;
// if(a == 0){ resul = 'верно'} else{resul = 'не верно'}
// alert(resul)

// a = 0;
// if(a == 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = -3;
// if(a == 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// задача 2
// let a = 1;
//  if(a > 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 0;
//  if(a > 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = -3;
//  if(a > 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// задча 3
// let a = 1;
//  if(a < 0){  resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 0;
//  if(a < 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = -3;
//  if(a < 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// задача 4
// let a = 1;
//  if(a >= 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 0;
//  if(a >= 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = -3;
//  if(a >= 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)


// задача 5

// let a = 1;
//  if(a <= 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 0;
//  if(a <= 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = -3;
//  if(a <= 0){ resul = 'верно'} else{resul = 'не верно'}
// alert(resul)

// задача 6
// let a = 1;
//  if(a != 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 0;
//  if(a != 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = -3;
//  if(a != 0){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)


// задча 7

// let a = 'test';
//  if(a == 'test'){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 'тест;
//  if(a == 'test'){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 3;
//  if(a == 'test'){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// задача 8

// let a = '1';
//  if(a == '1'){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 1;
//  if(a a == '1'){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// a = 3;
//  if(a == '1'){ resul = 'верно'} else{ resul = 'не верно'}
// alert(resul)

// слайд 7
// let a;

// задание 1
// a = 5;
// let resul = a > 0 && a < 5 ? 'верно' : 'не верно';
// alert(resul)

// a = 0;
// let resul = a > 0 && a < 5 ? 'верно' : 'не верно';
// alert(resul)

// a = -3;
// let resul = a > 0 && a < 5 ? 'верно' : 'не верно';
// alert(resul)

// a = 2;
// let resul = a > 0 && a < 5 ? 'верно' : 'не верно';
// alert(resul)


// задание 2
// a = 5;
// let resul = a > 0 && a < 5 ? a += 7: a /= 7;
// alert(resul);

// a = 0;
// let resul = a > 0 && a < 5 ? a += 7: a /= 7;
// alert(resul);

// a = -3;
// let resul = a > 0 && a < 5 ? a += 7: a /= 7;
// alert(resul);

// a = 2;
// let resul = a > 0 && a < 5 ? a += 7: a /= 7;
// alert(resul);

// задание 3
// let a, b;

// a = 1;
// b = 3;
// let resul = a <= 1 && b >= 3 ? a + b: a - b;
// alert(resul)

// a = 0;
// b = 6;
// let resul = a <= 1 && b >= 3 ? a + b: a - b;
// alert(resul)

// a = 3;
// b = 5;
// let resul = a <= 1 && b >= 3 ? a + b: a - b;
// alert(resul)

// заадние 4

// let a = 2;
// let b = 6
// let result = a > 2 && a < 11 || b == 6 && b < 14 ? 'Верно' : 'Не верно'

// слайд 8


// задание 1
// let num = 2;
// let result;

// switch(num){
//     case 1:
//         result = 'зима'
//         break

//     case 2:
//         result = 'весна'
//         break
    
//     case 3:
//         result = 'лето'
//         break
    
//     case 4:
//         result = 'осень'
//         break
// }

// alert(result)

// задание 2

// let day = 23;

// let result = day >= 1 && day <= 10 ? 'первая деката' :  day >= 11 && day <= 20 ? 'вторая деката' : 'третья деката';
// alert(result);

// задание 3

// let month = 3;
// let result;
// if (month >= 1 && month <= 2 || month == 12){
//     result = 'зима';
// }

// else if(month >= 3 && month <= 5){
//     result = 'весна';
// }

// else if(month >= 6 && month <= 8){
//     result = 'лето'
// }

// else if (month >= 9 && month <= 11){
//     result = 'Осень'
// }

// else{
//     result = 'что-то не известное'
// }

// alert(result);

// задание 4

// let str = 'abcde'

// if (str[0] == 'a'){
//     alert('да');
// }
// else{
//     alert('нет')
// }

// задание 5
// let numbers = '12345';
// if ( numbers[0] in ['1', '2', '3']){
//     alert('Да')
// }

// else{
//     alert('нет')
// }

// задание 6

// let str = '123';
// let s = 0;
// for (let i = 0; i < str.length; i++){
//     s += +str[i]
// }

// alert(s);

// задание 7
// let str = '123456'


// let s_1 = 0;
// let s_2 = 0;

// for (let i = 0; i < 3; i++){
//     s_1 += +str[i];
// }

// for (let i = 3; i < 6; i++){
//     s_2 += +str[i];
// }

// if (s_1 == s_2){
//     alert('да');
// }

// else{
//     alert('нет');
// }

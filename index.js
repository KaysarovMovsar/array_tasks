
// // Задача 1

// // Допиши код так, чтобы в переменной `positive` остались только положительные числа из массива


//     const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
    
//     const positive = array.filter((number)=> number > 0).map((number)=> number)

//     console.log(positive)



// // Задача 2

// // Напиши фильтр, который пропустит только те элементы (объекты), у которых свойство error равно false.
// //  Выведи полученный результат в консоль.


//     const messages = [
//       {message: 'hello', error: true},  
//       {message: 'javascript', error: false},  
//       {message: 'lincode', error: true},  
//       {message: 'react', error: true},  
//       {message: 'angular', error: false}, 
//       {message: 'es6', error: false}, 
//     ];

//     const check = messages.filter((e)=> e.error === false).map((e)=> e)

//     console.log(check)



// // Задача 3*

// // Есть следующий массив:


//     const words= ['lincode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];

//     const stars = words.map((word)=>word.length > 5? word: '*')
//     console.log(stars)

// // Используя метод `.map` создай новый массив, где слова короче пяти символов заменены на звездочку.



// // Задача 4

// // Измени следующие функцию на стрелочные


//     const sendMessage = (message) => {
//       /*
//       * тут какой-то большой код для отправки сообщения
//       */
//     }
    
//     const half = (number) => {
//       return number / 2;
//     }
    
//     const showConsole = () => {
//       console.log('lincode');
//     }
    
//     const concatWords = (first, second) => {
//       return first + second;
//     }



// // Задача 5

// // Измени следующие функции из стрелочных в обычные


// //     const justText = () => 'lincode';
// function justText() {
//     return 'lincode'
// }
// console.log(justText())
    
//     function logging(text){
//         return console.log(text)
//     };
    
//     function add(x,y){
//       const z = 3;
    
//       return z * x * y;
//     }
    
//     function onlyPositive(number){
//       if(number < 0) {
//         return false;
//       }
    
//       return true;
//     }


// // const propss = {
// //     hours: 19,
    
// // }


// function App(props) {
//     const isDay = props.hours < 18;
  
//     return isDay ? "сейчас день": "сейчас вечер"
//   }

//   console.log(App(propss))

const propss = 'dvdvf'
function BadComponent(props) {
    return `<div>jndndnd
        
      </div>`
    ;
  }
  BadComponent(propss)

  console.log(BadComponent(propss))

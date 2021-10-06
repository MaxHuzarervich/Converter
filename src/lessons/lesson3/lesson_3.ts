import {log} from "util";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let prom = new Promise((resolve, reject) => {
//     let a = 10;
//     //some async request
//     resolve(a);
//     // reject(a)
// })
// prom
//     .then(result => {
//         console.log('then result', result)
//         //@ts-ignore
//         return result + 50
//     })
//     .then(result2 => {
//         console.log('then result2', result2)
//     })
//     .then(result3 => {
//         console.log('then result3', result3)
//     })

// let prom = new Promise((resolve, reject) => {
//     let a = 0;
//     //some async request
//     // resolve(a);
//     reject(0)
// })
// prom
//     .then(result => {
//         console.log('then result', result)
//         //@ts-ignore
//         return result + 50
//     }, err => {
//         console.log('then err', err);
//         return err + 10
//     })
//     .then(result2 => {
//         console.log('then result2', result2)
//     }, err2 => {
//         console.log('then err2', err2);
//     })

// let prom = new Promise((resolve, reject) => {
//     let a = 0;
//     //some async request
//     // resolve(a);
//     reject(0)
// })
// prom
//     .then(result => {
//         throw 300500;
//         console.log('then result', result)
//     })
//     .then (null,err => {
//         console.log('then err', err);
//         throw 100500;
//         return err + 10
//     })
//     .then(result2 => {
//         console.log('then result2', result2)
//     })
//     // .then(null, err2 => {
//     //     console.log('then err2', err2);
//     //     throw 500500;
//     // })
//     .catch(err2 => {
//         console.log('then err2', err2);
//         throw 500500;
//     })

// let prom = new Promise((resolve, reject) => {
//     let a = 0;
//     //some async request
//     resolve(a);
//     // reject(0)
// })
// prom
//     .then(result => {
//         console.log('then result', result)
//     })
//     .catch(err => {
//         console.log('catch err', err);
//         throw 500500;
//     })
//     .then(result2 => {
//         console.log('then result2', result2)
//         throw 'Yo'
//     })
//     .catch(err2 => {
//         console.log('catch err2', err2);
//         throw 500500;
//     })
//     .catch(err3 => {
//         console.log('catch err3', err3);
//     })

// let prom = new Promise((resolve, reject) => {
//     let a = 0;
//     //some async request
//     // resolve(a);
//     reject(0)
// })
// prom
//     .then(result => {
//         console.log('then result', result)
//     })
//     .then(result2 => {
//         console.log('then result2', result2)
//         throw 'Yo'
//     })
//     .catch(err => {
//         console.log('catch err', err);
//     })

// let prom = new Promise((resolve, reject) => {
//     let a = 0;
//     //some async request
//     resolve(a);
//     // reject(0)
// })
// prom.then(console.log)

// try {
//     let prom = new Promise((resolve, reject) => {
//         let a = 0;
//         //some async request
//         // resolve(a);
//         reject(10)
//     })
//     prom.then(console.log)
// } catch (e) {
//     console.log(e)
// }

// let prom = new Promise((resolve, reject) => {
//     let a = 0;
//     //some async request
//     resolve(a);
//     // reject(0)
// })
// prom
//     .then(result => {
//         console.log('then result', result)
//     })
//     .catch(err => {
//         console.log('catch err', err);
//     })
//     .finally(() => {
//         console.log('finally', 'YoYo');      // к примеру для выключения спиннера после загрузки
//     })

let a = 10

let prom = new Promise((resolve, reject) => {
    let c = 10;
    //some async request
    resolve(a);
    // reject(0)
})
prom
    .then(result => {
        console.log('then result', result)
    })

setTimeout(() => {}, 1000)

    let b = 50;

Promise.resolve(10).then()  //для тестирования
Promise.reject(0).then().catch() //для тестирования
Promise.all([p1, p2, p3]).then([]).catch()  //ждем пока все промисы зарезолвятся
Promise.allSettled([p1, p2, p3]).then([])
Promise.race([p1, p2, p3]).then([]).catch() // берет только самый первый промис, без разницы либо режект или резолве

// console.dir(Promise)

// just a plug
export default () => {
};
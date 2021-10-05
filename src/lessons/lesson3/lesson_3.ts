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

let prom = new Promise((resolve, reject) => {
    let a = 0;
    //some async request
    // resolve(a);
    reject(0)
})
prom
    .then(result => {
        throw 300500;
        console.log('then result', result)
    })
    .then (null,err => {
        console.log('then err', err);
        throw 100500;
        return err + 10
    })
    .then(result2 => {
        console.log('then result2', result2)
    })
    // .then(null, err2 => {
    //     console.log('then err2', err2);
    //     throw 500500;
    // })
    .catch(err2 => {
        console.log('then err2', err2);
        throw 500500;
    })


// just a plug
export default () => {
};
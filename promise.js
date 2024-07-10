// async handling dgn promise

// function getUsers(isOffline) {
//     // return a Promise object
//     return new Promise((resolve, reject) => {
   
//       // simulate network delay
//       setTimeout(() => {
//         const users = ['John', 'Jack', 'Abigail'];
      
//         if (isOffline) {
//           reject(new Error('cannot retrieve users due offline'));
//           return;
//         }
   
//         resolve(users);
//       }, 300);
    
//     });
// }
//   getUsers(false)
//     .then(users => console.log(users))
//     .catch(err => console.log(err.message));

// mengubah promise menjadi promisify

// const { promisify } = require('util'); // utilnya harus dibikin lagi
 
// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
//      if (isOffline) {
//       callback(new Error('cannot retrieve users due offline'), null);
//       return;
//     }
 
//     callback(null, users);
//   }, 3000);
// }
 
// // create a Promise version of getUsers
// const getUsersPromise = promisify(getUsers);
// getUsersPromise(false)
//   .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
//   .catch(err => console.log(err.message));
 
// getUsersPromise(true)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message)); // cannot retrieve users due offline


// promise berantai contohnya : ambil uang -> beli tiket -> masuk ke dlm bioskop -> nonton film
// function withDrawMoney(amount) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (amount > 100) {
//           reject(new Error('Not enough money to withdraw'));
//         }
  
//         resolve(amount);
//       }, 1000);
//     });
//   }
  
//   function buyCinemaTicket(money) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (money < 10) {
//           reject(new Error('not enough money to buy ticket'));
//         }
  
//         resolve('ticket-1');
//       }, 1000);
//     });
//   }
  
//   function goInsideCinema(ticket) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (!ticket) {
//           reject(new Error('no ticket'));
//         }
  
//         resolve('enjoy the movie');
//       }, 1000);
//     });
//   }

  
//   function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => {
//         return buyCinemaTicket(money);
//       })
//       .then((ticket) => {
//         return goInsideCinema(ticket);
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }

  //Anda bisa membuat kode tampak lebih bersih dan singkat dengan memanfaatkan arrow function implisit return.
  //Namun, tips ini hanya dapat digunakan jika arrow function hanya memiliki satu baris kode saja.

//   function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => buyCinemaTicket(money))
//       .then((ticket) => goInsideCinema(ticket))
//       .then((result) => console.log(result))
//       .catch((error) => console.log(error.message));
//   }
  
//   console.log(withDrawMoney);
//   console.log(buyCinemaTicket);
//   console.log(goInsideCinema);
//   console.log(watchMovie);
//   watchMovie();

// Promise static method
// Promise.all()
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve,reject) => setTimeout(() => reject(new Error('error coy')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.all([promise1, promise2, promise3])
//     .then((values) => console.log(values))
//     .catch((error) => console.log(error.message));

// Promise.race()
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000)); // ini duluan karna waktunya paling cepet untuk di eskekusi
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.race([promise1, promise2, promise3])
//   .then((value) => console.log(value)); // 1 setelah 1 detik


// Promise.allSettled()
// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error coy")), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

// Promise.allSettled([promise1, promise2, promise3])
//  .then((results) => console.log(results));


// Promise.any()
// const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
// const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
// const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

// Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
//  .then((value) => console.log(value)) // 1
//  .catch((error) => console.log(error.message));

// rejected sample
// const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
// const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
// const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

// Promise.any([promiseReject1, promiseReject2, promiseReject3])
//  .then((value) => console.log(value))
//  .catch((error) => console.log(error.message));
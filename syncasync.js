// Synchronous

// const getUserSync = (id) => {
//     const nama = id === 1 ? 'Aril' : 'Rasyad';
//     return { id, nama };
// };


// const userSatu = getUserSync(1);
// console.log(userSatu);


// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello World!';
// console.log(halo);




//Asynchronous

// const getUser = (id, callback) => {
//     const time = id === 1 ? 3000 : 2000;
//     setTimeout(() => {
//         const nama = id === 1 ? 'Aril' : 'Rasyad';
//         callback({ id, nama });
//     }, time);
// };

// const userSatu = getUser(1, (hasil) => {
//     console.log(hasil);
// });

// const userDua = getUser(2, (hasil) => {
//     console.log(hasil);
// });


// const halo = 'Hello World!';
// console.log('selesai');
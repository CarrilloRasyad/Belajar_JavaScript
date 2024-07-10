// --------- kodingan dibawah ini untuk membaca notes.txt ---------------
// import fs from 'fs';
// import { fileURLToPath } from 'url';
// import { resolve, dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// const fileReadCallback = (error, data) => {
//     if(error) {
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// };

// fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

// ----------- kodingan ini untuk synchronous ----------------
// const data = fs.readFileSync('notes.txt', 'UTF-8');
// console.log(data);
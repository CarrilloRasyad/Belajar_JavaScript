// -------- kodingan dari chatgpt ---------

// import fs from 'fs';
// import { createReadStream, createWriteStream } from 'fs';
// import { fileURLToPath } from 'url';
// import { dirname, resolve } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const inputFilePath = resolve(__dirname, 'input.txt');
// const outputFilePath = resolve(__dirname, 'output.txt');

// // Determine the highWaterMark value (15 characters per chunk)
// const highWaterMark = 15;

// // Create a readable stream
// const readableStream = createReadStream(inputFilePath, {
//     highWaterMark: highWaterMark,
//     encoding: 'utf-8'
// });

// // Create a writable stream
// const writableStream = createWriteStream(outputFilePath, {
//     encoding: 'utf-8'
// });

// // Pipe the readable stream to the writable stream
// readableStream.pipe(writableStream);

// // Handle end of readable stream
// readableStream.on('end', () => {
//     console.log('Reading and writing completed.');
// });

// // Handle errors
// readableStream.on('error', (error) => {
//     console.error(`Error reading the file: ${error.message}`);
// });

// writableStream.on('error', (error) => {
//     console.error(`Error writing to the file: ${error.message}`);
// });


// ------ kodingan sendiri ------
// import fs from 'fs';
// import { fileURLToPath } from 'url';
// import {dirname, resolve} from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const filePath = resolve(__dirname, 'input.txt');
// const writableStream = fs.createWriteStream('output.txt');

// writableStream.write('lorem ipsum dol \n');

// const readableStream = fs.createReadStream(filePath,{
//     highWaterMark: 15
// });

// readableStream.on('readable', () => {
//     try{
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {

//     }
// });

// readableStream.on('end', () => { 
//     console.log('done')
// })
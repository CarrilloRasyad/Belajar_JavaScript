// -------- kodingan dibawah ini lebih simple dan dipakai oleh Youtube -------------

// import fs from 'fs';
// import { fileURLToPath } from 'url';
// import {dirname, resolve} from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const filePath = resolve(__dirname, 'article.txt');

// const readableStream = fs.createReadStream(filePath, {
//     highWaterMark: 10
// });
 
// readableStream.on('readable', () => {
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch(error) {
        
//     }
// });
 
// readableStream.on('end', () => {
//     console.log('Done');
// });
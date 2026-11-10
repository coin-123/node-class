// console.log(global.luckyNum);

// global.luckyNum = '23';

// console.log(global.luckyNum);

// console.log(process.platform);


// console.log('Hello World');


// process.on('exit', function() {
//     for (let i = 1; i <= 6; i++) {
//         console.log('The program is about to exit!');
//     }
// });


// const { readFile, readFileSync } = require('fs');

// const txt = readFileSync('./hello.txt', 'utf-8');
// console.log(txt);

// readFile('./hello.txt', 'utf-8', (err, txt) => {
   
//      console.log(txt);
    
// });

// console.log('This is a message from the main thread');




// const myModule = require('./my-module');

// console.log(myModule);




const express = require('express');
const { readFile } = require('fs').promises;
const app = express();

// app.get('/', (req, res) => {
//     // res.send('Hello, World!');
//     readFile('./home.html', 'utf-8', (err, html) => {
//         if (err) {
//             res.status(500).send('Error reading the file');
//         }
//         res.send(html);
//     });
// });


app.get('/', async (req, res) =>{

    res.send(await readFile('./home.html', 'utf-8'));
})





app.listen(process.env.PORT || 3000, () => {
    console.log(`App available on http://localhost:3000`);
});
const fs = require('fs');
const path = require('path');

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'output.txt'));

for(let i = 1; i <= 10; i++) {
    writableStream.write(`Ini adalah baris ${i}\n`);
}

writableStream.end();
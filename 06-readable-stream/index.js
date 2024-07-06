const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream( path.resolve(__dirname,'./article.txt'), {
    highWaterMark: 20
});


readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        console.log(error);
    }
});

readableStream.on('end', () => {
    console.log('Done')
})
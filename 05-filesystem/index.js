const fs = require('fs');
const path = require('path');

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return; // return disini digunakan untuk menghentikan program
    }

    console.log(data);
}

fs.readFile(
    path.resolve(__dirname, 'notes.txt'), // untuk membaca path dari file yang akan diakses
 'UTF-8', 
 fileReadCallback,
 );
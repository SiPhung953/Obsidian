const fs = require('fs');
let data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);
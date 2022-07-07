const fs = require('fs');
// const args = process.argv.slice(2);

fs.readFileSync('./index.html', (err, data) =>{
  if (err) {return console.log('errorr', err)};
  console.log('async return', data.length);
});

const fileContentSync = fs.readFileSync('./index.html');
console.log('sync return', fileContentSync.length);
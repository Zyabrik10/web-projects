const express = require('express');


const app = express();

const PORT = process.env.PORT || 3000;



//process.env.PORT - системная переменная с значениием 65535, это максимальное значение порта, в node js - это 65534

// app.get('/', function(req, res) {
  // res.send('Hello World!');
// });
app.listen(PORT, function(err) {
  if(err)throw err;
  console.log('Working...');
});
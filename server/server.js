const express = require('express');

const app = express();
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.json());
const PORT = 3000;

app.listen(PORT,()=>{console.log('hello')});
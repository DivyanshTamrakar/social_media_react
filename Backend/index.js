const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require('cors');
var { initializeConnection } = require('./ConnectionDB/connectionDB')

var userApi = require('./Api/user');

app.use(cors());



// connect with mongodb via mongooose
initializeConnection();

// product from DB

app.use('/users',userApi);


app.get('/',(req,res)=>{
  res.status(200).json({message:"Hello World "})})


app.listen(process.env.PORT || PORT, () => {
  console.log(`server started at Port : ${PORT}`);
});








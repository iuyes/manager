var express=require('express');
var fs= require("fs");
var str = fs.realpathSync('.'); 
app=express();
app.use(express.static(str));
app.listen(8090);

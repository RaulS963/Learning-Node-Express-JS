const express = require('express')
const path = require('path')

const app = express();
const port = 3300;


app.set('views',path.join(__dirname,'views'))
app.engine('html',require('ejs').renderFile)


app.get('/',(req,res) => {
	res.render("index.html",{name:'erza scarlet'});
})

app.listen(port,function(){
	console.log(`listening to port ${port}`)
})
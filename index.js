const express = require('express')
const path = require('path')

const app = express();
const port = 3300;


app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.use(express.static('public'))

app.get('/',(req,res) => {
	res.send("<h1>Express JS</h1>");
})

app.get('/api',(req,res) => {
	var data = [
		{id:1,name:"Natsu",magic_type:"dragon slayer"},
		{id:2,name:"Erza",magic_type:"requip"},
		{id:3,name:"Gray",magic_type:"ice"},
		{id:4,name:"Lucy",magic_type:"celestial"}
	];
	res.json(data);
})


app.get('/pg',(req,res) => {
	res.sendFile(__dirname + "\\public\\pg.html")
})



app.listen(port,function(){
	console.log(`listening to port ${port}...`)
})
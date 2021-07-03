const express = require("express");
const app = express();
const port = 80;
const file = __dirname +  "/a.mp4";
const fs = require("fs");
const logfile = "log.html";

//app.get("/a.mp4", (req,res) => res.sendFile(file));

app.use(express.static(__dirname + "/"));

app.get("/logComputer/:nickname/:username", (req,res) => {
	const message = `${req.params.nickname}: ${req.params.username}@${req.ip} on ${Date()}`;
	const styled = `<h3>${message}</h3>`;
	fs.appendFile(logfile,styled,(err)=>{
		if(err) res.send("error saving log" + JSON.stringify(err));
		else res.send("Succsessfully logged" + message);
	});
})

app.get("/logFile", (req,res) =>  res.sendFile(__dirname + "/" + logfile))

app.listen(port,()=>console.log(`sending ${file} on port ${port}`))

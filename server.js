const http = require('http');

const PORT = 5000;
server = http.createServer((req, res)=>{
	console.log('Hello world');
	res.end('Hellow');
});

server.listen(PORT,()=>{
	console.log(`Server is running on PORT: ${PORT}`);
});
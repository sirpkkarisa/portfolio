const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname,'client')));
app.use('/js', express.static(path.resolve('client/src/js/')));
app.use('/css', express.static(path.resolve('client/css/')));
app.use('/resources', express.static(path.resolve('client/src/resources/')));
app.use('/posts', (req, res)=>{
	return res.json({
		status: 'success',
		message: 'See posts'
	})
});

app.use('/admin/:username',(req, res)=>{
	const { username } = req.params;
	if (username === undefined) {return;}
	if (username !== 'pkk') {
		return res.json({
			status: 'Error',
			error: 'Unauthorized',
		});
	}
	// res.send('Welcome '+ username)
	app.use('/oops', express.static(path.join(__dirname,'test')))

	res.redirect('/oops/admin.html')
	// app.use('/oops', express.static(path.join(__dirname,'test')))
})
module.exports = app;

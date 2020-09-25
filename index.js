const http = require('http');
const fs = require('fs');
const url = require('url');

http
	.createServer((req, res) => {
		const q = url.parse(req.url, true);
		const file = q.pathname !== '/' ? `.${q.pathname}.html` : 'index.html';
		console.log(q.pathname);
		fs.readFile(file, (err, data) => {
			if (err) {
				res.writeHead(404, { 'Content-Type': 'text/html' });
				return res.end(`<h1>404 Not found</h1> <a href='/'> Go back</a>`);
			}
			res.writeHead(200, { 'Content-type': 'text/html' });
			res.write(data);
			return res.end();
		});
	})
	.listen(8000);

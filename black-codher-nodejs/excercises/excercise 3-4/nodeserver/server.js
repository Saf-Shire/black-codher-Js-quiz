const http = require ('http');

  
    const hostname = '127.0.0.1';
    const port = 3000;
  
   
  
  const server = http.createServer( (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html; charset=UTF-8');
    res.end(`<html>
    <head>
    <title>This is a Node.js Server Page</title>
    </head>
    <body>
    <div class="container">
    <h1 style="color:pink;">Hello! This is a Node.js Server</h1>
    <p>This is an example of the text returned from the server…</p>
    <p>This server also returns a png image (below) and uses a local stylesheet.</p>
    <p>Open <strong>Chrome Developer Tools</strong> and review the <strong>Network
   tab</strong> to view the requests made to the server and the <strong>Type</strong>
   returned.</p>
    ...
    </html>`);
     });

 server.listen(port,hostname,() => {
     console.log (`Server running at http://${hostname}:${port}`) ;
 });

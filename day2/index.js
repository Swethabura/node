// importing the http server
var http = require("http");

// to  create the server
const server = http.createServer(async (req, res) => {
  // console.log("Hello world!");
  if (req.method === "GET") {
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1 style="color: red;">Hello Welcome to my page!!</h1>
        </body>
        </html>`);
    res.end();
  } else if (req.method === "POST") {
    products = await fetch("https://dummyjson.com/products");
    final = await products.json();
    res.write(JSON.stringify(final));
    res.end();
  } else {
    data = await fetch("https://fakestoreapi.com/products/");
    result = await data.json();
    res.write(JSON.stringify(result));
    res.end();
  }
});

port = 3000;

// to start the server
server.listen(port, () => {
  console.log("The server has started http://localhost:" + port);
});

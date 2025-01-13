// HTTP
// - Web clients & servers communicate through the network. The language they use is HTTP (Hypertext Transfer Protocol).
// - At a high-level, when a client needs to interact with the program, it sends a REQUEST  to the server through the internet. When server program receives it
//   it talks to the DB in the background & then it sends back a RESPONSE to the client.
//   This process is repeaded as many times as needed.
// - Ex of typical HTTP request-response flow on a news website:

// 1 The client (a web browser) sends a request to get all latest articles.
// 2 The server (a program, written in Python or something else) receives the request.
// 3 The server retrieves the articles from the database and sends back a response containing the articles' data.
// 4 The client receives the response and displays the list of articles. (end of the first request-response cycle)
// 5 The client sends a request to get a specific article.
// 6 The server receives the request.
// 7 The server retrieves this specific article from the database and sends back a response containing that article's data.
// 8 The client receives the response and displays that article's content.

// - Most web apps will work on/ use CRUD applications.

// Using curl to send a request:
// - to install ->  brew install curl
// - The curl program is itself a HTTP client. It sends a request to a server & gets a response.
//   the curl command must have where to send the request to, i.e., the URL. Ex:   curl https://jsonplaceholder.typicode.com/todos/1

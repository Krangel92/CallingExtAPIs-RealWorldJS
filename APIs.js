// API: Application Programming Interface
// It is how we interact with a program using code. When the program runs on an external server,
// we interact with it through HTTP requests, sent via the internet.

// For applications running on a server, the API is the definition of what HTTP requests the server will respond to, and the format of the response it will send back.

// The term "API" refers to any external server that can be ineracted with through HTTP requests -- When we create these HTTP
// requests, we are " calling an API".

// Ex:
//  - To interact with the Github API to do a GET request of a repo, we need the command-line tool "curl" + URL -->
//    curl https://api.github.com/repos/evanw/esbuild

//  - Another way of performing GET requests is simply to visit the URL address in your browser.

// The above are 2 methods of creating HTTP requests to interact with an API.

// The real power is when write code that can interact with an API -- sending HTTP requests directly from our code. Enter "fetch"!!

// "fetch" is a funtion built into JS for creating HTTP requests. We pass a URL to "fetch" & it'll perform a GET request to that URL:
//    fetch('https://api.github.com/repos/evanw/esbuild')

// "fetch" is asynchronous, it takes time to complete, so it's attached to a promise.

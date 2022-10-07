# Dead Space Log

The Dead Space API can be used for fans of the Dead Space franchise that wish to fetch and use information about the necromorphs (in-game enemies).

**<a href="https://deadspace-api.cyclic.app/"> Link to project </a>** 

![imagen](https://user-images.githubusercontent.com/101868896/194591311-182f3ffa-2cfb-467d-b36d-8707196ec487.png)


## How it's made

**Tech used:** HTML, CSS, Node.js, Express

Express is used to make the code on the server more concise and readable.
A JSON containing information about the in game necromorphs of Dead Space is made; each necromorph object contains it's name, the description of the necromorph, the attacks of the necromorph in an array, and the strategy to beat the necromorphs in an array.

A GET request with the path of '/' is used to send the HTML file containing the index.html that explains how to use the API.

Another GET request is made with the path '/api/:necromorph', inside this GET request a const variable is declared that holds the value inputted as the query param. A conditional is also inside this GET request that states: if the necromorph written as a query param exists in the JSON object, then respond with the information about that necromorph, if not respond with the 'unkown' information.

Cross-origin resource sharing (CORS) is also used inside the server to allow for cross-domain requests.

## Optimizations

Add more necromorphs to the JSON object.

## Lessons learned

- How easy express makes it to set up and use the server.
- The functionalities of the GET request.
- The use of Cross-origin resource sharing (CORS).
- How to create and serve a JSON object.
- The use of the sendFile method.
- The functionalities of the arguments request and response.
- How to handle query parameters.

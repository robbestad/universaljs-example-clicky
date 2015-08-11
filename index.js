const Universal = require("universaljs");
const App = require("./app");
var rootNode = document.getElementById('myapp');
Universal.render(
  App,
  rootNode
);

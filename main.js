// Create an object that will be the new element's prototype.
var HelloWorld = Object.create(HTMLElement.prototype);

// Add a callback to run whenever a new <hello-world> tag is created.
HelloWorld.createdCallback = function() {
  this.createShadowRoot().innerHTML =
    '<style>code { color: red }</style>' +
    '<p>Hello, <code><content></content></code></p>';
}

// Register the element.
document.registerElement('hello-world', { prototype: HelloWorld });
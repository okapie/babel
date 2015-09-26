var newGuy = {
 name: "Okap",
 handleMessage: function (message, handle) {
  handle(message);
 },
 receive: function() {
  this.handleMessage("Hello, ", message => console.log(message + this.name))
 }
}
newGuy.receive();
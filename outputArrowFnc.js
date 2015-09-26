"use strict";

var newGuy = {
  name: "Okap",
  handleMessage: function handleMessage(message, handle) {
    handle(message);
  },
  receive: function receive() {
    this.handleMessage("Hello, ", message => console.log(message + this.name));
  }
};
newGuy.receive();

// BUTT EVENTS


// [ ] Keyboard Events:
//     [ ] Capture input from a text field, displaying the last key pressed.

// [ ] Form Events:
//     [ ] Handle form submission, preventing the default behavior and
//     [ ] displaying a submission message.

// [ ] Focus Events:
//     [ ] Update a message when an input field
//     [ ] gains focus or
//     [ ]  loses focus.

// [ ] Event Delegation:
//     [ ] Use a container element with several buttons.
//     [ ] Use event delegation to handle clicks on any button in the container
//     [ ] and display a unique message for each.

// RUN WHEN DOM LOADED
document.addEventListener("DOMContentLoaded", () => {
  console.log("[EVENTS] DOM CONTENT LOADED");

  // BUTTON MOUSE HOVER EVENTS
  const butt_mouse_hover = document.getElementById("butt_mouse_hover");
  const butt_mouse_message = document.getElementById("butt_mouse_message");

  butt_mouse_hover.addEventListener("mouseover", () => {
    butt_mouse_message.textContent = "The Mouse has hovered over the Button!";
  });

  butt_mouse_hover.addEventListener("mouseout", () => {
    butt_mouse_message.textContent = "The Mouse has left the Button!";
  });
});

// BUTT EVENTS

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

  // INPUT KEY EVENTS
  const input_event_keys = document.getElementById("input_event_keys");
  const input_event_keys_message = document.getElementById(
    "input_event_keys_message"
  );

  input_event_keys.addEventListener("keydown", (event) => {
    // NOTE PREVENT DEFAULT OVERKILL AT THIS POINT, SOLVING A PROBLEM THAT DOESN'T EXIST
    // event.preventDefault();
    input_event_keys_message.textContent = `KEY DOWN: ${event.key}`;
  });
  input_event_keys.addEventListener("keyup", (event) => {
    // NOTE PREVENT DEFAULT OVERKILL AT THIS POINT, SOLVING A PROBLEM THAT DOESN'T EXIST
    // event.preventDefault();
    input_event_keys_message.textContent = `KEY UP: ${event.key}`;
  });

  // FORM EVENTS
  const form_event = document.getElementById("form_event");
  const form_event_message = document.getElementById("form_event_message");

  form_event.addEventListener("submit", (event) => {
    // DO NOT SUBMIT IT
    event.preventDefault();

    // GET INPUT EL
    const input_el = document.querySelector("#form_input");

    // SEND MESG WITH EL
    form_event_message.textContent = `You submitted the form with value \n${input_el.value}!`;  

    // CLEAR EL
    input_el.value = "";
  });
});

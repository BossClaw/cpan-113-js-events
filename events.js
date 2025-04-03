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

  // INPUT FOCUS EVENTS
  const input_focus_event = document.getElementById("input_focus_event");
  const input_focus_event_message = document.getElementById(
    "input_focus_event_message"
  );

  input_focus_event.addEventListener("focus", () => {
    input_focus_event.value = "Now click somewhere else!";
    input_focus_event_message.textContent = "Input got the focus!";
  });

  input_focus_event.addEventListener("blur", () => {
    input_focus_event.value = "Click here!";
    input_focus_event_message.textContent =
      "Input lost the focus!\nAKA Became blurred.";
  });

  // WIP - DELEGATION ....HUNH, NEAT!
  // https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_delegation

  const butt_container = document.getElementById("butt_container");
  const butt_container_message = document.getElementById(
    "butt_container_message"
  );

  butt_container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      butt_container_message.textContent = `Button clicked ID #${event.target.id}\n`;
      butt_container_message.textContent += `Content [${event.target.textContent}]\n`;
      butt_container_message.textContent += `\nSecret Data mesg:\n${event.target.dataset.secretMesg}`;
    }
  });
});

// JavaScript code
// Get the form element by its id
var form = document.getElementById("query-form");

// Add an event listener to the form element
// When the form is submitted, the sendQuery function is executed
form.addEventListener("submit", sendQuery);

// Define the sendQuery function
function sendQuery(event) {
  // Prevent the default behavior of the form submission
  event.preventDefault();

  // Get the user input values from the form element
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var query = form.elements["query"].value;
  var representative = form.elements["representative"].value;

  // Validate the user input values
  // If any of them is empty, alert the user and return
  if (!name || !email || !query || !representative) {
    alert("Please fill in all the fields.");
    return;
  }

  // Get the display area element by its id
  var displayArea = document.getElementById("display-area");

  // Get the query display element by its id
  var queryDisplay = document.getElementById("query-display");

  // Update the query display element with the user input values
  queryDisplay.innerHTML = "You asked: " + query + "<br>" +
                           "Your name: " + name + "<br>" +
                           "Your email: " + email + "<br>" +
                           "Your representative: " + representative;

  // Get the response display element by its id
  var responseDisplay = document.getElementById("response-display");

  // Update the response display element with a loading message
  responseDisplay.innerHTML = "Loading...";

  // Simulate sending and receiving the query using a setTimeout function
  // After 3 seconds, the receiveResponse function is executed
  setTimeout(receiveResponse, 3000);
}

// Define the receiveResponse function
function receiveResponse() {
  // Get the response display element by its id
  var responseDisplay = document.getElementById("response-display");

  // Update the response display element with a mock response
  responseDisplay.innerHTML = "Your representative replied: Thank you for your query. We will get back to you soon.";
}

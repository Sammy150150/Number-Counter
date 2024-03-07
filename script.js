let count = 0;
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3"); // Get a reference to button3
const h1 = document.querySelector("h1"); // Get a reference to the first h1 element
button1.onclick = function() {
  count--; // Increment the 'count' variable by 1
  h1.textContent = count; // Update the h1 element's text content with the new count
};
button2.onclick = function() {
  count = 0; // Increment the 'count' variable by 1
  h1.textContent = count; // Update the h1 element's text content with the new count
};
button3.onclick = function() {
  count++; // Increment the 'count' variable by 1
  h1.textContent = count; // Update the h1 element's text content with the new count
};
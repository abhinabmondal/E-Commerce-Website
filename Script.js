// Function to change Hello World text on button click
function changeText() {
  let textElement = document.getElementById("hello-text");
  if (textElement.innerHTML === "Hello World") {
    textElement.innerHTML = "Hello JavaScript!";
    textElement.style.color = "crimson";
  } else {
    textElement.innerHTML = "Hello World";
    textElement.style.color = "#2c3e50";
  }
}

// Task 1: Button that changes color when clicked
document.getElementById("colorButton").addEventListener("click", function () {
  // Generate a random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  this.style.backgroundColor = randomColor;
});

// Task 2: Show greeting message based on the current time
function greetingMessage() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);
}

// Task 3: Basic Calculator that adds two numbers
function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 + num2;
    document.getElementById("result").innerHTML = `Result: ${result}`;
  } else {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
  }
}

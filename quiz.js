function checkConditions() {
  const age = document.getElementById("userInput").value;
  const box = document.getElementById("resultBox");
  const text = document.getElementById("statusText");

  // Reset classes before applying new ones
  box.className = "default-box";

  // Condition 1: Check if input is empty
  if (age === "") {
    text.innerHTML = "Please enter a number.";
  } 
  // Condition 2: Check for Minor (under 18)
  else if (age < 18) {
    text.innerHTML = "Status: Minor";
    box.classList.add("minor");
  } 
  // Condition 3: Check for Senior (65+)
  else if (age >= 65) {
    text.innerHTML = "Status: Senior";
    box.classList.add("senior");
  } 
  // Default: Adult (18-64)
  else {
    text.innerHTML = "Status: Adult";
    box.classList.add("adult");
  }
}

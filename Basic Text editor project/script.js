// Selecting necessary elements from the DOM
const run_btn = document.getElementById('run-btn')
const show = document.getElementById('show')
const result_div = document.getElementById('result')
const code_box = document.getElementById('code-box')
const icon = document.getElementById('icon')
var code = document.getElementById('code')

// Function to run the code entered by the user
function runCode() {
    // Get the value of the code entered in the textarea
    let code = document.getElementById('code').value;

    // Display the entered code in the result div
    result_div.innerHTML = code

    // Show the result and hide the code input
    show.style.display = "block";
    code_box.style.display = "none";
    run_btn.style.display = "none";
    icon.style.display = "block";
}

// Function to go back to the code input from the result view
function back() {
    // Hide the result and show the code input again
    show.style.display = "none";
    code_box.style.display = "block";
    run_btn.style.display = "block";
    icon.style.display = "none";
}

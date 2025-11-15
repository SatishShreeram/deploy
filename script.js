// Get the button element by its ID
const button = document.getElementById('magic-button');

// Get the message area element by its ID
const messageArea = document.getElementById('message-area');

// Variable to track the click count
let clickCount = 0;

// Add an event listener to the button
button.addEventListener('click', function() {
    // Increment the counter
    clickCount++;

    // Change the text content of the message area
    messageArea.textContent = `Hello! You've clicked the button ${clickCount} time(s). JavaScript is working!`;
    
    // Optionally change the button text
    button.textContent = 'Clicked!';
    
    // Reset button text after a short delay
    setTimeout(() => {
        button.textContent = 'Click Me';
    }, 1000);
});
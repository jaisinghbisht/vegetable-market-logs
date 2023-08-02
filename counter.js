/* ----------------------------- SCRIPT FOR COUNTER --------------------------- */

// Get all elements with the class "counter-nums"
let valueDisplays = document.querySelectorAll('.counter-nums');

// Duration of the counter animation in milliseconds
let duration = 1000;

// Increment step to control the counter speed
let incrementStep = 150;

// Boolean flag to track if the counter has already started
let counterStarted = false;

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    const counterSectionHeight = element.offsetHeight;
    const threshold = windowHeight * 0.2;

    return (
        rect.top >= -threshold &&
        rect.bottom <= windowHeight + threshold &&
        rect.top >= -counterSectionHeight &&
        rect.bottom <= windowHeight + counterSectionHeight
    );
}

// Function to start the counter animation
function startCounter() {
    // If the counter has already started, return early
    if (counterStarted) return;

    let maxEndValue = 0;

    // Find the maximum end value among all the elements
    valueDisplays.forEach((valueDisplay) => {
        let endValue = parseInt(valueDisplay.getAttribute('data-val'));
        if (endValue > maxEndValue) {
            maxEndValue = endValue;
        }
    });

    // Animate each counter element
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-val'));

        // Calculate the increment interval based on the duration and max end value
        let incrementInterval = (duration * incrementStep) / maxEndValue;

        // Calculate the increment for each step of the counter animation
        let increment = Math.ceil(endValue / (duration / incrementInterval));

        // Start the counter animation using setInterval
        let counter = setInterval(function() {
            startValue += increment;

            // If the startValue reaches or exceeds the endValue, stop the counter
            if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(counter);
            }

            // Update the text content of the element with the current counter value
            valueDisplay.textContent = startValue.toLocaleString() + '+';
        }, incrementInterval);
    });

    // Set the counterStarted flag to true to prevent starting the counter again
    counterStarted = true;
}

// Add a scroll event listener to trigger the counter when the counter section is in the viewport
window.addEventListener('scroll', function() {
    const counterSection = document.querySelector('.counter');
    if (isInViewport(counterSection)) {
        startCounter();
    }
});
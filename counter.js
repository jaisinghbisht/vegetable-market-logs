/* ----------------------------- SCRIPT FOR COUNTER --------------------------- */

let valueDisplays = document.querySelectorAll(".counter-nums");
let duration = 1000;
let incrementStep = 150;
let counterStarted = false;

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const counterSectionHeight = element.offsetHeight;
    const threshold = windowHeight * 0.20;

    return (
        rect.top >= -threshold &&
        rect.bottom <= windowHeight + threshold &&
        rect.top >= -counterSectionHeight &&
        rect.bottom <= windowHeight + counterSectionHeight
    );
}

function startCounter() {
    if (counterStarted) return;

    let maxEndValue = 0;
    valueDisplays.forEach((valueDisplay) => {
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        if (endValue > maxEndValue) {
            maxEndValue = endValue;
        }
    });

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let incrementInterval = (duration * incrementStep) / maxEndValue;
        let increment = Math.ceil(endValue / (duration / incrementInterval));
        let counter = setInterval(function() {
            startValue += increment;
            if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(counter);
            }
            valueDisplay.textContent = startValue.toLocaleString() + "+";
        }, incrementInterval);
    });

    counterStarted = true;
}

window.addEventListener("scroll", function() {
    const counterSection = document.querySelector(".counter");
    if (isInViewport(counterSection)) {
        startCounter();
    }
});
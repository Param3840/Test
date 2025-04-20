
document.addEventListener("DOMContentLoaded", function () {
const elements = document.querySelectorAll(".portfolio, .task, .web");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 }); // Trigger when 30% of element is visible

elements.forEach(element => observer.observe(element));
});



document.addEventListener("DOMContentLoaded", function () {
const elements = document.querySelectorAll(".portfolio, .task, .web");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 }); // Trigger when 30% of element is visible

elements.forEach(element => observer.observe(element));
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbx1GmVatlkSw0jOggiswfQlSO-jhHuVamxxAXmxq5lSfe8RYxsCFPErL3O5gtOpShMifw/exec';
const form = document.forms['submit-to-google-sheet'];
const submitButton = document.querySelector(".submit-button");

form.addEventListener('submit', e => {
e.preventDefault();

// Change button text to "Sending..."
submitButton.textContent = "Sending...";
submitButton.disabled = true;

fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        console.log('Success!', response);
        
        // Change button text to "Message Sent"
        submitButton.textContent = "Message Sent";
        submitButton.style.backgroundColor = "green"; // Optional: Change color to indicate success
        
        // Clear input fields
        form.reset();

        setTimeout(() => {
            submitButton.textContent = "Send Message";
            submitButton.style.backgroundColor = ""; 
            submitButton.disabled = false;
        }, 3000);
    })
    .catch(error => {
        console.error('Error!', error.message);
        submitButton.textContent = "Send Message"; 
        submitButton.disabled = false;
    });
});
document.addEventListener("DOMContentLoaded", function () {
// Select all navbar links with #id references
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        // Get the target section's ID
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for navbar height if needed
                behavior: "smooth"
            });
        }
    });
});
});

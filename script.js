const form = document.getElementById("contactForm");
const spinner = document.getElementById("spinner");
const submitButton = form.querySelector("button");
const messageField = form.querySelector("#message");
const charCount = document.getElementById("charCount");

// Remove red border when user starts typing
form.name.addEventListener("input", () => form.name.classList.remove("error"));
form.email.addEventListener("input", () =>
    form.email.classList.remove("error")
);
form.message.addEventListener("input", () =>
    form.message.classList.remove("error")
);

// Character Counter
messageField.addEventListener("input", () => {
    charCount.textContent = `${messageField.value.length}/500`;
});
messageField.maxLength = 500;

// Response Message Div
const responseMessage = document.createElement("div");
responseMessage.classList.add("response-message");
form.appendChild(responseMessage);

// Confirmation Modal Elements
const modal = document.getElementById("confirmationModal");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal if user clicks outside content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Form Submission Logic
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitButton.disabled = true;
    spinner.style.display = "block";
    responseMessage.textContent = "";
    responseMessage.className = "response-message";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validation: Check Empty Fields
    if (name === "" || email === "" || message === "") {
        spinner.style.display = "none";
        submitButton.disabled = false;
        responseMessage.textContent = "Please fill in all fields.";
        responseMessage.classList.add("response-error");

        // Highlight empty fields
        if (name === "") form.name.classList.add("error");
        if (email === "") form.email.classList.add("error");
        if (message === "") form.message.classList.add("error");
        return;
    }

    // Email Pattern Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        spinner.style.display = "none";
        submitButton.disabled = false;
        responseMessage.textContent = "Please enter a valid email address.";
        responseMessage.classList.add("response-error");
        form.email.classList.add("error");
        return;
    }

    // API Submission (Example URL)
    try {
        const res = await fetch("https://example.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message }),
        });

        spinner.style.display = "none";
        submitButton.disabled = false;

        if (res.ok) {
            form.reset();

            // Remove any lingering error classes
            form.name.classList.remove("error");
            form.email.classList.remove("error");
            form.message.classList.remove("error");

            // Show confirmation modal
            modal.style.display = "block";
        } else {
            responseMessage.textContent = "Failed to send message.";
            responseMessage.classList.add("response-error");
        }
    } catch (error) {
        spinner.style.display = "none";
        submitButton.disabled = false;
        responseMessage.textContent =
            "Error submitting form. Please try again later.";
        responseMessage.classList.add("response-error");
    }

    // Auto-clear response message after 4 seconds
    setTimeout(() => {
        responseMessage.textContent = "";
        responseMessage.className = "response-message";
    }, 4000);
});

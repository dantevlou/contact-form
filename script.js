const form = document.getElementById("contactForm");
const spinner = document.getElementById("spinner");
const submitButton = form.querySelector("button");

const responseMessage = document.createElement("div");
responseMessage.classList.add("response-message");
form.appendChild(responseMessage);

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    submitButton.disabled = true;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    responseMessage.textContent = "";
    spinner.style.display = "block"; // Show spinner

    if (name === "" || email === "" || message === "") {
        spinner.style.display = "none"; // Hide spinner
        submitButton.disabled = false;
        responseMessage.textContent = "Please fill in all fields.";
        responseMessage.classList.add("response-error");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        spinner.style.display = "none"; // Hide spinner
        submitButton.disabled = false;
        responseMessage.textContent = "Please enter a valid email address.";
        responseMessage.classList.add("response-error");
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

        spinner.style.display = "none"; // Hide spinner after response
        submitButton.disabled = false;

        if (res.ok) {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.classList.add("response-success");
            form.reset();
        } else {
            responseMessage.textContent = "Failed to send message.";
            responseMessage.classList.add("response-error");
        }
    } catch (error) {
        spinner.style.display = "none"; // Hide spinner on error
        submitButton.disabled = false;
        responseMessage.textContent =
            "Error submitting form. Please try again later.";
        responseMessage.classList.add("response-error");
    }
});

const form = document.getElementById("contactForm");
const spinner = document.getElementById("spinner");

const responseMessage = document.createElement("div");
form.appendChild(responseMessage);

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    responseMessage.textContent = "";
    spinner.style.display = "block"; // Show spinner

    if (name === "" || email === "" || message === "") {
        spinner.style.display = "none"; // Hide spinner
        responseMessage.textContent = "Please fill in all fields.";
        responseMessage.style.color = "red";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        spinner.style.display = "none"; // Hide spinner
        responseMessage.textContent = "Please enter a valid email address.";
        responseMessage.style.color = "red";
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

        if (res.ok) {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";
            form.reset();
        } else {
            responseMessage.textContent = "Failed to send message.";
            responseMessage.style.color = "red";
        }
    } catch (error) {
        spinner.style.display = "none"; // Hide spinner on error
        responseMessage.textContent =
            "Error submitting form. Please try again later.";
        responseMessage.style.color = "red";
    }
});

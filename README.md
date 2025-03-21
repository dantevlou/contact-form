# Contact Form Template 

A fully functional, modern **Contact Form Template** built with **HTML, CSS, and JavaScript**. Features include validation, API submission, animations, and mobile responsiveness.

---
## Contact Form Preview (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧

![Contact Form Preview](https://github.com/user-attachments/assets/e9a1aace-57ff-4bc0-8f85-165bf1e35fa6)

## Features

- **Floating Labels**  
  Smoothly animated floating labels that move when the user focuses or types.

- **Form Validation**  
  - All fields are required.  
  - Invalid inputs show clear error messages.  
  - Real-time feedback — errors disappear as you type.

- **Character Counter**  
  Displays remaining characters (500 character limit) for the message field.

- **Loading Spinner**  
  Shows a visual spinner during form submission for a better user experience.

- **Confirmation Modal**  
  Pops up and thanks the user after successful submission.

- **API Submission Ready**  
  Uses `fetch()` to send form data to any API endpoint. Supports services like **Formspree**, **EmailJS**, Netlify, or your own backend.

- **Responsive Design**  
  Mobile-first and fully responsive. It looks great on all screen sizes.

- **Smooth Animations**  
  Fade-ins, hovers, and transitions for a clean modern touch.

---

## How to Use 

1. **Clone This Repository:**

```bash
git clone https://github.com/dantevlou/contact-form-template.git
cd contact-form-template
```

2. **Open the project files in your code editor if you want to edit or customise.**
3. **Open `index.html` in your browser to view and test the form live.**

4. **Connect to Your API:**  
   Inside `script.js`, find this placeholder code:

```javascript
await fetch("https://example.com/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message }),
});
```

Replace `https://example.com/api/contact` with your real API endpoint. You can use:
- Formspree
- EmailJS
- Netlify Forms
- Or your own custom backend.

---



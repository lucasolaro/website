// JavaScript file (script.js)

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Email", email);
    formData.append("Message", message);

    try {
        const response = await fetch("https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Your message has been sent successfully!");
            document.getElementById("contactForm").reset();
        } else {
            alert("There was an issue sending your message. Please try again later.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error sending your message. Please try again later.");
    }
});

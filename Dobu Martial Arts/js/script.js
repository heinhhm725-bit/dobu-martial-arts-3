const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

}


/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {

            formMessage.textContent =
                "Please complete all required fields.";

            return;

        }

        formMessage.textContent =
            "Thank you. Your enquiry has been received.";

        contactForm.reset();

    });

}
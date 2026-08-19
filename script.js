// ================================
// EmailJS Setup
// ================================
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init({
      publicKey: "CZZErKUZsQ-yzS-OX",
    });
  }
})();

// ================================
// Mobile Menu Toggle
// ================================
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}

// ================================
// Sticky Header
// ================================
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (!header) return;

  header.style.boxShadow =
    window.scrollY > 50 ? "0 4px 15px rgba(0,0,0,.15)" : "none";
});

// ================================
// Close Menu on Link Click
// ================================
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar) navbar.classList.remove("active");
  });
});

// ================================
// Hero Background Slider
// ================================
const hero = document.querySelector(".hero");
const heroImages = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg",
];

let currentHero = 0;

function changeHero() {
  if (!hero || heroImages.length === 0) return;
  hero.style.backgroundImage = `url(${heroImages[currentHero]})`;
  currentHero = (currentHero + 1) % heroImages.length;
}

changeHero();
setInterval(changeHero, 5000);

// ================================
// Booking Form
// ================================
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const pickup = document.getElementById("pickup")?.value || "";
    const drop = document.getElementById("drop")?.value || "";
    const date = document.getElementById("date")?.value || "";

    const text = `New Booking Request
Name: ${name}
Phone: ${phone}
Pickup: ${pickup}
Drop: ${drop}
Date: ${date}`;

    const whatsappUrl = `https://wa.me/916362108105?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    if (typeof emailjs !== "undefined") {
      emailjs
        .send("service_o22h1mh", "template_vns88l4", {
          name: name,
          phone: phone,
          pickup: pickup,
          drop: drop,
          date: date,
          message: text,
        })
        .then(() => {
          alert("Booking sent successfully!");
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          alert("WhatsApp opened, but email sending failed.");
        });
    } else {
      alert("WhatsApp opened.");
    }

    bookingForm.reset();
  });
}

// ================================
// Contact Form
// ================================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us!");
    contactForm.reset();
  });
}

// ================================
// Scroll Animation
// ================================
const cards = document.querySelectorAll(
  ".card,.fleet-card,.package-card,.testimonial,.features div"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";
    observer.observe(card);
  });
} else {
  cards.forEach((card) => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });
}

// ================================
// Footer Year
// ================================
const footer = document.querySelector("footer");

if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML += `

© ${year} TravelGo Tours & Travels. All Rights Reserved.

`;
}

console.log("TravelGo Website Loaded Successfully");
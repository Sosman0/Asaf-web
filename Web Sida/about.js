// JavaScript for About Us Page

// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for navigation links
    const navbarLinks = document.querySelectorAll(".navbar-links a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const target = document.querySelector(e.target.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Image enlargement effect on click
    const images = document.querySelectorAll(".images img");

    images.forEach(image => {
        image.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");
            document.body.appendChild(overlay);

            const enlargedImg = document.createElement("img");
            enlargedImg.src = image.src;
            enlargedImg.alt = image.alt;
            enlargedImg.classList.add("enlarged-image");
            overlay.appendChild(enlargedImg);

            // Close overlay on click
            overlay.addEventListener("click", () => {
                overlay.remove();
            });
        });
    });

    // Scroll to top button functionality
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerText = "↑ Top";
    scrollTopBtn.classList.add("scroll-top-btn");
    document.body.appendChild(scrollTopBtn);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Add tooltip to images
    images.forEach(image => {
        const tooltip = document.createElement("span");
        tooltip.classList.add("image-tooltip");
        tooltip.innerText = image.alt;
        image.parentElement.style.position = "relative";
        image.parentElement.appendChild(tooltip);

        image.addEventListener("mouseenter", () => {
            tooltip.classList.add("visible");
        });

        image.addEventListener("mouseleave", () => {
            tooltip.classList.remove("visible");
        });
    });

});

// Add CSS for JavaScript functionalities
document.head.insertAdjacentHTML("beforeend", `
<style>
    /* Image overlay styles */
    .image-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .enlarged-image {
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    /* Scroll to top button styles */
    .scroll-top-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #f0b429;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
    }

    .scroll-top-btn:hover {
        background: #d9991f;
    }

    /* Image tooltip styles */
    .image-tooltip {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.9rem;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        pointer-events: none;
    }

    .image-tooltip.visible {
        opacity: 1;
        visibility: visible;
    }
</style>
`);
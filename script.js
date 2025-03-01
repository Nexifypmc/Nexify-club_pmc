// Dark Mode Toggle
const toggleSwitch = document.getElementById("checkboxInput");

toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
});

// Dynamic Shadow for Logo
const logo = document.querySelector(".club-logo");

logo.addEventListener("mousemove", (e) => {
    const rect = logo.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    const moveX = (x / width - 0.5) * 20;
    const moveY = (y / height - 0.5) * 20;

    logo.style.boxShadow = `${-moveX}px ${-moveY}px 30px rgba(0, 0, 0, 0.4)`;
    logo.style.transform = `translateX(${moveX / 5}px) translateY(${moveY / 5}px)`;
});

logo.addEventListener("mouseleave", () => {
    logo.style.boxShadow = "none";
    logo.style.transform = "translateX(0) translateY(0)";
});

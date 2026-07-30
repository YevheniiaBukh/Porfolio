
document.getElementById("year").textContent = new Date().getFullYear();


document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(li => {
        li.classList.remove("active");

        const link = li.querySelector("a");
        if (link && link.getAttribute("href") === "#" + current) {
            li.classList.add("active");
        }
    });
});
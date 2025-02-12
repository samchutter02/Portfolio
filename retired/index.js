//---------------------------------------

// [NAV-APPEARANCE] - Handles the adding and removing of [] to nav-links
const links = document.querySelectorAll('.nav-links');
links.forEach(link => {
    link.dataset.originalText = link.textContent;

    link.addEventListener('click', () => {
        links.forEach(otherLink => {
            otherLink.classList.remove('active');
            otherLink.textContent = otherLink.dataset.originalText;
        });

        link.classList.add('active');
        link.textContent = `/* ${link.dataset.originalText} */`;
    });
});

//---------------------------------------------------------
// [NAV-FUNCTIONALITY] - Handles collapsing/showing on navbar on small screens
const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.links');

// hamburger icon expands and closes menu
navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// clicking a link auto-closes menu
navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// [HERO-APPEARANCE] - Typing animations -------------------
const text = "`Hello, my name is";
const textTwo = "Samuel Chutter,";
const textThree = "but you can just call me`";
const typingText = document.getElementById("typingText");
const typingTextTwo = document.getElementById("typingTextTwo");
const typingTextThree = document.getElementById("typingTextThree");
let charIndex = 0;
let charIndexTwo = 0;
let charIndexThree = 0;

// Animates top line
function typeText() {
    if (charIndex < text.length) {
        typingText.textContent = text.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, 40);
    } else {
        typingText.classList.add("done");
        setTimeout(typeTextTwo, 100);
    }
}
// Animates middle line
function typeTextTwo() {
    if (charIndexTwo < textTwo.length) {
        typingTextTwo.textContent = textTwo.substring(0, charIndexTwo + 1);
        charIndexTwo++;
        setTimeout(typeTextTwo, 100);
    } else {
        typingTextTwo.classList.add("done");
        setTimeout(typeTextThree, 100);
    }
}
// Animates bottom line
function typeTextThree() {
    if (charIndexThree < textThree.length) {
        typingTextThree.textContent = textThree.substring(0, charIndexThree + 1);
        charIndexThree++;
        setTimeout(typeTextThree, 40);
    } else {
        typingTextThree.classList.add("done");

        setTimeout(() => {
            // Hide lines
            typingText.textContent = " ";
        }, 50);

        setTimeout(() => {
            typingTextThree.textContent = " ";
        }, 750);

        setTimeout(() => {
            typingTextTwo.innerHTML = `
                <span style="color: rgb(255, 255, 255);">Sam C</span><span style="color:rgb(78, 78, 78);">hutter</span>
            `;
            typingTextThree.textContent = "[Web Developer]";
        }, 1000);
    }
}

// Start typing animation after page load
window.addEventListener("load", () => {
    setTimeout(typeText, 100);
});

// [PROJECT CARD - APPEARANCE] ----------------------------
const projects = [
    {
        image: "img/nest.jpg",
        title: "Nest Counseling",
        description: "A commissioned therapy practice website with clean design, and streamlined navigation. Built with semantic HTML, CSS, and Bootstrap 5.",
        tech: ["HTML5", "CSS", "Bootstrap", "JavaScript"],
        view: "http://www.nest-counseling.com"
    },
    {
        image: "img/blog.png",
        title: "DevJourney",
        description: "My web development learning blog featuring a neon cyberpunk aesthetic. Built with modern CSS including gradients, transitions, and hover effects.",
        tech: ["HTML5", "CSS", "Vanilla JavaScript"],
        view: "http://www.devjourney.samchutter.com"
    },
    {
        image: "img/culcorner.png",
        title: "Culinary Corner",
        description: "A food and cocktail photography and ingredient exploration web app. Combining learning, innovation, and strict anti-philosophies.",
        tech: ["HTML5", "CSS", "Vanilla JavaScript"],
        view: "http://www.culinarycorner.samchutter.com"
    },
    {
        image: "img/paws.png",
        title: "Paws on Tour",
        description: "A Vue.js-powered campus exploration app w/ interactive mapping, dynamic filtering, and comprehensive wayfinding for TXST campus landmarks.",
        tech: ["HTML5", "CSS", "Vue.js"],
        view: "http://www.pawsonttour.samchutter.com"
    }
];

const projectsContainer = document.getElementById("projects");


projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("my-project");

    projectCard.innerHTML = `
    <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
    </div>
    <div class="project-title">
        <h1>${project.title}</h1>
    </div>
    <div class="project-desc">
        <p>${project.description}</p>
    </div>
    <div class="project-tech">
        ${project.tech.map(tech => `<p class="tech-tag">${tech}</p>`).join("")}
    </div>
    <div class="project-view">
        <p class="view-preview"><a href="${project.view}" target="_blank">View project</a></p>
    </div>
  `;

    projectsContainer.appendChild(projectCard);
});

// [TOOLKIT LOGOS - APPEARANCE] ----------------------------
const toolkitLogos = [ // all icon image links
    "html.png",
    "css.png",
    "tailwind.png",
    "bootstrap.png",
    "javascript.png",
    "react.png",
    "jquery.png",
    "express.png",
    "node.png",
    "cpp.png"
];

const toolkitContainer = document.getElementById('stack'); // select all elements with id 'toolKit'

toolkitLogos.forEach(logo => {
    const logoDiv = document.createElement('div');
    logoDiv.className = "toolkit-logo";

    const img = document.createElement('img');
    img.src = `logos/${logo}`;

    logoDiv.appendChild(img);
    toolkitContainer.appendChild(logoDiv);
});

// [ABOUT CARDS - FUNCTIONALITY] -----------------------------
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    function revealOnScroll() {
        projects.forEach((project) => {
            const projectPosition = project.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (projectPosition < screenPosition) {
                project.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
});

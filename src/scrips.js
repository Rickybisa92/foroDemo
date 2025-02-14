
    const toggleButton = document.getElementById("modo-toggle");
    const body = document.body;
    const icon = toggleButton.querySelector("i");

    if (localStorage.getItem("modo") === "oscuro") {
        body.classList.add("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("modo", "oscuro");
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            localStorage.setItem("modo", "claro");
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });


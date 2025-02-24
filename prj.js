document.getElementById("changeTheme").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

const style = document.createElement("style");
style.innerHTML = `
    .dark-theme {
        background-color: #222;
        color: white;
    }
    .dark-theme header, .dark-theme footer {
        background-color: #555;
    }
`;
document.head.appendChild(style);

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submi-button");
    const form = document.getElementById("form");
    form.addEventListener("submit", (form) => {
        console.log(form);
    });
});
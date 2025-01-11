window.onload = () => {
    const content = document.getElementById("reviewContent");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", () => {
        if (content.classList.contains("max-h-24")) {
            content.classList.remove("max-h-24");
            content.classList.add("max-h-full");
            toggleButton.textContent = "بستن";
        } else {
            content.classList.remove("max-h-full");
            content.classList.add("max-h-24");
            toggleButton.textContent = "ادامه مطلب";
        }
    });
}
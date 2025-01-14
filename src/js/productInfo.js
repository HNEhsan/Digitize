window.onload = () => {
    const content = document.getElementById("reviewContent");
    const toggleButton = document.getElementById("toggleButton");
    const btnSelectColors = document.querySelectorAll("[aria-label='selectColors'] div button");
    const reviewContent = document.querySelectorAll("[aria-labelledby='reviewContent'] div[aria-label]");

    btnSelectColors.forEach((item) => {
        item.addEventListener("click", () => {

            // Remove all Menu Content classes
            btnSelectColors.forEach((item) => {
                item.classList.remove("ring-4", "ring-gray-200");
                item.innerHTML = "";
            });

            // Set Menu Content
            item?.classList.add("ring-4", "ring-gray-200");
            item.innerHTML = `
                                <i class="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        stroke="currentColor" stroke-width="1.5" class="size-4 stroke-white"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </i>
                            `;
        });
    });


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

    reviewContent.forEach((item) => {
        item.addEventListener("click", () => {

            // Remove all Menu Content classes
            reviewContent.forEach((item) => {
                item.classList.remove("bg-white", "shadow-md");
            });

            // Get Menu Label
            let label = item.getAttribute("aria-label");

            // Set Menu Content
            item.classList.add("bg-white", "shadow-md");

            const contentMap = {
                camera: "cameraContent",
                design: "designContent",
                battery: "batteryContent",
            };

            if (contentMap[label]) {
                Object.values(contentMap).forEach((id) => {
                    document.getElementById(id)?.classList.add("hidden");
                });
                document.getElementById(contentMap[label])?.classList.remove("hidden");
            } else {
                console.warn("Unknown label:", label);
            }
        });
    });

}
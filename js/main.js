const searchBtn = document.getElementById("searchBtn");
const regInput = document.getElementById("regNumber");
const errorMsg = document.getElementById("errorMsg");
const loader = document.getElementById("loader");

searchBtn.addEventListener("click", () => {
    errorMsg.textContent = "";
    const reg = regInput.value.trim();

    if (reg === "" || isNaN(reg)) {
        errorMsg.textContent = "Please enter a valid registration number.";
        return;
    }

    loader.classList.remove("hidden");

    setTimeout(() => {
        loader.classList.add("hidden");
        window.location = `results.html?reg=${reg}`;
    }, 1500);
});

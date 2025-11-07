// Liste over byer og deres tidszoner
const cities = [
    { name: "København", timezone: "Europe/Copenhagen" },
    { name: "New York", timezone: "America/New_York" },
    { name: "London", timezone: "Europe/London" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "Sydney", timezone: "Australia/Sydney" }
];

// Find containeren i HTML
const container = document.getElementById("clockContainer");

// Opret HTML-elementer for hver by
cities.forEach(city => {
    const cityDiv = document.createElement("div");
    cityDiv.className = "clock";
    cityDiv.innerHTML = `
    <h2>${city.name}</h2>
    <p id="${city.timezone.replace('/', '_')}"></p>
  `;
    container.appendChild(cityDiv);
});

// Funktion til at opdatere tiderne
function updateClocks() {
    cities.forEach(city => {
        const now = new Date().toLocaleTimeString("da-DK", {
            timeZone: city.timezone,
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        document.getElementById(city.timezone.replace('/', '_')).textContent = now;
    });
}

// Opdater hvert sekund
setInterval(updateClocks, 1000);
updateClocks();

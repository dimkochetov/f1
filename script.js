const races = [
    { name: "Гран-при Австралии", date: "2025-03-16" },
    { name: "Гран-при Китая", date: "2025-03-23" },
    { name: "Гран-при Японии", date: "2025-04-06" },
    // Добавьте остальные этапы сюда
];

function updateCountdown() {
    const now = new Date();
    for (let race of races) {
        const raceDate = new Date(race.date);
        if (raceDate > now) {
            const diffTime = Math.abs(raceDate - now);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            document.getElementById("countdown").innerText = `${diffDays} дней до ${race.name}`;
            break;
        }
    }
}

updateCountdown();
setInterval(updateCountdown, 86400000); // Обновление каждый день

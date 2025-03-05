function updateCountdown() {
    const raceDates = [
        new Date("2025-03-16T00:00:00"),  // Гран-при Австралии
        new Date("2025-03-23T00:00:00"),  // Гран-при Китая
        new Date("2025-04-06T00:00:00"),  // Гран-при Японии
        // Добавь остальные этапы сюда
    ];
    
    const now = new Date();
    
    // Найти ближайшую дату
    let nextRace = null;
    for (let date of raceDates) {
        if (date > now) {
            nextRace = date;
            break;
        }
    }
    
    if (!nextRace) return;  // Если гонки закончились, ничего не делаем

    const diff = nextRace - now;  // Разница в миллисекундах
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

    
   const now = new Date();
    
    let nextRace = null;
    for (let race of raceDates) {
        if (race.date > now) {
            nextRace = race;
            break;
        }
    }
    
    if (!nextRace) {
        document.getElementById("countdown").innerHTML = "Сезон завершён!";
        return;
    }

    const diff = nextRace.date - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerHTML = `${days} дней до ${nextRace.name}`;
    document.getElementById("daysLeft").textContent = days;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function updateSpeedometer() {
    const now = new Date();
    const seconds = now.getSeconds();
    const angle = -((seconds / 60) * 360); // Движение ПРОТИВ часовой стрелки
    
    document.getElementById("needle").setAttribute(
        "transform",
        `rotate(${angle} 150 150)`
    );
}

setInterval(updateSpeedometer, 1000);
updateSpeedometer();

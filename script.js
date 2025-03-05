function updateCountdown() {
    const raceDates = [
        new Date("2024-03-16T00:00:00"),  // Гран-при Австралии
        new Date("2024-03-23T00:00:00"),  // Гран-при Китая
        new Date("2024-04-06T00:00:00"),  // Гран-при Японии
        new Date("2024-04-13T00:00:00"),  // Гран-при Бахрейна
        // Добавь другие этапы сюда
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

// Обновляем каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();

function updateSpeedometer() {
    const now = new Date();
    const seconds = now.getSeconds();
    const angle = (seconds / 60) * 360; // Преобразуем секунды в градусы
    
    document.getElementById("needle").setAttribute(
        "transform",
        `rotate(${angle} 150 150)`
    );
}

// Обновляем стрелку каждую секунду
setInterval(updateSpeedometer, 1000);
updateSpeedometer();

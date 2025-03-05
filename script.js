function updateCountdown() {
    const raceDates = [
        { date: new Date("2025-03-16T00:00:00"), name: "Гран-при Австралии" },
        { date: new Date("2025-03-23T00:00:00"), name: "Гран-при Китая" },
        { date: new Date("2025-04-06T00:00:00"), name: "Гран-при Японии" },
        { date: new Date("2025-04-13T00:00:00"), name: "Гран-при Бахрейна" },
        { date: new Date("2025-04-20T00:00:00"), name: "Гран-при Саудовской Аравии" },
        { date: new Date("2025-05-04T00:00:00"), name: "Гран-при Майами" },
        { date: new Date("2025-05-18T00:00:00"), name: "Гран-при Эмилии-Романьи" },
        { date: new Date("2025-05-25T00:00:00"), name: "Гран-при Монако" },
        { date: new Date("2025-06-01T00:00:00"), name: "Гран-при Испании" },
        { date: new Date("2025-06-15T00:00:00"), name: "Гран-при Канады" },
        { date: new Date("2025-06-29T00:00:00"), name: "Гран-при Австрии" },
        { date: new Date("2025-07-06T00:00:00"), name: "Гран-при Великобритании" },
        { date: new Date("2025-07-27T00:00:00"), name: "Гран-при Бельгии" },
        { date: new Date("2025-08-03T00:00:00"), name: "Гран-при Венгрии" },
        { date: new Date("2025-08-31T00:00:00"), name: "Гран-при Нидерландов" },
        { date: new Date("2025-09-07T00:00:00"), name: "Гран-при Италии" },
        { date: new Date("2025-09-21T00:00:00"), name: "Гран-при Азербайджана" },
        { date: new Date("2025-10-05T00:00:00"), name: "Гран-при Сингапура" },
        { date: new Date("2025-10-19T00:00:00"), name: "Гран-при США" },
        { date: new Date("2025-10-26T00:00:00"), name: "Гран-при Мексики" },
        { date: new Date("2025-11-09T00:00:00"), name: "Гран-при Бразилии" },
        { date: new Date("2025-11-22T00:00:00"), name: "Гран-при Лас-Вегаса" },
        { date: new Date("2025-11-30T00:00:00"), name: "Гран-при Катара" },
        { date: new Date("2025-12-07T00:00:00"), name: "Гран-при Абу-Даби" }
    ];
    
    const now = new Date();
    
    // Найти ближайшую гонку
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

    const diff = nextRace.date - now;  // Разница в миллисекундах
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд до ${nextRace.name}`;
    document.getElementById("daysLeft").textContent = days;
}

// Обновляем каждую секунду
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

// Обновляем стрелку каждую секунду
setInterval(updateSpeedometer, 1000);
updateSpeedometer();

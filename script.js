// Массив полезных советов
const adviceList = [
    "💡 Пейте больше воды — это улучшает работу мозга и кожи",
    "🏃‍♀️ 10000 шагов в день укрепляют сердце",
    "📵 Убирайте телефон во время работы",
    "🍋 Пейте воду с лимоном утром",
    "😴 Ложитесь спать до 23:00",
    "📝 Делайте самое важное дело первым утром",
    "🥦 Ешьте зелёные овощи каждый день",
    "🧘‍♀️ Растяжка утром улучшает гибкость",
    "📚 Читайте 20 минут в день — это прокачивает словарный запас",
    "⏰ Работайте 25 минут, отдыхайте 5",
    "🧘‍♂️ Делайте короткие перерывы каждые 45 минут работы",
    "😴 Спите 7-8 часов — это основа продуктивности",
    "✍️ Записывайте идеи — они могут изменить вашу жизнь",
    "🏃‍♂️ 10 минут утренней зарядки заряжают энергией на весь день",
    "🍎 Ешьте фрукты вместо сладостей",
    "📱 Убирайте телефон за час до сна",
    "🎯 Ставьте 3 главные задачи на день",
    "🙏 Благодарите за маленькие радости каждый день",
    "🌞 Начинайте утро с улыбки",
    "🎧 Слушайте подкасты во время рутины",
    "💪 Не сравнивайте себя с другими — сравнивайте с собой вчерашним",
    "🗣️ Говорите 'нет' тому, что не приносит радости",
    "📖 Изучайте новое каждый день — хотя бы 5 минут",
    "🧹 Убирайте 5 минут каждый вечер — дом будет чистым всегда",
    "☕ Пейте кофе без сахара — вкус раскрывается лучше",
    "🚶‍♂️ Ходите пешком вместо транспорта, если возможно",
    "🎨 Найдите хобби, которое вас расслабляет",
    "💬 Общайтесь с близкими без телефонов",
    "🌿 Заведите комнатное растение — это успокаивает",
    "🎵 Слушайте любимую музыку для поднятия настроения",
    "📝 Ведите дневник достижений — записывайте даже маленькие победы"
];

let currentAdvice = "";

// Функция получения случайного совета
function getRandomAdvice() {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    return adviceList[randomIndex];
}

// Функция обновления совета на странице
function updateAdvice() {
    currentAdvice = getRandomAdvice();
    const adviceElement = document.getElementById('advice-text');
    const copyBtn = document.getElementById('copy-btn');
    
    // Добавляем анимацию
    adviceElement.style.opacity = '0';
    setTimeout(() => {
        adviceElement.textContent = currentAdvice;
        adviceElement.style.opacity = '1';
        copyBtn.style.display = 'inline-block';
    }, 200);
}

// Функция копирования совета
function copyAdvice() {
    navigator.clipboard.writeText(currentAdvice).then(() => {
        const copyBtn = document.getElementById('copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✅ Скопировано!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Ошибка копирования: ', err);
        alert('Не удалось скопировать совет');
    });
}

// Добавляем кнопку получения совета при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const getAdviceBtn = document.getElementById('get-advice-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    getAdviceBtn.addEventListener('click', updateAdvice);
    copyBtn.addEventListener('click', copyAdvice);
    
    // Показываем первый совет при загрузке
    updateAdvice();
});

// Добавляем горячую клавишу пробела для нового совета
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && document.activeElement !== document.getElementById('get-advice-btn')) {
        event.preventDefault();
        updateAdvice();
    }
});

// Эффект печати текста (дополнительная фича)
function typeWriter(text, element, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

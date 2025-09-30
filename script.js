// Счетчик для кнопки
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const countElement = document.getElementById('count');

counterBtn.addEventListener('click', function() {
    count++;
    countElement.textContent = count;
    
    // Добавляем анимацию
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    // Меняем цвет при определенных значениях
    if (count === 10) {
        this.style.background = '#48bb78';
        showMessage('🎊 Поздравляем! 10 нажатий!');
    } else if (count === 25) {
        this.style.background = '#ed8936';
        showMessage('🔥 Отлично! 25 нажатий!');
    } else if (count === 50) {
        this.style.background = '#9f7aea';
        showMessage('🚀 Невероятно! 50 нажатий!');
    }
});

function showMessage(text) {
    const message = document.createElement('div');
    message.textContent = text;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #48bb78;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.5s ease;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Добавляем стили для анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Показываем время загрузки страницы
window.addEventListener('load', function() {
    console.log('🚀 Сайт успешно загружен!');
});

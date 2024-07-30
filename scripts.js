document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы для управления бургер-меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    // Проверяем, что элементы были найдены
    if (!menuToggle) {
        console.error('Ошибка: кнопка бургер-меню не найдена.');
        return;
    }

    if (!navMenu) {
        console.error('Ошибка: меню не найдено.');
        return;
    }

    // Добавляем обработчик события на кнопку бургер-меню
    menuToggle.addEventListener('click', function() {
        // Проверяем, применяется ли класс активного состояния
        if (navMenu.classList.contains('active')) {
            console.log('Меню закрывается.');
        } else {
            console.log('Меню открывается.');
        }

        // Переключаем класс активности для показа/скрытия меню
        navMenu.classList.toggle('active');
    });

    // Выводим сообщение о том, что скрипт успешно загружен
    console.log('Скрипт для бургер-меню успешно загружен.');

    // Настройка слайдера
    const slider = document.querySelector('.slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});
//Проверка платформы пользователя 

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

// Получение кнопки и поля для ссылки

let inviteButton = document.querySelector('.invite-friend__button');
let popup = document.querySelector('.popup');

// Алгоритм действия при условии, что 1 - платформа пользователя ПК, 2 - платформа пользователя телефон

if (isMobile == false) {
    inviteButton.addEventListener("mouseenter", () => {
        checkValue (inviteButton);
        popup.classList.toggle('d-none');
    });
    inviteButton.addEventListener("mouseleave", () => {
        checkValue (inviteButton);
        popup.classList.toggle('d-none');
    });
    inviteButton.addEventListener("click", (event) => copyToClipboard());
} else {
    inviteButton.addEventListener('click', () => {
        checkValue (inviteButton);
        popup.classList.toggle('d-none');
        copyToClipboard();
    });
}

// Функция проверки значения элемента

function checkValue (element) {
    switch (element.textContent) {
        case 'Скопировать ссылку': 
        element.innerText = 'Пригласить друга';
        break;
        case 'Пригласить друга': 
        element.innerText = 'Скопировать ссылку';
        break;
    }
}

// Функция копирования в буфер обмена 

function copyToClipboard () {
    let copyInput = document.querySelector('.popup__url');
    copyInput.focus();
    copyInput.select();
    document.execCommand('copy');
}

// Функция для вызова модального окна

function showModal (modalId = 'result-output') {
    const modal = new bootstrap.Modal(document.querySelector(`#${modalId}`));
    modal.show();
}


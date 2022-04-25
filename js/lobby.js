// Скрипт для работы всплывающих подсказок

let popoverTriggerList = [].slice.call( document.querySelectorAll('[data-toggle="popover"]'));
let popoverList = popoverTriggerList.map( function(popoverTrigger) {
    return new bootstrap.Popover(popoverTrigger);
});

// Копировать в буфер обмена value кнопки "Пригласить друга"

let inviteButton = document.querySelector('.invite-friend__button');
inviteButton.addEventListener("pointerdown", () => navigator.clipboard.writeText(inviteButton.value));

// Функция для вызова модального окна

function showModal (modalId = 'result-output') {
    const modal = new bootstrap.Modal(document.querySelector(`#${modalId}`));
    modal.show();
}
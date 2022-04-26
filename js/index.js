// Массивы для хранения имён и ссылок комнат
// Порядок имеет значение - первый элемент массива roomNameList - название первой комнаты, первый элемент массива roomUrlList - ссылка первой кнопки.

let roomNameList = ['Тест'];
let roomUrlList = ["./lobby.html"];

function addRoom (listClassName = 'lobby__list', tag = 'a') {
    const list = document.querySelector(`.${listClassName}`);
    let listChildrenAmount = list.childElementCount;
    switch (listChildrenAmount) {
        case 0: 
        let bottomWrapper = document.querySelector('.wrapper__bottomside');
        bottomWrapper.classList.remove('d-none');
        createRoom (roomNameList[0], roomUrlList[0], 'list-group-item-primary', listClassName, tag);
        break;
        case 1: createRoom (roomNameList[1], roomUrlList[1], 'list-group-item-success', listClassName, tag);
        break;
        case 2: createRoom (roomNameList[2], roomUrlList[2], 'list-group-item-danger', listClassName, tag);
        break;
        case 3: createRoom (roomNameList[3], roomUrlList[3], 'list-group-item-warning', listClassName, tag);
        break;
        case 4: createRoom (roomNameList[4], roomUrlList[4], 'list-group-item-info', listClassName, tag);
        break;
        case 5: return false;
    }
}

function createRoom (roomName = 'Комната', roomUrl = '#', styleClass = 'list-group-item-primary', parentClass = 'lobby__list', tag = 'a') {
    const newRoom = document.createElement(tag);
    newRoom.innerText = roomName;
    newRoom.setAttribute('href', roomUrl);
    newRoom.classList.add('list-group-item', 'list-group-item-action', styleClass);
    const parent = document.querySelector(`.${parentClass}`);
    parent.appendChild(newRoom);
}

// Только для отладки

function deleteRoom (roomClass, parentClass = 'lobby__list') {
    const parent = document.querySelector(`.${parentClass}`);
    const room = document.querySelector(`.${roomClass}`);
    parent.removeChild(room);
    return true;
}

const addRoomButton = document.querySelector('.create-lobby__btn');
addRoomButton.addEventListener('click', () => addRoom());



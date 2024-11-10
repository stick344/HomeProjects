

// const user = {
//     id:145,
//     firstName:'Arnold',
//     lastName:'Wiskey',
//     email: 'arnoldwisk2347@gmail.com'
// };

// const user = localStorage.getItem('user')

// console.log(user);


// const firstName = document.querySelector('firstName');
// const lastName = document.querySelector('lastName');
// const emailUser = document.querySelector('emailIn');
// const passwordUser = document.querySelector('Password');

// const user = {
//     id:145,
//     firstName:'Arnold',
//     lastName:'Wiskey',
//     email: 'arnoldwisk2347@gmail.com'
// };

// const userName = localStorage.getItem('user')

// console.log(userName);

// Получаем ссылки на элементы формы и кнопки
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const saveBtn = document.getElementById('saveBtn');
const loadBtn = document.getElementById('loadBtn');

// Функция для сохранения данных в localStorage
function saveUserData() {
    const nickName = {
        nickname: nameInput.value
    };
    const userData = {
        name: nameInput.value,
        email: emailInput.value,
        age: ageInput.value
    };

    // Сохраняем объект в localStorage (представляем как строку)
    localStorage.setItem('nickName', JSON.stringify(userData));
    alert('Данные сохранены в localStorage!');
}

// Функция для загрузки данных из localStorage
function loadUserData() {
    const userData = localStorage.getItem('user');
    
    if (userData) {
        // Преобразуем строку обратно в объект
        const parsedData = JSON.parse(userData);

        // Подставляем данные из объекта в инпуты
        nameInput.value = parsedData.name || '';
        emailInput.value = parsedData.email || '';
        ageInput.value = parsedData.age || '';
    } else {
        alert('Нет данных в localStorage!');
    }
}

// Привязываем события к кнопкам
saveBtn.addEventListener('click', saveUserData);
loadBtn.addEventListener('click', loadUserData);


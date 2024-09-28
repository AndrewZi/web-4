let is_name = document.getElementById('name');
let is_surname = document.getElementById('surname');
let is_result = document.getElementById('result');

function introducing() {
    if (is_name.value !== '' && is_name.value[0] !== ' ' && is_surname.value !== '' && is_surname.value[0] !== ' ') {
        is_result.innerHTML = `Ответ: Здравствуйте, ${is_name.value} ${is_surname.value}!`
    }
    else {
        is_result.innerHTML = "Ответ:"
    }
}
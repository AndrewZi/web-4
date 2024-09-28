const data_type = document.querySelectorAll('#data_type')
const data_quality = document.querySelectorAll('#data_quality')
let cost = document.getElementById('cost')
let is_name = document.getElementById('name');
let is_surname = document.getElementById('surname');
const regex = /^[A-Я][a-я]+$/;

data_type.forEach(element => {
    element.addEventListener("change", count);
});
data_quality.forEach(element => {
    element.addEventListener("change", count);
});

function count() {
    let sum = 0
    let i = 0
    data_type.forEach(element => {
        if (data_type[i].checked && data_quality[i].value < 1) {
            data_quality[i].value = 1;
            alert("Количество товара не может быть меньше единицы!");
        }
        if (element.checked) {
            sum += element.value * data_quality[i].value
        }
        i++;
    });
    cost.innerHTML = `${sum} руб`;
}

function plusOne(index) {
    if (data_type[index].checked) {
        data_quality[index].disabled = !data_quality[index].disabled;
        data_quality[index].value++;
    }
    else {
        data_quality[index].value = 0;
        data_quality[index].disabled = !data_quality[index].disabled;
    }
}

function order() {
    let errorText = ""
    if ((is_name.value === '' || is_name.value[0] === ' ') && (is_surname.value === '' || is_surname.value[0] === ' ')) {
        errorText = "Для оформления заказа необходимо ввести имя и фамилию"
    }
    else if (is_name.value === '' || is_name.value[0] === ' ') {
        errorText = "Для оформления заказа необходимо ввести имя"
    }
    else if (is_surname.value === '' || is_surname.value[0] === ' ') {
        errorText = "Для оформления заказа необходимо ввести фамилию"
    } else if (!(is_name.value.match(regex)) && !(is_surname.value.match(regex))) {
        errorText = "Введены некорректные имя и фамилия"
    } else if (!(is_name.value.match(regex))) {
        errorText = "Введено некорректное имя"
    } else if (!(is_surname.value.match(regex))) {
        errorText = "Введена некорректная фамилия"
    }
    if (cost.innerText === "0 руб") {
        if (errorText === "") {
            errorText = "Невозможно оформить заказ стоимостью 0 руб!"
        }
        else {
            errorText += "\nНевозможно оформить заказ стоимостью 0 руб!"
        }
    }
    if (errorText === "") {
        alert(`Заказ создан!\n\n\nЗаказчик: ${is_name.value} ${is_surname.value}\n\nСтоимость: ${cost.innerText}`);

        // Возвращение сайта в исходное состояние
        is_name.value = "";
        is_surname.value = "";
        let i = 0;
        data_type.forEach(element => {
            if (element.checked) {
                element.checked = !element.checked;
                data_quality[i].value = 0;
                data_quality[i].disabled = !data_quality[i].disabled;
                i++;
            }
        })
        cost.innerHTML = "0 руб"
    }
    else {
        alert(errorText);
    }
}
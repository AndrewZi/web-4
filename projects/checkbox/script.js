let variants = document.querySelectorAll('input[type="checkbox"]')
let result = document.getElementById('result')

function counting() {
    let sum = 0
    variants.forEach(checkbox => {
        if (checkbox.checked) {
            sum += parseInt(checkbox.value, 10)
        }
    })
    result.innerHTML = `Общая стоимость: ${sum} руб`
}
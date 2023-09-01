let num = prompt('Введите число');

function func1() {
    if (num === '') {
        alert('Вы ничего не ввели')
    } else if (num == 0) {
        alert('0')
    } else if (num === null) {
        alert('Вы нажали на отмену')
    } else if (num > 0) {
        alert('Положительное')
    } else if (num < 0) {
        alert('Отрицательное')
    } else {
        alert('Введите только числа')
    }
}

func1()
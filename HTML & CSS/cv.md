**Aleksey Evsikov**
Russia, Saratov.
+79279127830 *(telegramm,whatsapp,viber)*; AlexE1987#4801 - *discord*; evsikovad1987@gmail.com

**Plan**: mastering the profession of a front-end web developer. **Stack  - html, css, vuejs.** Starting from 10/2020, I have been independently studying these technologies.

**Experience**: Management of a sales team, up to 25 people - 3.5 years (LG Electronics).
Sales (LG Electronics) - 6 years.

**Key skills:** htmls, css, javascript, figma. IDE - VS Code.

**Sample code**, to-do list.
```
const input = document.getElementById('input')
const buttonAdd = document.getElementById('buttonAdd')
const buttonClear = document.getElementById('buttonClear') 
const ul = document.getElementById('ul')

// Пустой массив-список, в который будем добавлять задачи
let todoList = []

if (localStorage.getItem('todo')) { // Если есть сохраненные данные в localStorage возвращаем их в массив todoList
    todoList = JSON.parse(localStorage.getItem('todo'))
    displayTodo()
}

// Обработка кнопки "Добавить" по клику мыши и input при нажатии "Enter"
    buttonAdd.addEventListener('click', todoListPush)
    
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            ul.innerHTML = ''//Используем чтобы убирать дубликаты элементов массива из списка
            inputValue = input.value
            todoList.push(inputValue)
            displayTodo()
            localStorage.setItem('todo', JSON.stringify(todoList))
            console.log(todoList)
        }
    })
```
**Education:** [Saratov State Agrarian University(Managment)](http://www.sgau.ru/).
Self-learning: HTML,CSS - book "Head first", video tutorials - youtube; JavaScript - onelineboock - [learn.javascript.ru](/https://learn.javascript.ru/), tasks on [codewars](https://www.codewars.com/dashboard), video tutorials - youtube.

**English language** - pre intermediate.

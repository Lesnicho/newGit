let input = document.querySelector('.inpu1')
let button = document.querySelector('.btn')

let p = document.querySelector('.p')

button.onclick = ()=>{
    p.innerHTML = 'Вы ввели строку длинной ' + input.value.length 

}
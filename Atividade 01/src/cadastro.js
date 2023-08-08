import { user } from "/atividade 01/modules/user.js";

document.querySelector('.enviar').addEventListener("click", (ev)=>{
    ev.preventDefault()

    const name = document.getElementById('name-user')
    const email = document.getElementById('email-user')
    const password = document.getElementById('password-user')


    if (name.value == '') {
        alert('faltam dados a serem informados!!')
    } else if (email.value == '') {
        alert('faltam dados a serem informados!!')
    } else if (password.value == '') {
        alert('faltam dados a serem informados!!')
    } else {
        new user(name.value, email.value, parseFloat(password.value))
        localStorage.setItem('user', email.value)
        localStorage.setItem('password', password.value)
        alert('Dados gravados com sucesso!')
        window.location.href = "/atividade 01/index.html"
    }
})
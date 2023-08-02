import { user } from "/atividade 01/modules/user.js";

document.querySelector('.enviar').addEventListener("click", (ev)=>{
    ev.preventDefault()

    const name = document.getElementById('name-user').value
    const email = document.getElementById('email-user').value
    const password = document.getElementById('password-user').value

    new user(name, email, parseFloat(password))

    localStorage.setItem('user', email)
    localStorage.setItem('password', password)
    alert('Dados gravados com sucesso!')

    window.location.href = "/atividade 01/index.html"
})
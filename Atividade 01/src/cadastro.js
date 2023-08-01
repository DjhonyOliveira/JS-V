import { user } from "/atividade 01/modules/user.js";

const name = document.getElementById('name-user').value
const email = document.getElementById('email-user').value
const password = document.getElementById('password-user').value

document.querySelector('.enviar').addEventListener("click", (ev)=>{
    ev.preventDefault()

    // const teste = new user(name, email, parseFloat(password))
    alert('Dados gravados com sucesso!')
    console.log(new user(name, email, parseFloat(password)))
    // window.location.href = "/atividade 01/index.html"
})
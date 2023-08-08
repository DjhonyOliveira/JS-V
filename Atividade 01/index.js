import { user } from "./modules/user.js";


const newUser = new user()

document.querySelector('.logar').addEventListener("click", function(ev) {
    ev.preventDefault()

    const user = document.getElementById('user')
    const password = document.getElementById('password')

    if (user.value == '') {
        if (password.value == '') {
            alert('Preencha os dados para realizar o login!')
        } else {
            alert('informe o usuário!')
        }
    } else if (password.value == '') {
        alert('Digite sua senha!')
    } else {
        newUser.login(user.value, password.value)
    }

    
})

document.querySelector('.cadastrar').addEventListener("click", (ev)=>{
    ev.preventDefault()

    window.location.href = "./pages/cadastro.html"
})









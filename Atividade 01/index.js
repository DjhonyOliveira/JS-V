import { user } from "./modules/user.js";


const newUser = new user()

document.querySelector('.logar').addEventListener("click", function(ev) {
    ev.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    newUser.login(user, password)
})









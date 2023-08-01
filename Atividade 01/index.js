import { user } from "./modules/user.js";

const newUser = new user()

document.querySelector('.logar').addEventListener("click", (ev)=> {
    ev.preventDefault()

    console.log(newUser)
    newUser.login()
})









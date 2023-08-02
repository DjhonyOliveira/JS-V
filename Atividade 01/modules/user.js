class user {
    constructor (f, e, p) {
        this.fullname = f
        this.email = e
        this.password = p

    }

    login(eM, pS){

        const userLogin = localStorage.getItem('user')
        const userPassword = localStorage.getItem('password')

        if (eM === userLogin && pS === userPassword) {
            alert('login realizado com sucesso!!')
            window.location.href = "./pages/produto.html"
        } else {
            alert('Dados de usuário inválidos!!!')
        }
    }
}

export { user }
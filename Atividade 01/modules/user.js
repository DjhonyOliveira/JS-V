class user {
    constructor (f, e, p) {
        this.fullname = f
        this.email = e
        this.password = p
    }

    login(eM, pS){
        if (eM === email && pS === password) {
            alert('login realizado com sucesso!!')
            // window.location.href = "./pages/produto.html"
        } else {
            alert('Dados de usuário inválidos!!!')
        }
    }
}

export { user }
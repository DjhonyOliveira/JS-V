class Post {
    constructor(title, textPost, name) {
        this.title = title
        this.textPost = textPost
        this.author = name
        this.dataPost = new Date().toLocaleDateString('pt-br').slice(0, -5)
    }

    CreatePost(){
        
    }
}

export { Post }
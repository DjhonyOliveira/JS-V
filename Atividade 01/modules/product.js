class product {
    constructor (n, d, p) {
        this.name = n
        this.description = d
        this.price = 'R$ ' + p
        this.inStock = 0
    }

    addToStock(a){
        this.inStock = this.inStock + a
    }

    calculateDiscount(pD){
        this.percentDiscount = pD
        this.discount = this.price - (this.price * (pD / 100))
    }
}

export { product }
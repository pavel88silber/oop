class Goods2 extends Goods {
    constructor(div, name, amount, image, count, sale = true) {
        super(div, name, amount, image, count)
        this.sale = sale
    }
    draw() {
        const div = document.querySelector(`#${this.div}`)
        div.innerHTML = `${this.name} <br> ${this.sale} <br> <img src="${this.image}" width="100"> <b> ${this.sale}`
    }
}
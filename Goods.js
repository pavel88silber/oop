/* 
    Goods class 
 */

class Goods {
    constructor(div, name, amount, image, count) {
        this.div = div
        this.name = name
        this.amount = amount
        this.image = image
        this.count = count
    }

    draw() {
        const div = document.querySelector(`#${this.div}`);
        div.innerHTML = `${this.name} <br> <img alt="apples" src="${this.image}" width="100"> <br>${this.count}`
    }
}
/* 
    Class description ...
 */

class Alert {
    // constructor is the call function when object created
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message} ${this.cssClass}</p>`;
    }
}
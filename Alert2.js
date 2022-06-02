class Alert2 extends Alert {
    // constructor is the call function when object created
    constructor(a, c, d, icon) {
        // parent constructor
        super(a, c, d,)
        this.icon = icon // new proper
    }
    showIconAlert() {
        document.querySelector(this.out).innerHTML =
            `<p class="${this.cssClass}">
            <span class="material-symbols-sharp">${this.icon}</span>
            ${this.message}
            ${this.cssClass}</p>`;
    }
}
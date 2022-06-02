class Valid {
    constructor(email, password, isValid) {
        this.email = email
        this.password = password
        this.isValid = isValid
    }
    validate() {
        if (`${(this.password).length}` >= 6) {
            this.isValid = true
            console.log('isValid = ' + this.isValid);
        } else {
            console.log('isValid = ' + this.isValid);
        }
    }
}
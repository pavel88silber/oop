class Valid2 extends Valid {
    constructor(email, password, isValid, emailError = '', passwordError = '') {
        super(email, password, isValid)
        this.emailError = emailError
        this.passwordError = passwordError
    }
    validate() {
        if (this.password.length >= 6 && this.email) {
            this.isValid = true
            console.log('isValid = ' + this.isValid);
        }

        if (this.password.length < 6) {
            this.isValid = false
            this.passwordError = 'min length 6'
            console.log('isValid = ' + this.isValid);
            console.log('Password Error: ' + this.passwordError);
        }
        if (!this.email) {
            this.emailError = 'emailEmpty'
            console.log('Email Error: ' + this.emailError);
        }
    }
}
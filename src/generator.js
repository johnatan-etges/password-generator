const Generator = {
    generatedPassword: '',
    init() {
        Generator.generatePassword()
    },
    generatePassword() {
        for (let i = 0; i < 10; i++) {
            Generator.generatedPassword = Generator.generatedPassword + '' + Math.floor(Math.random() * 10)
        }
        console.log(Generator.generatedPassword)
    }
}

export { Generator }
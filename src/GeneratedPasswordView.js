const GeneratedPasswordView = {

    render(generatedPassword) {
            document.getElementById("generator-header").innerHTML =
            `
                <input type="password" id="generated-password" class="generated-password" value="${generatedPassword}"/>
                <div class="generated-password-options">
                <span id="reveal-generated-password" class="reveal-generated-password-show" onClick="handleShowHidePassWord(this.id, this.nextElementSibling.id, 'text')"><img src="./assets/show-pwd.png"/></span> <!-- reveal-generated-password-hide -->
                <span id="blur-generated-password" class="blur-generated-password-hide" onClick="handleShowHidePassWord(this.id, this.previousElementSibling.id, 'password')"><img src="./assets/hide-pwd.png"/></span> <!-- blur-generated-password-show -->
                <span id="copy-generated-password" class="copy-generated-password" onClick="handleCopyPasswordClick()"><img src="./assets/copy.png"/></span>
            </div>
            `
    }

}

export { GeneratedPasswordView }
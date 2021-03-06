import { Emitter } from './Emitter.js'

const GeneratorOptionsView = {
    options: [
        {
            name: 'Use alphabetic characters',
            switch_id: 'switch_alphabetic'
        },
        {
            name: 'Use numeric characters',
            switch_id: 'switch_numeric'
        },
        {
            name: 'Use upper case characters',
            switch_id: 'switch_uppercase'
        },
        {
            name: 'Use lower case characters',
            switch_id: 'switch_lowercase'
        },
        {
            name: 'Use simple special characters',
            switch_id: 'switch_simple_special'
        },
        {
            name: 'Use complex special characters',
            switch_id: 'switch_complex_special'
        },
    ],

    handleSwitch(switchId) {    
        Emitter.emit(switchId)
    },

    render() {
        GeneratorOptionsView.options.forEach(option => {
            //Registra o evento no carregamento dos elementos
            Emitter.on(option.switch_id, () => console.log(option.switch_id))

            document.getElementById("generator-body").innerHTML+=
            `
                <div class="generator-option">
                <div class="generator-option-label">
                    <span>${option.name}</span>
                    <span class="tip"><img src="./assets/interrogation.png"/></span>
                </div>
                <label id="label_${option.switch_id}" class="switch">
                    
                    <span class="slider"></span>
                </label>
                </div>
            `
            let checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            /* checkbox.checked = false */

            document.getElementById(`label_${option.switch_id}`).appendChild(checkbox)
            checkbox.onchange = () => GeneratorOptionsView.handleSwitch(option.switch_id)
        })
    }
}

export { GeneratorOptionsView }

//<input id="${option.switch_id}" type="checkbox" onclick="${GeneratorOptionsView.handleSwitch(option.switch_id)}"/>
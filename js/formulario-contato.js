const formu = document.getElementById ('formu')
const name = document.getElementById ('name')
const email = document.getElementById ('email')
const sMatter = document.getElementById ('sMatter')
const message = document.getElementById ('message')
const answer = document.getElementById ('answer')

let drawer = []

loadDrawer()

formu.onsubmit = event => {
    event.preventDefault()

    if (!validateName() || !validateEmail() || !validateSMatter() || !validateMessage()) return

   const person = {
       name: name.value.trim(),
       email: email.value,
       sMatter: sMatter.value.trim(),
       message: message.value
   }

   drawer.push(person)
   localStorage.setItem('person', JSON.stringify(drawer))

   name.value = ''
   email.value = ''
   sMatter.value = ''
   message.value = ''

}

function validateName () {
    name.value = name.value.trim()

    if (!name.value) {
        answer.textContent = 'Necessário ter um nome.'
        name.focus()
        return false
    }

    let regexName = /^([a-z]{2,}([\s-][a-z]{2,})+)$/gi

    if (!regexName.test(name.value)) {
        answer.textContent = 'Formato de nome invalido.'
        name.focus()
        return false
    }

    answer.textContent = ''
    return true
}

function validateEmail () {

    if (!email.value) {
        answer.textContent = 'Necessário ter um e-mail.'
        email.focus()
        return false
    }

    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi

    if (!regexEmail.test(email.value)) {
        answer.textContent = 'Formato de e-mail invalido.'
        email.focus()
        return false
    }

    answer.textContent = ''
    return true
}

function validateSMatter () {

    if (!sMatter.value) {
        answer.textContent = 'Necessário ter um assunto.'
        sMatter.focus()
        return false
    }

    if (sMatter.value.trim().length < 7) {
        answer.textContent = 'O assunto precisa ter mais de 7 caracter.'
        sMatter.focus()
        return false
    }

    answer.textContent = ''
    return true
}

function validateMessage () {
    
    if (!message.value) {
        answer.textContent = 'Precisa haver uma mensagem escrita.'
        message.focus()
        return false
    }

    if (message.value.trim().length < 70) {
        answer.textContent = 'Os caracteres precisam ser maior que 70.'
        message.focus()
        return false
    }

    answer.textContent = ''
    return true
}

function loadDrawer () {
    drawer = JSON.parse(localStorage.getItem('person')) || []
}
import { Modal } from './modal.js'
import { AlertError } from "./alert-erro.js"
import { IMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputweight = document.querySelector('#weight')
const inputheight = document.querySelector('#height')

inputweight.oninput = () => AlertError.close()
inputheight.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputweight.value
  const height = inputheight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if(showAlertError){
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)

  const message =`Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()

}



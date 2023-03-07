export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  BtnClose: document.querySelector('.modal button.close'),

  open(){
    Modal.wrapper.classList.add('open')
  },
  close(){
    Modal.wrapper.classList.remove('open')
  }
}

Modal.BtnClose.onclick = () => {

  Modal.close()

}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event){
  
  if(event.key === 'Escape'){
    Modal.close()
  }
}


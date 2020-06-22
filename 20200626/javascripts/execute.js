window.addEventListener('load', () => {

  const beforeTextarea = document.getElementById('textarea-before')
  const afterTextarea = document.getElementById('textarea-after')

  document.getElementById('button-execute').addEventListener('click', () => {
    afterTextarea.value = (execute(beforeTextarea.value))
  })

})

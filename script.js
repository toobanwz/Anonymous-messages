let popup = document.getElementById("popup");
function openWeb(){
    popup.classList.add("popup-gone")
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbz07sSR63L3Hb__Rs3WFF6IlQq_ofmpAPOu2ECPJzTtzOn7BLI5th6RqtTKnz2ns-6W3g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
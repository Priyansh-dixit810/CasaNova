// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let switchbtn = document.getElementById('switchCheckDefault');
switchbtn.addEventListener("click",()=>{
  let gst_display= document.getElementsByClassName('Gst_display');
  for(let info of gst_display){
    if(info.style.display!="inline"){
      info.style.display="inline";
    }else{
      info.style.display="none";
    }
  }
})
  
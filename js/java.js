const form = document.getElementById('form')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const rpass = document.getElementById('rpass')
const num = document.getElementById('num')
const roll = document.getElementById('roll')
const errorelement = document.getElementById('error')

form,addEventListner('signup-btn',(e) => {
    let messages = []
    if(email.value== '' || email.val== null){
        messages.push('Email is required')
    }

    if(pass.value.length <= 6 ){
        messages.push('password Must be longer than 6 characters')
    }

    if(rpass.value== '' || rpass.val== null){
        messages.push('Repeat Password is required is required')
    }

    if(num.value== '' || num.val== null){
        messages.push('Num is required')
    }

   
    if(roll.value== '' || roll.val== null){
        messages.push('Roll is required')
    }
    if (messages.length >0){
        e.preventDefault()
        errorelement.innerText = messages.join(', ')

    }
    
})
function myFunction() {
    window.location.href = "dashboard_st.html";
  }

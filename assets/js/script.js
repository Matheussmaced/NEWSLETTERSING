const input = document.querySelector('#inputUsuario');
const submit = document.querySelector('#submit');
const errorDiv = document.querySelector('#errorDiv');
const containerMaster = document.querySelector('#container-master');
const containerChild = document.querySelector('#container-child');
const p = document.querySelector('#pHide');
const submitHide = document.querySelector('#btnHide');
const mobile = document.querySelector('#imgMobile')


submit.addEventListener('click', (e)=>{
    e.preventDefault();

    const btnValue = input.value;
    const btnValueUp = btnValue.toLowerCase()
    

    if(
        !btnValueUp.includes('@', 1) ||
        !btnValueUp.includes('.com', 3)
        ){

        errorDiv.classList.remove('errorDiv')
        input.classList.add('error')

    }else{
        errorDiv.classList.add('errorDiv')
        input.classList.remove('error')
        containerMaster.classList.add('hide')
        containerChild.classList.remove('hide')
        mobile.classList.add('hide')

        p.innerHTML = `A confirmation email has been sent to <strong>${btnValueUp}</strong>
        Please open it and click the button inside to confirm your subscription.`

        console.log(btnValueUp)
    }

})

submitHide.addEventListener('click', (e)=>{
    e.preventDefault();

    errorDiv.classList.add('errorDiv')
    input.classList.remove('error')
    containerMaster.classList.remove('hide')
    containerChild.classList.add('hide')
    mobile.classList.remove('hide')
    
})




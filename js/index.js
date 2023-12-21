let inPut=document.querySelectorAll('input')
let inPutImg=document.getElementsByClassName('warning')
let inPutText=document.getElementsByClassName('warning2')

inPut.forEach((input, index) => {
    let orginalValue = input.value

    input.addEventListener('click', () => {
        // Usuń zawartość inputu, który został kliknięty
        if (input.value == orginalValue){
            if (index==4){
            }
            else{
                input.value = '';
            }
        }
    });

    input.addEventListener('blur',() =>{
        if (index == 2){
            validateEmail(input.value)
            if (input.value == ''){
                error()
            }
            else if (validateEmail(input.value) == false){
                error()
            }
            else {
                hide()
            }
        }
        else{
            if (input.value == ''){
                error()
            }
            else {
                hide()
            }
        }

    })

    function error(){
        inPutImg[index].style.visibility = "visible"
        inPutText[index].style.visibility = "visible"
        inPut[index].style.border="0.15px solid hsl(0, 100%, 74%)"
    }
    
    function hide(){
        inPutImg[index].style.visibility = "hidden"
        inPutText[index].style.visibility = "hidden"
        inPut[index].style.border=""
    }

});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

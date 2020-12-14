window.addEventListener('DOMContentLoaded', (event) => {
    let btnEmail = document.getElementById("btn-email");
    let btnSubmit = document.getElementById("btn-submit");
    let popupContent = document.querySelector(".popup-content");
    let popupClose = document.querySelector(".popup__close");

    btnEmail.onchange = function(){
        if(btnEmail.checkValidity()){
            btnSubmit.disabled = false;
        }else{
            btnSubmit.disabled = true;
        }
    }
    btnEmail.value = "";

    //Show popup
    btnSubmit.onclick = function(e){
        e.preventDefault();
        popupContent.classList.add('show');
        document.body.style.overflow = "hidden";
    }

    //Close Button
    popupClose.onclick = function(){
        popupContent.classList.remove('show');
        document.body.style.overflow = "auto";
    }
});
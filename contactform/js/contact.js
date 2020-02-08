$(document).ready(function () {                              //Ovdje kazemo da sve sto je unutra ce se izvrsiti (javascript) kada bude spremno i kad se ucita stranica (DOM, images, iframes..)        
    $('.submit').click(function (event) {         
        event.preventDefault()                                //Uklanjamo default slanje submitom jer moramo prvo potvrditi formu prije nego mozemo slati
        console.log("Clicked button")

        var email = $('.email').val()           //Kreiramo varijable kako bi uzeli vrijednosti inputa
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()


        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div class="validated">*Email is valid</div>')
        }
        else {
            event.preventDefault()
            statusElm.append('<div class="notValidated">*Email is not valid</div>')
        }

        if (subject.length >= 2) {
            statusElm.append('<div class="validated">*Subject is valid</div>')

        }
        else {
            event.preventDefault()
            statusElm.append('<div class="notValidated">*Subject is not valid</div>')
        }

        if (message.length >= 10) {
            statusElm.append('<div class="validated">*Message is valid</div>')
        }
        else {
            event.preventDefault()
            statusElm.append('<div class="notValidated">*message is not valid</div>')
        }

        if ((email.length > 5 && email.includes('@') && email.includes('.')) && subject.length >= 2 && message.length >= 10) {

            var sending = document.getElementsByClassName("submit");
            sending.click(alert("Thank you! Your mail has been sent successfully. Our contact service will respond as soon as possible (within 24 hours)"))
        }

    })

})


const sendMessage = () => {
    var gresp = grecaptcha.getResponse();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if(gresp.length == 0){
    //reCaptcha not verified
        console.log(">>> Verifica tu Captcha "+gresp)
    }else{
        fetch("https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/application-0-trchn/service/webhook/incoming_webhook/end", {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                name,
                email,
                message
            })
        })
    .then(response => response.json())
    .then(result => {
        $('#modalt').modal('show')
        $('#modalbtext').html("Gracias "+result);
        console.log(result);
        console.log(">>> OK ");
        grecaptcha.reset();
        });
    }
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
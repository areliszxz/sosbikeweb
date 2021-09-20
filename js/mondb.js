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

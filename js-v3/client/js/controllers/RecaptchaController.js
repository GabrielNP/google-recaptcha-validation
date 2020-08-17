class Controller {
    sendPost() {
        event.preventDefault();
        let service = new RecaptchaService();      

        grecaptcha.ready(function() {
            grecaptcha.execute('<SITE_KEY>', {
                action: 'submit_form'
            })
            .then(function(token) {                
                service.enviarDadosParaServidor(token)
                    .then((data) => {
                        data = JSON.parse(data);
                        if (data.success) { alert('Tudo certo!'); }
                        else { alert('Robô identificado'); }
                    })
                    .catch(erro => console.log(erro))
            });
        });

    }

}
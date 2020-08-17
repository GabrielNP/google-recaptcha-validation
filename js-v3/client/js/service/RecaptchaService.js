class RecaptchaService {
    constructor() {
        this._http = new HttpService();
    }
    
    enviarDadosParaServidor(token) {

        const $ = document.querySelector.bind(document);
        const inputNome = $('#nome');
        const inputEmail = $('#email');
        const inputMsg = $('#msg');

        const data = {
            nome: inputNome.value,
            email: inputEmail.value,
            msg: inputMsg.value,
            token
        };

        return new Promise((resolve, reject) => {
            this._http
                .post('http://localhost:3333/validate', data)
                .then((data) => resolve(data))
                .catch(erro => {
                    console.log(erro.msg);
                    reject('Não foi possível enviar os dados para o servidor.');
                })
        })
    }
}
class HttpService {
    post(url, data) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);            
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {    
                        console.log(xhr.responseText);                    
                        resolve(xhr.responseText);
                    } else {
                        console.log("Nâo foi possível enviar o payload para o servidor.\nStatus: ", xhr.status);
                        reject(xhr.responseText);
                    }
                }
            }
            xhr.send(JSON.stringify(data));
        })
    }
}
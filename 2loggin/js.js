let envia;
let enviaP;
let button = document.getElementById('date1')

function a(send) {
    send = document.getElementById('enviar').value;
}

function b(sendP) {
    sendP = document.getElementById('enviarP').value;
}

function c(btn) {
    btn.addEventListener('click', () => {
        alertify.confirm(':0', '¿Desea guardar los datos?', function () {
            envia = document.getElementById('enviar').value;
            enviaP = document.getElementById('enviarP').value;
            let data = { 'nombre': envia, 'peso': enviaP };
            localStorage.setItem("data", JSON.stringify(data));
            window.location.assign('../3planets/index.html');
        }
            , function () { alertify.error('CANCELADO') });

    });
}

c(button);
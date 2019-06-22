document.querySelector('.btn-cancel').addEventListener('click', e => {
    let url = window.location.href;
    url = url.split('/');
    url = url[0]+"//"+url[2]+"/";
    window.location = url;
});

document.querySelector('#btn-add-user').addEventListener('click', function () {
    let dados = {
        'nome': document.querySelector('#campo-nome').value,
        'email': document.querySelector('#campo-email').value,
        'senha': document.querySelector('#campo-senha').value
    };

    axios.post('api/singin/create', dados).then((res) => {
        M.toast({html: res.data.message});
    }).catch((erro) => {
        M.toast({html: erro.response.data.message});
    });

});
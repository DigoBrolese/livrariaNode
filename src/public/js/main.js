let href = window.location.href;
href = href.split('/');
const url = href[0]+"//"+href[2]+"/";

if (!isVisible(document.querySelector('#searchInput'))) {
    let searchInput = document.querySelector('#searchInput');
    document.querySelector('.searchClick').addEventListener('click', function (e) {
        if (isVisible(searchInput)) {
            searchInput.style.display = 'none';
        } else {
            searchInput.style.display = 'block';
            searchInput.focus();
        }
    });
}

document.querySelector('#searchInput').addEventListener('keyup', function (e) {
    if (e.target.value.length > 0) {
        document.querySelector('.btn-search').style.display = 'block';
    }
});

document.querySelector('#searchInput').addEventListener('focusout', function (e) {
    if (e.target.value.length === 0) {
        document.querySelector('.btn-search').style.display = 'none';
    }
});

document.querySelector('.searchClick').addEventListener('click', e => {
    document.querySelector('#searchInput').focus();
});


document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.dropdown-trigger');
    const instances = M.Dropdown.init(elems, {
        closeOnClick: false
    });
});

document.querySelector('.btn-singin').addEventListener('click', e => {
    window.location = url+"singin";
});

document.querySelector('.btn-login').addEventListener('click', e => {
    let dados = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    };

    axios.post('/login', dados).then( (res) => {
        window.location.href = url;
    }).catch((error) => {
        M.toast({html: error.response.data.message});
    });
});

document.querySelector('.btn-logout').addEventListener('click', e => {
    window.location.href = url+"logout";
});
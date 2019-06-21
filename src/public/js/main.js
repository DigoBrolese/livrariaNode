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
    let url = window.location.href;
    url = url.split('/');
    url = url[0]+"//"+url[2]+"/";
    window.location = url+"singin";
});
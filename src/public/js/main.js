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

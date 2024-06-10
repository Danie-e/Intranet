var menu = document.querySelector('#menuLateral');
var container = document.querySelector('#menu_completo');

menu.addEventListener('click', function () {

    if (container.style.display === 'block') {
        container.style.display = 'none';
    }
    else {
        container.style.display = 'block';
    }
})

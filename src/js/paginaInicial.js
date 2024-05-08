
function mudarVisibilidade(){
    var menuLateral= document.getElementsByClassName('menu_superior');
    console.log(menuLateral)
    if(menuLateral.style.visibility)
        menuLateral.style.visibility= visible;
    else
    menuLateral.style.visibility= hidden;
}
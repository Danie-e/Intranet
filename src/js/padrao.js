var menu= document.querySelector('#menuLateral');
var container = document.querySelector('#menu_superior');

menu.addEventListener('click',function(){
    
    if(container.style.display ==='flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display ='flex';
    }
})


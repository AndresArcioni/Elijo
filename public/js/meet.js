window.addEventListener('load', function() {
    let btnFilter = document.querySelector('.btn-filter')
    let divFilter = document.querySelector('.div-filter')
    let header = document.querySelector('header')
    let arrow = document.querySelector('.arrow')
    let pcmenu = document.querySelector('.pcMenu')

    
    btnFilter.addEventListener('click', function(){
        if(divFilter.classList.contains('slide-in')){
            divFilter.classList.remove('slide-in')
            divFilter.classList.add('slide-out')
            header.classList.remove('move-up')
        }else{
            divFilter.classList.remove('slide-out')
            divFilter.classList.add('slide-in')
            header.classList.add('move-up')
            pcmenu.classList.add('d-none')
        }
        
    });
    
    arrow.addEventListener('click', function(){
        if(divFilter.classList.contains('slide-in')){
            divFilter.classList.remove('slide-in')
            divFilter.classList.add('slide-out')
            header.classList.remove('move-up')
            pcmenu.classList.remove('d-none')

        }else{
            divFilter.classList.remove('slide-out')
            divFilter.classList.add('slide-in')
            header.classList.add('move-up')
        }
    })
})
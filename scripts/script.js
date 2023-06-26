window.document.getElementsByClassName('pags')[2].setAttribute('id', 'aparecer')

function mudarPag(pagNum) {
    
    for(let c = 0; c < window.document.getElementsByClassName('pags').length; c++) {
        window.document.getElementsByClassName('pags')[c].removeAttribute('id')
    }
    window.document.getElementsByClassName('pags')[pagNum].setAttribute('id', 'aparecer')

    menu()
}

function menu() {
    let fechar = window.document.getElementById('fechar')
    let iconBlock = window.document.getElementById('icon-menu-block')
    let menu = window.document.getElementById('nav')
    if(menu.style.display == 'inherit') {
        iconBlock.style.display = 'inherit'
        fechar.style.display = 'block'
        menu.style.animation = 'aparecer-menu 1.5s ease-out reverse'
        menu.style.left = '-100vw'
        setTimeout(() => {
            fechar.style.display = 'none'
            menu.style.display = 'none'
            window.document.body.style.overflow = 'visible'
        }, 1550)
    } else {
        window.document.body.style.overflow = 'hidden'
        iconBlock.style.display = 'inherit'
        menu.style.display = 'inherit'
        fechar.style.display = 'block'
        menu.style.animation = 'aparecer-menu 1.5s ease-out'
        menu.style.left = '0'
    }
    setTimeout(() => {
        iconBlock.style.display = 'none'
        menu.style.animation = 'none'
    }, 1550)
}

function ampliarImg(id) {
    let img2 = window.document.getElementById(`${id}1`)
    if(img2.style.display == 'inherit') {
        img2.style.display = 'none'
        window.document.body.style.overflow = 'visible'
        window.document.body.style.overflowX = 'hidden'
    } else {
        img2.style.display = 'inherit'
        window.document.body.style.overflow = 'hidden'
    }
}

function inf() {
    let largura = window.innerWidth
    let menu = window.document.getElementById('nav')
    let fechar = window.document.getElementById('fechar')
    let btns = window.document.getElementsByClassName('botoes')
    if(largura > 595) {
        menu.style.display = 'flex'
        for(let c = 0; c < btns.length; c++) {
            btns[c].style.marginRight = '30px'
        }
        fechar.style.display = 'none'
        window.document.body.style.overflowY = 'visible'
    } else {
        if(menu.style.display == 'flex') {
            menu.style.display = 'none'
        }
    }

    setTimeout(() => {
        inf()
    }, 1);
}

inf()

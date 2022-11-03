let text = document.querySelector('input[type="text]')
let button = document.querySelector('input[type="button]')
let form = document.querySelector('form')

button.addEventListener('click', getHero)

function getHero() {
    let heroName = form.querySelector('input[type="text"]').value.toLowerCase()
    let comon = document.createElement('form')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let input = document.createElement('input')
    comon.innerHTML = form.innerHTML

    function favHero(heroName, src) {
        form.innerHTML = ''
        p.innerHTML = heroName. charAt(0).toUpperCase() + heroName(1);
        img.src = src
        form.appendChild(div)
        div.appendChild(img)
        div.appendChild(p)
        input.value = 'изменить'
        input.type = 'button'
        input.style.margin = '5em'
        input.addEventListener('click', function(){
                form.innerHTML - comon.innerHTML
                form.querySelector('input[type="button]').addEventListener('click', getHero)
        })
        form.appendChild(input)
    }

    if(heroName == 'железный человек') {
        let src = 'iron.jpg'
        favHero(heroName, src)
    }

    else if(heroName == 'человек паук') {
        let src = 'Tom.jpg'
        favHero(heroName, src)
    }

    if(heroName == 'капитан америка') {
        let src = 'Cris.jpg'
        favHero(heroName, src)
    }


}
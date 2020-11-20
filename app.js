const params = new URLSearchParams(window.location.search)
const id = params.get('id')


const cardsContainer = document.querySelector('.card-container')
const cards = ('http://localhost:3000/cards')

fetch(cards)
.then(res => res.json())
.then(cards => {
        cards.forEach(card => {
            const div_frontcard = document.createElement('div')
        const div_backcard = document.createElement('div')
        const li = document.createElement('li')
        const p = document.createElement('p')
        const img = document.createElement('img')
        const speaker = document.createElement('img')
        
        
        div_frontcard.className = "card__face card__face--front"
        div_backcard.className = "card__face card__face--back"
        speaker.id= 'speaker-butt'
        li.className = 'alphabet-card'
        p.innerText = card.description
        img.src = card.image_url
        speaker.src = "./picture/volume.png"

        


        li.addEventListener('click',()=>{
            li.classList.toggle('flip')
            li.classList.add('disabled')
            unFlipCards()

            speaker.addEventListener("click",()=>{
                playsound(card)  
            })
        })
        
        div_frontcard.appendChild(img)
        div_backcard.append(p, speaker)
        li.append(div_frontcard, div_backcard)
        cardsContainer.appendChild(li)
        
    })
})

function playsound(card){
    const audio = new Audio(card.radio_url)
    audio.play()
    }
    
    const butt = document.querySelector('.button')
    const nextpageButt = document.createElement('button')
    const buttContainer = document.createElement('div')
    
    
    buttContainer.id = 'buttContainer'
    nextpageButt.id = 'nextpageButt'
    nextpageButt.innerHTML = `<a href="flashcardgame.html?id">Play game</a>`
    
    buttContainer.appendChild(nextpageButt)
    butt.appendChild(buttContainer)

    function unFlipCards(){
        setTimeout(() => {
          openedCards[0].classList.toggle("flip")
          openedCards[1].classList.toggle("flip")
          
          openedCards[0].classList.remove("disabled")
          openedCards[1].classList.remove("disabled")
          
          openedCards = [] 
        },1100);
      }
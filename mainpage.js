

const params = new URLSearchParams(window.location.search)
const id = params.get('id')


const cardsContainer = document.querySelector('.card-container')
const cards = ('http://localhost:3000/cards')

fetch(cards)
.then(res => res.json())
.then(cards => {
        cards.forEach(card => {
        const div_frontCard = document.createElement('div')
        const div_backCard = document.createElement('div')
        const li = document.createElement('li')
        const p = document.createElement('p')
        const img = document.createElement('img')
        const speaker = document.createElement('img')
        
        
        div_frontCard.className = "card__face card__face--front"
        div_backCard.className = "card__face card__face--back"
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
                playSound(card)  
            })
        })
        
        div_frontCard.appendChild(img)
        div_backCard.append(p, speaker)
        li.append(div_frontCard, div_backCard)
        cardsContainer.appendChild(li)
        
    })
})

 playSound = (card) => {
    const audio = new Audio(card.radio_url)
    audio.play()
    }
    
    const butt = document.querySelector('.button')
    const nextPageButt = document.createElement('button')
    const buttContainer = document.createElement('div')
    
    
    buttContainer.id = 'buttContainer'
    nextPageButt.id = 'nextPageButt'
    nextPageButt.innerHTML = `<a href="flashcardgame.html?id">Let's play game</a>`
    
    buttContainer.appendChild(nextPageButt)
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
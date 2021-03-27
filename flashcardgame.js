const cardContainer = document.querySelector('.card-container')
const cards = 'https://thai-alphabet-backend.herokuapp.com/cards'


//start game button

const startButts = document.querySelector('#start-game')
startButts.addEventListener('click',() => {
    startGame()
})

let matchedCards = []
let openedCards = []

let deck = [
  {letter:"korKai", image_url:"https://i.ibb.co/BNkYZs7/1.png"},
  {letter:"korKai", image_url:"https://i.ibb.co/BNkYZs7/1.png"},
  {letter:"khoKhai", image_url:"https://i.ibb.co/T1X8Cv3/2.png"},
  {letter:"khoKhai", image_url:"https://i.ibb.co/T1X8Cv3/2.png"},
  {letter:"khoKhuat",image_url:"https://i.ibb.co/vVKYWQN/3.png"},
  {letter:"khoKhuat",image_url:"https://i.ibb.co/vVKYWQN/3.png"},
  {letter:"khoKhon",image_url:"https://i.ibb.co/9qLq4qX/4.png"},
  {letter:"khoKhon",image_url:"https://i.ibb.co/9qLq4qX/4.png"},
  {letter:"khoRaKhang",image_url:"https://i.ibb.co/z7b6rSP/5.png"},
  {letter:"khoRaKhang",image_url:"https://i.ibb.co/z7b6rSP/5.png"},
  {letter:"ngoNguu",image_url:"https://i.ibb.co/QCyBHD4/6.png"},
  {letter:"ngoNguu",image_url:"https://i.ibb.co/QCyBHD4/6.png"},
  {letter:"jorJan",image_url:"https://i.ibb.co/ZMwrr4W/7.png"},
  {letter:"jorJan",image_url:"https://i.ibb.co/ZMwrr4W/7.png"},
  {letter:"choChing",image_url:"https://i.ibb.co/yQCvDS8/8.png"},
  {letter:"choChing",image_url:"https://i.ibb.co/yQCvDS8/8.png"},
]

// shuffle function 
  const shuffle = (array) =>{
    array.sort(() => Math.random() - 0.5);
    return array
  }

// display card and shuffleDeck
const gameCardContainer= document.querySelector('.card-container')
gameCardContainer.innerHTML =''

let shuffleDeck = shuffle(deck)
shuffleDeck.map(card =>{
  
  const cardFace = document.createElement('div')
  const cardBack = document.createElement('div')
  const li = document.createElement('li')
  const frontCardImg = document.createElement('img')
  const backCardImg = document.createElement('img')

  li.dataset.letter = card.letter
  li.id = "game-card"
  cardFace.className = "card__face card__face--front"
  cardBack.className = "card__face card__face--back"
  frontCardImg.id = "frontCard"
  frontCardImg.src = "./picture/couple.jpg"
  backCardImg.src = card.image_url
  backCardImg.id = "backCard"


  li.addEventListener('click',()=>{
      li.classList.toggle('flip') 
      li.classList.add('disabled') 
      openedCards.push(li)
      if (openedCards.length === 2){
        if (openedCards[0].dataset.letter === openedCards[1].dataset.letter){
          matchedCard()
        }else{
          unFlipCards();
        }
      } 
    })
    cardFace.appendChild(frontCardImg)
    cardBack.appendChild(backCardImg)
    li.append(cardFace, cardBack)
    gameCardContainer.appendChild(li)
  })


// unFlipCard function 
  const unFlipCards = () =>{
    setTimeout(() => {
      openedCards[0].classList.toggle("flip")
      openedCards[1].classList.toggle("flip")
      
      openedCards[0].classList.remove("disabled")
      openedCards[1].classList.remove("disabled")
      
      openedCards = [] 
    },1100);
  }
    
// matchCard function + set Timeout function
let score = document.querySelector('#flips')
let totalScore = 1

const matchedCard = () =>{
  setTimeout(() => {
    matchedCards.push(openedCards[0],openedCards[1])
    if(matchedCards.length >= 1){
      score.innerHTML = `${totalScore}`; ++totalScore
    }
    openedCards[0].classList.add("match")
      openedCards[1].classList.add("match")
      openedCards = [] 
    if (matchedCards.length === 16){
      setTimeout(() => window.location.href ="./winnerPage.html",1100)
    }
  },1100);
  }
    
  for(let i = 0; i < openedCards.length; i++) {
    openedCards[i].addEventListener("click", displayCard)
  }

// timer and start game function 
const timer = document.querySelector('#time-remaining')

 let minute = 0
 let second = 0

  startGame = () =>{
    interval = setInterval(() => {
      timer.innerHTML =`${minute} mins ${second} secs`;
      second++;
      if(second === 120) {
        clearInterval(interval)
        minute = 0;
        second = 0;
      startGame()
      }
    },1000)
  }







  



























  
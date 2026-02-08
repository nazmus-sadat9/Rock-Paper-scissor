const handImg = document.getElementById('randomHand');
const user = document.getElementById('user');
const fist = document.getElementById('fist');
const open = document.getElementById('open');
const scissor = document.getElementById('scissor');
const data = document.getElementById('dataWindow');
const fistHands = document.querySelectorAll('.fistHand');
const userScr = document.getElementById('user_score');
const botScr = document.getElementById('bot_score');
const copyright = document.querySelector('.copyRight');


// copyright text
let year = new Date().getFullYear();
copyright.innerHTML = `Copyright &copy; ${year} SADAT`;

// hands array
let hands = ['fist', 'open', 'scissor'];

// score counting
let userPoint = 1;
let botPoint = 1;

// if user win
function winPoint() {
  userScr.innerText = `User: ${userPoint++}`;
}

// if bot win
function losePoint() {
  botScr.innerText = `Bot: ${botPoint++}`;
}

// Default hand show 
function handShow() {
  handImg.src = `assets/${hands[0]}.svg`;
  user.src = `assets/${hands[0]}.svg`;
}
handShow();


// random hand choice (bot)
let randomHand = '';

function rand(){
  randomHand = Math.floor(Math.random() * hands.length);
  
  handImg.src = `assets/${hands[randomHand]}.svg`;
}


// user clicking response 
fist.addEventListener('click', ()=>{
  fistHands.forEach((img)=>{
    img.classList.remove('animate');
    void img.offsetWidth;
    img.classList.add('animate')
  });
  
 setTimeout(()=>{
   user.src = `assets/${hands[0]}.svg`;
   rand();
   
   // 'fist' conditions
  if (hands[randomHand] === 'fist') {
    data.innerText = 'Tie';
  }
  else if (hands[randomHand] === 'scissor') {
    data.innerText = 'You Win';
    winPoint();
  }
  else {
    data.innerText = 'You Lose';
    losePoint();
  }
  
 }, 2000);

  handShow();
});
  
  
  
open.addEventListener('click', () => {
  fistHands.forEach((img) => {
    img.classList.remove('animate');
    void img.offsetWidth;
    img.classList.add('animate')
});

  setTimeout(() => {
    user.src = `assets/${hands[1]}.svg`;
    rand();
    
  // 'open' conditions 
  if (hands[randomHand] === 'open') {
    data.innerText = 'Tie';
  }
  else if (hands[randomHand] === 'fist') {
    data.innerText = 'You Win';
    winPoint();
  }
  else {
    data.innerText = 'You Lose';
    losePoint();
  }
  
  }, 2000);
  
  handShow();
  
});



scissor.addEventListener('click', () => {
  fistHands.forEach((img) => {
    img.classList.remove('animate');
    void img.offsetWidth;
    img.classList.add('animate')
});

  setTimeout(() => {
    user.src = `assets/${hands[2]}.svg`;
    rand();
    
    // 'scissor' conditions
  if (hands[randomHand] === 'scissor') {
    data.innerText = 'Tie';
  }
  else if (hands[randomHand] === 'open') {
    data.innerText = 'You Win';
     winPoint();
  }
  else {
    data.innerText = 'You Lose';
    losePoint();
  }
  
  }, 2000);
  
  handShow();
  
});

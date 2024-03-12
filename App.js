let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let userScore =document.querySelector('#playerScore')
let systemScore =document.querySelector('#compScore')
let SystemOutput = document.querySelector('#systemGenerated')
let ResetGame = document.querySelector('#ResetGame')
let MatchDraw= document.querySelector('#matchDraw')

let playerScore=0;
let CompScore=0;
let userInput;

ResetGame.addEventListener('click',()=>{
    playerScore=0;
    CompScore=0;
    systemGenerated=''
    SystemOutput.innerText=systemGenerated
    systemScore.innerText=CompScore
    userScore.innerText=playerScore
    MatchDraw.innerHTML=''
})

rock.addEventListener('click',()=>{
    userInput='Rock'
    gamePlay()
})
paper.addEventListener('click',()=>{
    userInput='Paper'
    gamePlay()
})
scissors.addEventListener('click',()=>{
    userInput='Scissors'
    gamePlay()
})

const gamePlay=()=>{
    let randomNum = Math.ceil(Math.random()*10)
    let systemGenerated;
    
    if(randomNum<=3){
        systemGenerated='Paper'
        SystemOutput.innerText=systemGenerated
    }else if(randomNum>3 && randomNum<=6){
        systemGenerated='Rock'
        SystemOutput.innerText=systemGenerated
    }else{
        systemGenerated='Scissors'
        SystemOutput.innerText=systemGenerated
    }


    if(userInput=='Rock' && systemGenerated=='Scissors' || userInput=='Scissors' && systemGenerated=='Paper' || userInput=='Paper' && systemGenerated=='Rock'){
        playerScore++;
        MatchDraw.innerHTML=''
    }
    else if(systemGenerated=='Rock' && userInput=='Scissors' || systemGenerated=='Scissors' && userInput=='Paper' || systemGenerated=='Paper' && userInput=='Rock'){
        CompScore++
        MatchDraw.innerHTML=''
    }else if(systemGenerated===userInput){
        MatchDraw.innerHTML="Match Draw."
    }
    systemScore.innerText=CompScore
    userScore.innerText=playerScore
}
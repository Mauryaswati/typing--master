window.addEventListener("load",init)



const wordInput =document.querySelector("#word-input")
// console.log(wordInput)
const currentWord = document.querySelector("#current-word")
// console.log(currentWord)
const scoreDisplay =document. querySelector("#score")
// console.log(scoreDisplay)
const timeDisplay = document.querySelector("#time")
// console.log(timeDisplay)
const message = document. querySelector("#message")
// console .log (message)

let score=0 
 let  time=6

//Array of words
const words =[
    'man',
    'javascript',
    'swati',
    'Neha',
    'english',
    'Hindi',
    'Computer',
    'Science',
    'Math',
    'Bareilly',
    'Pilibhit',
    'Delhi',
    'Mumbai',
    'Ramnagar',
    'momos',
    'Tea',
    'river',
    'Moon'
];
// console.log(words)

function init(){
    showWords(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000 )
    setInterval(checkStatus,50)
}
function checkStatus(){
    if(time==0){
        message.innerHTML="Game Over"
    }
}

function countdown(){
    if(time==0){
        message.innerHTML="Game Over"
    }
    if(time>0){
        time--
        
    }
    timeDisplay.innerHTML = time
}
f 
function showWords(words){
    const randomIndex= Math.floor(Math.random()*words.length)
    // console.log(words[randomIndex])
    currentWord.innerHTML = words[randomIndex]
}

function matchWord(){
    if(wordInput.value == currentWord.innerHTML){
        return(true)
    }else{
        return(false)
    }
}

function startMatch(){
    console.log("start!!")
    if (matchWord()){
    showWords(words)
     message.innerHTML="yup!!"
     wordInput.value=''
     score++
     time=6 
    }else{
    message.innerHTML= "Retry"
    }
    scoreDisplay.innerHTML = score
}
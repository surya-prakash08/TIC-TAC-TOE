console.log('TIC TAC TOE');
let music= new Audio("music.mp3")
let audioTurn= new Audio("ting.mp3")
let gameover= new Audio("gameover.mp3")
let mediaQuery = window.matchMedia("(max-width: 800px)");
let turn ="X"

let isgameover= false;
//Funstion to change the turn
const changeTurn= ()=>{
    return turn ==="X"?"0":"X"
}

const handleLineWidth = () => {
    const lineElement = document.querySelector('.line');
    if (window.matchMedia("(max-width: 800px)").matches) {
        // Media query matches (viewport width <= 800px)
        // Adjust the width of .line for smaller screens
        lineElement.style.width = "50vw";
    } else {
        // Media query doesn't match (viewport width > 800px)
        // Reset the width of .line for larger screens
        lineElement.style.width = "25vw";
    }
};
//Function to check for a Win
const checkWin= ()=>{
    let boxtext= document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2, 5, 5, 0],
        [3,4,5, 5,15,0],
        [6,7,8, 5, 25, 0],
        [0,3,6, -5, 15, 90],
        [1,4,7, 5, 15, 90],
        [2,5,8, 15,15,90],
        [0,4,8, 5, 15, 45],
        [2,4,6, 5,15,135],
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText +" WON! ";
            isgameover= true;
            document.querySelector('.info').style.color='green'
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width= '200px';
            

            document.querySelector('.line').style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.width= "25vw"

            handleLineWidth();
        }
    });
}


//Game logic
// music.play();
// music.volume=0.02;
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText
            = "Turn for "+ turn;
            }
            
        }
    })
})

//add onclcik listener to button

reset.addEventListener('click', ()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=''
        document.querySelector('.info').style.color='black'
    });
    turn="X";
    isgameover =false;
    document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName('info')[0].innerText
            = "Turn for "+ turn;
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width= '0px'
            
})

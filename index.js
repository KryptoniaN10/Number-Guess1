let num=Math.floor(Math.random()*10+1)
guesses=0
document.getElementById("submitButton").onclick = function(){
    guesses+=1
    answer=document.getElementById("Guessfield").value
     if(num==answer){
        alert(`${answer} is the #.it took you ${guesses} guesses`)}
     if(num<answer){
        alert("Too Large")
     }if(num>answer){
        alert("Too Small")
     }
     }
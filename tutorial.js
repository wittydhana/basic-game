const prompt=require("prompt-sync")()
const name=prompt("What is your name? ")
console.log("Hello",name,"Welcome to our game!")

const shouldWePlay=prompt("Do you want to Play? ")
if(shouldWePlay.toLowerCase()==="yes")
{
    //Game logic
    const leftOrRight=prompt("You entered the maze,do you want to go left or right? ")
    if(leftOrRight.toLowerCase()==="left")
    {
        console.log("Go to the left and you will see a bridge....")
        const cross=prompt("Do you want to cross the bridge? ")
        if(cross.toLowerCase()==="yes" || cross==="y"||cross==="okay")
        {
          console.log("You crossed the bridge,but the bridge was too weak that you fell.Sorry you lost!... :(")
        }
        else{
            console.log("Good choice buddy....You win!! :)")
        }
    }
    else
    {
        console.log("If you go to right you eventually fall of the cliff....")
    }
}
else if(shouldWePlay.toLowerCase()==="no")
{
    console.log("Okay :(")
}
else{
    console.log("Invalid Input.....")
}
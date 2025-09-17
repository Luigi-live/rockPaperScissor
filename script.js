function getComputerChoise() {
    let choise;
    let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber)
    if(randomNumber <= 33){
        choise = "paper"
    }
    else if (66 < randomNumber) {
        choise = "scissor"
    }
    else if (33 < randomNumber <= 66){
        choise = "rock"
    }
    return choise;
};

console.log(getComputerChoise());
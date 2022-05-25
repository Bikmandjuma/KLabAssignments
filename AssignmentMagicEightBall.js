    var userName = "";
    if(userName == ""){
        result="Hello !";
    }else{
        result="Hello, "+userName+" !";
    }
    console.log(result);


    var userQuestion="Hey ball your shape look like sphere ,how do u work ?";
    console.log(userQuestion);

    
    var randomNumber=Math.floor(Math.random()*8);
    console.log(randomNumber);


    var eightBall="";

    eightBall=randomNumber;
    switch(eightBall){
        case 0:
            console.log("It is a certain");
        break;

        case 1:
            console.log("It is decidetly so");
        break;
        case 2:
            console.log("Reply hazy try again");
        break;
        case 3:
            console.log("Can not predict now");
        break;
        case 4:
            console.log("Do not count on it");
        break;
        case 5:
            console.log("My sources say no");
        break;
        case 6:
            console.log("Outlook not so good");
        break;
        case 7:
            console.log("Signs point to yes");
        break;

        default:
            console.log("Invalid random number");

    }

if(eightBall == 0){
    console.log("It is a certain");
}else if(eightBall == 1){
    console.log("It is decidetly so");
}else if(eightBall == 2){
    console.log("Reply hazy try again");
}else if(eightBall == 3){
    console.log("Can not predict now");
}else if(eightBall == 4){
    console.log("Do not count on it");
}else if(eightBall == 5){
    console.log("My sources say no");
}else if(eightBall == 6){
    console.log("Outlook not so good");
}else if(eightBall == 7){
    console.log("Signs point to yes");
}else{
    console.log("Invalid random number");
}
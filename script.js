const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let compscore=document.querySelector("#comp-score");
let userscore=document.querySelector("#user-score");
let userpoints=0;
let comppoints=0;



let userChoice;
let compChoice;

function result(event){
    userChoice=event.currentTarget.getAttribute("id");
    console.log(`user choice is ${userChoice}`)
     comp();

};

function comp(){
    let a=  Math.floor(Math.random()*3);
    compChoice=choices[a].getAttribute("id");
    console.log(`computer choice is ${compChoice}`)
    checkwinner();
}


choices.forEach(choice => {
    choice.addEventListener("click",result);

    })
function checkwinner(){
if(userChoice===compChoice){
    msg.innerHTML="Draw try again";

}
else{
    if(userChoice=="rock" && compChoice=="scissors"){
        msg.innerHTML=`your ${userChoice} beats computer ${compChoice}`;
        userpoints++;
        userscore.innerHTML=userpoints;

    }
else if(userChoice=="rock" && compChoice=="paper"){
    msg.innerHTML=`computer ${compChoice} beats your ${userChoice}`;
    comppoints++;
    compscore.innerHTML=comppoints;
}

else if(userChoice=="paper" && compChoice=="rock"){
        msg.innerHTML=`your ${userChoice} beats computer ${compChoice}`;
        userpoints++;
        userscore.innerHTML=userpoints;

    }
else if(userChoice=="paper" && compChoice=="scissors"){
    msg.innerHTML=`computer ${compChoice} beats your ${userChoice}`;
    comppoints++;
    compscore.innerHTML=comppoints;}

else if(userChoice=="scissors" && compChoice=="paper"){
        msg.innerHTML=`your ${userChoice} beats computer ${compChoice}`;
        userpoints++;
        userscore.innerHTML=userpoints;

    }
else if(userChoice=="scissors" && compChoice=="rock"){
    msg.innerHTML=`computer ${compChoice} beats your ${userChoice}`;
    comppoints++;
    compscore.innerHTML=comppoints;

}

    }
}

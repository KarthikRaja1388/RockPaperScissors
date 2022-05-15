function computerPlay(){
    const choices = ["Rock", "Paper", "Scissor"];
    let chosen_option = choices[Math.floor(Math.random() * choices.length)];
    return chosen_option;

}

let users_choice = prompt("What is your choice?").toLowerCase();
let computers_choice = computerPlay().toLowerCase();

console.log(users_choice);

function play(users_choice, computers_choice){


    if(users_choice == computers_choice){
        return "Tie";
    }else if (
            (users_choice == "scissor" && computers_choice == "paper")||
            (users_choice == "rock" && computers_choice == "scissor")||
            (users_choice == "paper" && computers_choice == "rock")
            ){
                return "You win";

    }else{
        return "Computer wins";
    }

}


window.alert("Scegli a quale sezione accedere:")
let game_choice = prompt("Digitare mail per accedere alla sezione relativa mail, dadi per la sezione relativa ai dadi").toLowerCase()


if (game_choice == "mail") {
    let mail_user;
    let active_form = document.querySelector(".inactive");
    active_form.className = "active";
    function submit_email() {
        mail_user = document.getElementById("ymail").value
        const mail_list = ["nicola.lilla@gmail.com", "nicolalilla@gmail.com", "lilla.nicola@gmail.com", "lillanicola@gmail.com", "nicolalilla95@gmail.com"];

        for (let i = 0; i < mail_list.length; i++) {
            if (mail_user == mail_list[i]) {
                document.getElementById("result").innerHTML = "la tua mail è presente nel database";
                break;
            }
            else {
                document.getElementById("result").innerHTML = "la tua mail non è presente nel database";
                break;
            }
        }
    }
}

else if (game_choice == "dadi") {
    const user_dice = Math.floor(Math.random() * 6) + 1;
    const cpu_dice = Math.floor(Math.random() * 6) + 1;

    if (user_dice > cpu_dice) {
        window.alert("Vince il giocatore")
    }

    else if (cpu_dice > user_dice) {
        window.alert("Vince il computer")

    }

    else {
        window.alert("pareggio")
    }
}

else {
    window.alert("Selezione non valida")
}
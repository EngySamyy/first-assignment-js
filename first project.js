var first = prompt ("Do you fly??");
console.log(first);

if (first === "yes") {
    var wild = prompt("Are you wild?");

    if (wild === "yes") {
        console.log("It's a Eagle");
    }
    else if (wild === "no"){
        console.log("It's a parrot");
    }
}

else if (first === "no") {
    var anotherName = prompt("Do you live under sea?");

    if (anotherName === "yes") {
        var sea = prompt("Are you sea?");

        if (sea === "yes") {
            console.log("It's a shark");
        }

        else if (sea === "no") {
            console.log("It's a dolphin");
        }
    }

    else if (anotherName === "no") {
        var animal = prompt("Are you wild??");

        if (animal === "yes") {
            console.log("It's a lion");
        }

        else if (animal === "no") {
            console.log("It's a cat");
        }
    }
}








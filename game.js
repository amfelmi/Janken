let p1 = {
    hp: 5,
    stockpile: 1,
    action: null
 }
 
 let p2 = {
    hp: 5,
    stockpile: 1,
    action: null
 }

 var player1 = document.getElementsByClassName('player1');
 var player2 = document.getElementsByClassName('player2');

function attackp1() {
    p1.action = "attack";
    for(var i = 0; i < player1.length; i++) {
        player1[i].disabled = true;
    }
}

function attackp2() {
    p2.action = "attack";
    for(var i = 0; i < player2.length; i++) {
        player2[i].disabled = true;
    }
}

function blockp1() {
    p1.action = "block"
    for(var i = 0; i < player1.length; i++) {
        player1[i].disabled = true;
    }
}

function blockp2() {
    p2.action = "block"
    for(var i = 0; i < player2.length; i++) {
        player2[i].disabled = true;
    }
}

function pushp1() {
    p1.action = "push"
    for(var i = 0; i < player1.length; i++) {
        player1[i].disabled = true;
    }
}

function pushp2() {
    p2.action = "push"
    for(var i = 0; i < player2.length; i++) {
        player2[i].disabled = true;
    }
}

function gameState() {
    if (p1.action != null && p2.action != null) {
        //both attack
        if (p1.action == "attack" && p2.action == "attack") {
            p2.hp = p2.hp - p1.stockpile;
            p1.hp = p1.hp - p2.stockpile;
            p1.stockpile = 1;
            p2.stockpile = 1;
            console.log("p1 hp = " + p1.hp + "    p1 stock = " + p1.stockpile)
            console.log("p2 hp = " + p2.hp + "    p2 stock = " + p2.stockpile)
        }
        //1 attacks and other blocks
        if (p1.action == "attack" && p2.action == "block") {
            p2.stockpile = p2.stockpile + 1;
            console.log("p1 hp = " + p1.hp + "    p1 stock = " + p1.stockpile)
            console.log("p2 hp = " + p2.hp + "    p2 stock = " + p2.stockpile)
        } else if (p1.action == "block" && p2.action == "attack") {
            p1.stockpile = p1.stockpile + 1;
            console.log("p1 hp = " + p1.hp + "    p1 stock = " + p1.stockpile)
            console.log("p2 hp = " + p2.hp + "    p2 stock = " + p2.stockpile)
        }

        //1 attacks other pushes
        if (p1.action == "attack" && p2.action == "push") {
            p2.hp = p2.hp - p1.stockpile;
            p1.stockpile = 1;
            console.log("p1 hp = " + p1.hp + "    p1 stock = " + p1.stockpile)
            console.log("p2 hp = " + p2.hp + "    p2 stock = " + p2.stockpile)
        } else if (p1.action == "push" && p2.action == "attack") {
            p1.hp = p1.hp - p2.stockpile;
            p2.stockpile = 1;
            console.log("p1 hp = " + p1.hp + "    p1 stock = " + p1.stockpile)
            console.log("p2 hp = " + p2.hp + "    p2 stock = " + p2.stockpile)
        }

        //1 blocks and other pushes
        if (p1.action == "block" && p2.action == "push") {
            p1.stockpile = 1;
            console.log("p1 hp = " + p1.hp + "    p1 stock = " + p1.stockpile)
            console.log("p2 hp = " + p2.hp + "    p2 stock = " + p2.stockpile)
        } else if (p1.action == "push" && p2.action == "block") {
            p2.stockpile = 1;
            console.log("p1 hp = " + p1.hp + "    p1 stock = " + p1.stockpile)
            console.log("p2 hp = " + p2.hp + "    p2 stock = " + p2.stockpile)
        }

        console.log("now initiating");
        for(var i = 0; i < player1.length; i++) {
            player1[i].disabled = false;
        }
        for(var i = 0; i < player2.length; i++) {
            player2[i].disabled = false;
        }
        //if both block
        if (p1.action == "block" && p2.action == "block") {
            player1[1].disabled = true;
            player2[1].disabled = true;
        }
        //if both push
        if (p1.action == "push" && p2.action == "push") {
            player1[2].disabled = true;
            player2[2].disabled = true;
        }
        p1.action = null
        p2.action = null
        document.getElementById("p1hp").innerHTML = p1.hp;
        document.getElementById("p1stock").innerHTML = p1.stockpile;
        document.getElementById("p2hp").innerHTML = p2.hp;
        document.getElementById("p2stock").innerHTML = p2.stockpile;

        if (p1.hp < 1 && p2.hp > 0) {
            document.getElementById("result").innerHTML = "Player 2 Wins!"
        } else if (p2.hp < 1 && p1.hp > 0) {
            document.getElementById("result").innerHTML = "Player 1 Wins!"
        } else if (p1.hp < 1 && p2.hp < 1) {
            document.getElementById("result").innerHTML = "DRAW"
        }
    }
}

document.getElementById("p1Atk").addEventListener("click", gameState);
document.getElementById("p2Atk").addEventListener("click", gameState);
document.getElementById("p1Block").addEventListener("click", gameState);
document.getElementById("p2Block").addEventListener("click", gameState);
document.getElementById("p1Push").addEventListener("click", gameState);
document.getElementById("p2Push").addEventListener("click", gameState);

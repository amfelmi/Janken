let p1 = new Player(5, 1);
let p2 = new Player(3, 1);

let turnCounter1 = 0;
let turnCounter2 = 0;

var player1 = document.getElementsByClassName('player1');
var player2 = document.getElementsByClassName('player2');

var clicked_1 = 2
var clicked_2 = 2

//Logic of moveset start
function attackp1(clicked_1) {
    //p2.hp = p2.hp - p1.stockpile;

    console.log(p1);
    console.log(p2);
    console.log(turnCounter1);
    for(var i = 0; i < player1.length; i++) {
        player1[i].disabled = true;
    }
    console.log(clicked_1);
}

function blockp1(clicked_1) {
    //p1.stockpile = p1.stockpile + 1;
    console.log(p1);
    console.log(p2);
    for(var i = 0; i < player1.length; i++) {
        player1[i].disabled = true;
    }
    console.log(clicked_1);
}

function pushp1(clicked_1) {
    //p2.stockpile = 1
    console.log(p1);
    console.log(p2);
    for(var i = 0; i < player1.length; i++) {
        player1[i].disabled = true;
    }
}

function attackp2(clicked_2) {
    //p1.hp = p1.hp - p2.stockpile;

    console.log(p1);
    console.log(p2);
    for(var i = 0; i < player2.length; i++) {
        player2[i].disabled = true;
    }
}

function blockp2(clicked_2) {
   // p2.stockpile = p2.stockpile + 1;
    console.log(p1);
    console.log(p2);
    for(var i = 0; i < player2.length; i++) {
        player2[i].disabled = true;
    }
}

function pushp2(clicked_2) {
    //p1.stockpile = 1
    console.log(p1);
    console.log(p2);
    for(var i = 0; i < player2.length; i++) {
        player2[i].disabled = true;
    }
}

function play() {
    if (clicked_1 == p1Atk && clicked_2 == p2Atk) {
        p1.hp = p1.hp - p2.stockpile;
        p2.hp = p2.hp - p1.stockpile;
        clicked_1 = null
        clicked_2 = null
        for(var i = 0; i < player1.length; i++) {
            player1[i].disabled = false;
        }
        for(var i = 0; i < player2.length; i++) {
            player2[i].disabled = false;
        }
        
    }
    console.log(p1);
    console.log(p2);
    console.log(clicked_1);
    console.log(clicked_2);
}

//logic of moveset end
//Try and shorten this if possible e.g. make 1 attack for both players
/*window.onload = game() {
    while (p1.hp > 0|| p2.hp > 0) {
        if (attackp1||blockp1||pushp1) {
            document.getElementsByClassName('player1');
            turnCounter1++
        }
    }
}*/
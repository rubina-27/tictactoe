var celle;
var toccaA;
var giocatore;
var turni = 0;

$(function () {
    celle = $("#scacchiera td");
    celle.on("click", turno);
    giocatore = $("#giocatore");
    cambioGiocatore();
    alert("Benvenuto a tictactoe di Roberta!");
});

function turno() {
    var cella = $(this);
    var contenuto = cella.text();
    if (contenuto == "X" || contenuto == "O") {
        return;    
    }
    else {
        cella.text(toccaA);
    }
    if (controllaVincita() == false) {
        controllaParita();
    }
    cambioGiocatore();
}

var combinazioni = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function controllaVincita() {
    for (var i in combinazioni) {
        var combinazione = combinazioni[i];
        var prima = $(celle[combinazione[0]-1]);
        var seconda = $(celle[combinazione[1]-1]);
        var terza = $(celle[combinazione[2]-1]);
        if (prima.text() != "X" && prima.text() != "O") {
            continue;
        }
        if (prima.text() == seconda.text() && prima.text() == terza.text()) {
            setTimeout(function() {
                alert("Vince il giocatore " + prima.text() + ". Complimenti!");
                location.reload();
            });
            return true;
        }
    }
    return false;
}

function cambioGiocatore() {
    if (toccaA == "X") {
        toccaA = "O";
    }
    else {
        toccaA = "X";
    }
    giocatore.prop("value", toccaA);
}

function controllaParita() {
    turni++;
    if (turni == 9) {
        setTimeout(function() {            
            alert("Mi spiace, avete raggiunto un pareggio!");
            location.reload();
        });
    }
}
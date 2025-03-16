 const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let userchosen;

const btnpiedra = document.getElementById('IdPiedra');
const btnpapel = document.getElementById('IdPapel');
const btntijeras = document.getElementById('IdTijeras');

function behavior(id){

     if (id.checked === true){
        return(false)
    } else{
        return(true)
    }
}




function Piedra(){
    userchosen = rock;
    console.log(userchosen);
    
    rckchk.checked = behavior(rckchk);
    pprchk.checked = false;
    scsrschk.checked = false;

}

function Papel(){
    userchosen = paper;
    console.log(userchosen);

    pprchk.checked = behavior(pprchk);
    rckchk.checked = false;
    scsrschk.checked = false;

};

function Tijera() {
    userchosen = scissors;
    console.log(userchosen);

    scsrschk.checked = behavior(scsrschk);
    rckchk.checked = false;
    pprchk.checked = false;
}


const totalCredit = document.querySelector("#totalCredit").innerText.split(" ");
//console.log(Number(totalCredit[0]));
document.getElementById("credit").innerHTML =
        `<li>
            <span class="intitule">salaire</span>
            <span class="montant txt-color-gazoil"> ${Number(totalCredit[0])} €</span>
        </li>`;

let debit = [
    ["achat PS4", 499.99],
    ["achat TV", 599 ]
];

let credit = [
    ["salaire", 1520]
];

document.getElementById("totalDebit").innerHTML = `${calculDepense(debit)} €`;
document.getElementById("totalCredit").innerHTML = `${calculDepense(credit)} €`;
document.getElementById("totalDebitPercent").innerHTML = `${100 - (calculPourcentage(calculDepense(credit) - calculDepense(debit)))} €`;


document.getElementById("debit").innerHTML = 
        `<li>
            <span class="intitule">${debit[0][0]}</span>
            <span class="montant txt-color-red">${debit[0][1]} €</span>
            <span class="percent txt-color-red">${calculPourcentage(debit[0][1])}%</span>
        </li><li>
            <span class="intitule">${debit[1][0]}</span>
            <span class="montant txt-color-red">${debit[1][1]} €</span>
            <span class="percent txt-color-red">${calculPourcentage(debit[1][1])}%</span>
        </li>`;

document.getElementById("btn").addEventListener("click", function(event){
    event.preventDefault()
});



/************************************/
function rajouter(){
    const intitule = document.querySelector("#intitule").value;
    const montant = document.querySelector("#montant").value;
    const choix = document.getElementById("operation");
    txtChoix = choix.options[choix.selectedIndex].text;
    
    //transaction.push([intitule, montant , 39.40])   ;
    //console.log(transaction.length);

    if(txtChoix == "-"){
        document.getElementById("debit").innerHTML += 
        `<li>
            <span class="intitule">${intitule}</span>
            <span class="montant txt-color-red">${montant} €</span>
            <span class="percent txt-color-red">${calculPourcentage(montant)}%</span>
        </li>`;
        debit.push([intitule, montant , 39.40]);
        document.getElementById("totalDebit").innerHTML = calculDepense(debit);
    }else{
        document.getElementById("credit").innerHTML += 
        `<li>
            <span class="intitule">${intitule}</span>
            <span class="montant txt-color-gazoil">${montant} €</span>
        </li>`;
        credit.push([intitule, montant]);
        calculDepense(credit);
        document.getElementById("totalCredit").innerHTML = calculDepense(credit);
    }
    document.getElementById("total").innerHTML = `+ ${calculDepense(credit) - calculDepense(debit)} €`;
    document.getElementById("totalDebitPercent").innerHTML = `${100 - (calculPourcentage(calculDepense(credit) - calculDepense(debit)))} €`;
    

}

function calculDepense(tableau){
    let totalAchat = 0; 
    for (let i = 0; i < tableau.length; i++) {
        totalAchat += Number(tableau[i][1]);
    }   
    return totalAchat;
}

function calculPourcentage(montant){
    let calcul = 0;
    const total = calculDepense(credit)
    calcul = (montant * 100) / total;
    return calcul;
}
'use strict';

const months = {
        1: 'Sausis',
        2: 'Vasaris',
        3: 'Kovas',
        4: 'Balandis',
        5: 'Geguze',
        6: 'Birzelis',
        7: 'Liepa',
        8: 'Rugpjutis',
        9: 'Rugsejis',
        10: 'Spalis',
        11: 'Lapkritis',
        12: 'Gruodis'
}

/*********** SORTING ***********/
function compare(a,b) {
    const monthA = a.month;
    const monthB = b.month;
    let comp = 0;
    if (monthA > monthB) {
        comp = 1;
    } else if (monthB > monthA) {
        comp = -1;
    }
    return comp
}
const weeb = account.sort(compare)
/*********** SORTING END ***********/

/*********** HTML => JS (LENTELE) ***********/
let HTML = ``;

weeb.forEach(dalykai => {
/***** UNDEFINED FIX *****/
    let pepega;
    let anaxunamun;
    let heraklis = 0;
    if (dalykai.income > 0) {
        pepega = dalykai.income;
        heraklis += dalykai.income
    } else { pepega = 0 }
   
    if (dalykai.expense > 0) {
        anaxunamun = dalykai.expense;
        heraklis -= dalykai.expense;
    } else { anaxunamun = 0}
/***** UNDEFINED FIX END *****/

    HTML += `<div class="table-row">
                <div class="cell">${dalykai.month}</div>
                <div class="cell">${months[dalykai.month]}</div>
                <div class="cell">${pepega} Eur</div>
                <div class="cell">${anaxunamun} Eur</div>
                <div class="cell">${pepega-anaxunamun} Eur</div>
            </div>
    `;
    })

document.querySelector('.table-content').innerHTML += HTML
/*********** HTML => JS (LENTELE) END ***********/

/*********** HTML => JS (SUVESTINE) ***********/

weeb.forEach(summ => {

    const income = summ.income;
    let legitIncome;
    let sumIncome = 0;

    if (income > 0) {
        legitIncome = income;
        sumIncome = sumIncome + income
    }

    console.log(sumIncome)
})


/*********** HTML => JS (SUVESTINE) END ***********/

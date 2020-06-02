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
                <div class="cell">${heraklis} Eur</div>
            </div>
    `;
    })

document.querySelector('.table-content').innerHTML += HTML
/*********** HTML => JS (LENTELE) END ***********/

/*********** HTML => JS (SUVESTINE) ***********/
let sumHTML = ``;
let sumIncome = 0;
let sumExpense = 0;
let sumBalance = 0;

weeb.forEach(summ => {

    const income = summ.income;
    const expense = summ.expense;
    const balance = summ.balance;
    let legitIncome;
    let legitExpense;
    let legitBalance;

    if (income > 0) {
        legitIncome = income;
        sumIncome = sumIncome + income
    }
    if (expense > 0) {
        legitExpense = expense;
        sumExpense += expense;
    }
    sumBalance = sumIncome - sumExpense
})
sumHTML +=  `
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell">${sumIncome}</div>
    <div class="cell">${sumExpense}</div>
    <div class="cell">${sumBalance}</div>
    `;

document.querySelector('.table-footer').innerHTML += sumHTML


/*********** HTML => JS (SUVESTINE) END ***********/

/*********** METU SUVESTINE ***********/

const minIncome = document.getElementById('minIncome');
const maxIncome = document.getElementById('maxIncome');
const minExpense = document.getElementById('minExpense');
const maxExpense = document.getElementById('maxExpense');

let minIncomeMonth = {index: 1, value: Infinity},
    maxIncomeMonth = {index: 1, value: 0},
    minExpenseMonth = {index: 1, value: Infinity},
    maxExpenseMonth = {index: 1, value: 0};

weeb.forEach(monthConc => {
    if (monthConc.income < minIncomeMonth.value) {
        minIncomeMonth.value = monthConc.income;
        minIncomeMonth.index = monthConc.month;
    }
    if (monthConc.income > maxIncomeMonth.value) {
        maxIncomeMonth.value = monthConc.income;
        maxIncomeMonth.index = monthConc.month;
    }
    if (monthConc.expense < minExpenseMonth.value) {
        minExpenseMonth.value = monthConc.expense;
        minExpenseMonth.index = monthConc.month;
    }
    if (monthConc.expense > maxExpenseMonth.value) {
        maxExpenseMonth.value = monthConc.expense;
        maxExpenseMonth.index = monthConc.month;
    }
})

minIncome.innerText = months[minIncomeMonth.index];
maxIncome.innerText = months[maxIncomeMonth.index];
minExpense.innerText = months[minExpenseMonth.index];
maxExpense.innerText = months[maxExpenseMonth.index];

/*********** METU SUVESTINE END ***********/

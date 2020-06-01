'use strict';
const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

// function compare(a, b) {
//     const bandA = a.month;
//     const bandB = b.month;
  
//     let comparison = 0;
//     if (bandA > bandB) {
//       comparison = 1;
//     } else if (bandA < bandB) {
//       comparison = -1;
//     }
//     return comparison;
//   }
  
//   console.log(account.sort(compare));

// function compare(a,b) {
//     const monthA = a.month;
//     const monthB = b.month;
//     let comp = 0;
//     if (monthA > monthB) {
//         comp = 1;
//     } else if (monthB > monthA) {
//         comp = -1;
//     }
//     return comp
// }
// console.log(account.sort(compare))
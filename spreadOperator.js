
// let bat = {
//     weight: 1.5,
//     length: 20,
//     price: 1000,
//     brand: "SG",
//     "made in": "India"
// }

// let ball = {
//     raidus: 5,
//     color: "red",
// }

// // spread operator
// let cricket = {...ball, ...bat}

// console.log(cricket)


let obj1 = {
    a: 10,
    b: {p:10, q:20},
    c: 30,
}


let obj2 = {
    x: 100,
    ...obj1,
    z: 300,
}

console.log(obj2)
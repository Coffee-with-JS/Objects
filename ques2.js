
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

// let cricket={}

// cricket.bat = bat
// cricket.ball = ball

// console.log(cricket)


let cricket = {
    bat: {
            weight: 1.5,
            length: 20,
            price: 1000,
            brand: 'SG',
            'made in': 'India'
    },
    ball: { 
        raidus: 5, 
        color: 'red' 
     }
  }

//   console.log(cricket.bat.brand)
console.log(cricket["bat"]["brand"])
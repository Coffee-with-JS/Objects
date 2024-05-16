
let bat = {
    weight: 1.5,
    length: 20,
    price: 1000,
    "made in": "India"
}

// bat.hello = "Ramesh"
// bat["hello"] = "Ramesh"

let ball = {
    raidus: 5,
    color: "red",
}

let cricket={}


for(let t in bat){
    // console.log(t)
    cricket[t] = bat[t]
}
for(let t in ball){
    // console.log(t)
    cricket[t] = ball[t]
}

console.log(cricket)
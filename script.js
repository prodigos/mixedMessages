const { SlowBuffer } = require("buffer");

const randomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

// const callAvengers = {
//     "hero": ["Cap. America", "Ironman", "HawkEye", "Hulk","Ant-man"],
//     "villain": ["Thanos", "Loki", "Ultron", "Hella","Warmonger"],
//     "place": ["Wakanda", "Slovenia", "Asgard", "New York" ]

// }
// let summitAvengers = [];

// for (let key in callAvengers) {
//     // console.log(key);
//     // console.log(callAvengers[key])
//     // console.log(randomNumber(callAvengers[key].length))
//     let randomIndex = randomNumber(callAvengers[key].length);
//     switch(key) {
//         case "hero" : 
//         summitAvengers.push(`We need ${callAvengers[key][randomIndex]} to help us.`)
//         break;
//         case "villain":
//         summitAvengers.push(`${callAvengers[key][randomIndex]} is on the loose,`)
//         break;
//         case "place": 
//         summitAvengers.push(`and the villain is terrorising ${callAvengers[key][randomIndex]}`)
//         break;
//         default:
//         summitAvengers.push("we are all doomed")
//      } 
// } 

// const emergency = (arr) => {
//     // arr.join()
//     console.log(arr.join(' '))
// }
// emergency(summitAvengers)

let heroes = ["Cap. America", "Ironman", "HawkEye", "Hulk","Ant-man"];
let villains = ["Thanos", "Loki", "Ultron", "Hella","Warmonger"];
let places = ["Wakanda", "Slovenia", "Asgard", "New York"];

let message = [];

const summit = (arr) => {
    for (i = 0; i < arr.length; i++){
        if(arr === heroes){
            message.push(`We need ${arr[randomNumber(arr.length)]} to help us.`)

        } else if (arr === villains) {
            message.push(`${arr[randomNumber(arr.length)]} is on the loose,`)
        } else if (arr === places) {
            message.push(`and the villain is terrorising ${arr[randomNumber(arr.length)]}`)
        } else {
            return "we are doomed"
        }
        return message
    }
    
}


// console.log(summit(heroes))
summit(heroes)
summit(villains)
summit(places)
console.log(message.join(' '))
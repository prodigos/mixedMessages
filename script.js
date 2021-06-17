
const randomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const callAvengers = {
    "hero": ["Cap. America", "Ironman", "HawkEye", "Hulk","Ant-man"],
    "villain": ["Thanos", "Loki", "Ultron", "Hella","Warmonger"],
    "place": ["Wakanda", "Slovenia", "Asgard", "New York" ]

}
let summitAvengers = [];

for (let key in callAvengers) {
    // console.log(key);
    // console.log(callAvengers[key])
    // console.log(randomNumber(callAvengers[key].length))
    let randomIndex = randomNumber(callAvengers[key].length);
    switch(key) {
        case "hero" : 
        summitAvengers.push(callAvengers[key][randomIndex])
        break;
        case "villain":
        summitAvengers.push(callAvengers[key][randomIndex])
        break;
        case "place": 
        summitAvengers.push(callAvengers[key][randomIndex])
        break;
        default:
            summitAvengers.push("we are all doomed")
     } 
} 

const emergency = (arr) => {
    console.log(arr)
}
emergency(summitAvengers)
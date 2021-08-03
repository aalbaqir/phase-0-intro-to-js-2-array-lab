// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
    return cats
}   
function appendCat(){
    cats.slice(0, 3)
    return cats
}
  
// function prependCat(){
//     cats.pop("Arnold")
// }

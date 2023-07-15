// Write your solution here!

const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name);
    
}

destructivelyAppendCat("Ralph")
console.log(cats)

function destructivelyPrependCat(name2){
    return cats.unshift(name2)
}

destructivelyPrependCat("Bob")
console.log(cats)

function destructivelyRemoveLastCat(){
    return cats.pop('Ralph')
}
destructivelyRemoveLastCat();
console.log(cats)

function destructivelyRemoveFirstCat(){
    return cats.shift('Bob')
}

destructivelyRemoveFirstCat();
console.log(cats)



function appendCat(name) {
    return [...cats, name];
  }
 appendCat('Broom')
console.log(cats)
  
function prependCat(name) {
    return [name, ...cats];
 }

 prependCat("Arnold")
  
function removeLastCat() {
    return cats.slice(0, -1);
}

  function removeFirstCat() {
    return cats.slice(1);
  }


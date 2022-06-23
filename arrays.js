/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
let backpack=[]
backpack.push['sword,'shield','food']
console.log(backpack)
let belt=backpack.splice(0,1)
let belt2=backpack.slice(0,1)
console.log(belt)
console.log(belt2)
let furCoat='fur coat'
backpack.unshift(furcoat)
backpack.shift()
console.log(backpack)

let itemcount= backpack.length
console.log(itemcount)
backpack.push('flint,'blanket','knife','toothbrush')
console.log(backpack)
let backpack2=backpack.splice(2,4)
console.log(backpack2)


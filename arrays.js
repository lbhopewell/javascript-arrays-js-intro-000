var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  let newArray = [element, ...array];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array;
}

function addElementToEndOfArray(array, element){
  var newArray = array.concat(element)
  return array;
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
  
}

function accessElementInArray(array, index){
return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array;
  
}

function removeElementFromEndofArray(array){
  newArray = array.slice(0, array.length - 1)
  return array
}

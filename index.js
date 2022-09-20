const arr = [];

let currentElement = document.querySelector("cite");


while (currentElement) {
    let currentElementName = currentElement.nodeName + "." + currentElement.classList;

    arr.unshift(currentElementName.toLowerCase()); // adds the element to the first position of the arr 

    currentElement = currentElement.parentElement;

}

console.log(arr.join(" > "));



























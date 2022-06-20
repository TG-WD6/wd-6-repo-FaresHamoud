// to find elements with the class aDiv and title
const classElements = document.getElementsByClassName('aDiv title');
console.log(classElements);


// to find p tagged elements 
function tagElements() {
    const divelements = document.getElementsByTagName('p')
    const numOfTags = divelements.length;
    console.log('there are' + numOfTags + "p");
}




// to find the first item div
var div = document.querySelector('diveone');
console.log(div);






// to count the p item inside a div 
const pIndiv = document.querySelectorAll('div > p');
console.log(pIndiv);



// to erase the content of body, we used innerHTMl and replaced the body with "" empty

// document.body.innerHTML = "";


// or adding a new li to an existing list 
const list = document.getElementById('aList');
list.innerHTML += '<li> item added by JS using innerHTML</li>'


// HTMLElement.innerText
const paragraph2 = docuemnt.getElementById('paragraph2');
const textOutput = docuemnt.getElementById("textOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textOutput.value = paragraph2.textContent;
innerTextOutput.value = paragraph2.innerText;



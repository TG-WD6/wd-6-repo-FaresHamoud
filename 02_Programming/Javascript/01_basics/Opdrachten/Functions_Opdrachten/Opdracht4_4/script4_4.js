
// 4.4.1

const predefinedNames = ['joost', 'lex', 'nathaniel', 'fares']
let userInput = document.getElementById('userInputField');
userInput.onchange = (e) => {
    checkUserInput(e.target)
}

function checkUserInput(input){
    // console.log('your input is ${userInput.value}')
    if (predefinedNames.includes(input.value.toLowerCase()) === true){
        console.log('Bingo! one of us');
    }
    else {
        console.log('Warning!! Intruder detected!!!');
    }
}




// switch method 

// function checkUserInput() {
//     let userInput = document.getElementById("userInputField").value;
//      switch (userInput) {
//         case "joost":
//         case "fares":
//         case "lex":
//         case "natahniel":
//             console.log("sucess!")
//             break;
//             default: console.log("failed!");
//      }

        
// } 









































// 4.4.2




// 4.4.3

// (userInput) => {




























// function checkUserInput(){
//     var userNameInput = document.getElementById("userInput").value;
    
//     if (userNameInput == "Joost" )
//     {
//         console.log("one of us!");
//     }

// else {
//     console.log("intruder!");
// }
// }



// console.log('test')






// let Joost = "Joost";
// let Nathniel = "Nathaniel";
// let Lex = "Lex";


// function nameInput1Log() {
// var nameInput1 = document.getElementById('nameInput1').innerText;
// if (nameInput1 = Joost || Nathniel || Lex) {
//     console.log("one of us!");
    
// }else { console.log("intruder!");}
// }




// function checking() {
//     if  (nameInput1.value =  'Joost' || 'Nathniel' || 'Lex'){
//         let outPut1 = ("one of us!")

//     }
    
// console.log(output1);
    
// }




// btn1.addEventListener('click',result);




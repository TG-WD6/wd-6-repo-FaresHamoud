// const Classmates = [


//     { name: 'sander' },
//     { name: 'marko' },
//     { name: 'nathaniel' },
//     { name: 'madhwi' },
//     { name: 'marjana' },
//     { name: 'alex' },
//     { name: 'bart' },
//     { name: 'luisa' },
//     { name: 'junier' },
//     { name: 'esther' },
//     { name: 'joost' },

// ];

// localStorage.setItem("Classmates", JSON.stringify(Classmates));
// let storedData = JSON.parse(localStorage.getItem("classmates"));

// const list = document.getElementsByClassName("list");
// const searchInput = document.getElementById("searchBar").value;
// const searchIcon = document.getElementsByClassName("search-icon");


// searchIcon.addEventListener("click", function(){

// })


// function showList(group) {
//     clearList();
//     for (const searchTerm of storedData) {
//         const item = document.createElement('li');
//         item.classList.add('list-group-item');
//         const text = document.createTextNode(searchTerm.name);
//         item.appendChild(text);
//         list.appendChild(item);
//     }
//     if (group.lenght === 0) {
//         noResult();
//     }
// }








// function relevant (value, searchInput){
//     if (value === searchInput){
//         return 2;
//     }else if (value.startsWith(term)){
//         return 1;
//     }else if (value.includes(searchInput)){
//         return 0;
//     }
// }








// searchInput.addEventListener('input', () => {
//     const value = event.target.value;

// })



// searchFunction()




// ------------------------------------------------------------------------------------------------------------------------------------





const searchInput = document.querySelector("search-bar");
const suggestionList = document.querySelector("list");
const searchIcon = document.querySelector("search-icon");


// .onkeyup: Execute a JavaScript when a user releases a key:
searchInput.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        searchIcon.onclick = () => {
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
    }
}

function showSuggestions(list) {
    letsuggestionList;
    if (!list.length) {
        userValue = searchInput.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggestionList.innerHTML = listData;
}
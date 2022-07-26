const Classmates = [


    { name: 'sander' },
    { name: 'marko' },
    { name: 'nathaniel' },
    { name: 'madhwi' },
    { name: 'marjana' },
    { name: 'alex' },
    { name: 'bart' },
    { name: 'luisa' },
    { name: 'junier' },
    { name: 'esther' },
    { name: 'joost' },

];



const list = document.getElementById("search-list")
const searchInput = document.getElementById("search-bar");


// function showList(group) {
//     clearList();
//     for (const searchTerm of Classmates) {
//         const item = document.createElement('li');
//         item.classList.add('list-group-item');
//         const text = document.createTextNode(searchTerm.name);
//         item.appendChild(text)
//             ;
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






// localStorage.clear

// searchInput.addEventListener('input', (e) => {
//     for (let i = 0; i< list.Classmates.length; i++){
// list.Classmates[i].list.remove('show', 'active');
//     }

// })


// if (localStorage.length > 0){
//     let storageArray = localStorage.getItem('storageArray');
//     let parsedStrings = Classmates.parse(storageArray);

// for (let i = 0; i <parsedStrings.langht; i++){
//     if ()
// }

// }
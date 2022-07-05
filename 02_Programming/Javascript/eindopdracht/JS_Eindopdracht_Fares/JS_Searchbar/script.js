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



const list = document.getElementsByClassName("list");
const searchInput = document.getElementById("searchBar");


function showList(group) {
    clearList();
    for (const searchTerm of Classmates) {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(searchTerm.name);
        item.appendChild(text)
            ;
        list.appendChild(item);
    }
    if (group.lenght === 0) {
        noResult();
    }
}


// function relevant (value, searchInput){
//     if (value === searchInput){
//         return 2;
//     }else if (value.startsWith(term)){
//         return 1;
//     }else if (value.includes(searchInput)){
//         return 0;
//     }
// }








searchInput.addEventListener('input', () => {
    const value = event.target.value;

})

// Maak een array met 10 Person Objects, die een naam en leeftijd hebben. Gebruik vervolgens Array methods om je personen te sorteren op leeftijd. 

let person = [

{
    name: 'Abe',
    age: 34,
},
{
    name: 'Jowell',
    age: 44,
},
{
    name: 'Beth',
    age: 74,
},
{
    name: 'Zepp',
    age: 22,
},
{
    name: 'Kylie',
    age: 4,
},
{
    name: 'Peter',
    age: 88,
},
{
    name: 'Maria',
    age: 25,
},
{
    name: 'Jan',
    age: 31,
},
{
    name: 'Tom',
    age: 53,
},
{
    name: 'Lee',
    age: 18,
}

]


person.sort((a, b) => {
    return a.age - b.age;
});

person.forEach((e) => {
    console.log(`${e.name} ${e.age}`);
});

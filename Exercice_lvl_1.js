const countries = ['Finland', 'Sweden', 'Norway']

//1. CREATE EMPTY SET

const emptySet = new Set();

//2. CREATE SET 0-10 WITH LOOP

for (let i = 0; i<= 10; i++){
    emptySet.add(i);
};

console.log(emptySet);

//3. REMOVE ELEMENT FROM SET

emptySet.delete(0);

console.log(emptySet);

//4. CLEAR A SET

emptySet.clear();

console.log(emptySet);

//5. CREATE A SET OF 5 STRING ELEMENTS FROM ARRAY

const array = ["Orange", "Kiwi", "Banana", "Strawberry", "Blueberry"];

const fruitSet = new Set(array);
console.log(fruitSet);

//6. CREATE A MAP OF COUNTRIES AND NUMBER OF CHARACTERS OF A COUNTRY

const myMap = new Map();

countries.forEach((country) => {
    myMap.set(country, country.length);
});

console.log(myMap);


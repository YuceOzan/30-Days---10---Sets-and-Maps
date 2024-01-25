const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let A = new Set(a);
let B = new Set(b);

//1. FIND A UNION B

let union = new Set([...a, ...b]);
console.log(union)
let unionArray = [...union];
console.log(unionArray);


//2. FIND A INTERSECTION B

let intersection = new Set(a.filter((num) => B.has(num)));
console.log(intersection);
let intersectionArray = [...intersection];
console.log(intersectionArray);


//3. FIND A WITH B

let difference = new Set(a.filter((num) => !B.has(num)));
console.log(difference);
let differenceArray = [...difference];
console.log(differenceArray);
// 1. Berilgan sonlar massividan berilgan sondan kattalarini qaytaruvchi funksiya yozing.
function fiveAndGreaterOnly(arr, min) {
    let Array = []
    arr.forEach((element) => {
        if (element > min) {
            return Array.push(element)
        }
    })
    console.log(`${Array}`);
}
// test
fiveAndGreaterOnly([3, 6, 8, 2], 5); /// [6, 8]

// 2. Berilgan massivning faqat juft sonlardan iborat elementlaridan tashkil topgan
//  yangi massiv qaytaradigan funksiya yozing

function evensOnly(arr) {
    let Array2 = []
    arr.forEach((element2) => {
        if (element2 % 2 == 0) {
            return Array2.push(element2)
        }
    })
    console.log(`${Array2}`);
}
// test
evensOnly([3, 6, 8, 2, 4, 10]); /// [6, 8, 2]

// 3. Stringlar massivi berilgan. Faqat uzunligi 5 dan kichik bo'lgan elementlaridan tashkil topgan
//  massiv qaytaradigan funksiya yozing

function fiveCharactersOrFewerOnly(arr) {
    let Array3 = []
    arr.forEach(element3 => {
        if (element3.length <= 5) {
            Array3.push(element3)
        }
    });
    console.log(`${Array3}`);
}
// test
fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["by", "dog", "wolf", "eaten"]

// 4. Berilgan massivdan clubga tegishli bo'lmagan odamlardan tashqari odamlarni qaytaradigan funksiya yozing
function peopleWhoBelongToTheIlluminati(arr) {
    members = 0
    arr.forEach(mem => {
        if (mem.member === true) {
            members++
        }
    });
    console.log(`Obuna bo'lganlar ${members}`);
}
console.log(
    peopleWhoBelongToTheIlluminati([
        { name: "Angelina Jolie", member: true },
        { name: "Eric Jones", member: false },
        { name: "Paris Hilton", member: true },
        { name: "Kayne West", member: false },
        { name: "Bob Ziroll", member: true },
    ])
);
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

// 5. 18 yoshdan kattalarni qaytaruvchi funksiya yozing.

function total(arr) {
    return arr.reduce(func(acc, elem, index, array), initialValue)
}
// arr.forEach(func(acc, elem, array))

var ofAge = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
];
const filtered = ofAge.filter((elem) => elem.age > 18)
console.log(filtered);
// =>
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]

// 6. Berilgan massivni yoshi bo'yicha tartiblang.
function ofAge6(arr) {

    arr.sort((a, b) => a.age - b.age)
    console.log(arr);
}


ofAge6([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 },
]);

// 7. let players = [{name: 'Wes', position: 'WR'}, {name: 'Coty', position: 'QB'}, {name: 'Joe', position: 'WR'}];
// Berilgan o'yinchilar ro'yhatidan lavozimi WR bo'lganlarini qaytaring (Lavozim: position)

let players = [{ name: 'Wes', position: 'WR' }, { name: 'Coty', position: 'QB' }, { name: 'Joe', position: 'WR' }];

function positionPly(arr) {
    let filtered = arr.filter((elem) => elem.position === "WR")
    console.log(filtered);
}

positionPly(players)
// 8. Berilgan o'quvchilar ro'yhati massivni guruh bo'yicha bo'lib bering.

function studentsByGroup(arr) {
    // sizning kodingiz
}

// test
const students = [
    { name: "Bob", group: "NT-79", voted: true },
    { name: "Jake", group: "NT-77", voted: true },
    { name: "Kate", group: "NT-70", voted: false },
    { name: "Sam", group: "NT-77", voted: false },
    { name: "Phil", group: "NT-70", voted: true },
    { name: "Ed", group: "NT-79", voted: true },
    { name: "Tami", group: "NT-77", voted: true },
    { name: "Mary", group: "NT-70", voted: false },
    { name: "Becky", group: "NT-79", voted: false },
    { name: "Joey", group: "NT-70", voted: true },
    { name: "Jeff", group: "NT-79", voted: true },
    { name: "Zack", group: "NT-79", voted: false },
];
function studentsByGroup(arr) {
    let nt79 = [];
    let nt70 = [];
    let nt77 = [];

    arr.forEach(elem => {

        if (elem.group === "NT-79") {
            nt79.push(elem)
        } else if (elem.group === "NT-77") {
            nt77.push(elem)
        } else if (elem.group === "NT-70") {
            nt70.push(elem)
        }

    });

    console.log(nt79, nt77, nt70);
}
studentsByGroup(students);
// Natija:
// {
//     "NT-79": [
//         { name: "Bob", group: "NT-79", voted: true },
//         { name: "Ed", group: "NT-79", voted: true },
//         { name: "Becky", group: "NT-79", voted: false },
//         { name: "Jeff", group: "NT-79", voted: true },
//         { name: "Zack", group: "NT-79", voted: false },
//     ],
//     "NT-70": [
//         { name: "Kate", group: "NT-70", voted: false },
//         { name: "Mary", group: "NT-70", voted: false },
//         { name: "Joey", group: "NT-70", voted: true },
//     ],
//     "NT-77": [
//         { name: "Jake", group: "NT-77", voted: true },
//         { name: "Sam", group: "NT-77", voted: false },
//         { name: "Tami", group: "NT-77", voted: true },
//     ]
// }


// https://coursework.vschool.io/array-filter-exercises/
// https://gist.github.com/LeWestopher/30d7ea0e212c5d140800a6575b5aad98

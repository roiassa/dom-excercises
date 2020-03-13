
//confirm("Hi");//alert with confirmation of the user
//""<-- is for string, without it it's a function(?)
//var pointsNum = 0;
//var pointsStr= "0";

//var msg1 ="Hello";
//var msg2 ="World";

// console.log( msg1 + ' ' + msg2);
// points = points +1;
// alert(points);

//var name = 'David', age = 35;
//var age1 = 30, age2 = age1 + 5, name = "Elad";
//console.log(age1 + ' ' + age2 + ' ' +name);

//true = 1
//false = 0

//undefined = var I defined but did not give it value
//is not defined = something I just typed and never defined

//var light = true;

//light = false;
//console.log(light);

//if 1st
//else if 2nd to infinity
//else the ending
//var iceCream = 'chocolate';
//if (iceCream === 'chocolate') {
//    alert('Yay, I love choclate ice cream!');
//} else if (iceCream === 'vanilla') {
//    alert('Yay, I love vanilla ice cream!');
//} else {
//        alert('Awww but I love vanilla or choclate ice cream');
//    }

//=== is testing STRICT equality
//== is testing LOOSE equality

//var myVar = '77'
// var myEvar = 77

// if (myVar == myEvar) {
//     alert('Nice');
// }
// else {
//     alert('No');
// }

/*
var myVar = 200;
var myEvar = 20;
alert(myVar);
if (!(myVar === 100)) {
    alert('Good Yob!');
}
else if (myVar < myEvar) {
   alert('Why'); 
}
else if (myVar === myEvar) {
    alert('Cool');
}
else if (myVar += myEvar > myEvar) {
    alert('Awesome!');
}

else {
    alert('Not good');
}

console.log(5 !== '5');


var a = 'a'
var b = 'b'
if (a < b) {
    console.log (a + ' is less than ' + b);
} else if (a > b) {
    console.log(a + 'is greater than ' + b);
} else {
    console.log(a + ' and ' + b + ' are equal. ');
}

var a = 3
var b = -2
console.log(!(a > 0 || b > 0 ))//! is NOT= if a > 0 is true and, b > 0 is false, it will come out true(because of the "||"), but "!" makes it the opposite of the answer, so the statment in the end will be false.

var hour = 9;
if (hour <10 || hours > 10){
    alert('The office is closed.');
}

var hour = 12;
var isWeekend = true;
//if (hour < 10//false || hour > 18//false || isWeekend//true) //statement will be true
    //alert ('The office is closed.');

var a;
if(!a) {
    console.log("Not Have a value");//false
} else {
    console.log("Have a value");//true
}


var a = 10;
a >= 5 ? console.log('A')
:(a < 5 && a > 0) 
?console.log('B') 
:console.log('C')

prompt('What is your name?');

var name = prompt("What is your name?");
console.log(name)

function mult(num1,num2) {//המצאנו פונקציה של כפילה עם שני מספרים
    var result = num1 * num2;//כאן אנחנו נותנים לפונקציה את הערך של הכפילה
    return result;//תוצאה
}

var res = mult(4, 5);// בעזרת הפונקציה שהגדרתי מכפיל את שני המפסרים
console.log(res)//יחזיר 20


function mult(num1,num2, num3) {//המצאנו פונקציה של כפילה עם שלוש מספרים
    var result = num1 * num2 * num3;//כאן אנחנו נותנים לפונקציה את הערך של הכפילה
    if(num3 === undefined) num3 = 1;//מגדירה לערך השלישי שאין לו ערך את הערך של 1
    return num1 * num2* num3;//תוצאה
}


//תרגול

function hello(name){
    alert("Hello " + name);
    return name + "!";
}

var nameAfterFunc = hello('Avi');
alert(nameAfterFunc)
var nameAfterFunc = hello('Moshe');
alert(nameAfterFunc)


function whatToWear(temp) {
if ( temp > 40) {
    console.log('Wear a T-shirt');
}

else if (temp < 0  ) {
    console.log('Wear a warm coat');
}
else {
    console.log('Go naked');
}
console.log(temp)
}

function mult(num1, num2, num3) {
    console.log(num1 * num2 * num3);
}

var num1 = prompt("num1");
var num2 = prompt("num2");
var num3 = prompt("num3");


function getMax(num1, num2) {
  return (num1 > num2) ? num1 : num2;
}
alert(getMax(8, 10));
alert(getMax(10, 8));

alert(getMax(prompt("NUM1"), prompt("NUM2")));


function showType(value) {
    console.log(typeof val === 'number');
}

showType('Hello')
showType(5)
showType('5')
showType('true')
showType('')

var val = true;
function toggle() {
    return val = !val;
}

console.log(toggle());


for (var i = 0 ; i < 9 ; i++) {
    console.log('i: ', i)
}

console.log('i; ', i);


var str ="";
for(var i = 0; i < 9; i++) {
    if (str === "") {
        str = str + i;
    }else {
    str = str + ' ' + i;
    }
}

//ternary: for (var i = 0; i < 9; i++) {
    //str = (str === "") ? str + i : str + ' ' + i;
//}
console.log('str:', str)


function user() {
    var userInput = prompt("Put a number in"); //המשתנה שהגדרתי משתנה להיות למה שהמשתמש שם בפנים
for(var i = 0; i < 10; i++) {// כאן אנחנו מגדירים לו שאם הוא קטן 10 להביא לי אותו 10 פעמים
    console.log(userInput);// כאן מביא לי את מה שהמתמש שם כפול 10
} }

user(console.log());


function user1() {
    var userWrites = prompt('Put a number in');
    for(var i = 0; i < userWrites ; i++) {
        console.log('Hello');
    }
}
user1(console.log());



function grades(){
    var average = 0;//הגדרתי כדי שהמשתנה יהיה מספר
    var sum = 0;//אותו הדבר
    var x = prompt();//מכניס את כמות הפעמים
    for (i=0; i<x; i++){
    var y = prompt();//הציונים ככמות(X)
    sum = sum + parseInt(y);//סוכם את כמות הציונים שהכנסנו - פארסאינט הופך את הפרומפט מסטרינג למספר
    } console.log(sum)
}

grades();

function user() {
    var i = 0;
    var userInput = prompt('Type a number here')
    while(i < 10) {
        i++
        console.log(userInput);
    }
}

user()

function user2() {
    var i = 0;
    var x = prompt('Put a number in');
    while(i < x) {
        i++
        console.log('Hello')
    }

}

user2();


function user3() {
    var sum = 0;
    i = 0
    var x = prompt('Put the number in');
    while(i<x) {
        i++
        var y = prompt('Put grades here')
    sum = sum + parseInt(y);
    } console.log(sum);
}

user3();


function user() {
    for (x = ''; x !== 'stop';) {
        var x = prompt('Type stop to stop');
        if (x !== 'stop') {
            console.log(x)
        }
    } 
}
user(console.log);



function user2() {
    var bigger = 0//מגדירים משתנה מחוץ לפונקציה כדי להשתמש בו אחר כך
    var first = true//מגדירים משתנה מחוץ לפונקציה אחר כך לבדוק אם זה הלופ הראשון
    for (x = 0; x !== -1;) {//מתחיל את הלופ, עושים בדיקה שכל עוד המשתנה שונה מ-1- אז להמשיך את הלום
        var x = prompt('Type -1 to stop');//כאן המשתמש יכניס את המספרים
        x = parseInt(x)//המספרים נכנסים כסטרינגים ובשוקרה הזאת בזכות פארסאינט אני הופך את הסטרינג למספר
        if (first === true) {//כאן אני משתמש בתנאי עם המשתנה שהגדרתי מחוץ לפונקציה
            bigger = x//אם המשתנה פירסט מוגדר כטרו, ביגר יהפוך למשתנה בו המתשמש שם מספרים וככה לא תיהיה לי בעיה עם מספרים מתחת ל0
        }
        first = false//כאן אני הופך את פירסט לפולס ובעצם אין לי שימוש יותר במשתנה הזה הוא עשה את שלו
        if (x !== -1) {//כאן אני מציב תנאי שכל עוד איקס שונה מ-1- אז שביגר יקבל את Math.max
            bigger = Math.max(x, bigger)// כאן זה יקח את הגדול מביניהם שזה בדרך כלל יהיה ביגר. בלופ הראשון הם פשוט יהיו מה שהמשתמש הכניס. אחר כך פשוט ייבחר את המספר הגדול שהמשתמש שם
        }
    }
    console.log(bigger)
}


user2()


function user4() {
    var userInput = '';
    while(userInput !== 'stop') {
        userInput = prompt('Type stop to stop');
        if (userInput !== 'stop') {
            console.log(userInput);
        }
    }  
}


user4();


function user5() {
    var bigger = 0
    var first = true
    while(x !== -1) {
        var x = parseInt(prompt('Type -1 to stop'));
        if (first === true) {
            bigger = x;
        }
        first = false;
        if (x !== -1) {
            bigger = Math.max(x, bigger);
        }
    }
    console.log(bigger);
}

user5();

/*
function user() {
  var x = prompt('Type anything');
  var i = 0
  do {
    console.log(x)
      i++
  }while (i < 10);
}


user();


function user2() {
    var x = prompt('Type a number')
    var i = 0
    do {
        i++
        console.log('Hello')
    }while(i < x);
}

user2();

function user3() {
    var sum = 0;
    var x = prompt('Put a number here');
    var i = 0;
    do {
        var y = prompt('Put grades here');
        sum = sum + parseInt(y);
        i++
        console.log(sum);
    }while (i < x);
    
}

user3();


function user4() {
    do {
        var x = prompt('Type stop to stop')
        console.log(x)
    } while(x !== 'stop');

}

user4();


function user5() {
    var bigger = 0
    var first = true
    do {
        var x = parseInt(prompt('Type -1 to stop'));
        if ( first === true) {
            bigger = x
        }
        first = false
        if ( x !== -1) {
            bigger = Math.max(x, bigger)
        } 
    }while (x !== -1)
    console.log(bigger)
}


user5();

function twoLast(str) {
    str = prompt('')
    console.log(str[str.length - 2] + str[str.length - 1]);
}


twoLast();

function lastChar() {
    var str = prompt()
    if (str.length % 2 === 0) {
        console.log(str[str.length / 2] + (str[str.length / 2 - 1]))
    } else {
        console.log(str[str.length / 2])
    }
}

lastChar();

function printChar() {
    var char = 0
    var str = prompt('Type something here')
    for (i = 0; i < str.length; i++) {
        char = str.charAt(i);
        console.log(char);
    }

}

printChar();

function randomString(str1, str2) {
    var result = ''
    for (i = 0; i < str1.length && i < str2.length; i++) {
        result = result + str2[i] + str2[i];
    }
    console.log(result);
}

randomString('abc','def');


function randomString2(str1, str2) {
    var result = ''
    for (i = 0; i < str1.length && i < str2.length; i++) {
        result += str1[i] + str2[i];
    } if (str1.length > str2.length) {
        result += str1.slice(i);

    } else if (str2.length > str1.length) {
        result += str2.slice(i)
    }
    console.log(result);
}

randomString2('abcdjkl', 'efg');


function randomStringWhile(str1, str2) {
    var result = ''
    var i = 0
    while (i < str1.length) {
        result += str1[i] + str2[i];
        i++
    } console.log(result);
}

randomStringWhile('abc', 'def');


function randomStringWhile2(str1, str2) {
    var result = ''
    var i = 0
    while (i < str1.length && i < str2.length) {
        result += str1[i] + str2[i];
        i++
    }
    if (str1.length > str2.length) {
        result += a.slice(i);
    }
    else if (str2.length > str1.length) {
        result += str2.slice(i);
    }
    console.log(result);
}

randomStringWhile2('abc', 'efgdjkl');


function findO(str) {
    o = 'o'
    var sum = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] === o) {
            sum = sum + 1
        }
    } console.log(sum)
}
findO('thequickbrownfoxjumpsoverthelazydog');


function unique(str1) {
    res = ''
    for (i = 0; i < str1.length; i++) {
        var curLetter = str1[i]
        if (res.includes(curLetter)) {
            continue;
        } else {
            res += curLetter
        }
    } console.log(res)
}
str1 = 'thequickbrownfoxjumpsoverthelazydog'
unique(str1);


function unique1(str1) {
    for (i = 0; i < str1.length; i++) {
        if (str1.indexOf(str1[i]) === str1.lastIndexOf(str1[i])) {
            return str1[i];
        }
    }
}
console.log(unique1('abacddbecg'));
*/

// var cat = {
//     name: "Lily",
//     color: "Gray",
//     age: '2',
//     gender: 'female',
//     meow: function () {
//         alert('Meowwwww')
//     }
// // };

// // var add = prompt('Which property do you want to add to your cat?');
// // var value = prompt('What is it?');

// // cat[add] = isNaN(value) ? value : +(value);
// // // + is a short for parseInt();

// // console.log(cat);


// var bla1 = {
//     name: 'Roy',
//     color: 'gray'
// }

// var bla2 = {
//     age: '25'
// }


// function oneObject(obj1, obj2) {
//     var merged = {}
//     merged = obj1
//     for (var k in obj2) {
//         merged[k] = obj2[k]
//     }
//     console.log(merged);
// }


// oneObject(bla1, bla2);


// function catColor(cat, color) {
//     if (color === color) {
//         cat.color = color
//     } console.log(cat)
// }

// catColor(cat1, prompt('Please enter your cat\'s color'));

// var cat1 = {
//     name : 'Mitzi'
// }

// function catName(cat, name) {
//     return (cat.name === name)
// }

// var res = catName(cat1, prompt('Your cat\'s name'));
// console.log(res)






// var userInputColor = {

// }


// function catUserColor() {
//     for (i = 0; i < 10; i++) {
//         var key = prompt("enter the cat's feature")
//         userInputColor[key] = [prompt('Your cat\'s color')]
//         }
//     }
//     console.log(userInputColor)

// catUserColor();

// var userInput = {}

// for (i = 0; i < 3; i++) {
//     var input = prompt('Which is your cat?')
//     userInput[input] = prompt('Your cat\'s name')
//     console.log(userInput);
// }


// function catGuessName() {
// //     for (var k in userInput) {
// //         userGuess = prompt('Guess the cat\'s name');
// //         if (userGuess === userInput[k]) {
// //             console.log(true);
// //         } else {
// //             console.log(false);
// //         }
// //     }
// // }

// // catGuessName();





// var arr = [];

// function userNumChamber() {
//     var x = parseInt(prompt('How many chambers do you want?'))
//     arr[x - 1] = ''
//     console.log(arr)
// }
// userNumChamber()


// // for of loop only works on arrays and it returnes the value in it and not the chambers
// // for in loop works on both arrays and objects and in array it returns the index of the chambers and in object the keys only



// function doubledArr(arr) {
//     var result = [];
//     var index = 0;
//     for (i = 0; i < arr.length; i++) {
//         result[index] = arr[i];
//         result[index + 1] = arr[i];
//         index += 2;
//     }
//     return result;
// }

// console.log(doubledArr([10, 20, 30, 'a']));

// var arr2 = []


// function userNumIncrease() {
//     var x = arr2[0]
//     x = parseInt(prompt('Enter a number'))
//     for (i = 0; i < 10; i++) {
//         arr2[i] = x + i
//     }
//     console.log(arr2)
// }

// userNumIncrease();

// var arr3 = []

// function userDog() {
//     for (i = 0; i < 3; i++) {
//         var dogObj = {
//             eyeColor: prompt('Enter eye color'),
//             weight: prompt('weight'),
//             age: prompt('age')
//         }
//         arr3[i] = dogObj
//     }
//     console.log(arr3)
// }

// userDog();

// var arr4 = [2, 3, 4]

// function hezkat(arr) {
//     newArr = []
//     for (i = 0; i < arr.length; i++) {
//         newArr[i] = arr[i] ** 2;
//     }
//     return newArr;
// }

// console.log(hezkat(arr4));

// var arr5 = [2, 3, 4]

// function hezkat2(arr) {
//     var x = arr.map(function (value) {
//         return value ** 2;
//     })
//     return x;
// }
// console.log(hezkat2(arr5))


// var shopping = ['apple', 'react', 'banana', 'javascript', 'bash'];


// function sortShopping(arr, asc) {
//     if (asc === 'sorted') {
//         sortedArr = arr.sort();
//         return sortedArr;
//     }
//     else if (asc === 'reversed') {
//         reversedArr = arr.sort(function (a, b) {
//             if (a < b) {
//                 return 1;
//             }
//             if (a > b) {
//                 return -1;
//             }
//             return 0;
//         });
//         return reversedArr;
//     }
// }

// console.log(sortShopping(shopping, prompt('You want your array sorted or reversed?')));



// var numbers = [7, 9, 0, -2];


// // function reversedArr(arr) {
// //     newArr = [];
// //     for (i = 0; i < arr.length; i++) {
// //          newArr[i] = arr[arr.length - 1];
// //     }
// //     return newArr;
// // }

// // console.log(reversedArr(numbers));

// var numbers = [7, 9, 0, -2];

// function last(arr, n) {
//     if (n === undefined || n === 0) {
//         return arr[arr.length - 1];
//     }

//     newArr = [];
//     for (i = 0; i < n; i++) {
//         if (n > arr.length) {
//             return arr;
//         } else {
//             newArr[i] = arr[arr.length - n + i];
//         }
//     }
//     return newArr;
// }

// console.log(last(numbers, 3))


// function lastSlice(arr, n) {
//     if (n === undefined || n === 0) {
//         arr[arr.length - 1];
//         return arr;
//     }

//     newArr = [];
//     if (0 < n) {
//         newArr = arr.slice(arr.length - n);
//         return newArr;
//     }

// }

// console.log(lastSlice(numbers, 3));


// var fruits2 = ['Apple', 'banana', 'orange', 'leMon', 'aVoCAdo', 'grapefruit', 'Melon'];


// function isLowerCase(arr) {
//     var newArr = arr.filter(function (element) {
//         return element === element.toLowerCase();
//     });
//     return newArr;
// }


// console.log(isLowerCase(fruits2));

// var str1 = "fire water wind"

// function reverseString(str) {
//     var newStr = str.split('')
//     var reversedStr = newStr.reverse()
//     var joint = reversedStr.join('');
//     return (joint);
// }

// console.log(reverseString(str1))

// var items = ['ma', 'ama', 'rj', 'anna', 'radar', 'mabim', 'redder', 'balob', 'jrj'];

// function isPalindrome(arr) {
//     var newArr = arr.filter(function (item) {
//         for (var i = 0; i < item.length; i++) {
//             if (item[i] !== item[item.length - 1 - i]) {
//                 return false;
//             }
//         }
//         return true;
//     });

//     return newArr;
// }

// console.log(isPalindrome(items));


// var animals = ["Horse", "Cow", "Sheep", "Donkey"];
// var erasedAnimals = ["Cow", "Sheep"];


// function delAnimals(arr, delArr) {
//     var newArr = arr.concat(delArr);
//     var truelyNewArr = newArr.filter(function (element) {
//         return newArr.indexOf(element) === newArr.lastIndexOf(element);
//     });
//     return truelyNewArr;
// }

// function delAnimals(arr, delArr) {
//     var newArr = arr.filter((element) => {
//         if (!delArr.includes((element))) {
//             return true;
//         }
//     })
//     console.log(newArr);
//     return newArr;

// }

// console.log(delAnimals(animals, erasedAnimals));


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var correct = Math.floor(Math.random() * (max - min + 1)) + min;
//     var newArr = []
//     while (userInput !== correct) {
//         var userInput = parseInt(prompt('Enter a number from 1 - 6'));
//         var correct = Math.floor(Math.random() * (max - min + 1)) + min;
//         console.log(correct)
//         newArr.push(userInput);
//     }
//     if (userInput === correct) {
//         console.log(newArr)
//         return correct;
//     }
// }

// console.log(getRandomInt(1, 6));


// function userSort() {
//     var userChoice = prompt('asc or dsc?')
//     if (userChoice.toLowerCase() === 'asc' || userChoice.toLowerCase() === 'dsc') {
//         var userArr = []
//         for (i = 0; i < 5; i++) {
//             var userInput = parseInt(prompt('Enter 5 numbers'))
//             if (isNaN(userInput)) {
//                 return alert('Only numbers are allowed! Refresh the page to try again.');
//             }
//             userArr.push(userInput);
//         }
//         if (userChoice.toLowerCase() === 'asc') {
//             userArr.sort(function (a, b) {
//                 return a - b;
//             })
//         } else if (userChoice.toLowerCase() === 'dsc') {
//             userArr.sort(function (a, b) {
//                 return b - a;
//             })
//         }
//         return userArr;
//     }
//     else {
//         userChoice !== 'asc' || userChoice !== 'dsc'
//         alert("Only asc or dsc are allowed! Refresh the page to try again.");
//         return undefined;
//     }

// }

// console.log(userSort())



// var coppiedArr = [1, 2, 3, 4, 5, 6];

// function copyTheArrayFilter(arr) {
//     var newArr = arr.filter(function(){
//         return true;
//     });
//     return newArr;
// }

// console.log(copyTheArrayFilter(coppiedArr));


// function copyTheArrayMap(arr) {
//     var newArr = arr.map(function(x) {
//         return x * 1;
//     });
//     return newArr;
// }

// console.log(copyTheArrayMap(coppiedArr));

// function copyTheArraySlice(arr) {
//     var newArr = arr.slice();
//     return newArr;
// }

// console.log(copyTheArraySlice(coppiedArr));



// fruits2.forEach(function (item, index) {
//     console.log(item, index);
// });

// fruits3 = [];

// fruits2.forEach(function (item) {
//     fruits3.push(item);
// })

// fruits2[2] = 'Lemon'

// console.log(fruits2);
// console.log(fruits3);


// // var arrLength = fruits2.length;
// // var i = 0;
// // while (i < arrLength) {
// //     fruits2.pop();
// //     console.log(fruits2);
// //     i++;
// // }

// if (pos !== -1) {
//     var pos = fruits2.indexOf('Melon');
//     fruits2.splice(pos, 1);
//     console.log(fruits2);
// }

// console.log(fruits2.slice(1, 2))

/*
var kittens = []


function createCatArray(kittens) {
    var x = parseInt(prompt('Type how many cats do you want to add'));
    for (i = 0; i < x; i++) {
        var catObj = {
            name : prompt('Your cat\'s name'),
            color : prompt('Your cat\'s color'),
            age : prompt('Your cat\'s age'),
            gender : prompt('Your cat\'s gender')
        };
        kittens.push(catObj);
    }
    console.log(kittens);
}

createCatArray(kittens);



var userArray = []


function createUserArray(userArray) {
    var userInput = parseInt(prompt('How many chambers would you like?'))
    for (i = 0; i < userInput; i++) {
        userArray.push(userInput);
    }
    console.log(userArray);
}


createUserArray(userArray);*/
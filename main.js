// 1. write a function that takes a number, and returns square of it

function square(number) {
    return Math.pow(number, 2)
}
console.log(square(5));


// 2. write a function that converts celcuis to fahrenheits

function celciusToFahrenhait(celcius) {
    return (celcius * 9 / 5) + 32;
}
console.log(celciusToFahrenhait(0));
// 32


// 3. write a function that converts celcuis to kelvins

function celciusToKelvin(celcius) {
    return (celcius + 273.15);
}

console.log(celciusToKelvin(0));
// 273.15


// 4. write a function that calculates area of square

function area(celcius) {
    return (celcius **2);
}
console.log(area(4));

area(4);
// 16


// 5. write a function that calculates area and perimeter of circle

function areaAndPerimeter(radius) {
    const PI = 3.14;
    let area = PI * (radius ** 2);
    let perimeter = 2 * PI * radius;
    console.log(`Area of circle is about ${area}, and periemeter is about ${perimeter}`);
}

areaAndPerimeter(5);
// "Area of circle is about 78.5, and periemeter is about 31.4"


// 6. write a function that checks if the word is palindrome or not

function isPalindrome(word) {
	
    let result = true;
    for (let i = 0; i < word.length; i++) {
        const letter1 = word[i];
        const letter2 = word[word.length - 1-i];
        if (letter1!=letter2) {
            result = false;
            break;
        }
    }
    console.log(result);
}

isPalindrome('anna'); // true
isPalindrome('racecar'); // true
isPalindrome('babat'); // false
isPalindrome('madam'); // true
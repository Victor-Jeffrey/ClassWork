function stringSize(str) {
    let alphabets = 0, digits = 0, symbols = 0;
    
    for (let i = 0; i < str.length; i++) {
    if ((/[a-zA-Z]/).test(str[i])) {
    alphabets++;
    } else if ((/[0-9]/).test(str[i])) {
    digits++;
    } else {
    symbols++;
    }
    }
    
    console.log("Alphabets: " + alphabets);
    console.log("Digits: " + digits);
    console.log("Symbols: " + symbols);
    }
    
    // Example usage:
    stringSize('Hello World123!');
    
    


function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
    row += (i * j) + '\t';
    }
    console.log(row);
    }
    }
    
    // Example usage:
    multiplicationTable(5);
    
        
        function arraySort(arr) {
            let numbersOnly = arr.filter(item => typeof item === 'number');
            numbersOnly.sort((a, b) => a - b);
            console.log(numbersOnly);
            }
            
            // Example usage:
            arraySort([5, 10, 1, 2, 3, "Number", {size: 12}, "6"]);
            
    
    
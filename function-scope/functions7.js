function tellFortune(jobTitle, location, partner, numKids) {

    var future = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' + partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
    // Alternative: return future;
}

tellFortune('bball player', 'spain', 'Shaq', 3);
tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);



function calculateDogAge(age, conversionRate) {
    var dogYears = conversionRate * age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(12);


function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded +
        ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
}

calculateSupply(28, 36);
calculateSupply(28, 400);



function celsiusToFahrenheit(celsius) {
    var celsiusInF = (celsius * 9) / 5 + 32;
    console.log(celsius + '°C is ' + celsiusInF + '°F');
}

function fahrenheitToCelsius(fahrenheit) {
    var fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
    console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
}


// 5. Solution one:
function lengthOK(password) {
    var lengthMessage = "Password must be between 6 and 24 characters long!";
    if (password.length >= 6 && password.length <= 24) {
        return true;
    } else {
        console.log(lengthMessage);
        return false;
    }
}
function atLeastOneUppercase(password) {
    var hasUppercaseMessage = "Password has NO uppercase letters!";
    var containsUppercase = !!/[A-Z]+/.test(password);
    if (containsUppercase) {
        return true;
    } else {
        console.log(hasUppercaseMessage);
        return false;
    }
}
function atLeastOneLowercase(password) {
    var hasLowercaseMessage = "Password has NO lowercase letters!";
    var containsLowercase = !!/[a-z]+/.test(password);
    if (containsLowercase) {
        return true;
    } else {
        console.log(hasLowercaseMessage);
        return false;
    }
}
function atLeastOneDigit(password) {
    hasAtLeastOneDigitMessage = "Password has NO numbers!";
    var containsNumber = !!/[0-9]+/.exec(password);
    if (containsNumber) {
        return true;
    } else {
        console.log(hasAtLeastOneDigitMessage);
        return false;
    }
}
function noTwoOrMore(password) {

    // var threeInRow = false;
    // for(letter in password) {
    //     if(password[letter] === password[parseInt(letter) + 1] && password[letter] === password[parseInt(letter) + 2]) {
    //         threeInRow = true
    //     }
    // }

    // if(threeInRow) {
    //     console.log('password cannot have three repeated characters')
    //     return false;
    // }

    if (!!/(.)\1{2,}/.exec(password)) {
        console.log("Contains three characters in a row!");
        return false;
    }

    return true;
}
function filterSpecialCharacters(password) {
    var usesNotAllowedSpecials = false;
    var specialChars = '! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; ” ’ ? < > , .';
    for (letter in password) {
        if (!specialChars.includes(password[letter]) && !password[letter].match(/[a-z]/i) && isNaN(parseInt(password[letter]))) {
            usesNotAllowedSpecials = true;
        }
    }

    if (usesNotAllowedSpecials) {
        console.log('Password can only contain permitted characters!');
        return false;
    }

    return true;
}
function validatePassword(password) {
    return lengthOK(password) &&
        atLeastOneUppercase(password) &&
        atLeastOneLowercase(password) &&
        atLeastOneDigit(password) &&
        noTwoOrMore(password) &&
        filterSpecialCharacters(password)
}






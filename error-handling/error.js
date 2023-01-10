function testError(param) {
    try {
        console.log('Start of try runs');
        // if (!param) {
        //     throw new Error('Param is undefined')
        // }

        console.log(param.test);
        console.log('continue');
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log('Code executed')
    }
}

testError();

function addOne(a) {
    return a + 1;
}

function multiplyByTwoModified(input, num, add) {
    try {
        if (!input || input.length == 0) {
           throw new Error('Input length is 0')
        }
    
        for (var i = 0; i < input.length; i++) {
            var element = input[i];
            element *= num;
            input[i] = add(element);
        }
    
        return input;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('Code executed');
    }
    
}

var inputTwo = [10, 20, 30];
console.log(multiplyByTwoModified([], 3, addOne));
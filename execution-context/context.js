var a = 'Hello';
first();

function first() {
    var b = 'Hi';
   
    second();
    function second() {
        for(var i = 0; i< 2; i++) {
            const c = 'Hey';
            console.log(a, b, c);
        }

        console.log(a, b, c);
        
    }

}
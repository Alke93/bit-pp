var global = 'test';
function scopeTest() {
     var global = '123'
     var b = 'asdf'
     for(var i = 0; i< 10;i++) {
        let c = i;
        c = 3;
     console.log(c);

     }

}

console.log(global);
scopeTest();
console.log(global);
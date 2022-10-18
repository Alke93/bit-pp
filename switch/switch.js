var pas = 'bernadinac'
var result = '';
switch (pas) {
    case 'bernadinac':
    case 'sarplaninac':
    case 'nemacki ovcar':
        result = 'Ovo je ' + pas;
        break;
    default:
        result = 'Mesanac';
        break;
}

console.log(result);

var a = 2

switch (a) {
    case 2:
        result = 'Ovo je broj';
        break;
    case '2':
        result = 'Ovo je tekst';
        break;
    default:
        result = 'Ovo je greska'
        break;
}

console.log(result);

switch (a) {
    case 1:
        result = 'Ponedeljak';
        break;
    case 2:
        result = 'Utorak';
        break;
    case 3: 
        result = 'Sreda';
        break;
    case 4:
        result = 'Cetvrtak';
        break;
    case 5:
        result = 'Petak';
        break;
    default:
        result = 'Mora da bude u rangu od 1 do 7'
        break;
}

console.log(result);
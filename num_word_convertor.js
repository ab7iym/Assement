var number=2345;//this is the variable to hold the input digits to the function
// var 
var tensTeens = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var tys = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
function numberToWords (digits) {
    if ((digits = digits.toString()).length > 9) {console.log("You can only input upto nine digits");}
    x = ('000000000' + digits).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!x) return; 
    var inWords = '';
    inWords += (x[1] != 0) ? (tensTeens[Number(x[1])] || tys[x[1][0]] + ' ' + tensTeens[x[1][1]]) + ' ' : '';
    inWords += (x[2] != 0) ? (tensTeens[Number(x[2])] || tys[x[2][0]] + ' ' + tensTeens[x[2][1]]) + ' ' : '';
    inWords += (x[3] != 0) ? (tensTeens[Number(x[3])] || tys[x[3][0]] + ' ' + tensTeens[x[3][1]]) + 'thousand ' : '';
    inWords += (x[4] != 0) ? (tensTeens[Number(x[4])] || tys[x[4][0]] + ' ' + tensTeens[x[4][1]]) + 'hundred ' : '';
    inWords += (x[5] != 0) ? ((inWords != '') ? 'and ' : '') + (tensTeens[Number(x[5])] || tys[x[5][0]] + ' ' + tensTeens[x[5][1]]) + ' ' : '';
    console.log("The number "+number+" in words is: "+inWords);
}
numberToWords(number)
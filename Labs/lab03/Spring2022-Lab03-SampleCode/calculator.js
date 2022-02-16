var rs = require('readline-sync');

var fBinaryNum1 = rs.question('1st Number in Binary: ');
var fBinaryNum2 = rs.question('2nd Number in Binary: ');
var action = rs.question('Enter the action{+,-,*,/,%,&,|,~}');

var fNum1 = parseInt(fBinaryNum1, 2);
var fNum2 = parseInt(fBinaryNum2, 2);
console.log(fNum1);

if (action == '+' || action == '-' || action == '*' || action == '/' || action == '%')
{
    var formula = fNum1 + action + fNum2;
    var result = eval(formula);
    console.log("Result on normal operator "+action+": "+result+" (Binary: "+result.toString(2)+" )");
}
else if (action == '&' || action == '|')
{
    var formula = fBinaryNum1 + action + fBinaryNum2;
    var result = eval(formula);
    console.log("Result on normal operator "+action+": "+result+" (Binary: "+result.toString(2)+" )");
}
else if (action == '~')
{
    var formula1 = action + fBinaryNum1;
    var formula2 = action + fBinaryNum2;
    var result1 = eval(formula1);
    var result2 = eval(formula2);
    console.log("Result on ~ operator on "+fBinaryNum1+": "+result1+" (Binary: "+result1.toString(2)+" + )")
    console.log("Result on ~ operator on "+fBinaryNum2+": "+result2+" (Binary: "+result2.toString(2)+" + )")
}

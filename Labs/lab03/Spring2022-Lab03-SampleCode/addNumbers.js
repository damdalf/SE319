var sum = 0;
var i, int1, int2;

if (process.argv.length < 4)
{
    console.log("Let's input at least 2 integers.");
}
else
{
    for (i = 2; i < process.argv.length; i++)
    {
        sum = sum + Number(process.argv[i]);
    }

    console.log("The sum of the command-line numbers is: ", sum);
}
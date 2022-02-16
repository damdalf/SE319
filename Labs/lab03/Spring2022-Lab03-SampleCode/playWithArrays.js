var sum = 0;
var array1 = []
for (i = 2; i < process.argv.length; i++) {
  array1.push(parseInt(process.argv[i]));
}

array1.forEach(function(element) {
  sum=sum+Number(element);
});

function isEven(currentValue) {
  return currentValue%2==0;
}


const reducer = (accumulator, currentValue) => accumulator + currentValue;
const map1 = array1.map(x => x*x);
const filterResult = array1.filter(array1 => array1 % 2 == 0);
const someResult = array1.some(isEven);
const everyResult = array1.every(isEven);
const reduceResult = array1.reduce(reducer);

console.log("ForEach block output is: " + sum);
console.log("Map block out is: " + map1);
console.log("Filter block output is: " + filterResult);
console.log("Every block output is: " + everyResult);
console.log("Some block output is: " + someResult);
console.log("Reducer block output is: " + reduceResult);
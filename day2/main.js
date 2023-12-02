//___________________________________________
//this is for js readfile method from file system
const fs=require('fs');

function readInputData(fileName){
  try{
    const data=fs.readFileSync(fileName,'utf-8');
    return (data.toString().split("\n"));
  }
  catch(err)
{
  throw err;
}
}

function findIncorrectInput(input)
{
  let mapOfInput={};
  const [key,value]=input.split(": ");
  mapOfInput={[key]:value};
  return mapOfInput;
}

function main(input)
{
const regex = /^(red (1[0-2]|\d))$/;
 let arrayOfMaps=[];
 for(const element of input)
  {
    const map=findIncorrectInput(element);
    if(map){
      arrayOfMaps.push(map);
    }
 
  }
  for(let i=0; i<arrayOfMaps.length; i++)
  {
    const mapKey=`Game ${i + 1}`;
    const mapValue=arrayOfMaps[i][mapKey];
    //console.log((arrayOfMaps[i])[`Game ${i+1}`]);
    console.log(`Testing ${mapKey}: ${regex.test(mapValue)}`);
    //console.log(regex.test((arrayOfMaps[i])[`Game ${i+1}`]));
  }
  
  //  return arrayOfMaps;
      return "chuj";
 }

//console.table(readInputData('input.txt'));
//console.table(findIncorrectInput("Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"));

//console.log(main(readInputData('input.txt')));

//const regex = /^(red (1[0-2]|\d))$/;


//const regex = /red (?:(?:[0-9])|(?:1[0-2]))\b/g;

// Test the regular expression
//console.log(regex.test("red 19, chuj kutas"));  // false
//console.log(regex.test("red 12, chuj kutas"));  // true
//console.log(regex.test("red 5, chuj kutas"));   // true
const regex = /red (\d+)/g;

function isRedNumberValid(input) {
  const match = regex.exec(input);
  if (match) {
    const redNumber = parseInt(match[1], 10);
    return redNumber <= 12;
  }
  return false; // Return false if "red" is not followed by a valid number
}

// Test the function
console.log(isRedNumberValid("red 19, chuj kutas"));  // false
console.log(isRedNumberValid("red 12, chuj kutas"));  // true
console.log(isRedNumberValid("red 5, chuj kutas"));   // true


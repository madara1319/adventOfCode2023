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
    console.log(`Testing ${mapKey}: ${regex.test(mapValue)}`);
  }
  
      return "chuj";
 }

const regexWorking=/^((red ([1-9]|1[0-2]))|(blue ([1-9|1[0-2]))|(green ([1-9]|1[0-2])))$/;
const regex=/(?=(red ([1-9]|1[0-2])))(?=(blue ([1-9|1[0-2])))(?=(green ([1-9]|1[0-2])))/;
const testRegex=/^(?=.*\bred\b)(?=.*\bblue\b)(?=.*\bgreen\b).*$/m;

const str='red';
console.log((testRegex.test(str)));
//const array=[...str.match(regex)];
//console.log(array);


console.log(regex.test("red 13"));
console.log(regex.test("blue 16"));
console.log(regex.test("red 16"));
console.log(regex.test("green 15"));
console.log("kutas");
console.log(regexWorking.test("red 13"));
console.log(regexWorking.test("blue 1"));
console.log(regexWorking.test("red 16"));
console.log(regexWorking.test("green 15"));



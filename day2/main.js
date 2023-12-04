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

const regexWorking=/^((red ([1-9]|1[0-2]))|(blue ([1-9|1[0-2]))|(green ([1-9]|1[0-2])))$/g;
const regex=/[red [1-9]|1[0-2]]|[blue [1-9|1[0-2]]|[green [1-9]|1[0-2]]/g;



console.log(regex.test("red 14"));
console.log(regex.lastIndex);
//regex.lastIndex=0;
console.log(regex.test("blue 12"));

console.log(regex.lastIndex);
//regex.lastIndex=0;
console.log(regex.test("green 12"));

console.log(regex.lastIndex);
//regex.lastIndex=0;
console.log("kutas");
console.log(regexWorking.test("red 12"));

console.log(regexWorking.lastIndex);
//regexWorking.lastIndex=0;
console.log(regexWorking.test("blue 1"));

console.log(regexWorking.lastIndex);
//regexWorking.lastIndex=0;
console.log(regexWorking.test("red 12"));

console.log(regexWorking.lastIndex);
//regexWorking.lastIndex=0;
console.log(regexWorking.test("green 12"));

console.log(regexWorking.lastIndex);
//regexWorking.lastIndex=0;


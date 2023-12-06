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

function main(input)
{

const regex=/^(\b(red \b(1[3-9]|[2-9][0-9])\b)\b)|(\b(blue \b(1[5-9]|[2-9][0-9])\b)\b)|(\b(green \b(1[4-9]|[2-9][0-9])\b)\b)/;
const numbersRegex=/\d+/;
  let arrayOfMaps=[];
  //console.log(regex.test("red 18"))
  //console.log(regex.test("blue 1 green 2 red 18"));
//console.log(regex.test("Game 1: 2 green 6 blue 7 red 12 green 6 blue 3 red 5 red 18 green 4 blue"))
let counter=0;
let invCounter=0;
 for(const element of input)
  {
    
    let newElement=element.replace(/,|;/g,"");
    let testElement=newElement.split(":");
    let matches=testElement[0].match(numbersRegex);
    console.log(newElement);
    console.log(testElement[0] + " i jej matches " + matches[0]);
    //console.log(regex.test(newElement));
    if(!regex.test(newElement)){
     counter=counter+1*matches[0];
    }
    else(regex.test(newElement))
    {
      invCounter+=1*matches[0];
    }
    console.log(counter);
  }

    console.log("counter equals = " + counter);
    console.log("invCounter equals = " + invCounter);
 }

main(readInputData('input.txt'));




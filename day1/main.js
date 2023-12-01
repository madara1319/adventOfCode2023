//cool option to read from file
function previewFile(){
  const content=document.querySelector(".content");
  const [file]=document.querySelector("input[type=file]").files;
  const reader=new FileReader();

  reader.addEventListener(
    "load",
    ()=>{
      content.innerText=reader.result;
    },
    false,
  );
  if(file){
    reader.readAsText(file);
  }
}

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

function extractFirstAndLastDigit(test)
{
  if(test.length>1)
  {
  let numberFromDigits=(test[0]+""+test[test.length-1])*1;
 return numberFromDigits;
  }
  if (test.length===1)
  {
  let numberFromDigits=(test[0]+""+test[0])*1;
  return numberFromDigits;
  }
}


function sumArray(array)
{
  let sumOfArray=0;
  for (const element of array)
  {
    sumOfArray=sumOfArray+element;
  }
  return sumOfArray;
}

function extractNumbers(hiddenNumbers)
{
  let numbers=[]
  for (element in hiddenNumbers)
  {
    let matches=hiddenNumbers[element].replace(/[^0-9]/g,"");
    if (matches)
    {
      numbers.push(extractFirstAndLastDigit(matches));
      //console.log(extractFirstAndLastDigit(matches));
    }
  }
  
  //console.log(hiddenNumbers);
  return sumArray(numbers);
}
readInputData('input.txt');
extractNumbers((readInputData('input.txt')));

console.log(extractNumbers((readInputData('input.txt'))));




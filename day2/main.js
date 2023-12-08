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
//function used in part 1
function sumCorrectGamesIds(input)
{

const invalidCubesAmount=/(\b(\b(1[3-9]|[2-9][0-9])\b red)\b)|(\b(\b(1[5-9]|[2-9][0-9])\b blue)\b)|(\b(\b(1[4-9]|[2-9][0-9])\b green)\b)/;
const numbersRegex=/\d+/;
let sumOfCorrectGamesIds=0;
 for(const element of input)
  {
    
    let singleGame=element.replace(/,|;/g,"");
    let singleGameArray=singleGame.split(":");
    let gamesIDs=singleGameArray[0].match(numbersRegex);
    //console.log(singleGame);
    if(!invalidCubesAmount.test(singleGame)){
     sumOfCorrectGamesIds=sumOfCorrectGamesIds+1*gamesIDs[0];
      //console.log(regex.test(singleGame) + " czyli gry mozliwe");
    }
    //console.log("Suma ids gierek wynosi = " + counter);
  }
    console.log(sumOfCorrectGamesIds);
 }

//help function for part2
function findMaxCubesOfColor(cubesShowed)
{
  const maxRGBNumbers=[];
  const numbersRegex=/\d+/;
  const colorRed=/red/;
  const colorGreen=/green/;
  const colorBlue=/blue/;
    let maxRed=0;
    let maxBlue=0;
    let maxGreen=0;
  for (const cubes of cubesShowed)
  {
    if(colorRed.test(cubes))
    {
      if(1*cubes.match(numbersRegex)>maxRed)
      {
        maxRed=1*cubes.match(numbersRegex);
      }
    }
    else if(colorGreen.test(cubes))
    {
      if(1*cubes.match(numbersRegex)>maxGreen)
      {
        maxGreen=1*cubes.match(numbersRegex);
      }
    }
    else if(colorBlue.test(cubes))
    {
      if(1*cubes.match(numbersRegex)>maxBlue)
      {
        maxBlue=1*cubes.match(numbersRegex);
      }
    }

      //  console.log("maxRed wynosi: " +maxRed);
      //  console.log("maxGreen wynosi: " +maxGreen);
      //  console.log("maxBlue wynosi: " +maxBlue);
      //console.log(cubes);
  }

        maxRGBNumbers.push(maxRed);
        maxRGBNumbers.push(maxGreen);
        maxRGBNumbers.push(maxBlue);
        //console.log("maxRed wynosi: " +maxRed);
        //console.log("maxGreen wynosi: " +maxGreen);
        //console.log("maxBlue wynosi: " +maxBlue);
  //console.table(maxRGBNumbers);
  return maxRGBNumbers;
}

//function for part2
function sumOfGamesPowers(input)
{
  let sumOfGamesPower=0;
  for (const element of input)
  {
    let singleGameLine=element.replace(/\r/,"");
    let [gameID,gameCubes]=singleGameLine.split(":");
    let cubesShowed=gameCubes.split(/;|,/);
    //console.log("Gra : " +gameID);
    findMaxCubesOfColor(cubesShowed);
    let multiplicationCubesProduct=1;
    for (const element of findMaxCubesOfColor(cubesShowed))
    {
      multiplicationCubesProduct*=element;
    }
    sumOfGamesPower+=multiplicationCubesProduct;
  }
  console.log("Sum of numbers of cubes which make game possible multiplied by eachothers " + sumOfGamesPower);
}

sumOfGamesPowers(readInputData('input.txt'));
//sumCorrectGamesIds(readInputData('input.txt'));

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
function sumOfGamesPowers(input)
{
  for (const element of input)
  {
    let maxRed=0;
    let maxBlue=0;
    let maxGreen=0;
    let singleGameLine=element.replace(/\r/,"");
    let [gameID,gameCubes]=singleGameLine.split(":");
    let cubesShowed=gameCubes.split(/;|,/);
    for (const cubes of cubesShowed)
    {
      console.log(cubes);
    }
    //console.log(cubesShowed);

  }
}

sumOfGamesPowers(readInputData('input2.txt'));
//sumCorrectGamesIds(readInputData('input.txt'));




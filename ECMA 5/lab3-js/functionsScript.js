// function makeCapital(word='string')
// { 
//     word=(prompt("enter your sentance"));
    
// word=word.split(' ');

    
//     var sentance=[];
//     for (let index = 0; index < word.length; index++) {
//         sentance[index] = [""];
        
//     }
    
//     for (let index = 0; index < word.length; index++)
//     {

//      sentance[index][0]=word[index][0].toUpperCase();
//         for (let index2 = 1; index2 < word[index].length; index2++) {
//         sentance[index][index2]=word[index][index2];
        
//      }
     
//     }
     
   
//      var printWord=""
//     for (let index = 0; index < sentance.length; index++) {
//         for (let index2 = 0; index2 < sentance[index].length; index2++) {
//             printWord+=sentance[index][index2];
            
//         }
//         printWord+=" "
        
//     }
//     console.log(printWord);

         

//  }



function makeCapital(word='string')
{ 
    word=(prompt("enter your sentance"));
    
word=word.split(' ');
for (let index = 0; index < word.length; index++) {
   word[index]= word[index][0].toUpperCase()+word[index].substring(1)
    
}
alert(word.join(" "));
console.log()
}






function tallestWord()
{
let words=prompt('enter your sentance');
words=words.split(' ')
var longestWord=0;
for (let index = 1; index < words.length; index++) {
    
    if (words[longestWord].length<words[index].length) {
        longestWord=index
        
    }
    
    
}
console.log(words[longestWord]);
}



function sortText()
{
    let words=prompt('enter your sentance');
words=words.split('')

words.sort();
console.log(words.join(""));
    
}



function returnMonth()
{
  let  particularDate=prompt("enter you date");
   var temp=particularDate.split('-');
   
   var newParticularDate=[];
  if (temp[2].length==4) {
for (let index = 0; index < temp.length; index++) {
     newParticularDate[index]=temp[(temp.length-1-index)];
    
}

    var date1=new Date(newParticularDate);
    console.log(`the month of this date is ${date1.toDateString().split(" ")[1]}`);
    alert(`the month of this date is ${date1.toDateString().split(" ")[1]}`);
    
  }
  else
  {
    var date1=new Date(particularDate);
    console.log(`the month of this date is ${date1.toDateString().split(" ")[1]}`);
    alert(`the month of this date is ${date1.toDateString().split(" ")[1]}`);

  }

}




function randomNumbers()
  {
    var arrayLength=prompt("enter the the length of numbers you want")
  arrayLength=Number(arrayLength);
    var numbersArray = []

for(let i=0;i< arrayLength;i++)
{
  var randomNumber=Math.ceil(Math.random()*10)
console.log(randomNumber);
  if(numbersArray.indexOf(randomNumber) === -1)
  {numbersArray.push(randomNumber)}  
}
console.log(numbersArray); 
}







let numbers = [2,1,3,2,7,2,8,4,3,6,10,9,12]

function sort_fun_ascc(){
    numbers.sort(function(num1, num2){return num2 - num1});
    console.log(numbers)  

}
// console.log(sort_fun_ascc())

function sort_fun_descinding(){
    numbers.sort(function(num1, num2){return num1-num2});
    console.log(numbers)  
}

// console.log(sort_fun_descinding()) 


// using call back funcition
function greater_tahn_5(num){
    return   num>5;
}
// using annonymos funcition
// console.log(filter(numbers,function(num){return num>5}));


function displaymax(){
let max = numbers[0]
for (let index = 0; index < numbers.length; index++) {
if (max < numbers[index]) { max = numbers[index]}    
}
return max

}
 function displaymax2(){
    let max = numbers[0]
    for (const index in numbers) {
        if (max < numbers[index]) {
            max = numbers[index]}}
  return max }

// console.log(displaymax2()) 
//  console.log(displaymax()) 

function displaymin (){
    let min = numbers[0]
    for (let index = 0; index < numbers.length; index++) {
    if (min > numbers[index]) { min = numbers[index]}    
    }
    return min
    
    }

//console.log(displaymin()) 

function displaymin2(){
    let min = numbers[0]
    for (const index in numbers) {
        if (min > numbers[index]) {
            min = numbers[index]
            
        }
    }
  return min
    
    }

function getUnique(array){

    var uniqueArray = [];
        for(var value of array){
        if(uniqueArray.indexOf(value) === -1){
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}


//console.log(getUnique(numbers));













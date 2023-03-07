//#region 1
// //-----this lines run because the function printVariable() is local of this codefile
// // printVariables(1,2,3);
// // console.log(printVariables(1,2,3));
// //------------

// function printVariables(value1,value2,value3){
//     return[value1,value2,value3];
// }//this function take three values and return array of these values




// //we solve the undefined variables
// function printVariables(value1=0,value2=0,value3=0){
//     return[value1,value2,value3];
// }
// //---------------------------------------

// // //we solve the problems of many parameters by using keyword **arguments**

// // function printVariables()
// // {
// //     return arguments;
    
// // }
// // //-----------------------------------------





// // //----localVar and testingVar-------

// // function printVariables(value1=0,value2=0,value3=0){
// //     var localVar=3;
// //     testingVar=5;
// //     return[value1,value2,value3];
// // }

// // //-----------------------------------------



// // //----localVar and testingVar-------we here defined the localVar before the block of funtion with let

// // let localVar=90;
// // function printVariables(value1=0,value2=0,value3=0){
// //     var localVar=3;
// //     testingVar=5;
// //     return[value1,value2,value3];
// // }

// // //-----------------------------------------


// // //----localVar and testingVar-------we here defined the localVar before the block of funtion without var

//  let localVar=90;
// function printVariables(value1=0,value2=0,value3=0){
//    console.log(localVar);
//      localVar=3;
//     testingVar=5;
//     return[value1,value2,value3];
// }

// // //-----------------------------------------


//#endregion

//#region 2
// //-----this lines run because the function printVariable() is local of this codefile
// // printVariables(1,2,3);
// // console.log(printVariables(1,2,3));
// //------------

// var printVariables=function (value1,value2,value3){
//     return[value1,value2,value3];
// }//this function take three values and return array of these values




// //we solve the undefined variables
// var printVariables=function (value1=0,value2=0,value3=0){
//     return[value1,value2,value3];
// }
// //---------------------------------------

// // //we solve the problems of many parameters by using keyword **arguments**

// // var printVariables=function ()
// // {
// //     return arguments;
    
// // }
// // //-----------------------------------------





// // //----localVar and testingVar-------

// //var printVariables=function (value1=0,value2=0,value3=0){
// //     var localVar=3;
// //     testingVar=5;
// //     return[value1,value2,value3];
// // }

// // //-----------------------------------------



// // //----localVar and testingVar-------we here defined the localVar before the block of funtion with let

// // let localVar=90;
// // var printVariables=function (value1=0,value2=0,value3=0){
// //     var localVar=3;
// //     testingVar=5;
// //     return[value1,value2,value3];
// // }

// // //-----------------------------------------


// // //----localVar and testingVar-------we here defined the localVar before the block of funtion without var

//  let localVar=90;
// var printVariables=function (value1=0,value2=0,value3=0){
//    console.log(localVar);
//      localVar=3;
//     testingVar=5;
//     return[value1,value2,value3];
// }

//#endregion

//#region 4

function getAverage(name1,grades){
do {
    name1= prompt("enter your name");
  
} while (name1.length==0||!isNaN(name1));


var flag=true;let sum=0;
    
while (flag){
    grades=prompt("enter your grades").split(',');
    var flag=false;
    for (let index = 0; index <grades.length; index++) {
        if (grades[index]==''||isNaN(grades[index])) {
           var flag=true;
            break;
            
        }
        
    }
    for (let index = 0; index < grades.length; index++) {
       sum+=Number(grades[index]);
        
    }
    

    
 }  
 let average=sum/grades.length;

 alert(`welcome ${name1}`);
 console.log(`welcome ${name1}`);
 alert(`the averge is of your grades is  ${average}`);
 console.table(grades);


}
//#endregion


//#region bouns
function checkGrades(name1,grades)
{
    do {
        name1= prompt("enter your name");
      
    } while (name1.length==0||!isNaN(name1));
    name1;
    
    var flag=true;let studentArray=[];
        
    while (flag){
        grades=prompt("enter your grades").split(',');
        var flag=false;
        for (let index = 0; index <grades.length; index++) {
            if (grades[index]==''||isNaN(grades[index])) {
               var flag=true;
                break;
                
            }
            
        }
        for (let index = 0; index < grades.length; index++) {
           if(Number(grades[index])>=60)
           {
            
            studentArray[index]=[grades[index],'sucess'];
           }
           else
           {
            studentArray[index]=[grades[index],'fail'];
           }
    
            
        }
        console.log(name1);
        console.table(studentArray); 
}
}

function checkGradesOfStudents(studentsNumber)
{
    studentsNumber=prompt("enter the number of student");
    studentsNumber=Number(studentsNumber);
   
    for (let index = 0; index < studentsNumber; index++) {
        
        checkGrades();
    

        
    
 } 
return 0;
}

 

 
 



//#endregion 

//#region 2 3
// console.log(value1);
// console.log(value2);
// console.log(value3);
//this code can't run because we can't find these variable because they are local of function printVariables()



////----here we print localVar and testingVar before calling the function

//console.log(localVar);
//console.log(testingVar);

////-----we can't print this variables before calling function yet







////----here we print localVar and testingVar after calling the function

// printVariables(1,2,3);
// console.log(testingVar);//here we can see him because it is not destroyed after calling the function 
// console.log(localVar);//this is destroyed after calling the function so i can't see him.

////----------------------------------------





// //----here we print localVar before calling the function

// console.log(localVar);//here print its first intial value

// //-----------------






// //----here we print localVar after calling the function

// printVariables();
// console.log(localVar);//here print its first intial value because it is a global variable  

// //-----the function does'nt affect on its value because after calling the block is destroyed from memory






// //----we call the function to see the print localVar

// printVariables();//here after calling the function which have print the localVar before definition line in its code 

// //-------after callin the result on console localVar value will be **undefined** because var make it with an undefined value 



// //----we call the function to see the value of localVar

 //printVariables();//here after calling the function which have print the localVar before definition line in its code 

// //-------after callin the result on console localVar value will be **the first initial value when i definied it with let** because we don't override the value yet .







// var array1=printVariables(1,2,4);
// console.log(array1)
// //--------------in these lines the problem of undefined appears 
// array2=printVariables(3,5);
// console.log(array2);
// //----------to solve this problem we must get parameter in function default values

//#endregion



//#region 4

//getAverage();

//#endregion



//#region pouns

//checkGrades();
checkGradesOfStudents();
//#endregion
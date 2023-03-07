let arr=[2,1,3,5,0,100,60,17,22,12,8,150,10,70,52];

let descendingArray=arr.sort((f,s)=>s-f);
console.log(descendingArray);


let ascendingArray=arr.sort((f,s)=>f-s);
console.log(ascendingArray)


let filterNumber=arr.filter(n=>n>50);
console.log(filterNumber);

let maxValue=Math.max(...arr);
console.log(maxValue);

let minValue=Math.min(...arr);
console.log(minValue);

var operation=(op,...arr)=>{
    let operation
    switch(op){
        case'+':operation="sum";break;
    case'*':operation="mul";break;
    case'-':operation="sub";break;
    case'/':operation="div";break;
    

}
    let theResult=eval(arr.join(op));
    return`result of ${operation} operation for ${arr.toString().split()} is ${theResult} `
}
console.log(operation("+",3,1,6,3));
let projetIdParameter,projectIdValue,projectNameParameter,projectNameValue,durationParameter,durationValue;

do{
    projetIdParameter=prompt("Enter projectId propertyName");

}while(projetIdParameter.length==0||!isNaN(projetIdParameter))

do {
    projectIdValue=prompt(projetIdParameter);

    
} while (projectIdValue==''||isNaN(projectIdValue));

do{
    projectNameParameter=prompt("Enter projectName propertyName");

}while(projectNameParameter.length==0||!isNaN(projectNameParameter))


do{
    projectNameValue=prompt(projectNameParameter);

}while(projectNameValue.length==0||!isNaN(projectNameValue))

do{
    durationParameter=prompt("Enter projetDuration propertyName");

}while(durationParameter.length==0||!isNaN(durationParameter))

do{

 durationValue=prompt(durationParameter);

}while(durationValue.length==0)

const obj={
    [projetIdParameter]:projectIdValue,
    [projectNameParameter]:projectNameValue,
    [durationParameter]:durationValue,
    Printing:function(){
    return  `the ${projetIdParameter} is ""${this[projetIdParameter]}"" , the ${projectNameParameter} ""${this[projectNameParameter]}"" and the ${durationParameter} to finish this project is ""${this[durationParameter]}""`;


            }

};
console.log(obj);
let x;
x=document.images;//return an array of image with its id or class


x=document.images[0];//return the tag of the image in this index



x=document.getElementsByTagName('img');//is equal to **document.images**both return an array of image with its id or class



x=document.getElementsByTagName('img')[0];//is equal to **x=document.images[0];**both return the tag of the image in this index



x=document.getElementById('example');//return the element which have the id='exmaple' 




x=document.getElementById('example');//return first element have this id




x=document.getElementsByTagName("select")[0];//need for more research**********

x=document.querySelector('select').querySelectorAll('option')

for (let index = 0; index <x.length; index++) {
    let city=x;
    console.log(city[index]);
}

x=document.getElementsByTagName('table')[1].getElementsByTagName("tr");//
// for (let index = 0; index < x.length; index++) {
//     x[index]
//     console.log(x[index]);
// }

x=document.getElementsByClassName("a b");//there are no block has these classes together .
x=document.querySelectorAll('p')
x=document.querySelectorAll('table')[1].querySelector("a")


x=document.querySelectorAll('input');
for (let index = 0; index < x.length; index++) {
   if( x[index].value.split(" ")[x[index].value.split(" ").length-1]=='age'){
    x=x[index]
   }
    





  
}



x=document.querySelectorAll("input[type=submit]")[0];
console.log(x);
for (let index = 0; index < x.length; index++) {
    
    if(x[index].type=="submit")
    { 
        x=x[index]
  
    }
}
  x=document.querySelectorAll("ul li");

  x=document.querySelector("div #example p" )




  x=document.querySelectorAll("table")[1].querySelector('a');
  x.href="Training.com";
  x.innerText="Training";




  
  x=document.querySelectorAll("img")
  for (let index = 0; index < x.length; index++) {
    x[index].style.border="solid pink 2px";
   // console.log(x[index]);
    
  }
 



//   let boxes=document.querySelectorAll("input[checked]")
//   console.log(boxes[0])
function check(){
    let boxes=document.querySelectorAll("input")
    //console.log(boxes);
for (let index = 0; index < boxes.length; index++) {
    if (boxes[index].type=="checkbox") {
        if (boxes[index].checked) {
            console.log(boxes[index])
            alert(boxes[index].value)
            
        }
        
    }
    
}


}

x=document.querySelector("#example");
x.style.backgroundColor="pink";

let count=0
setInterval(function(){
    count++;
    if (count>8) {count=1; }
let imageslide=document.querySelectorAll("img");
for (let index = 0; index < imageslide.length; index++) {
    imageslide[index].src=`images/${count}.jpg`;
    
}
    
},1000)
let firstColor=document.getElementsByTagName("body")[0].style;
    firstColor.backgroundColor='brown';
let color1=["brown",'purple']
let index=0

setInterval(function(){
    
    let firstColor=document.getElementsByTagName("body")[0].style;
    firstColor.backgroundColor=color1[index];
    index++;
    if (index>1) {index=0; }
firstColor.backgroundColor=color1[index];

   
    
}
    
,2000)













//check();





console.log(x);
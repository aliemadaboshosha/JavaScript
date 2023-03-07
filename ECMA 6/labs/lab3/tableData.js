

 //#region here I  fetch the data I need to work on
            let usersArr;
            let usersAsObjects=[];
            usersAsObjects.length=10;


           
console.log(usersAsObjects.length)

            async function getUsers(){
                usersArr=await fetch ("https://jsonplaceholder.typicode.com/users");
                usersAsObjects=await usersArr.json();
                
              
                // console.log(usersAsObjects);
               

                localStorage.setItem("Users",JSON.stringify(usersAsObjects));
                


            }
            
            getUsers();

//#endregion

var sortDirection=true;//that as a flag to tell me the direction of sorting by his value


let allUsers=(JSON.parse(localStorage.getItem("Users")))//---get the data from local storage


let table=document.querySelector("table");//get the table from the page


let dropDownList=document.querySelector("select");//get the dropdown List from the page

allUsers.length=dropDownList.value

creatTable(allUsers)//calling the function to creat the table body at the beging of the load the page
            

dropDownList.addEventListener("change",showList);//here I put the effect of the function **showlist()** on the all values of the dropdown list
            

let searchBox=document.querySelector("input")//get the search textbox from the page
searchBox.addEventListener("keyup",search);//here I put the effect of the function **search()** on the input of the search value... 
             
   //#region Here the all functions (creatTable()--showList()--search()--sortAnyProperty())

function creatTable(allUsers){
           
            let tableBody=document.createElement("tbody");//----------------here I creat the tablebody tag


            for (let index = 0; index < allUsers.length; index++) {
                let row = document.createElement('tr');//----------------here I creat a new row

                //#region here I creat the all cells data
                /*(id,name,username,email,phone,website,address city,address street,address geo lat,address geo lng,address suite,address zipcode,company name,company chatphrase,company bs) of the new row */
                let removeImage=document.createElement("td")
                removeImage.innerHTML=`<img src="download.png" width="30px" style="cursor: pointer"></img>`;
                removeImage.addEventListener('click', function (){
                    tableBody.removeChild(row);
                });
                let id = document.createElement('td');
                id.style.backgroundColor="#2c2c2c";
                id.innerHTML=`<font color="white">${allUsers[index].id} </font>`

                let name = document.createElement('td');
                name.style.backgroundColor="#2c2c2c";
                name.innerHTML=`<font color="white">${allUsers[index].name} </font>`

                let username = document.createElement('td');
                username.style.backgroundColor="#2c2c2c";
                username.innerHTML=`<font color="white">${allUsers[index].username} </font>`

                let email = document.createElement('td');
                email.style.backgroundColor="#2c2c2c";
                email.innerHTML=`<font color="white">${allUsers[index].email} </font>`

                let phone = document.createElement('td');
                phone.style.backgroundColor="#2c2c2c";
                phone.innerHTML=`<font color="white">${allUsers[index].phone} </font>`

                let website = document.createElement('td');
                website.style.backgroundColor="#2c2c2c";
                website.innerHTML=`<font color="white">${allUsers[index].website} </font>`

                let addresscity = document.createElement('td');
                addresscity.style.backgroundColor="#2c2c2c";
                addresscity.innerHTML=`<font color="white">${allUsers[index].address.city} </font>`

                let addressStreet=document.createElement('td');
                addressStreet.style.backgroundColor="#2c2c2c";
                addressStreet.innerHTML=`<font color="white">${allUsers[index].address.street} </font>`

                let addressgeolat=document.createElement('td');
                addressgeolat.style.backgroundColor="#2c2c2c";
                addressgeolat.innerHTML=`<font color="white">${allUsers[index].address.geo.lat} </font>`

                let addressgeolng=document.createElement('td');
                addressgeolng.style.backgroundColor="#2c2c2c";
                addressgeolng.innerHTML=`<font color="white">${allUsers[index].address.geo.lng} </font>`

                let addressSuite=document.createElement('td');
                addressSuite.style.backgroundColor="#2c2c2c";
                addressSuite.innerHTML=`<font color="white">${allUsers[index].address.suite} </font>`

                let addressZipcode=document.createElement("td");
                addressZipcode.style.backgroundColor="#2c2c2c";
                addressZipcode.innerHTML=`<font color="white">${allUsers[index].address.zipcode} </font>`

                let companyName=document.createElement("td");
                companyName.style.backgroundColor="#2c2c2c";
                companyName.innerHTML=`<font color="white">${allUsers[index].company.name} </font>`

                let companyCathchPhars=document.createElement('td');
                companyCathchPhars.style.backgroundColor="#2c2c2c";
                companyCathchPhars.innerHTML=`<font color="white">${allUsers[index].company.catchPhrase} </font>`
                
                let companyBs=document.createElement('td');
                companyBs.style.backgroundColor="#2c2c2c";
                companyBs.innerHTML=`<font color="white">${allUsers[index].company.bs} </font>`
                //#endregion

                //#region here I put the all cells on the new row
                row.appendChild(removeImage);
                row.appendChild(id);
                row.appendChild(name);
                row.appendChild(username);
                row.appendChild(email);
                row.appendChild(phone);
                row.appendChild(website);
                row.appendChild(addresscity);
                row.appendChild(addressStreet);
                row.appendChild(addressgeolat);
                row.appendChild(addressgeolng);
                row.appendChild(addressSuite);
                row.appendChild(addressZipcode);
                row.appendChild(companyName);
                row.appendChild(companyCathchPhars);
                row.appendChild(companyBs);
                //#endregion
                tableBody.appendChild(row);//-------------------------here I put the row with its data in the table body
                table.appendChild(tableBody);//-----------------------here I put the table body in the body

                
            }/*here in this loop I creat all table data in different state>>>>>
               (open the page at normal state--search state--
                choose the number of rows in the table from the dropDown list State--
                sorting by click on the colum title state) */





}//by this function I creat the table body and its data evey time i need to creat the table body depends on the others function result


                
function showList()
{
    
        let array=(JSON.parse(localStorage.getItem("Users")));//I get the data from the local storage 
        //#region the data will be shown

        //array.splice(dropDownList.value,10-dropDownList.value); 

        /********here i can remove from the array of data the tail of it
         and let the new body of array is the num of indexs that equals the value from drop down list....********/ 

         //#endregion


        array.length=dropDownList.value;//here i can do the same result of line 183 by simple way :))
       

        table.children[1].remove();//------ here I drop the table body to creat anther new body with new length more or less the old body i removed
         creatTable(array)//----here I creat the new body of the table by calling the function **creatTable()**
         
        return array
 }//by this function I make a new table with rows number get the rows number from the dropDown list


function search(){
        let resultArray=[];//------here I define an array to store in it the objects their values match the search word
       let allUsers=JSON.parse(localStorage.getItem("Users"))//-------here I get the all datafrom the local storage
       allUsers.length=dropDownList.value//-------here I take the range of values i will search in them
        let searchValue=searchBox.value;//----here I get the word which I search on it
        for (let index = 0; index < allUsers.length; index++) {
            
            if ((allUsers[index].name.toUpperCase().split(searchValue.toUpperCase().trim()).length)>1
            ||(allUsers[index].email.toUpperCase().split(searchValue.toUpperCase()).length)>1
            ||(allUsers[index].username.toUpperCase().split(searchValue.toUpperCase()).length)>1
            ||(allUsers[index].website.toUpperCase().split(searchValue.toUpperCase()).length)>1
            ||(allUsers[index].phone.toUpperCase().split(searchValue.toUpperCase()).length)>1
            ||(allUsers[index].address.city.toUpperCase().split(searchValue.toUpperCase()).length)>1)
            /*here in if condition I take the search word and splite the value of the objects property 
            if the process of splite success the result will be an array with length more than 1
            */ 
            {
               
                resultArray.push(allUsers[index]);//--------here I put the objects have the value I search for it.. in the array 
            }
            
        }
        if (resultArray.length==0) {
            table.children[1].remove();
            let tableBody=document.createElement("tbody");
            table.append(tableBody)
           return resultArray
            
        }//here i creat an empty table body if no objects matched the search 

        else{
       table.children[1].remove();//------ here I drop the table body to creat anther new body with the objects matched the word I search ;
       creatTable(resultArray);//----here I creat the new body of the table by calling the function **creatTable()**the table body will contains the objects matched the search word
       return resultArray;
    }//----here if there are objects matched the search word

}//by this function I make a new table with objects which matched the search word
                
                
        
               
function sortAnyProperty(array/*this the array of object i will sort*/,
comparValue/*this the property string title i will sort depends on it*/)
{ 
 array =search(array)//here I call he function **search()** to get the array I will sort i there is a search word the user want to search about
   if (sortDirection==true) {

    array.sort((u1,u2)=>(u1[comparValue]>u2[comparValue])?1:((u2[comparValue]>u1[comparValue])? -1:0));//here i sort the array accending depend the property value 
    sortDirection=false;
    
   }
   else{
    array.sort((u1,u2)=>(u1[comparValue]<u2[comparValue])?1:((u2[comparValue]<u1[comparValue])? -1:0));//here i sort the array accending depend the property value 
    sortDirection=true;

   }

  

 table.children[1].remove();//---here I remove the table body to creat a new body with the result of sort
 creatTable(array)//------here i creat a new table body with the sorted array by calling the function **creatTabble()**
 



      } //by this function I sort the table with any property of the objects in the array     

//#endregion





          
      

    
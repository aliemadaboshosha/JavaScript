
window.addEventListener("load", function () {
  let addButton = document.querySelector("input[value=Add]");
  let nameValue = document.querySelector("input[name=studentName]");
  let gradeValue = document.querySelector("input[name=studentGrade]");
  let studentTable = this.document.createElement("table");
  studentTable.id = "tableData";
  this.document.body.append(studentTable);
  capitalFirstChar(nameValue.value);//call the methode to make the first character in name is capital letter

  ///in this lines we check the values of the inputs-----------------------------------
  addButton.onclick = function () {
    if (nameValue.value == "" || gradeValue.value == "") {
      alert("Please,Fill all Fieldes");
    }
    else if ((nameValue.value).length < 3||!isNaN(nameValue.value)) {
      alert("wrong name ... try to enter new name ")
    }
    else if (gradeValue.value < 0 || gradeValue.value > 100 || isNaN(gradeValue.value)) {
      alert("Wrong Grade ... the grade must be number and less than or equal 100");
    }
//-----------------------------------------------------------------------------------




//here we check the name of this student is in the table or not-----------------------
    else {
      let checkUndefined = preventRepeatedName(nameValue.value);
      if (checkUndefined == undefined) { }// this line prevent creat new row in table if this name of student is founded

      //after check the name and find this is a new name ,,we wil creat a new tr and fill its td
      else {
        let trElement = document.createElement("tr");
        studentTable.append(trElement);
        let tdElement = document.createElement("td");
        tdElement.innerText = checkUndefined;
        trElement.append(tdElement);
        tdElement = document.createElement("td");
        tdElement.innerText = gradeValue.value;
        trElement.append(tdElement);
        trElement.classList.add(document.querySelector("input[type=radio]:checked").value);

////creat the delet button
        tdElement = document.createElement("td");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete"
        deleteButton.classList.add("icons", "btn")


        tdElement.append(deleteButton);
        trElement.append(tdElement);
        
        deleteButton.onclick = function () {
          this.parentElement.parentElement.remove();//remove all td by its parent tr
        }
      }
    }

  }
})


//make first letter is captial

function capitalFirstChar(capName) {
    return capName.charAt(0).toUpperCase() + capName.slice(1);
  }








function sortTableByName() {
  let tableId, rows, comparing, i, row1, row2, mustReplace;
  tableId = document.getElementById("tableData");
  comparing = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (comparing) {
    //start by saying: no switching is done:
    comparing = false;
    rows = tableId.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < rows.length; i++) {
      //start by saying there should be no switching:
      mustReplace = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      if(i==rows.length-1){break;}
      row1 = rows[i].getElementsByTagName("td")[0];
      row2 = rows[i + 1].getElementsByTagName('td')[0];
      //y = rows[i+1].getElementsByTagName("td")[0];
      //check if the two rows should switch place:
      if (row1.innerText.toLowerCase() > row2.innerText.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        mustReplace = true;
        break;
      }
    }
    if (mustReplace) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      comparing = true;
    }
  }
}











function sortTableByGrade() {
    let tableId, rows, comparing, i, row1, row2, mustReplace;
  tableId = document.getElementById("tableData");
  comparing = true;
  while (comparing) {
    comparing = false;
    rows = tableId.rows;
    for (i = 0; i < rows.length; i++) {
      mustReplace = false;
      if(i==rows.length-1){break;}
      row1 = rows[i].getElementsByTagName("td")[1];
      row2 = rows[i + 1].getElementsByTagName("td")[1];
      if (parseInt(row1.innerText) < parseInt(row2.innerText)) {
        mustReplace = true;
        break;
      }
    }
    if (mustReplace) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      comparing = true;
    }
  }
}









function filterTableBySuccess() {
  let arrayOfSuccess = [];
  let tableId = document.getElementById("tableData");
  let rowsArray = tableId.rows;
  let rowCheck;
  for (let i = 0; i < rowsArray.length; i++) {
    rowCheck = rowsArray[i].getElementsByTagName("td")[1];
    if (parseInt(rowCheck.innerText) < 60) {
      arrayOfSuccess.push(rowCheck);
      // rowCheck.parentElement.remove();
    }
  }
  for (let j = 0; j < arrayOfSuccess.length; j++) {
    arrayOfSuccess[j].parentElement.remove();
  }
}





function filterTableByFailed() {
  let arrayOfFailed = [];
  let tableId = document.getElementById("tableData");
  let rowsArray = tableId.rows;
  let rowCheck;
  for (let i = 0; i < rowsArray.length; i++) {
    rowCheck = rowsArray[i].getElementsByTagName("td")[1];
    if (parseInt(rowCheck.innerText) >= 60) {
      arrayOfFailed.push(rowCheck);
    }
  }
  for (let j = 0; j < arrayOfFailed.length; j++) {
    arrayOfFailed[j].parentElement.remove();
  }
}




function preventRepeatedName(repeatedName) {
  let newName = capitalFirstChar(repeatedName)
  let tableId = document.getElementById("tableData");
  let tableRows = tableId.rows;
  let checkRepeated = '';
  let i;
  if (tableRows.length == 0) { return newName }
  else {
    console.log(tableRows.length)
    for (i = 0; i < tableRows.length; i++) {
      checkRepeated = tableRows[i].getElementsByTagName("td")[0];
      if (newName == (checkRepeated.innerText)) {
        alert("Name Is Exist Before");
        newName = undefined;
        break;
      }
    }
  }
  return newName;
}


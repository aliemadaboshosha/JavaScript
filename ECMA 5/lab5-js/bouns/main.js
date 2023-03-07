
window.addEventListener('load', function (){
    let text = document.getElementsByName('text')[0];

    text.addEventListener('blur', function (){
        if (!isValidText(text.value)){
            text.focus();
            text.select()
        }
    })

    document.getElementById('addBtn').addEventListener('click', function (){

        if (isValidText(text.value)){
            addNewsRow(text.value)
        }

    })
})


function isValidText(value){
    return value.match(/^[a-zA-z]/)
}

function addNewsRow(text){
    var myTable =  document.getElementsByTagName('table')[0];

    var row = document.createElement('tr');

    var col1 = document.createElement('td');
    col1.innerHTML = '<input type="checkbox">';

    col1.addEventListener('change', function (){
        col1.parentElement.querySelector('p').classList.toggle('throughLine');
    });

    var col2 = document.createElement('td');
    col2.innerHTML =  '<p>'+ text +'</p>';

    var col3 = document.createElement('td');
    col3.innerHTML =   '<img src="download.png" width="30px" style="cursor: pointer">';

    col3.addEventListener('click', function (){
        myTable.removeChild(row);
    });

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    myTable.appendChild(row);

}

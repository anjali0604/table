document.getElementById("abc").addEventListener("click", function(){
    //"use strict";
    var table = document.getElementById("myTable");
    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");    
    var td4 = document.createElement("td"); 
    td1.innerHTML = document.getElementById("namee").value;
    td2.innerHTML  = document.getElementById("emaill").value;
    td3.innerHTML  = document.getElementById("phonee").value;
    td4.innerHTML  = document.getElementById("addresss").value;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    myTable.children[0].appendChild(row);
});
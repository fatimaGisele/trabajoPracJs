

var table=document.querySelector("table");
var main=document.querySelector("main");
var tbody=document.querySelector("tbody");


var meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var cantDias=[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var j=100;
var k=0, h=0;

   var detener= setInterval(() => {
   
var tr=document.createElement("tr");
var td=document.createElement("td");
var td02=document.createElement("td");
var tdMes=document.createTextNode(meses[k]);
var tdDias=document.createTextNode(cantDias[h]);
 k++,h++;
td.appendChild(tdMes);
td02.appendChild(tdDias);
tr.appendChild(td);
tr.appendChild(td02);
table.appendChild(tr);
main.appendChild(table);
if(k==12&&h==12){
    clearInterval(detener);
 } 
    }, j);
         j =j + 1000;
         
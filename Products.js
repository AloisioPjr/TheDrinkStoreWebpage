/*
    Document   : Products.xsl
    Created on : 1 November 2022
    Author     : Aloisio Junior 
    Year       : BSHCIFSC2
*/


let xmlContent = '';
let tableproducts = document.getElementById('products');
fetch('Products.xml').then((response) => {
    response.text().then((xml) => {
        xmlContent = xml;

        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml');
        let products = xmlDOM.querySelectorAll('product');
        
        products.forEach(productXmlNode => {
          
          let row = document.createElement('tr');
          // for loop 
          for(i=0;i<5;i++){
            
            let td = document.createElement('td');
            td.innerText = productXmlNode.children[i].innerHTML;
            
            row.appendChild(td);
          }
          tableproducts.children[1].appendChild(row);
            
        });

    });
});    

function searchFun() {
  
  var input, filter, table, tr, td, i, txtValue, notFound;
  notFound = ("PRODUCT NOT FOUND");
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("products");
  tr = table.getElementsByTagName("tr");

  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        
      } else {
        tr[i].style.display = "none";
        
      }
    }
  }
}
  /*searchInput.addEventListener('input', (e)=>{
            const value = e.target.value.toLowerCase();
            console.log(value)
          //if value exists 
            if (value){
              //loop through the table of products(for each product)
              
              for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                  txtValue = td.textContent || td.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                  } else {
                    tr[i].style.display = "none";
                  }
                }
              }
          }
           */ 

//set atribute 
/*document.getElementsByTagName("table")[1].setAttribute("id","myTable"); */


//////////////////////////////////////


/*var productXmlFile = 'Products.xml';

getXmlDocObject(productXmlFile, function (xmlDoc) {
  var stock = xmlDoc.getElementsByTagName('Products')[0];
  var product = stock.getElementsByTagName('product')
  for (var i = 0; i < product.length; i++) {
    var childNodeAtribute = product[i].childnodes(0).getAttribute("id");
    var childNodeName1 = product[i].children[0].nodeName;
    var childNodeValue1 = product[i].children[0].innerHTML;

    var childNodeName2 = product[i].children[1].nodeName;
    var childNodeValue2 = product[i].children[1].innerHTML;

    var childNodeName3 = product[i].children[2].nodeName;
    var childNodeValue3 = product[i].children[2].innerHTML;

    var childNodeName4 = product[i].children[3].nodeName;
    var childNodeValue4 = product[i].children[3].innerHTML;

    var childNodeName5 = product[i].children[4].nodeName;
    var childNodeValue5 = product[i].children[4].innerHTML;
    console.log(childNodeAtribute)
    console.log(childNodeName1 + ': ' + childNodeValue1);
    console.log(childNodeName2 + ': ' + childNodeValue2);
    console.log(childNodeName3 + ': ' + childNodeValue3);
    console.log(childNodeName4 + ': ' + childNodeValue4);
    console.log(childNodeName5 + ': ' + childNodeValue5);
    console.log('-----')
  }
});
///////////////////////////////////////


function getXmlDocObject(xmlFile, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if ((this.readyState === 4) && (this.status === 200)) {
      var xmlContent = this.responseText;
      var xmlDoc = parseXML(xmlContent);
      callback(xmlDoc);
    }
  };
  xhttp.open('GET', xmlFile, true);
  xhttp.send();
}
function parseXML(xmlContent) {
  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
  return xmlDoc;
}*/

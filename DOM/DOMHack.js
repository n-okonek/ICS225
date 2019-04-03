//global vars
var headers = document.getElementsByTagName('h2'),
    button0 = document.createElement('button'),
    button1 = document.createElement('button'),
    buttons = document.getElementsByTagName('button'),
    sortTable = document.getElementById('accounts'),
    accountList = [],
    productList = [];


// add buttons to page
headers[0].after(button0);
headers[1].after(button1);

for (var i = 0; i < buttons.length; i++){
  buttons[i].innerHTML = "Extract";
}

buttons[0].setAttribute("onclick", "extractAccounts()");
buttons[1].setAttribute("onclick", "extractProducts()");

// add sort 
sortTable.getElementsByTagName('tr')[0].children[0].innerHTML = "Name <button onclick='sortAccounts(n)'>Sort</button>"
sortTable.getElementsByTagName('tr')[0].children[1].innerHTML = "Email <button onclick='sortAccounts(ea)'>Sort</button>"

////////////////////////////////
/// Start Extract Functions ////
////////////////////////////////

function extractAccounts(){
  var rawTable = document.getElementById("accounts");

  for (var i = 1 ; i < rawTable.getElementsByTagName('tr').length; i++){
    var fName, lName, eMail;
    
    if(rawTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ').length > 2){
      fName = rawTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[0];
      lName = rawTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[1] + " " +
              rawTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[2];
    }else{
      fName = rawTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[0];
      lName = rawTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[1];
    }

    eMail = rawTable.getElementsByTagName('tr')[i].children[1].textContent;
  
    accountList.push( {"First Name":fName, "Last Name":lName, "Email":eMail} );
  }
  console.log(accountList);
}

////////////////////////////////

function extractProducts(){
  var rawTable = document.getElementsByClassName("products");

  for (var i = 1 ; i < rawTable[0].getElementsByTagName('tr').length; i++){
    var img, pName, price;

    img = rawTable[0].getElementsByTagName('tr')[i].children[0].childNodes[0].attributes[0].nodeValue;
    pName = rawTable[0].getElementsByTagName('tr')[i].children[1].textContent;
    price = rawTable[0].getElementsByTagName('tr')[i].children[2].textContent.replace('$', '');

    productList.push( {"Product Image Source":img, "Product Name":pName, "Price":price})
  }
  console.log(productList);
}

////////////////////////////////
///// Start Sort Functions /////
////////////////////////////////

function sortAccounts(n, ea){
  var sortName;

  if(n){
    var name = [];
    for (var i = 1; i < sortTable.getElementsByTagName('tr').length; i++){
      sortName = sortTable.getElementsByTagName('tr')[i].children[0].textContent;
      name.push(sortName);
    }
    name.sort();
    for (var i = 1; i < sortTable.getElementsByTagName('tr').length; i++){

    }

  }

  if(ea){
    var em = [];
    for (var i = 1; i < sortTable.getElementsByTagName('tr').length; i++){
      sortName = sortTable.getElementsByTagName('tr')[i].children[1].textContent;
      em.push(sortName);
    }
  }
}
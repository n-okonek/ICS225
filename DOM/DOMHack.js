//global vars
var headers = document.getElementsByTagName('h2'),
    button0 = document.createElement('button'),
    button1 = document.createElement('button'),
    buttons = document.getElementsByTagName('button'),
    accounTable = document.getElementById('accounts'),
    prodTable = document.getElementsByClassName("products"),
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
accounTable.getElementsByTagName('tr')[0].children[0].innerHTML = "Name <button onclick='sortAccounts(true, false)'>Sort</button>";
accounTable.getElementsByTagName('tr')[0].children[1].innerHTML = "Email <button onclick='sortAccounts(false, true)'>Sort</button>";
prodTable[0].getElementsByTagName('tr')[0].children[1].innerHTML = "Name <button onclick='sortProducts(true, false)'>Sort</button>";
prodTable[0].getElementsByTagName('tr')[0].children[2].innerHTML = "Price <button onclick='sortProducts(false, true)'>Sort</button>";


////////////////////////////////
/// Start Extract Functions ////
////////////////////////////////

for (var i = 1 ; i < accounTable.getElementsByTagName('tr').length; i++){
  var fullname, fName, lName, eMail;
  
  fullName = accounTable.getElementsByTagName('tr')[i].children[0].textContent;

  if(accounTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ').length > 2){
    fName = accounTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[0];
    lName = accounTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[1] + " " +
            accounTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[2];
  }else{
    fName = accounTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[0];
    lName = accounTable.getElementsByTagName('tr')[i].children[0].textContent.split(' ')[1];
  }

  eMail = accounTable.getElementsByTagName('tr')[i].children[1].textContent;

  accountList.push( {"FullName":fullName, "FirstName":fName, "LastName":lName, "Email":eMail} );
}

for (var i = 1 ; i < prodTable[0].getElementsByTagName('tr').length; i++){
  var img, pName, price;

  img = prodTable[0].getElementsByTagName('tr')[i].children[0].childNodes[0].attributes[0].nodeValue;
  pName = prodTable[0].getElementsByTagName('tr')[i].children[1].textContent;
  price = prodTable[0].getElementsByTagName('tr')[i].children[2].textContent.replace('$', '');

  productList.push( {"imgSource":img, "prodName":pName, "price":price})
}

function extractAccounts(){
  for (var i = 0; i < accountList.length; i++){
    console.log(accountList[i].FirstName + ", " + accountList[i].LastName + ", " + accountList[i].Email);
  }
}

////////////////////////////////

function extractProducts(){
  for ( var i = 0; i < productList.length; i++){
  console.log(productList[i].imgSource + ", " + productList[i].prodName + ", " + productList[i].price);
  }
}

////////////////////////////////
///// Start Sort Functions /////
////////////////////////////////

function sortAccounts(n, ea){
  if(n){
    accountList.sort(function(a,b){
      var nameA = a.FullName.toUpperCase();
      var nameB = b.FullName.toUpperCase();

      if (nameA < nameB ){
        return -1;
      }else if( nameA > nameB ){
        return 1;
      }else{return 0;}
    });
  
    for (var i = 1, j = 0 ; i < accounTable.getElementsByTagName('tr').length; i++, j++){
      accounTable.getElementsByTagName('tr')[i].children[0].textContent = accountList[j].FullName;
      accounTable.getElementsByTagName('tr')[i].children[1].textContent = accountList[j].Email;
    }
  }

  if(ea){
    accountList.sort(function(a,b){
      var nameA = a.Email.toUpperCase();
      var nameB = b.Email.toUpperCase();

      if (nameA < nameB ){
        return -1;
      }else if( nameA > nameB ){
        return 1;
      }else{return 0;}
    });
  
    for (var i = 1, j = 0 ; i < accounTable.getElementsByTagName('tr').length; i++, j++){
      accounTable.getElementsByTagName('tr')[i].children[0].textContent = accountList[j].FullName;
      accounTable.getElementsByTagName('tr')[i].children[1].textContent = accountList[j].Email;
    }
  }
}

function sortProducts(prd, prc){
  if(prd){
    productList.sort(function(a,b){
      var nameA = a.prodName.toUpperCase();
      var nameB = b.prodName.toUpperCase();

      if (nameA < nameB ){
        return -1;
      }else if( nameA > nameB ){
        return 1;
      }else{return 0;}
    });
  
    for (var i = 1, j = 0 ; i < prodTable[0].getElementsByTagName('tr').length; i++, j++){
      //prodTable[0].getElementsByTagName('tr')[i].children[0].childNodes = 
      prodTable[0].getElementsByTagName('tr')[i].children[1].textContent = productList[j].prodName;
      prodTable[0].getElementsByTagName('tr')[i].children[2].textContent = "$" + productList[j].price;
    }
  }

  if(prc){
    productList.sort((a,b) => a.price - b.price);
      
    for (var i = 1, j = 0 ; i < prodTable[0].getElementsByTagName('tr').length; i++, j++){
      //prodTable[0].getElementsByTagName('tr')[i].children[0].childNodes = 
      prodTable[0].getElementsByTagName('tr')[i].children[1].textContent = productList[j].prodName;
      prodTable[0].getElementsByTagName('tr')[i].children[2].textContent = "$" + productList[j].price;
    }
  }
}


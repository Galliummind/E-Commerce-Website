//hardcode my products since they cannot be stored on a server.
//https://www.w3schools.com/js/js_array_sort.asp

//This arraylist will hold all of the information I need to put items into carts.
//Only the quantity element will be saved on local storage as the rest of the elements don't need to change.
var products = [
  {
    name: 'item1',
    nameValue: 'Dell Optiplex 7020',
    desc: 'des1',
    descValue: 'Computer Desktop',
    img: 'img1',
    imgValue: 'Images/HPOMEN25L.jpg',
    price: 'price1',
    priceValue: '200',
    quantity: 'quantity1',
    quantityValue: '0'
  }, //end of item1

  {
    name: 'item2',
    nameValue: 'Dell Optiplex 3020',
    desc: 'des2',
    descValue: 'Computer Desktop',
    img: 'img2',
    imgValue: './Images/HPOMEN25L.jpg',
    price: 'price2',
    priceValue: '300',
    quantity: 'quantity2',
    quantityValue: '0'
  }, //end of item2

  {
    name: 'item3',
    nameValue: 'DELL 9020',
    desc: 'des3',
    descValue: 'Computer Desktop',
    img: 'img3',
    imgValue: './Images/HPOMEN25L.jpg',
    price: 'price3',
    priceValue: '500',
    quantity: 'quantity3',
    quantityValue: '0'
  }, //end of item3

  {
    name: 'item4',
    nameValue: 'DELL XPS 8940',
    desc: 'des4',
    descValue: 'Computer Desktop',
    img: 'img4',
    imgValue: './Images/HPOMEN25L.jpg',
    price: 'price4',
    priceValue: '900',
    quantity: 'quantity4',
    quantityValue: '0'
  }, //end of item4

  {
    name: 'item5',
    nameValue: 'Inspiron 15-5565',
    desc: 'des5',
    descValue: 'Laptop',
    img: 'img5',
    imgValue: './Images/HPOMEN25L.jpg',
    price: 'price5',
    priceValue: '3000',
    quantity: 'quantity5',
    quantityValue: '0'
  }, //end of item5

  {
    name: 'item6',
    nameValue: 'Latitude 7390 Business Laptop',
    desc: 'des6',
    descValue: 'Laptop',
    img: 'img6',
    imgValue: 'Images/dell-latitude-13-7390-conv.jpg',
    price: 'price6',
    priceValue: '900',
    quantity: 'quantity6',
    quantityValue: '0'
  }, //end of item6

  {
    name: 'item7',
    nameValue: 'HP Pavilion TG01-1109',
    desc: 'des7',
    descValue: 'Gaming PC',
    img: 'img7',
    imgValue: 'Images/HPPavilionTG011109GamingPC.jpg',
    price: 'price7',
    priceValue: '900',
    quantity: 'quantity7',
    quantityValue: '0'
  }, //end of item7

  {
    name: 'item8',
    nameValue: 'HP OMEN 25L',
    desc: 'des8',
    descValue: 'Gaming PC',
    img: 'img8',
    imgValue: 'Images/HPOMEN25L.jpg',
    price: 'price8',
    priceValue: '1400',
    quantity: 'quantity8',
    quantityValue: '0'
  }, //end of item8

  {
    name: 'item10',
    nameValue: 'Dell Precision 3630',
    desc: 'des10',
    descValue: 'Desktop',
    img: 'img10',
    imgValue: 'Images/Dell%20Precision%203630%20Tower%20Desktop.jpg',
    price: 'price10',
    priceValue: '3000',
    quantity: 'quantity10',
    quantityValue: '0'
  }, //end of item10

  {
    name: 'item11',
    nameValue: 'Lenovo Legion Tower 5i',
    desc: 'des11',
    descValue: 'Gaming PC',
    img: 'img11',
    imgValue: 'Images/LenovoLegionTower5i.jpg',
    price: 'price11',
    priceValue: '1400',
    quantity: 'quantity11',
    quantityValue: '0'
  }, //end of item11

  {
    name: 'item12',
    nameValue: 'Inspiron 7405 2-in-1',
    desc: 'des12',
    descValue: 'Gaming PC',
    img: 'img12',
    imgValue: 'Images/LenovoLegionTower5i.jpg',
    price: 'price12',
    priceValue: '200',
    quantity: 'quantity12',
    quantityValue: '0'
  } //end of item12
] //End of variable products

addItemsToLocalStorage()

//This function will be called ONLY if the browser is loading the shopping cart HTML page. This function must exist,
//otherwise an undefined error will be run as javascript loads and cannot find the table being referenced in my code.
function fillShoppingCartTableIf () {
  //https://www.w3schools.com/jsref/event_onload.asp
  //Ececute fillCartTable function as soon as window is prompted to reload.
  window.onload = fillCartTable()
} //End of fillShoppingCartTableIf

//This function will be used whenever an "Add to Cart" button is created.
function addToCartClick (cartIdNumber) {
  if (cartIdNumber == 1) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity1')
  } //End of ifstatement

  if (cartIdNumber == 2) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity2')
  } //End of ifstatement

  if (cartIdNumber == 3) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity3')
  } //End of ifstatement

  if (cartIdNumber == 4) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity4')
  } //End of ifstatement

  if (cartIdNumber == 5) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity5')
  } //End of ifstatement

  if (cartIdNumber == 6) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity6')
  } //End of ifstatement

  if (cartIdNumber == 7) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity7')
  } //End of ifstatement

  if (cartIdNumber == 8) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity8')
  } //End of ifstatement

  if (cartIdNumber == 9) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity9')
  } //End of ifstatement

  if (cartIdNumber == 10) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity10')
  } //End of ifstatement

  if (cartIdNumber == 11) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity11')
  } //End of ifstatement

  if (cartIdNumber == 12) {
    itemAddedToCartAlert(cartIdNumber)
    addItemsToLocalStorageSingularUse('quantity12')
  } //End of ifstatement

  if (cartIdNumber === undefined) {
    itemAddedToCartAlert(undefined)
  } //End of ifstatement
} //end of listenForButtonClick

// Depending on what is passed to the parameter this function will look for a match in the if statements.
// If a match is found a custom message will notify the user the item has been added to the cart.
// Ideally I would use a switch statement, but at this moment I need to move forward with my code, there are many things I need to change.
function itemAddedToCartAlert (cartIdNumber) {
  if (cartIdNumber == 1) {
    window.alert('Optiplex 7020 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 2) {
    window.alert('Dell Optiplex 3020  has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 3) {
    window.alert('DELL 9020 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 4) {
    window.alert('DELL XPS 8940 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 5) {
    window.alert('Inspiron 15-5565 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 6) {
    window.alert('Latitude 7390 Business Laptop has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 7) {
    window.alert('HP Pavilion TG01-1109 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 8) {
    window.alert('HP OMEN 25L has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 9) {
    window.alert('Dell Precision 3630 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 10) {
    window.alert('Lenovo Legion Tower 5i has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 11) {
    window.alert('Inspiron 7405 2-in-1 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber == 12) {
    window.alert('Inspiron 7405 2-in-1 has been added to cart.')
  } //End of ifstatement

  if (cartIdNumber === undefined) {
    window.alert('Something went wrong! ')
  } //End of ifstatement

  if (cartIdNumber === 1000) {
    window.alert('Thank you for your purchase!')
  } //End of ifstatement

  if (cartIdNumber === 2000) {
    window.alert('Your cart has been cleared!')
  } //End of ifstatement
} //End of itemAddedToCartAlert

//This simple function will run once to store an array inside localStorage.
function addItemsToLocalStorage () {
  if (localStorage.length <= 0) {
    for (i = 0; i <= products.length - 1; i++) {
      localStorage.setItem(products[i].name, products[i].nameValue)
      localStorage.setItem(products[i].desc, products[i].descValue)
      localStorage.setItem(products[i].img, products[i].imgValue)
      localStorage.setItem(products[i].price, products[i].priceValue)
      localStorage.setItem(products[i].quantity, products[i].quantityValue)
    } //End if if statement
  } //End of for loop
} //End of addItemsToLocalStorage

//This is a similar function to addItemsToLocalStorage, but instead a parameter holding the key value of local storage will target one quantity.
//This will allow the user to add items to the cart and have the local storage save each time. There will be a secondary function called remove...
// SOURCES: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// SOURCES: https://www.educative.io/edpresso/how-to-convert-an-integer-to-a-string-in-java
// TroubleShooting: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined
// SOURCE code: https://dev.to/galliummind/adding-to-localstorage-3eog
function addItemsToLocalStorageSingularUse (localStorageKey) {
  //fetch data from localStorage
  var tempData = localStorage[localStorageKey]

  //Convert tempData from String to variable integer.
  var parsed = parseInt(tempData, 10)

  //Add +1 to tempData (this represents one item added to cart.)
  parsed = parsed += 1
  //convert the tempData from integer to string by calling the function toString();
  tempData = parsed.toString()

  //Overwrite current localStorage in location (localStorageKey) with tempData.
  localStorage.setItem(localStorageKey, tempData)

  //This console.log serves as a visual to show the tempData has been increased by one.
  console.log('This is tempData value= ' + tempData)
} //End of for loop

//This is a similar function to addItemsToLocalStorage, but instead a parameter holding the key value of local storage will target one quantity.
//This will allow the user to remove items to the cart and have the local storage save each time.
function removeItemsToLocalStorageSingularUse (localStorageKey) {
  //fetch data from localStorage
  var tempData = localStorage[localStorageKey]

  //Convert tempData from String to variable integer.
  var parsed = parseInt(tempData, 10)

  //Add +1 to tempData (this represents one item added to cart.)
  parsed = parsed -= 1

  tempData = parsed.toString()

  //Overwrite current localStorage in location (localStorageKey) with tempData.
  localStorage.setItem(localStorageKey, tempData)

  //This console.log serves as a visual to show the tempData has been increased by one.
  console.log('This is myData value= ' + tempData)
} //End of for loop

// This function will grab information from the local storage and pass on the variables as a function.
//Each time the add to cart button is pushed the function should clear the table and update with new information.
// https://www.w3schools.com/jsref/met_table_insertrow.asp taught me how to fill a table with variables.
function fillCartTable () {
  //Search for a table element with the id "cartTable"
  var table = document.getElementById('cartTable')
  var row = table.insertRow(1)
  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell0 = row.insertCell(0)
  var cell1 = row.insertCell(1)
  var cell2 = row.insertCell(2)
  var cell3 = row.insertCell(3)
  var cell4 = row.insertCell(4)

  // var keyNameX will be used to determine which key values need to be used.
  var keyName1 = 'quantity'
  var keyName2 = 'item'
  var keyName3 = 'des'
  var keyName4 = 'price'

  // A for loop will be needed to load the values of each item into the cart. to do this a for loop is going to concatenate the keyname and a variable i.
  //The combined new keyName will then be passed through a localstorage function, getItem and stored in cell#. This for loop will run through all possible
  //combinations and then the cart should be updated to accurately reflect the customers purchases.
  for (i = 0; i <= products.length; i++) {
    if (localStorage.getItem(keyName1 + i) >= 1) {
      //This portion of code is so close, but it doesn't work as intended sadly.I would like to keep it for the future. Eventually add an image to cart.
      // var img = document.createElement('img');
      //     img.src ='images/Dell Optiplex 3020.jpg';
      //     document.getElementById('cartTable').appendChild(img);
      // cell0.innerHTML =img.appendChild(img);
      cell1.innerHTML = localStorage.getItem(keyName2 + i)
      cell2.innerHTML = localStorage.getItem(keyName3 + i)
      cell3.innerHTML =
        '$' +
        +localStorage.getItem(keyName4 + i) *
          +localStorage.getItem(keyName1 + i)
      cell4.innerHTML = +localStorage.getItem(keyName1 + i)

      row = table.insertRow(1)
      cell0 = row.insertCell(0)
      cell1 = row.insertCell(1)
      cell2 = row.insertCell(2)
      cell3 = row.insertCell(3)
      cell4 = row.insertCell(4)
    } //End of if statement
  } //End of for loop
} //end of function fillCartTable

function PurchaseButton () {
  // credit for localStorage.clear https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  localStorage.clear()

  //This function will be called and will simply notify the user that their purchase has been succesful.
  itemAddedToCartAlert(1000)

  //This function will force the current browser location to be refreshed. This function is needed to restore localStorage.
  location.reload()
} //End of function PurchaseButton

function clearCartButton () {
  // credit for localStorage.clear https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  localStorage.clear()

  //This function will be called and will simply notify the user that their purchase has been succesful.
  itemAddedToCartAlert(2000)

  //This function will force the current browser location to be refreshed. This function is needed to restore localStorage.
  location.reload()
} //End of function PurchaseButton

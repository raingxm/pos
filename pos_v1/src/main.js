//TODO: Please write code in this file.
function printInventory(inputCart) {
  printTitle();
  printStarsLine();

}

function getItemPriceByBarecode(barcode) {
  var allItems = loadAllItems();
  for(var i = 0; i < allItems.length; i++) {
    if(allItems[i].barcode === barcode) {
      return allItems[i].price;
    }
  }

  return 0;
}

function printTitle() {
  console.log("***<没钱赚商店>购物清单***");
}

function printStarsLine() {
  console.log("**********************");
}

function printDottedLine() {
  console.log("----------------------");
}

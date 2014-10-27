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

function title() {
  return "***<没钱赚商店>购物清单***\n";
}

function starsLine() {
  return "**********************";
}

function dottedLine() {
  return "----------------------\n";
}

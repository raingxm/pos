//TODO: Please write code in this file.
function printInventory(inputCart) {



}

function getItemByBarcode(barcode) {
  var allItems = loadAllItems();
  for(var i = 0; i < allItems.length; i++) {
    if(allItems[i].barcode === barcode) {
      return allItems[i];
    }
  }
  return null;
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

function isWeighingGood(inputItem) {
  return inputItem.contains('-');
}

function getWeighingGoodAmount(inputItem) {
  return parseInt(inputItem.split('-')[1]);
}

function getWeighingGoodBarcode(inputItem) {
  return inputItem.split('-')[0];
}

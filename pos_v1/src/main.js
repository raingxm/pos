//TODO: Please write code in this file.
function printInventory(inputCart) {

    console.log(getWeighingFoodBarcode("ITEM000003-2"));

}

function getItemPriceByBarcode(barcode) {
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

function isWeighingFood(inputItem) {
  return inputItem.contains('-');
}

function getWeighingFoodAmount(inputItem) {
  return parseInt(inputItem.split('-')[1]);
}

function getWeighingFoodBarcode(inputItem) {
  return inputItem.split('-')[0];
}

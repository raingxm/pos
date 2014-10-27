//TODO: Please write code in this file.
function printInventory(inputs) {

  console.log(getItemsCountMapFromInput(inputs)["ITEM000001"] + "");
}

function getItemsList() {
  var itemsInfo = "";

  // for(var key in goodMap) {
  //   itemsInfo += getItemList(key, goodMap[key]);
  // }
  //
  // return itemsInfo;
}

function getItemsCountMapFromInput(inputCart) {
  var goodMap = {};
  var barcode = "";
  var amount = 0;
  for(var i = 0; i < inputCart.length; i++) {
    if(isWeighingGood(inputCart[i])) {
      barcode = getWeighingGoodStandardBarcode(inputCart[i]);
      amount = getWeighingGoodAmount(inputCart[i]);
      goodMap[barcode] = amount;
      continue;
    }

    barcode = inputCart[i];
    if(goodMap[barcode]) {
      goodMap[barcode]++;
    }else {
      goodMap[barcode] = 1;
    }
  }
  return goodMap;
}

// function getItemList(barcode, amount) {
//   return barcode + amount;
// }

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

function getWeighingGoodStandardBarcode(inputItem) {
  return inputItem.split('-')[0];
}

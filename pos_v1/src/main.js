function printInventory(inputs) {
  var res = getItemList("ITEM000001", 5);
  console.log(res);
}

function getItemsList(goodMap) {
  var itemsInfo = "";

  for(var key in goodMap) {
    itemsInfo += getItemList(key, goodMap[key]);
  }

  return itemsInfo;
}

function getItemList(barcode, amount) {
  var good = getItemByBarcode(barcode);
  var totalPrice = good.price * amount;
  var result = "名称：" + good.name + "，数量：" + amount + good.unit +
                    "，单价：" + good.price.toFixed(2) + "(元)，小计：" +
                    totalPrice.toFixed(2) + "(元)\n";
  return result;
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

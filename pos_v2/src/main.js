
var title = function() {
  return "***<没钱赚商店>购物清单***\n";
};

var starsLine = function() {
  return "**********************";
};

var dottedLine = function() {
  return "----------------------\n";
};

var isWeighingGood = function(inputItem) {
  return inputItem.indexOf("-") != -1;
};

var weighingGoodAmount = function(inputItem) {
  return parseInt(inputItem.split('-')[1]);
};

var weighingGoodBarcode = function(inputItem) {
  return inputItem.split('-')[0];
};

var getItemsCountMapFromInput = function(inputs) {
  var itemsCountMap = {};
  for(var i = 0; i < inputs.length; i++) {
    if(isWeighingGood(inputs[i])) {
      var barcode = weighingGoodBarcode(inputs[i]);
      itemsCountMap[barcode] = weighingGoodAmount(inputs[i]);
      continue;
    }

    if(itemsCountMap.hasOwnProperty(inputs[i])) {
      itemsCountMap[inputs[i]]++;
    } else {
      itemsCountMap[inputs[i]] = 1;
    }
  }
  return itemsCountMap;
};

var printInventory = function(inputs) {
  var itemCountMap = getItemsCountMapFromInput(inputs);
  console.log(itemCountMap);
};

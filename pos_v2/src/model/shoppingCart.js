var ShoppingCart = function(inputs) {
  this.inputs = inputs;
  this.collection = [];
};

ShoppingCart.prototype.add = function(lineItem) {
  this.collection.push(lineItem);
};

ShoppingCart.prototype.count = function() {
  return this.collection.length;
};

ShoppingCart.prototype.getItemsCountMapFromInput = function() {
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

ShoppingCart.prototype.isWeighingGood = function(inputItem) {
  return inputItem.indexOf("-") != -1;
};

ShoppingCart.prototype.weighingGoodAmount = function(inputItem) {
  return parseInt(inputItem.split('-')[1]);
};

ShoppingCart.prototype.weighingGoodBarcode = function(inputItem) {
  return inputItem.split('-')[0];
};

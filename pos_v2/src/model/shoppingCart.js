var ShoppingCart = function(inputs) {
  this.inputs = inputs;
  this.collection = [];
  this.initCart();
};

ShoppingCart.prototype.add = function(lineItem) {
  this.collection.push(lineItem);
};

ShoppingCart.prototype.count = function() {
  return this.collection.length;
};

ShoppingCart.prototype.shoppingInfo = function() {
  var res = this.title() + this.dottedLine() + this.itemLinesInfo() +
            this.dottedLine();
  return res;
};

ShoppingCart.prototype.itemLinesInfo = function() {
  var res = "";
  for(var i = 0; i < this.count(); i++) {
    res += this.collection[i].format();
  }
  return res;
};

ShoppingCart.prototype.initCart = function() {
  var itemsCountMap = this.getItemsCountMapFromInput();
  var items = loadAllItems();
  for(var i = 0; i < items.length; i++) {
    if(itemsCountMap.hasOwnProperty(items[i].barcode)) {
      var amount = itemsCountMap[items[i].barcode];
      var lineItem = new LineItem(items[i].name, items[i].price, amount,
                                items[i].unit);
      this.add(lineItem);
    }
  }
};

ShoppingCart.prototype.getItemsCountMapFromInput = function() {
  var itemsCountMap = {};
  for(var i = 0; i < this.inputs.length; i++) {
    if(this.isWeighingGood(this.inputs[i])) {
      var barcode = this.weighingGoodBarcode(this.inputs[i]);
      itemsCountMap[barcode] = this.weighingGoodAmount(this.inputs[i]);
      continue;
    }

    if(itemsCountMap.hasOwnProperty(this.inputs[i])) {
      itemsCountMap[this.inputs[i]]++;
    } else {
      itemsCountMap[this.inputs[i]] = 1;
    }
  }
  return itemsCountMap;
};

ShoppingCart.prototype.title = function() {
  return "***<没钱赚商店>购物清单***\n";
};

ShoppingCart.prototype.starsLine = function() {
  return "**********************";
};

ShoppingCart.prototype.dottedLine = function() {
  return "----------------------\n";
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

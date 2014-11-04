var ShoppingCart = function() {
  this.collection = [];
};

ShoppingCart.prototype.add = function(lineItem) {
  this.collection.push(lineItem);
};

ShoppingCart.prototype.count = function() {
  return this.collection.length;
};

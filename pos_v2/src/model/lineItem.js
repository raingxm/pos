var LineItem = function(name, price, amount, unit) {
  this.name = name;
  this.price = price;
  this.amount = amount;
  this.unit = unit;
};

LineItem.prototype.totalPrice = function() {
  return this.price * this.amount;
};

LineItem.prototype.format = function() {
  return "名称：" + this.name + "，数量：" + this.amount + this.unit +
      "，单价：" + this.price.toFixed(2) + "(元)，小计：" +
      this.totalPrice().toFixed(2) + "(元)\n";
};

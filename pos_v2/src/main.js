
var title = function() {
  return "***<没钱赚商店>购物清单***\n";
};

var starsLine = function() {
  return "**********************";
};

var dottedLine = function() {
  return "----------------------\n";
};



var printInventory = function(inputs) {
  var xuebi = new LineItem("雪碧", 3, 2, "瓶");
  var dianchi = new LineItem("电池", 3, 2, "瓶");
  var shoppingCart = new ShoppingCart();
  shoppingCart.add(xuebi);
  shoppingCart.add(dianchi);
  console.log(shoppingCart.count()+"");
};

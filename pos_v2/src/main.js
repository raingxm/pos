
var title = function() {
  return "***<没钱赚商店>购物清单***\n";
};

var starsLine = function() {
  return "**********************";
};

var dottedLine = function() {
  return "----------------------\n";
};

var printInventory = function() {
  console.log(title() + dottedLine() + starsLine());
};

printInventory();
